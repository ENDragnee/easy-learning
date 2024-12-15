// Updated API Endpoint
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const grade = searchParams.get("grade");
    const course = searchParams.get("course");
    const chapter = searchParams.get("chapter");
    const subChapter = searchParams.get("subChapter");

    if (!grade || !course || !chapter || !subChapter) {
      return NextResponse.json(
        { error: "Grade, course, chapter, and subchapter are required" },
        { status: 400 }
      );
    }

    const [rows] = await db.execute(
      "SELECT Value FROM Contents WHERE Grade = ? AND Course = ? AND Chapter = ? AND SubChapter = ? AND Type = 'Books';",
      [grade, course, chapter, subChapter]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    let value = rows[0].Value;

    if (typeof value === "string") {
      try {
        value = JSON.parse(value);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json(
          { error: "Invalid JSON in database" },
          { status: 500 }
        );
      }
    }

    if (!value.content || !Array.isArray(value.content)) {
      return NextResponse.json(
        { error: "Content format is invalid" },
        { status: 500 }
      );
    }

    return NextResponse.json(value);
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// // API to get content for a topic
// export async function GET_CONTENT(request) {
//     try {
//       const { searchParams } = new URL(request.url);
//       const grade = searchParams.get("grade");
//       const course = searchParams.get("course");
//       const chapter = searchParams.get("chapter");
//       const name = searchParams.get("name");
  
//       if (!grade || !course || !chapter || !name) {
//         return NextResponse.json(
//           { error: "Grade, course, chapter, and name are required" },
//           { status: 400 }
//         );
//       }
  
//       const [rows] = await db.execute(
//         "SELECT Value FROM Contents WHERE Grade = ? AND Course = ? AND Chapter = ? AND Name = ? AND Type = 'Books';",
//         [grade, course, chapter, name]
//       );
//       return NextResponse.json(rows[0] || {});
//     } catch (error) {
//       return NextResponse.json(
//         { error: 'Failed to fetch content', details: error.message },
//         { status: 500 }
//       );
//     }
//   }
  