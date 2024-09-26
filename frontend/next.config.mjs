/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,  // Match all .svg files
      use: ['@svgr/webpack'],  // Use @svgr/webpack to process SVGs
    });

    return config;
  },
};

export default nextConfig;
