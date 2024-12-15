// app/api/subchapters/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request) {
  let connection; // created for "too many connection" error
  try {
    const { searchParams } = new URL(request.url);
    const grade = searchParams.get("grade");
    const course = searchParams.get("course");
    const chapter = searchParams.get("chapter");

    if (!grade || !course || !chapter) {
      return NextResponse.json(
        { error: "Grade, course, and chapter are required" },
        { status: 400 }
      );
    }

    connection = await db.getConnection();
    const [rows] = await db.execute(
      "SELECT DISTINCT SubChapter FROM Contents WHERE Grade = ? AND Course = ? AND Chapter = ?",
      [grade, course, chapter]
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch subchapters", details: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}