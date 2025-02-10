/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 't3.ftcdn.net',
          pathname: '/**',
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
  };
  
  module.exports = nextConfig;