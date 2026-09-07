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
    id: "beta-signup",
    question: "How do I sign up for Kokio’s beta program?",
    answer:
      "To join Kokio’s beta program, click on the “Sign up for beta” button on the landing page and follow the instructions provided.",
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
      "Get your eSIM, Kokio alpha is now live in over 200 countries. Key milestones include the Dev and Ops work for beta features in Q1 2026 followed by a beta launch in Q2 alongside ongoing bug fixes and continuous improvements based on user feedback.",
  },
];
