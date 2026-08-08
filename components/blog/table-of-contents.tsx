"use client";

import { useEffect, useState } from "react";

import type { TocHeading } from "@/lib/mdx-toc";

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveId((prevId) => {
          const intersecting = entries.filter((entry) => entry.isIntersecting);
          if (intersecting.length === 0) return prevId;
          return intersecting.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0].target.id;
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-wide text-esim-black-500">
        On this page
      </p>
      <ul className="flex flex-col gap-3 border-l border-esim-black-100">
        {headings.map((heading) => {
          const isActive = heading.id === activeId;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`-ml-px block rounded-sm border-l-2 py-0.5 pl-3 leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#48A2AF] focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-[#48A2AF] font-medium text-[#48A2AF]"
                    : "border-transparent text-esim-black-600 hover:text-outer-space-900"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
