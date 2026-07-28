import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkSmartypants from "remark-smartypants";

import { getAllPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import { AuthorCard } from "@/components/blog/author-card";
import { TLDRBox } from "@/components/blog/tldr-box";
import { PostCard } from "@/components/blog/post-card";
import { EndCardCTA } from "@/components/blog/end-card-cta";
import { WaveDivider } from "@/components/blog/wave-divider";
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar";
import { getMdxComponents } from "@/components/blog/mdx-components";
import Logo from "@/assets/logo.svg";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | Kokio`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.name,
      title: post.title,
      description: post.description,
      publishedTime: post.date.toISOString(),
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const heroUrl = `${siteConfig.url}${post.ogImage ?? post.hero}`;
  const logoUrl = `${siteConfig.url}${Logo.src}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [heroUrl],
    datePublished: post.date.toISOString(),
    dateModified: post.date.toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
      ...(post.author.twitter ? { sameAs: [post.author.twitter] } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <main className="px-4 py-12 md:px-8 md:py-16">
      <ReadingProgressBar targetId="post-article" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article
        id="post-article"
        className="container mx-auto flex max-w-[52rem] flex-col"
      >
        <div className="mx-auto flex w-full max-w-[42rem] flex-col">
          <span className="w-fit rounded-full bg-cashmere-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cashmere-700">
            {post.tag}
          </span>

          <h1 className="mt-6 font-heading text-3xl font-bold text-outer-space-950 md:text-4xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg font-light text-esim-black-700">
            {post.description}
          </p>

          <div className="mt-6">
            <AuthorCard
              author={post.author}
              date={post.date}
              readingTime={post.readingTime}
            />
          </div>
        </div>

        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-cashmere-50">
          <Image
            src={post.hero}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 832px) 832px, 100vw"
            priority
          />
        </div>

        <div className="mt-8">
          <TLDRBox items={post.tldr} />
        </div>

        <div className="prose prose-headings:font-heading mx-auto mt-10">
          <MDXRemote
            source={post.content}
            components={getMdxComponents(post.slug)}
            options={{
              mdxOptions: {
                remarkPlugins: [[remarkSmartypants, { dashes: "oldschool" }]],
              },
            }}
          />
        </div>

        <div className="mt-16">
          <WaveDivider />
        </div>

        <div className="mt-8">
          <EndCardCTA slug={post.slug} />
        </div>
      </article>

      {related.length > 0 ? (
        <section className="container mx-auto mt-16 flex max-w-4xl flex-col gap-6">
          <h2 className="font-heading text-2xl font-bold text-outer-space-950">
            Keep reading
          </h2>
          <div className="flex flex-col gap-6">
            {related.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
