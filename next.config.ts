import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the DB drivers unbundled — PGlite loads its WASM assets at runtime.
  serverExternalPackages: ["@electric-sql/pglite", "postgres"],
  // The Glåümises scan is served at full quality.
  images: { qualities: [75, 100] },
  // A stray package-lock.json exists in the parent folder; pin the root here.
  turbopack: { root: __dirname },
};

export default nextConfig;
