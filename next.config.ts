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
    // Default jumps 640 -> 750, which over-serves ~360-420px grid cards at
    // 2x DPR (needs ~720-840px). 730 closes that gap for the common case.
    deviceSizes: [640, 730, 828, 1080, 1200, 1920, 2048, 3840],
    // Next 16 requires an explicit allowlist. 60 is for small grid-card
    // thumbnails where full fidelity isn't visible at that size; 75 stays
    // the default for hero/large images.
    qualities: [60, 75],
  },
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
