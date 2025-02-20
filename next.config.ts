import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
    STAGE: process.env.STAGE || 'dev'
  },

  output: 'export',

  reactStrictMode: true,
  trailingSlash: true
}

export default nextConfig
