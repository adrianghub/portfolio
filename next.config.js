/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  images: {
    domains: ['media.graphassets.com']
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
