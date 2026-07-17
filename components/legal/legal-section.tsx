import { anchorId } from "@/lib/legal/slug";
import type {
  LegalSection as LegalSectionData,
  SubsectionChild,
} from "@/lib/legal/types";
import { LegalHeading } from "@/components/legal/legal-heading";
import { LegalParagraph } from "@/components/legal/legal-paragraph";
import { LegalList } from "@/components/legal/legal-list";
import { LegalSubsection } from "@/components/legal/legal-subsection";

/** Renders a leaf (non-subsection) block: paragraph or list. */
function LeafBlock({ block }: { block: SubsectionChild }) {
  switch (block.type) {
    case "paragraph":
      return <LegalParagraph content={block.content} />;
    case "list":
      return <LegalList ordered={block.ordered} items={block.items} />;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

export function LegalSection({
  section,
  sectionNumber,
}: {
  section: LegalSectionData;
  sectionNumber: number;
}) {
  const id = anchorId(section.heading, section.id);
  let subCount = 0;

  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <LegalHeading
        level={2}
        heading={section.heading}
        id={section.id}
        number={`${sectionNumber}.`}
      />
      {section.blocks.map((block, i) => {
        if (block.type === "subsection") {
          subCount += 1;
          return (
            <LegalSubsection
              key={i}
              subsection={block}
              number={`${sectionNumber}.${subCount}`}
            />
          );
        }
        return <LeafBlock key={i} block={block} />;
      })}
    </section>
  );
}
