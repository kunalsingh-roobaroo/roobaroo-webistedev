/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
    
      {
        protocol: "https",
        hostname: "prod-bunch-feed-assets.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "saving-bunch-assets.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "staging-roobaroo-assets.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "roobaroo-assets.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
