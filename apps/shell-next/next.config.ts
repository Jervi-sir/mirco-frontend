import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/shop/:path*",
        destination: "http://localhost:13001/shop/:path*",
      },
      {
        source: "/dashboard/:path*",
        destination: "http://localhost:13002/dashboard/:path*",
      },
      {
        source: "/login",
        destination: "http://localhost:13003/login",
      },
      {
        source: "/register",
        destination: "http://localhost:13003/register",
      },
      {
        source: "/me",
        destination: "http://localhost:13003/me",
      },
      {
        source: "/logout",
        destination: "http://localhost:13003/logout",
      },
      {
        source: "/ui-lab",
        destination: "http://localhost:13003/ui-lab",
      },
    ];
  },
};

export default nextConfig;
