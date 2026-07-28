import type { Metadata } from "next";
import Image from "next/image";

import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/post-card";
import BeachFun from "@/assets/seb/Beach Fun.svg";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, product updates, and behind-the-scenes notes from the team building Koki'o.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="px-4 py-12 md:px-8 md:py-16">
      <div className="container mx-auto flex max-w-4xl flex-col">
        <header className="flex flex-col items-center gap-4 pb-12 text-center">
          <Image
            src={BeachFun}
            alt=""
            aria-hidden="true"
            className="h-20 w-auto md:h-24"
          />
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-cashmere-700">
            KOKI&apos;O Blog
          </p>
          <h1 className="font-heading text-4xl font-bold text-outer-space-950 md:text-5xl">
            Guides, updates, and stories from Koki&apos;o
          </h1>
          <p className="max-w-xl text-base font-light text-esim-black-700 md:text-lg">
            Everything about eSIMs, travel connectivity, and what we&apos;re
            building behind the scenes.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
