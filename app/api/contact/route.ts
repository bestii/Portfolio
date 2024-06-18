import { contact } from '@/app/contents';
import { NextResponse } from 'next/server';

const GET = () => {
  return NextResponse.json(contact);
};

export { GET };
