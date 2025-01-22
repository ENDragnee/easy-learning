// api/highlights/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { Content } from '@/models/Content'; // for the mongodb
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
      id,
      org,
      grade,
      course,
      chapter,
      sub_chapter,
      text,
      color,
      startOffset: start_offset,
      endOffset: end_offset,
      org
    } = await request.json();

    if (
      !org ||
      !grade ||
      !course ||
      !chapter ||
      !sub_chapter ||
      !text ||
      !color ||
      start_offset === undefined ||
      end_offset === undefined ||
      !org
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // First, look up if content exists in MongoDB
    let content = await Content.findOne({
      grade,
      course,
      chapter,
      sub_chapter,
      org
    });

    // If content doesn't exist, create it
    if (!content) {
      content = await Content.create({
        grade,
        course,
        chapter,
        sub_chapter,
        org
      });
    }

    // Store highlight in MySQL with the content ID
    const [result] = await db.execute(
      `INSERT INTO Highlights (
        highlight_id,
        user_id,
        org,
        grade,
        course,
        chapter,
        sub_chapter,
        text,
        color,
        start_offset,
        end_offset
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        session.user.id,
        org,
        grade,
        course,
        chapter,
        sub_chapter,
        text,
        color,
        start_offset,
        end_offset,
        org
      ]
    );

    return NextResponse.json({ ...result, contentId: content._id }, { status: 201 });
  } catch (error) {
    console.error('Error creating highlight:', error.message);
    return NextResponse.json(
      { error: 'Failed to create highlight' },
      { status: 500 }
    );
  }
}