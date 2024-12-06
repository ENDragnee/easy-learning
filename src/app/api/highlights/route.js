import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// POST /api/highlights
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {
      grade,
      course,
      chapter,
      sub_chapter,
      text,
      color,
      start_offset,
      end_offset,
    } = await request.json();

    if (!grade || !course || !chapter || !sub_chapter || !text || !color) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const [result] = await db.execute(
      `INSERT INTO Highlights (
        user_id,
        grade,
        course,
        chapter,
        sub_chapter,
        text,
        color,
        start_offset,
        end_offset
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        session.user.id,
        grade,
        course,
        chapter,
        sub_chapter,
        text,
        color,
        start_offset,
        end_offset,
      ]
    );

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating highlight:', error.message);
    return NextResponse.json(
      { error: 'Failed to create highlight' },
      { status: 500 }
    );
  }
}

// GET /api/highlights
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const grade = searchParams.get('grade');
    const course = searchParams.get('course');
    const chapter = searchParams.get('chapter');
    const sub_chapter = searchParams.get('sub_chapter');

    let query = 'SELECT * FROM Highlights WHERE user_id = ?';
    const params = [session.user.id];

    const filters = { grade, course, chapter, sub_chapter };
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        query += ` AND ${key} = ?`;
        params.push(filters[key]);
      }
    });

    query += ' ORDER BY created_at DESC';

    const [highlights] = await db.execute(query, params);
    return NextResponse.json(highlights);
  } catch (error) {
    console.error('Error fetching highlights:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch highlights' },
      { status: 500 }
    );
  }
}