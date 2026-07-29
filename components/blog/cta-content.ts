import { APP_URL, TWITTER_URL } from "@/config/site";

export const CTA_CONTENT = {
  prelaunch: {
    heading: "Follow along on X",
    body: "Stay updated about Koki'o and learn about digital well-being and wellness :)",
    ctaLabel: "Follow on X",
    href: TWITTER_URL,
    inlineText: "Want to learn more?",
    inlineLabel: "Follow us on X",
  },
  live: {
    heading: "Try Koki'o",
    body: "Tap. Authenticate. Connect.",
    ctaLabel: "Get the app",
    href: APP_URL,
    inlineText: "Ready to travel smarter?",
    inlineLabel: "Try Koki'o",
  },
} as const;
