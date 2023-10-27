/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
  },
};
