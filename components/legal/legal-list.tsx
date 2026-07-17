import { cn } from "@/lib/utils";
import type { Inline } from "@/lib/legal/types";
import { LegalInline } from "@/components/legal/legal-inline";

export function LegalList({
  ordered,
  items,
  className,
}: {
  ordered: boolean;
  items: Inline[];
  className?: string;
}) {
  const listClass = cn(
    "flex flex-col gap-2 pl-6 text-base font-light leading-relaxed text-esim-black-800 md:text-lg",
    ordered ? "list-decimal" : "list-disc",
    className
  );

  const renderedItems = items.map((item, i) => (
    <li key={i} className="pl-1 marker:text-cashmere-600">
      <LegalInline content={item} />
    </li>
  ));

  return ordered ? (
    <ol className={listClass}>{renderedItems}</ol>
  ) : (
    <ul className={listClass}>{renderedItems}</ul>
  );
}
