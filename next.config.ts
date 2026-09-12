import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Glåümises scan is served at full quality.
  images: { qualities: [75, 100] },
  // A stray package-lock.json exists in the parent folder; pin the root here.
  turbopack: { root: __dirname },
};

export default nextConfig;
