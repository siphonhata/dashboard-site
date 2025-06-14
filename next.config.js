/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 't3.ftcdn.net',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        }
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
  };
  
  module.exports = nextConfig;