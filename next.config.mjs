/** @type {import('next').NextConfig} */
const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    if (isIndexable) {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
