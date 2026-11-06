/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` writes a plain site to out/ (deploys to Vercel or any static host).
  output: "export",
  images: { unoptimized: true },
};
export default nextConfig;
