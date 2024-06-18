import { services } from '@/app/contents';
import { NextResponse } from 'next/server';

const GET = () => {
  return NextResponse.json(services);
};

export { GET };
