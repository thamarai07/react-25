/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'forkify-api.herokuapp.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'http',  // Add HTTP entry for forkify API
        hostname: 'forkify-api.herokuapp.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
