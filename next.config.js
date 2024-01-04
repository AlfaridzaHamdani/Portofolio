/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  experimental: {
    appDocumentPreloading: true,
    adjustFontFallbacks: true,
  },
};
