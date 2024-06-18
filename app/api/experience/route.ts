import { experience } from '@/app/contents';
import { NextResponse } from 'next/server';

const GET = () => {
  return NextResponse.json(experience);
};

export { GET };
