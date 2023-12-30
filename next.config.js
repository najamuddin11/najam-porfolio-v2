/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "exports",
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
