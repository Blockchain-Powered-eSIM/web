import type { SubsectionBlock } from "@/lib/legal/types";
import { LegalHeading } from "@/components/legal/legal-heading";
import { LegalParagraph } from "@/components/legal/legal-paragraph";
import { LegalList } from "@/components/legal/legal-list";

export function LegalSubsection({
  subsection,
  number,
}: {
  subsection: SubsectionBlock;
  number: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <LegalHeading
        level={3}
        heading={subsection.heading}
        id={subsection.id}
        number={number}
      />
      {subsection.blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <LegalParagraph key={i} content={block.content} />;
          case "list":
            return (
              <LegalList key={i} ordered={block.ordered} items={block.items} />
            );
          default: {
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </div>
  );
}
