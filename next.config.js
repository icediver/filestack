/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: ["loremflickr.com", "cloudflare-ipfs.com"],
  },
};

module.exports = nextConfig;
