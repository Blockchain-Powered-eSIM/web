import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getAllPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { AuthorCard } from "@/components/blog/author-card";
import { TLDRBox } from "@/components/blog/tldr-box";
import { PostCard } from "@/components/blog/post-card";
import { EndCardCTA } from "@/components/blog/end-card-cta";
import { getMdxComponents } from "@/components/blog/mdx-components";

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

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <main className="px-4 py-12 md:px-8 md:py-16">
      <article className="container mx-auto flex max-w-[680px] flex-col gap-6">
        <span className="w-fit rounded-full bg-cashmere-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cashmere-700">
          {post.tag}
        </span>

        <h1 className="font-heading text-3xl font-bold text-outer-space-950 md:text-4xl">
          {post.title}
        </h1>

        <p className="text-lg font-light text-esim-black-700">
          {post.description}
        </p>

        <AuthorCard
          author={post.author}
          date={post.date}
          readingTime={post.readingTime}
        />

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-cashmere-50">
          <Image
            src={post.hero}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 680px) 680px, 100vw"
            priority
          />
        </div>

        <TLDRBox items={post.tldr} />

        <div className="prose max-w-none text-[17px] leading-[1.7] text-outer-space-900 prose-headings:font-heading prose-strong:text-outer-space-950 md:text-[18px]">
          <MDXRemote source={post.content} components={getMdxComponents(post.slug)} />
        </div>

        <EndCardCTA slug={post.slug} />
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
