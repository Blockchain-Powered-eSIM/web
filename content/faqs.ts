/**
 * Landing page FAQ.
 *
 * Read by the rendered list and by the FAQPage schema, so the two cannot
 * disagree. Answers are retrieved one at a time, without the page around them,
 * so each one has to name Kokio and stand on its own.
 */

export interface Faq {
  /** Stable anchor, used for deep links and as the schema `@id` fragment. */
  id: string;
  question: string;
  answer: string;
}

export const faqsData: Faq[] = [
  {
    id: "what-is-kokio",
    question:
      "What is Kokio and how does it differ from traditional eSIM providers?",
    answer:
      "Kokio utilizes distributed ledger technology to offer decentralized mobile connectivity, enhancing privacy, security, and ease of use compared to traditional eSIM providers.",
  },
  {
    id: "early-access",
    question: "How do I get early access to Kokio?",
    answer:
      "Kokio runs early access through its Telegram group, linked from the buttons on kokio.app. Invitations, release dates and testing rounds are announced there first, and on X at @kokiodotapp. Kokio reaches public launch in September 2026 on the App Store and Google Play, so early access is the way to use it before then.",
  },
  {
    id: "setup",
    question: "How can I set up my Kokio eSIM?",
    answer:
      "Download the Kokio app, choose your desired plan from over 200 destinations, and activate your eSIM instantly to start enjoying mobile connectivity.",
  },
  {
    id: "payment-methods",
    question: "What payment options does Kokio accept?",
    answer:
      "Kokio supports a variety of payment methods including credit and debit cards, Apple Pay, Google Pay, PayPal and other digital wallets.",
  },
  {
    id: "security",
    question: "What security measures does Kokio employ for its services?",
    answer:
      "Kokio’s app ensures top-notch security and privacy using biometrics, secure enclave technology, and the inherent security features of distributed ledger technology.",
  },
  {
    id: "personal-information",
    question: "Is personal information required to use Kokio’s services?",
    answer:
      "No, Kokio values privacy and does not require personal information for setting up or using its services, ensuring your data remains private.",
  },
  {
    id: "roadmap",
    question: "What is the roadmap for Kokio’s service launch?",
    answer:
      "Kokio goes into public launch in September 2026, on the App Store and Google Play, with data plans in over 200 destinations. Around the launch, Kokio is testing regionally across Southeast Asia and with partner communities, and starting the road to mainnet. Later in 2026 come the device wallet, so checkout happens inside the app, referral links, partner discount codes, sponsored eSIM flows for events, and connectivity partnerships. Early 2027 adds distribution through physical hubs and coworking partnerships, privacy rails driven by what people ask for, and plans that need verified identity, built with identity partners so that Kokio never holds the identity itself. These are targets rather than promises.",
  },
];
