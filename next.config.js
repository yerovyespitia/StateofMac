/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
    MONGO_URI: process.env.MONGO_URI,
  },
}

module.exports = nextConfig
