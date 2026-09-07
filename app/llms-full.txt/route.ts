import sitemap from "@/app/sitemap";
import { featuresData } from "@/components/features";
import { setupData } from "@/components/setup";
import { siteConfig } from "@/config/site";
import { faqsData } from "@/content/faqs";
import { privacyPolicy } from "@/content/legal/privacy-policy";
import { termsOfService } from "@/content/legal/terms-of-service";
import { getAllPosts, type Post } from "@/lib/blog";
import { legalDocumentToText } from "@/lib/legal/to-text";
import { getManifesto } from "@/lib/manifesto";
import {
  CANONICAL_DESCRIPTION,
  PRODUCT_NAME,
  PRODUCT_NAME_SPELLINGS,
} from "@/lib/site-copy";

export const dynamic = "force-static";

/**
 * MDX authored for the blog carries components the plain-text version has no
 * use for. Wrapper tags go and their children stay; self-closing ones are
 * images and call-to-action buttons, which carry no text worth keeping.
 */
function mdxToText(content: string): string {
  return content
    .replace(/<(?:[A-Z]\w*|img)\b[^>]*?\/>/g, "")
    .replace(/^[ \t]*<\/?[A-Za-z]\w*[^>\n]*>[ \t]*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function homeSection(): string {
  return [
    `## What ${PRODUCT_NAME} is`,
    CANONICAL_DESCRIPTION,
    `${PRODUCT_NAME} is also written ${PRODUCT_NAME_SPELLINGS.join(", ")}. Every one of those spellings refers to this product, this website and this app.`,
    "## How setup works",
    setupData
      .map((step, index) => `${index + 1}. **${step.title}** ${step.description}`)
      .join("\n"),
    "## Features",
    featuresData
      .map((feature) => `- **${feature.title}** ${feature.description}`)
      .join("\n"),
    "## Frequently asked questions",
    faqsData
      .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
      .join("\n\n"),
  ].join("\n\n");
}

function blogIndexSection(posts: Post[]): string {
  return [
    `Every post published on ${PRODUCT_NAME}, newest first. Full text of each one follows in its own section below.`,
    posts
      .map(
        (post) =>
          `- **${post.title}** (/blog/${post.slug}, ${post.date.toISOString().slice(0, 10)}): ${post.description}`
      )
      .join("\n"),
  ].join("\n\n");
}

function postSection(post: Post): string {
  return [
    `## ${post.title}`,
    `By ${post.author.name}. Published ${post.date.toISOString().slice(0, 10)}, last updated ${post.updated.toISOString().slice(0, 10)}.`,
    post.description,
    `**In short:**\n${post.tldr.map((point) => `- ${point}`).join("\n")}`,
    mdxToText(post.content),
  ].join("\n\n");
}

function manifestoSection(): string {
  const manifesto = getManifesto();

  return [
    `## ${manifesto.title}`,
    `Last updated ${manifesto.updated.toISOString().slice(0, 10)}.`,
    manifesto.description,
    `**In short:**\n${manifesto.tldr.map((point) => `- ${point}`).join("\n")}`,
    mdxToText(manifesto.content),
  ].join("\n\n");
}

/**
 * Every page of the site as one file, so an agent gets a complete picture from
 * a single request instead of giving up part way through crawling eight routes.
 *
 * Sections are driven by sitemap.xml rather than listed by hand: a page that
 * reaches the sitemap without text here fails the build instead of quietly
 * going missing. The milestones section on the landing page is left out on
 * purpose while its dates are stale, since a wrong roadmap stated this plainly
 * is worse than no roadmap at all.
 */
export function GET() {
  const posts = getAllPosts();

  const sections: Record<string, () => string> = {
    "/": homeSection,
    "/blog": () => blogIndexSection(posts),
    "/manifesto": manifestoSection,
    "/terms-of-service": () => legalDocumentToText(termsOfService),
    "/privacy-policy": () => legalDocumentToText(privacyPolicy),
    ...Object.fromEntries(
      posts.map((post) => [`/blog/${post.slug}`, () => postSection(post)])
    ),
  };

  const body = sitemap().map(({ url }) => {
    const { pathname } = new URL(url);
    const render = sections[pathname];
    if (!render) {
      throw new Error(
        `llms-full.txt has no section for ${pathname}. Add one in app/llms-full.txt/route.ts or drop the page from the sitemap.`
      );
    }
    return `# ${pathname}\n\n${render()}`;
  });

  const header = [
    `# ${PRODUCT_NAME}: full site text`,
    `> Every page of ${siteConfig.url} as one markdown file. Each section below is headed by the path it was rendered from.`,
  ].join("\n\n");

  return new Response(`${header}\n\n---\n\n${body.join("\n\n---\n\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
