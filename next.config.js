/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/personal_portfolio', // Add base path for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
    domains: ['github.com', 'linkedin.com'], // Add any external image domains you might use
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig 