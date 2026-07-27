import Image from "next/image";

import ThumbsUp from "@/assets/seb/Component 11.svg";
import { CTA_MODE } from "@/config/site";
import { withBlogUtm } from "@/lib/utils";
import { CTA_CONTENT } from "@/components/blog/cta-content";

export function EndCardCTA({ slug }: { slug: string }) {
  const content = CTA_CONTENT[CTA_MODE];
  const href = withBlogUtm(content.href, slug);

  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl bg-cashmere-500 p-8 text-center text-white md:flex-row md:items-center md:justify-between md:text-left">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <Image
          src={ThumbsUp}
          alt=""
          aria-hidden="true"
          className="h-14 w-14 md:h-16 md:w-16"
        />
        <div className="flex flex-col gap-1">
          <p className="font-heading text-xl font-bold">{content.heading}</p>
          <p className="text-cashmere-50">{content.body}</p>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full shrink-0 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-cashmere-700 transition-colors hover:bg-cashmere-50 md:w-auto"
      >
        {content.ctaLabel}
      </a>
    </div>
  );
}
