import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Crawlers that read and reason over the site, named individually.
 *
 * Every token here was checked against the operator's own documentation. Do not
 * add one from a blog post or a copied template: a name nobody publishes cannot
 * be honoured, and it makes the rest of the file look guessed.
 *
 * Naming them changes nothing on its own, since crawling is allowed by default.
 * The point is that the stance is explicit and auditable, and that flipping any
 * single one later is a one-line edit rather than a research task.
 */
const AI_CRAWLERS = [
  // OpenAI, developers.openai.com/api/docs/bots
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "OAI-AdsBot",

  // Anthropic, support.claude.com/en/articles/8896518
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",

  // Perplexity, docs.perplexity.ai/docs/resources/perplexity-crawlers
  // Perplexity-User is listed for completeness. Perplexity says it generally
  // ignores robots.txt for that agent because the fetch is user-initiated.
  "PerplexityBot",
  "Perplexity-User",

  // Google and Apple. These two are control tokens for AI training rather than
  // crawlers, and they have no user agent of their own. Allowing them is a
  // no-op because permitted is already the default; the lines record the
  // opt-in decision where someone auditing the file will look for it.
  "Google-Extended",
  "Applebot-Extended",

  // Meta, Amazon, Mistral, Common Crawl.
  "meta-externalagent",
  "Meta-ExternalFetcher",
  "Amazonbot",
  "MistralAI-User",
  "CCBot",

  // ByteDance publishes no crawler documentation and has never confirmed how
  // Bytespider treats robots.txt. Listed for a complete stance, not because
  // compliance can be relied on.
  "Bytespider",
];

/** Payment callback. Meaningless without the transaction that led to it. */
const DISALLOWED = ["/moonpay-return"];

export default function robots(): MetadataRoute.Robots {
  // Groups in robots.txt are independent: a crawler that matches a named group
  // reads only that group and never sees the wildcard rules. So the disallow
  // has to be repeated per agent rather than stated once.
  const rules = [{ userAgent: "*", allow: "/", disallow: DISALLOWED }].concat(
    AI_CRAWLERS.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: DISALLOWED,
    }))
  );

  return {
    rules,
    sitemap: new URL("/sitemap.xml", siteConfig.url).href,
    host: siteConfig.url,
  };
}
