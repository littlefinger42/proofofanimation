/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/animationexamples",
        destination: "/animationexamples/first",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
