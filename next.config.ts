import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
