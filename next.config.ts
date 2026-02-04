/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // تحذير: هذا يسمح بإتمام البناء حتى مع وجود أخطاء ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // تحذير: هذا يسمح بإتمام البناء حتى مع وجود أخطاء TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;