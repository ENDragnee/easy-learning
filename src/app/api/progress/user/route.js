// app/api/progress/route.js
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import db from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Modified query without window functions
    const [results] = await db.execute(`
      SELECT 
        c.Course,
        COUNT(DISTINCT c.id) as totalChapters,
        COUNT(DISTINCT CASE WHEN p.status = 'Finished' AND p.user_id = ? THEN p.id END) as completedChapters,
        COUNT(DISTINCT CASE WHEN c.Type = 'Quiz' THEN c.id END) as totalQuizzes,
        COUNT(DISTINCT CASE WHEN c.Type = 'Quiz' AND p.status = 'Finished' AND p.user_id = ? THEN p.id END) as completedQuizzes,
        GROUP_CONCAT(DISTINCT c.SubChapter) as subChapters
      FROM Contents c
      LEFT JOIN Progress p ON c.id = p.content_id AND p.user_id = ?
      GROUP BY c.Course
    `, [session.user.id, session.user.id, session.user.id]);

    // Process the results
    const courseProgress = {};
    results.forEach((row) => {
      courseProgress[row.Course] = {
        completed: Math.round((row.completedChapters / row.totalChapters) * 100) || 0,
        remaining: 100 - (Math.round((row.completedChapters / row.totalChapters) * 100) || 0),
        subChapters: row.subChapters ? row.subChapters.split(',') : [],
        quizzes: row.totalQuizzes > 0 
          ? Math.round((row.completedQuizzes / row.totalQuizzes) * 100)
          : 0,
        tests: 0,
        difficulty: getDifficulty(row.totalChapters),
      };
    });

    return NextResponse.json(courseProgress);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

function getDifficulty(totalChapters) {
  if (totalChapters <= 3) return "Easy";
  if (totalChapters <= 6) return "Medium";
  return "Hard";
}