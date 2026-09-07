import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Any page is also readable as markdown by adding .md to its URL. The handler
  // lives at /raw/* because a catch-all inside each page folder collides with
  // the page's own routes.
  async rewrites() {
    return [{ source: "/:path*.md", destination: "/raw/:path*" }];
  },
};

export default nextConfig;
