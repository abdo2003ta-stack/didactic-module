import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // تحذير: هذا يسمح بنشر المشروع حتى لو كانت هناك أخطاء ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // تحذير: هذا يسمح بنشر المشروع حتى لو كانت هناك أخطاء TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;