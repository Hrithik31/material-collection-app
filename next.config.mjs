/** @type {import('next').NextConfig} */
import config from "./env.config";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: config.NEXT_PUBLIC_BASE_URL,
};

export default nextConfig;
