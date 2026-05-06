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
      {
        source: '/login',
        destination: 'http://localhost:3003/login',
      },
      {
        source: '/register',
        destination: 'http://localhost:3003/register',
      },
      {
        source: '/me',
        destination: 'http://localhost:3003/me',
      },
      {
        source: '/logout',
        destination: 'http://localhost:3003/logout',
      },
    ]
  },
}

export default nextConfig
