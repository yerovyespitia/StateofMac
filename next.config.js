/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
    GOOGLE_ID: process.env.GOOGLE_ID,
    MONGO_URI: process.env.MONGO_URI,
  },
}

module.exports = nextConfig
