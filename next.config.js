/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'linkedin.com'], // Add any external image domains you might use
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig 