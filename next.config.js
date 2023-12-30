/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
