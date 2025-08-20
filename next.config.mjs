/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
    
      {
        protocol: "https",
        hostname: "saving-bunch-assets.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
