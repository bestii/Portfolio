import withPWAInit from '@ducanh2912/next-pwa';
import type { NextConfig } from 'next';

const withPWA = withPWAInit({
  dest: 'public',
});

const nextConfig: NextConfig = withPWA({
  // Your Next.js config
});

export default nextConfig;
