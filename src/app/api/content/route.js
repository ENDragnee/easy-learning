// Updated API Endpoint (api/nav/content/route.ts)
import { NextResponse } from "next/server";
import db from "@/lib/db";
import { transform } from "jsx-transform-json";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT Value FROM Contents WHERE id = ?", [1]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    let value = rows[0].Value;

    if (typeof value === "string") {
      try {
        value = JSON.parse(value);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({ error: "Invalid JSON in database" }, { status: 500 });
      }
    }

    if (!value.content || !Array.isArray(value.content)) {
      return NextResponse.json({ error: "Content format is invalid" }, { status: 500 });
    }

    // Transform the content using jsx-transform-json
    const transformedContent = {
      content: value.content.map((item) => transform(item))
    };

    return NextResponse.json(transformedContent);
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}