// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/actions/users';

export async function POST(req: NextRequest) {
  const formData = await req.json();

  try {
    const result = await createUser(formData);
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ data: result.data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}