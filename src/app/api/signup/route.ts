import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { hashPassword } from '@/lib/password-utils';

interface SignupRequestBody {
  email: string;
  password: string;
  userName: string;
}

export async function POST(req: Request) {
  try {
    const body: SignupRequestBody = await req.json();

    // Validate the input
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      throw new Error('Invalid email format.');
    }

    // Check if the user already exists
    const [existingUserRows] = await db.execute(
      'SELECT * FROM Users WHERE email = ?',
      [body.email]
    );

    if ((existingUserRows as any[]).length > 0) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await hashPassword(body.password);

    // Insert the user into the database
    await db.execute(
      'INSERT INTO Users (email, password_hash, user_type, name) VALUES (?, ?, ?, ?)', 
      [body.email, hashedPassword, 'student', body.userName]
    );
    

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
