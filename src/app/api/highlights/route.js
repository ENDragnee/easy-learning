import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

//Don't forget session: session.user.id
// POST /api/highlights
export async function POST(request) {
  try {
    const session = "1";

    const {
      grade,
      course,
      chapter,
      sub_chapter,
      text,
      color,
      startOffset: start_offset, // Map startOffset to start_offset
      endOffset: end_offset,     // Map endOffset to end_offset
    } = await request.json();

    if (
      !grade ||
      !course ||
      !chapter ||
      !sub_chapter ||
      !text ||
      !color ||
      start_offset === undefined ||
      end_offset === undefined
    ) {
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
        session,
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
    const session = "1";

    const { searchParams } = new URL(request.url);
    const grade = searchParams.get('grade');
    const course = searchParams.get('course');
    const chapter = searchParams.get('chapter');
    const sub_chapter = searchParams.get('sub_chapter');

    let query = 'SELECT * FROM Highlights WHERE user_id = ?';
    const params = [session];

    const filters = { grade, course, chapter, sub_chapter };
    Object.keys(filters).forEach((key) => {
      if (filters[key] !== undefined && filters[key] !== null) {
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