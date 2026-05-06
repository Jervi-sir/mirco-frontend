import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : undefined,
}

export default nextConfig
