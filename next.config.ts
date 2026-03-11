import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath is needed for GitHub Pages if not a user site
  basePath: '/Nghe-Thuat-Co-Van-Va-Lanh-Dao-Theo-Linh-Dao-Thanh-Giuse',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
