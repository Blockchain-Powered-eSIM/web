/**
 * Single source of truth for the general fieldss that appear
 * throughout the Terms of Service and Privacy Policy content modules.
 */

export interface LegalConfig {
  companyLegalName: string;
  uen: string;
  registeredAddress: string;
  dpoName: string;
  dpoEmail: string;
  generalContact: string;

  /** "Last Updated" date shown in each document header. Source: "[DATE]". */
  lastUpdated: string;
  /**
   * Same date as lastUpdated, as ISO 8601, for the sitemap. Kept separate
   * because lastUpdated is written for readers ("15th July 2026") and does not
   * parse. Change both together.
   */
  lastUpdatedIso: string;
  /** "Effective" date shown in each document header. Source: "[DATE]". */
  effective: string;

  /**
   * Liability-cap look-back window in months (ToS §13). Kept as a string so it
   * can carry the bracketed placeholder "[3]" until counsel confirms it.
   */
  liabilityCapMonths: string;
  /**
   * Data-retention period (Privacy §8), e.g. a number of years. Kept as a
   * string so it can carry the placeholder "[N]" until the concrete period is
   * set per Singapore accounting / tax / AML obligations.
   */
  retentionYears: string;

  /** Governing law (ToS §17). Fixed to Singapore per the drafts. */
  governingLaw: string;
  /**
   * Dispute-resolution mechanism (ToS §17): litigation vs SIAC arbitration.
   * Defaults to the unresolved either/or string from the draft so the pending
   * choice renders visibly until counsel selects one.
   */
  disputeResolution: string;
}

export const legalConfig: LegalConfig = {
  companyLegalName: "KOKIO SG PTE. LTD.",
  uen: "202523545K",
  registeredAddress: "165B Telok Ayer Street, Singapore - 068617",

  dpoName: "Arpit Kumar",
  dpoEmail: "legal-office@kokio.app",
  generalContact: "contact@kokio.app",

  lastUpdated: "15th July 2026",
  lastUpdatedIso: "2026-07-15",
  effective: "15th July 2026",

  liabilityCapMonths: "[3]",
  retentionYears: "[3]",

  governingLaw: "Singapore",
  disputeResolution:
    "[the courts of Singapore / by arbitration administered by the Singapore International Arbitration Centre (SIAC) in Singapore]",
};
