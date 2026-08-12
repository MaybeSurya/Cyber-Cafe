import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 430, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "howler"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
