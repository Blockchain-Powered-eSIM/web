import { cn } from "@/lib/utils";
import { anchorId } from "@/lib/legal/slug";

type Level = 2 | 3;

const levelStyles: Record<Level, string> = {
  2: "font-heading text-2xl font-bold text-foreground md:text-3xl",
  3: "font-heading text-xl font-semibold text-foreground md:text-2xl",
};

export function LegalHeading({
  level,
  heading,
  id,
  number,
  className,
}: {
  level: Level;
  heading: string;
  id?: string;
  number?: string;
  className?: string;
}) {
  const resolvedId = anchorId(heading, id);
  const Tag = level === 2 ? "h2" : "h3";

  return (
    <Tag
      id={resolvedId}
      className={cn(
        "-mx-2 scroll-mt-24 rounded-md px-2 target:bg-cashmere-50",
        levelStyles[level],
        className
      )}
    >
      {number ? <span className="mr-2 text-cashmere-700">{number}</span> : null}
      {heading}
    </Tag>
  );
}
