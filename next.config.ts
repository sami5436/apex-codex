import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drop-assets.ea.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
