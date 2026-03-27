import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  onDemandEntries: {
    maxInactiveAge: 15 * 1000,
    pagesBufferLength: 1,
  },
};

export default nextConfig;
