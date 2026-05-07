import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "development"
      ? "http://localhost:13002"
      : undefined,
  transpilePackages: ["@dropjdid/api-client"],
};

export default nextConfig;
