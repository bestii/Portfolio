import { introduction } from '@/app/contents';
import { NextResponse } from 'next/server';

const GET = () => {
  return NextResponse.json(introduction);
};

export { GET };
