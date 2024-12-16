import Groq from 'groq-sdk';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse the request body
    const body = await request.json();
    const { selectedText } = body;

    // Log for debugging
    console.log('Received request body:', body);

    if (!selectedText || selectedText.trim() === '') {
      return NextResponse.json(
        { error: 'Invalid input: selectedText is required' },
        { status: 400 }
      );
    }

    console.log('Selected text:', selectedText);

    // Continue with stream processing...
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

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
              in a simple and concise manner and give examples if necessary.`,
            },
          ],
          model: 'llama3-8b-8192',
          temperature: 0.7,
          max_tokens: 500,
          top_p: 1,
          stream: true,
          stop: null,
        });

        const encoder = new TextEncoder();

        // Write the opening bracket
        await writer.write(encoder.encode('['));

        let firstChunk = true;
        for await (const chunk of chatCompletion) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            const data = JSON.stringify({ content });

            const chunkData = firstChunk ? data : `,${data}`;
            await writer.write(encoder.encode(chunkData));
            firstChunk = false;
          }
        }

        await writer.write(encoder.encode(']'));
      } catch (error) {
        console.error('Stream processing error:', error);
        await writer.write(
          new TextEncoder().encode(
            JSON.stringify({ error: 'Stream processing error' })
          )
        );
      } finally {
        await writer.close();
      }
    };

    processStream();

    return new NextResponse(stream.readable, {
      headers: {
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error) {
    console.error('Error creating highlight:', error.message);
    return NextResponse.json(
      { error: 'Failed to create highlight' },
      { status: 500 }
    );
  }
}

