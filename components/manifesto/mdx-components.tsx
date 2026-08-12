import { baseMdxComponents } from "@/components/blog/mdx-components";
import { ManifestoHeading } from "@/components/manifesto/section-numeral";
import { MoralPlaque } from "@/components/manifesto/moral-plaque";
import { ReferencesSection } from "@/components/manifesto/references-section";
import { SignatureBlock } from "@/components/manifesto/signature-block";

export function getManifestoMdxComponents() {
  return {
    ...baseMdxComponents,
    h2: ManifestoHeading,
    "manifesto-moral": MoralPlaque,
    "manifesto-references": ReferencesSection,
    "manifesto-signature": SignatureBlock,
  };
}
