import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const posts = getAllPosts();

  return [
    {
      url: new URL("/", siteConfig.url).href,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/blog", siteConfig.url).href,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: new URL("/manifesto", siteConfig.url).href,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteConfig.url).href,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
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
