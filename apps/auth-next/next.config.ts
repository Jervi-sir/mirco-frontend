import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "development"
      ? "http://localhost:13003"
      : undefined,
  transpilePackages: ["@dropjdid/ui", "@micro-frontend/shadcn-ui"],
};

export default nextConfig;
