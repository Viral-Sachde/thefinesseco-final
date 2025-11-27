/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    API_KEY: process.env.GEMINI_API_KEY,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Headers removed - not compatible with static export
  // Configure headers at hosting/CDN level instead
}

module.exports = nextConfig

