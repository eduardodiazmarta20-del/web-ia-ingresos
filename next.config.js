/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  pageExtensions: ["tsx", "jsx"],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
