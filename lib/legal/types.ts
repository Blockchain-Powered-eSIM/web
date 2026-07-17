// Domain model for long-form legal documents (Terms of Service, Privacy Policy etc.)

// Inline content
export type Inline = string | InlineNode[];

// A single span within an {@link Inline} run. `type` is the discriminant.
export type InlineNode =
  | InlineText
  | InlineStrong
  | InlineExternalLink
  | InlineMailLink
  | InlineInternalLink;

// Plain text span.
export interface InlineText {
  type: "text";
  value: string;
}

// Bold span
export interface InlineStrong {
  type: "strong";
  value: string;
}

// Link to an external origin.
export interface InlineExternalLink {
  type: "external";
  text: string;
  href: string;
}

export interface InlineMailLink {
  type: "mail";
  email: string; // e-mail address only
  text?: string; // Optional hover label
}

export interface InlineInternalLink {
  type: "internal";
  text: string;
  href: string;
}

// Blocks
export type Block = ParagraphBlock | ListBlock | SubsectionBlock;
export type SubsectionChild = ParagraphBlock | ListBlock;

export interface ParagraphBlock {
  type: "paragraph";
  content: Inline;
}

export interface ListBlock {
  type: "list";
  ordered: boolean;
  items: Inline[];
}

export interface SubsectionBlock {
  type: "subsection";
  id?: string;
  heading: string;
  blocks: SubsectionChild[];
}

// Document + sections
export interface LegalSection {
  id?: string; // Optional anchor-id override
  heading: string;
  blocks: Block[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  effective: string;
  sections: LegalSection[];
}
