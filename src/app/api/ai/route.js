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
    const {
      selectedText,
    } = await request.json();

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
              In a simple and concise manner and give examples if necessary.`,
            },
            {
              role: 'assistant',
              content: `${selectedText}`,
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

        // Process each chunk
        let firstChunk = true;
        for await (const chunk of chatCompletion) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            const data = JSON.stringify({ content });

            // Add a comma between JSON objects except for the first one
            const chunkData = firstChunk ? data : `,${data}`;
            await writer.write(encoder.encode(chunkData));
            firstChunk = false;
          }
        }

        // Write the closing bracket
        await writer.write(encoder.encode(']'));
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
    console.error('Error creating highlight:', error.message);
    return NextResponse.json(
      { error: 'Failed to create highlight' },
      { status: 500 }
    );
  }
}

