// app/api/highlights/[id]/route.js
import { NextResponse } from 'next/server';
import db from '@/lib/db';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/auth';

// DELETE /api/highlights/[id]
export async function DELETE(request, context) {
  try {
    const params = await context.params;
    // const session = await getServerSession(authOptions);
    const session = "1";
    // if (!session?.user) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const highlightId = parseInt(params.id, 10);
    const userId = parseInt(session, 10);

    const [result] = await db.execute(
      'DELETE FROM Highlights WHERE highlight_id = ? AND user_id = ?',
      [highlightId, userId]
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error deleting highlight:', error);
    return NextResponse.json(
      { error: 'Failed to delete highlight' },
      { status: 500 }
    );
  }
}

// PATCH /api/highlights/[id]
export async function PATCH(request, context) {
  try {
    const params = await context.params;
    // const session = await getServerSession(authOptions);
    const session = "1";
    // if (!session?.user) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const highlightId = parseInt(params.id, 10);
    const userId = parseInt(session, 10);
    const { color } = await request.json();

    const [result] = await db.execute(
      'UPDATE Highlights SET color = ? WHERE highlight_id = ? AND user_id = ?',
      [color, highlightId, userId]
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating highlight:', error);
    return NextResponse.json(
      { error: 'Failed to update highlight' },
      { status: 500 }
    );
  }
}
