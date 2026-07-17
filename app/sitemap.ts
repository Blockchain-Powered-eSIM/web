import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: new URL("/", siteConfig.url).href,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/terms-of-service", siteConfig.url).href,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: new URL("/privacy-policy", siteConfig.url).href,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
