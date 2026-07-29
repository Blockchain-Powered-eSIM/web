//import Discord from "@/assets/icons/discord-fill.svg";
import Blog from "@/assets/icons/blog-fill.svg";
import Twitter from "@/assets/icons/twitter-fill.svg";
import GitHub from "@/assets/icons/github-fill.svg";
import Docs from "@/assets/icons/docs-fill.svg";

export const BLOG_TAGS = [
  "eSIM Basics",
  "Privacy & Security",
  "Inside Kokio",
  "Building in Public",
  "Destination Guides",
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

// Flip to "live" once the app is out; every CTA reads this, no component edits needed.
export const CTA_MODE: "prelaunch" | "live" = "prelaunch";

// Single source for the Twitter/X link - matches the footer social link.
export const TWITTER_URL = "https://x.com/kokiodotapp";

// Placeholder destination for "live" mode until real App Store / Play Store links exist.
export const APP_URL = "https://kokio.app";

export const siteConfig = {
  name: "Kokio",
  url: "https://kokio.app",
  header: "Experience the Future of Global Connectivity",
  description:
    "Travel with confidence with Kokio’s travel data plans. Unlike traditional eSIM providers, Kokio leverages cutting-edge blockchain technology for enhanced security, privacy, and ease of use. Enjoy seamless connectivity across over 200 destinations worldwide.",
  socials: [
    {
      icon: Twitter,
      title: "Twitter",
      href: "https://x.com/kokiodotapp",
    },
    {
      icon: GitHub,
      title: "GitHub",
      href: "https://github.com/Blockchain-Powered-eSIM",
    },
    {
      icon: Docs,
      title: "Docs",
      href: "https://docs.kokio.app/",
    },
    {
      icon: Blog,
      title: "Blogs",
      href: "/blog",
    },
  ],
};
