// app/api/courses/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request) {
  let connection; // created for "too many connection" error
  try {
    const { searchParams } = new URL(request.url);
    const grade = searchParams.get("grade");

    if (!grade) {
      return NextResponse.json({ error: "Grade is required" }, { status: 400 });
    }
    connection = await db.getConnection();
    const [rows] = await connection.execute(
      "SELECT DISTINCT Course FROM Contents WHERE Grade = ?",
      [grade]
    );
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses", details: error.message },
      { status: 500 }
    );
  }finally {
    if (connection) connection.release();
  }
}
