const repo = 'glaum-website'; // change to your repo name
const isProd = process.env.NODE_ENV === 'production';
const useCustomDomain = true; // Set to true if using custom domain

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd && !useCustomDomain ? `/${repo}` : '',
  assetPrefix: isProd && !useCustomDomain ? `/${repo}/` : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
