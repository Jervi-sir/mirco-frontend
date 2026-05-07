import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "development"
      ? "http://localhost:13001"
      : "https://mfe.shop.jervi.dev",
  transpilePackages: ["@dropjdid/api-client"],
};

export default nextConfig;
