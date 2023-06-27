/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.damingerdai.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
