import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/shop/:path*',
        destination: 'http://localhost:3001/shop/:path*',
      },
      {
        source: '/dashboard/:path*',
        destination: 'http://localhost:3002/dashboard/:path*',
      },
    ]
  },
}

export default nextConfig
