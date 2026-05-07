import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "development"
      ? "http://localhost:13002"
      : "https://mfe.dashboard.jervi.dev",
  transpilePackages: ["@dropjdid/api-client"],
};

export default nextConfig;
