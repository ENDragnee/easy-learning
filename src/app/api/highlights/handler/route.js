import { getServerSession } from 'next-auth'; // Adjust path if necessary
import db from '@/lib/db'; // Adjust path if necessary

export const POST = async (req) => {
  try {

    const session = await getServerSession();

    if (!session?.user?.id) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { gradeValue, courseValue, chapterValue, subChapterValue } = await req.json();

    if (!gradeValue || !courseValue || !chapterValue || !subChapterValue) {
      return new Response(JSON.stringify({ error: 'Missing required parameters' }), { status: 400 });
    }

    const highlights = await db.execute(`
        SELECT * FROM Highlights
        WHERE user_id = ${session.user.id}
          AND grade = ${gradeValue}
          AND course = '${courseValue}'  
          AND chapter = '${chapterValue}'  
          AND sub_chapter = '${subChapterValue}'  
      `);

    return new Response(JSON.stringify(highlights), { status: 200 });
  } catch (error) {
    console.error('Error in highlights handler:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
