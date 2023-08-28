/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    domains: [
      "i.pinimg.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "sun1-27.userapi.com",
      "avatars.yandex.net",
      "cloudflare-ipfs.com",
    ],
  },
};

module.exports = nextConfig;
