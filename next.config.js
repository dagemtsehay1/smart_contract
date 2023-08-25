/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      // Disable SSR for all routes
    };
  },
}

module.exports = nextConfig
