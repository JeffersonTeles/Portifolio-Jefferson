import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  outputFileTracingRoot: rootDir,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
};

export default nextConfig;
