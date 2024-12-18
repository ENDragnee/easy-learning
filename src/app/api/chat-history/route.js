import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import db from '@/lib/db';

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get URL parameters
    const url = new URL(request.url);
    const grade = url.searchParams.get('grade');
    const course = url.searchParams.get('course');
    const chapter = url.searchParams.get('chapter');
    const sub_chapter = url.searchParams.get('sub_chapter');

    // First, get the content_id
    const [contentRows] = await db.execute(
      'SELECT id FROM Contents WHERE Grade = ? AND Course = ? AND Chapter = ? AND SubChapter = ?',
      [grade, course, chapter, sub_chapter]
    );

    if (!contentRows.length) {
      return NextResponse.json({ messages: [] }, { status: 200 });
    }

    const content_id = contentRows[0].id;

    // Fetch chat history
    const [chatHistory] = await db.execute(
      `SELECT question, answer, created_at 
       FROM AIResponses 
       WHERE content_id = ? AND user_id = ?
       ORDER BY created_at ASC`,
      [content_id, session.user.id]
    );

    // Format the chat history as messages
    const messages = chatHistory.flatMap(entry => [
      { role: 'user', content: entry.question },
      { role: 'ai', content: entry.answer }
    ]);

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chat history' },
      { status: 500 }
    );
  }
}