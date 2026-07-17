// Deterministic anchor-id helpers for legal documents.

/**
 * Convert heading text into a URL-safe slug: lowercased.
 * Siacritics stripped, apostrophes/quotes removed, and every other non-alphanumeric
 * run collapsed to a single hyphen, with no leading or trailing hyphens.
 */
export function slug(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’‘"“”`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Resolve the anchor id for a section or subsection.
export function anchorId(heading: string, override?: string): string {
  if (override && override.trim().length > 0) {
    return override.trim();
  }
  return slug(heading);
}
