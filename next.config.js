/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/components",
        destination: "/components/boutons",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
