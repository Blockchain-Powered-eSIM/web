/**
 * Canonical brand strings. Import these instead of writing the name or the
 * description as a literal, so every surface says the same thing byte for byte.
 *
 * Models build an entity record out of repeated strings. Four spellings of the
 * name split one product into four weakly-supported entities, and two different
 * descriptions make a model hedge instead of answering.
 */

/** The only spelling allowed in prose, headings, metadata and JSON-LD `name`. */
export const PRODUCT_NAME = "Kokio";

/**
 * Other spellings that have shipped or that users type. Goes in `alternateName`
 * so a model can resolve all of them to one entity. Never use these in prose.
 */
export const PRODUCT_NAME_VARIANTS = [
  "Koki'o",
  "KOKI'O",
  "KOKIO",
  "kokio",
  "Kokio eSIM",
  "Kokio App",
] as const;

/** Registered company name. Stays uppercase because that is the filed string. */
export const LEGAL_NAME = "KOKIO SG PTE. LTD.";

/**
 * Full description. Use for JSON-LD, llms.txt and anywhere without a length cap.
 *
 * Deliberately carries no release-stage or availability claim. Those change, and
 * this string is copied into six surfaces at once.
 */
export const CANONICAL_DESCRIPTION =
  "Kokio is a privacy-first travel eSIM app. Buy eSIM data plans in over 200 destinations with card, Apple Pay, Google Pay or stablecoins. No KYC and no personal information collected. Every Kokio account is a passkey-controlled smart wallet, so the eSIM is owned by the user rather than held in a provider database.";

/**
 * When the landing page copy last changed substantively.
 *
 * The home page is assembled from components rather than a content file, so
 * there is nothing to read a date from. Bump this when the copy changes, not
 * when the styling does.
 */
export const HOME_UPDATED = new Date("2026-09-07");

/** Same claims, trimmed to fit a `<meta name="description">` without truncation. */
export const META_DESCRIPTION =
  "Kokio is a privacy-first travel eSIM app. Data plans in over 200 destinations, paid by card or stablecoins. No KYC, no personal information collected.";
