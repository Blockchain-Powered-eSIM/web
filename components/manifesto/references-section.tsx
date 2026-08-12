import type { ReactNode } from "react";

/** Wraps the references section (h2 + list, see lib/manifesto-mdx.ts) in the
 * smaller, muted treatment from the typography spec. */
export function ReferencesSection({ children }: { children?: ReactNode }) {
  return (
    <div className="mt-10 text-[15px] leading-relaxed text-manifesto-ink/70">
      {children}
    </div>
  );
}
