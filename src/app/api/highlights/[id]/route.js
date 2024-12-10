import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// DELETE /api/highlights/[id]
export async function DELETE(request, context) {
  try {
    // Await the params object
    const params = await context.params;
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // Use the ID as a string, no need to parse as int
    const highlightId = params.id;
    const userId = parseInt(session.user.id, 10);

    // Check if the user ID is valid
    if (isNaN(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Run the delete query
    const [result] = await db.execute(
      'DELETE FROM Highlights WHERE highlight_id = ? AND user_id = ?',
      [highlightId, userId]
    );

    if (result.affectedRows === 0) {
      console.log('No highlight found to delete for user:', userId);
      return NextResponse.json({ error: 'Highlight not found or unauthorized' }, { status: 404 });
    }

    console.log('Highlight deleted successfully:', highlightId);
    return NextResponse.json({ message: 'Highlight deleted successfully' });
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
    const params = context.params;
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const highlightId = parseInt(params.id, 10);
    const userId = parseInt(session.user.id, 10);
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
