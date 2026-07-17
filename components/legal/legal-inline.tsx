import Link from "next/link";

import type { Inline, InlineNode } from "@/lib/legal/types";

const linkClass =
  "font-medium text-cashmere-700 underline underline-offset-2 transition-colors hover:text-cashmere-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function InlineNodeView({ node }: { node: InlineNode }) {
  switch (node.type) {
    case "text":
      return <>{node.value}</>;
    case "strong":
      return (
        <strong className="font-semibold text-foreground">{node.value}</strong>
      );
    case "external":
      return (
        <a
          href={node.href}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          {node.text}
        </a>
      );
    case "mail":
      return (
        <a href={`mailto:${node.email}`} className={linkClass}>
          {node.text ?? node.email}
        </a>
      );
    case "internal":
      return (
        <Link href={node.href} className={linkClass}>
          {node.text}
        </Link>
      );
    default: {
      // Exhaustiveness guard: adding a new InlineNode variant fails the build here.
      const _exhaustive: never = node;
      return _exhaustive;
    }
  }
}

/** Renders an {@link Inline} run: a plain string, or a sequence of typed nodes. */
export function LegalInline({ content }: { content: Inline }) {
  if (typeof content === "string") {
    return <>{content}</>;
  }
  return (
    <>
      {content.map((node, i) => (
        <InlineNodeView key={i} node={node} />
      ))}
    </>
  );
}
