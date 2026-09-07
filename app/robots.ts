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

  // Meta, Amazon, Mistral.
  "meta-externalagent",
  "Meta-ExternalFetcher",
  "Amazonbot",
  "MistralAI-User",

  // Allen Institute, allenai.org/crawler. Feeds the Dolma corpus and the OLMo
  // open models.
  "AI2Bot",

  // Common Crawl. The most consequential entry in this file for open-weight
  // models: most open training sets, C4, RefinedWeb, FineWeb and Dolma among
  // them, are built from Common Crawl rather than from their own crawls.
  // Allowing it is close to irreversible, because a page that lands in the
  // archive is copied into derived datasets that have no recall mechanism.
  "CCBot",
];

/**
 * Agents whose operators publish no crawler documentation.
 *
 * These names come from observed traffic and third-party trackers, not from a
 * vendor page, so nothing here can be relied on. They are listed because the
 * stance is to allow everything: a name that turns out to be wrong costs
 * nothing, since permitted is already the default.
 *
 * If the stance ever flips to blocking, this group is the weak part of the
 * file. Rewrite it from whatever each operator publishes at that point, and
 * expect to need something other than robots.txt for the ones below.
 */
const UNDOCUMENTED_CRAWLERS = [
  // ByteDance has never confirmed how Bytespider treats robots.txt, though it
  // does at least identify itself under that name in server logs.
  "Bytespider",

  // xAI publishes no crawler documentation, no user agent and no IP ranges.
  // Reported behaviour is worse than undocumented: Grok's retrieval traffic
  // arrives with ordinary browser or Go client user agents over rotating
  // residential addresses, so none of these names appear in logs and no
  // robots.txt rule can match it. Kept as a statement of intent only.
  "xAI-Bot",
  "xAI-Grok",
  "GrokBot",

  // Reported as the Dolma-specific variant of AI2Bot. Not named on AI2's own
  // crawler page, which documents AI2Bot only.
  "AI2Bot-Dolma",
];

/** Payment callback. Meaningless without the transaction that led to it. */
const DISALLOWED = ["/moonpay-return"];

export default function robots(): MetadataRoute.Robots {
  // Groups in robots.txt are independent: a crawler that matches a named group
  // reads only that group and never sees the wildcard rules. So the disallow
  // has to be repeated per agent rather than stated once.
  const rules = [{ userAgent: "*", allow: "/", disallow: DISALLOWED }].concat(
    [...AI_CRAWLERS, ...UNDOCUMENTED_CRAWLERS].map((userAgent) => ({
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
