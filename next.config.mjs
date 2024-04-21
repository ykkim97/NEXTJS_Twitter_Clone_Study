/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "loremflickr.com",
            port: "",
            pathname: "/640/480/**",
          },
        ],
      },
};

export default nextConfig;
