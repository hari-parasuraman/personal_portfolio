/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'linkedin.com'],
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig 