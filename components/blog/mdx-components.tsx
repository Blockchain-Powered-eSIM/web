import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import Link from "next/link";

import { InlineCTA } from "@/components/blog/inline-cta";

function SmartLink({
  href = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const className =
    "font-semibold text-cashmere-600 underline underline-offset-2 hover:text-cashmere-700";

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

function MdxImage({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt ?? ""} className="w-full rounded-2xl" {...props} />
      {alt ? (
        <figcaption className="mt-2 text-center text-sm text-esim-black-500">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}

const baseMdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 scroll-mt-24 font-heading text-2xl font-bold text-outer-space-950 md:text-3xl"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 scroll-mt-24 font-heading text-xl font-semibold text-outer-space-950 md:text-2xl"
      {...props}
    />
  ),
  a: SmartLink,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-cashmere-300 bg-cashmere-50 px-6 py-4 italic text-outer-space-900"
      {...props}
    />
  ),
  img: MdxImage,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-cashmere-100 px-1.5 py-0.5 font-mono text-[0.9em] text-cashmere-800"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="overflow-x-auto rounded-2xl bg-outer-space-950 p-4 text-sm leading-relaxed text-esim-black-50 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit"
      {...props}
    />
  ),
};

/** InlineCTA needs the current post's slug for UTM tagging, so it's bound per-render rather than static. */
export function getMdxComponents(slug: string) {
  return {
    ...baseMdxComponents,
    InlineCTA: () => <InlineCTA slug={slug} />,
  };
}
