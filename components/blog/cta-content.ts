import { APP_URL, TELEGRAM_URL } from "@/config/site";

export const CTA_CONTENT = {
  prelaunch: {
    heading: "Get early access",
    body: "Join the Telegram group for early access",
    ctaLabel: "Join the Telegram group",
    href: TELEGRAM_URL,
    inlineText: "Want early access?",
    inlineLabel: "Join the Telegram group",
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
