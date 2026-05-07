import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const isProd: boolean = process.env.NODE_ENV === "production";
    return [
      {
        source: "/shop/:path*",
        destination: isProd ? "https://mfe.shop.jervi.dev/shop/:path*" : "http://localhost:13001/shop/:path*",
      },
      {
        source: "/dashboard/:path*",
        destination: isProd ? "https://mfe.dashboard.jervi.dev/dashboard/:path*" : "http://localhost:13002/dashboard/:path*",
      },
      {
        source: "/login",
        destination: isProd ? "https://mfe.auth.jervi.dev/login" : "http://localhost:13003/login",
      },
      {
        source: "/register",
        destination: isProd ? "https://mfe.auth.jervi.dev/register" : "http://localhost:13003/register",
      },
      {
        source: "/me",
        destination: isProd ? "https://mfe.auth.jervi.dev/me" : "http://localhost:13003/me",
      },
      {
        source: "/logout",
        destination: isProd ? "https://mfe.auth.jervi.dev/logout" : "http://localhost:13003/logout",
      },
      {
        source: "/ui-lab",
        destination: isProd ? "https://mfe.auth.jervi.dev/ui-lab" : "http://localhost:13003/ui-lab",
      },
    ];
  },
};

export default nextConfig;
