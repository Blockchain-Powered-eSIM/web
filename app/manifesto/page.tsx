import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkSmartypants from "remark-smartypants";
import rehypeSlug from "rehype-slug";

import { getManifesto } from "@/lib/manifesto";
import { siteConfig } from "@/config/site";
import { getMdxComponents } from "@/components/blog/mdx-components";

export function generateMetadata(): Metadata {
  const manifesto = getManifesto();

  return {
    title: `${manifesto.title} | Kokio`,
    description: manifesto.description,
    alternates: { canonical: "/manifesto" },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/manifesto`,
      siteName: siteConfig.name,
      title: manifesto.title,
      description: manifesto.description,
    },
  };
}

export default async function ManifestoPage() {
  const manifesto = getManifesto();

  const { content } = await compileMDX({
    source: manifesto.content,
    components: getMdxComponents("manifesto"),
    options: {
      mdxOptions: {
        remarkPlugins: [[remarkSmartypants, { dashes: "oldschool" }]],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  return (
    <article className="mx-auto flex max-w-[52rem] flex-col">
      <h1 className="text-center font-heading text-3xl font-bold text-manifesto-ink md:text-4xl">
        {manifesto.title}
      </h1>
      <div
        className="prose mt-8 max-w-none text-[18px] leading-[1.75] text-manifesto-ink prose-headings:font-heading prose-headings:text-manifesto-ink prose-a:text-manifesto-teal prose-blockquote:border-l-manifesto-sand-border prose-blockquote:bg-manifesto-sand prose-blockquote:not-italic"
      >
        {content}
      </div>
    </article>
  );
}
