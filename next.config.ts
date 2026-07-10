import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the DB drivers unbundled — PGlite loads its WASM assets at runtime.
  serverExternalPackages: ["@electric-sql/pglite", "postgres"],
  // A stray package-lock.json exists in the parent folder; pin the root here.
  turbopack: { root: __dirname },
};

export default nextConfig;
