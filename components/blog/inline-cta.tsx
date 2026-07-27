import { CTA_MODE } from "@/config/site";
import { withBlogUtm } from "@/lib/utils";
import { CTA_CONTENT } from "@/components/blog/cta-content";

export function InlineCTA({ slug }: { slug: string }) {
  const content = CTA_CONTENT[CTA_MODE];
  const href = withBlogUtm(content.href, slug);

  return (
    <p className="my-6 rounded-2xl bg-cashmere-50 px-5 py-3 text-sm text-outer-space-900 md:text-base">
      {content.inlineText}{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-cashmere-600 underline underline-offset-2 hover:text-cashmere-700"
      >
        {content.inlineLabel}
      </a>
    </p>
  );
}
