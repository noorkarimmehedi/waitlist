import { NextResponse } from 'next/server';
import { addToWaitlist } from '@/lib/supabase/waitlist';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const { success, error } = await addToWaitlist(email);

    if (!success) {
      return NextResponse.json(
        { error: error || 'Failed to add to waitlist' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully added to waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
