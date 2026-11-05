/** @type {import('next').NextConfig} */
const nextConfig = {
  // legacy/markup.html is read with fs at build time; make sure it travels with the build.
  outputFileTracingIncludes: { "/": ["./legacy/markup.html"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // POC for a client pitch: keep it out of search engines.
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
