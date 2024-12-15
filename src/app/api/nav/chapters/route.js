// app/api/chapters/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request) {
  let connection; // created for "too many connection" error
  try {
    const { searchParams } = new URL(request.url);
    const grade = searchParams.get("grade");
    const course = searchParams.get("course");

    if (!grade || !course) {
      return NextResponse.json(
        { error: "Grade and course are required" },
        { status: 400 }
      );
    }

    connection = await db.getConnection();
    const [rows] = await connection.execute(
      "SELECT DISTINCT Chapter FROM Contents WHERE Grade = ? AND Course = ?",
      [grade, course]
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch chapters", details: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}