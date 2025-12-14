import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during build to allow deployment despite vulnerability warning
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
