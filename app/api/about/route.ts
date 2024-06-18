import { about } from '@/app/contents';
import { NextResponse } from 'next/server';

const GET = () => {
  return NextResponse.json(about);
};

export { GET };
