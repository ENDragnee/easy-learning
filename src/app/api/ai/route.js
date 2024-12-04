import Groq from 'groq-sdk';
import { NextResponse } from 'next/server';

const groq = new Groq();

export async function POST(request) {
  try {
    const body = await request.json();
    const selectedText = body.input?.trim();

    if (!selectedText) {
      return NextResponse.json(
        { error: 'No text was selected' },
        { status: 400 }
      );
    }

    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a helpful AI assistant. Analyze and respond to the following selected text. 
          Provide insights, explanations, or answer any implicit questions in the text. 
          If the text is a question, answer it directly. If it's a statement, provide relevant analysis or additional context.`,
        },
        {
          role: 'user',
          content: `Selected text: "${selectedText}"

          Please analyze this text and provide a helpful response.`,
        }
      ],
      model: 'llama3-8b-8192',
      temperature: 0.7, // Reduced for more focused responses
      max_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null,
    });

    // Start the stream with an opening bracket
    await writer.write(encoder.encode('[\n'));

    for await (const chunk of chatCompletion) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        const data = JSON.stringify({ content }) + ',\n';
        await writer.write(encoder.encode(data));
      }
    }

    // End the stream with a closing bracket
    await writer.write(encoder.encode('{}]'));
    await writer.close();

    return new NextResponse(stream.readable, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error during chat completion:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}