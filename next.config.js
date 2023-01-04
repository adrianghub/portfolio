/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['next/seo']
  },
  images: {
    domains: ['media.graphassets.com']
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
