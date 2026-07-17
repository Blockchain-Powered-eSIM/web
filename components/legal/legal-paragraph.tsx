import { cn } from "@/lib/utils";
import type { Inline } from "@/lib/legal/types";
import { LegalInline } from "@/components/legal/legal-inline";

export function LegalParagraph({
  content,
  className,
}: {
  content: Inline;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-base font-light leading-relaxed text-esim-black-800 md:text-lg",
        className
      )}
    >
      <LegalInline content={content} />
    </p>
  );
}
