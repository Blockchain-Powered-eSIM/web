"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { anchorId } from "@/lib/legal/slug";
import type { LegalSection } from "@/lib/legal/types";

const linkBase =
  "block rounded-sm py-1 text-sm font-light leading-snug underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function TocLinks({
  sections,
  spy = false,
}: {
  sections: LegalSection[];
  spy?: boolean;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!spy || typeof IntersectionObserver === "undefined") return;

    const ids = sections.map((section) =>
      anchorId(section.heading, section.id)
    );
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const topMost = ids.find((id) => visible.has(id));
        if (topMost) setActiveId(topMost);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [spy, sections]);

  return (
    <ol className="flex list-decimal flex-col gap-1 pl-6 marker:text-sm marker:text-cashmere-600">
      {sections.map((section) => {
        const id = anchorId(section.heading, section.id);
        const active = spy && id === activeId;
        return (
          <li key={id} className="pl-1">
            <a
              href={`#${id}`}
              aria-current={active ? "location" : undefined}
              className={cn(
                linkBase,
                active
                  ? "font-medium text-cashmere-700"
                  : "text-esim-black-700 hover:text-cashmere-700"
              )}
            >
              {section.heading}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
