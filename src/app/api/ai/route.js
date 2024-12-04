import Groq from 'groq-sdk';
import { NextResponse } from 'next/server';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

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

    // Create a new stream
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    // Start the AI stream processing
    const processStream = async () => {
      try {
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
              content: `Please explain: "${selectedText}"
              In a simple an consise manner and give examples if necessary.`,
            }
          ],
          model: 'llama3-8b-8192',
          temperature: 0.7,
          max_tokens: 100,
          top_p: 1,
          stream: true,
          stop: null,
        });

        const encoder = new TextEncoder();
        
        // Write the opening bracket
        await writer.write(encoder.encode('[\n'));

        // Process each chunk
        for await (const chunk of chatCompletion) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            const data = JSON.stringify({ content }) + ',\n';
            await writer.write(encoder.encode(data));
          }
        }

        // Write the closing bracket
        await writer.write(encoder.encode('{}]'));
      } catch (error) {
        console.error('Stream processing error:', error);
        const errorMessage = JSON.stringify({ error: 'Stream processing error' });
        await writer.write(new TextEncoder().encode(errorMessage));
      } finally {
        await writer.close();
      }
    };

    // Start processing in the background
    processStream();

    // Return the readable stream
    return new NextResponse(stream.readable, {
      headers: {
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked',
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