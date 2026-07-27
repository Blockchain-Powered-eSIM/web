import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBlogUtm(href: string, slug: string) {
  const url = new URL(href);
  url.searchParams.set("utm_source", "blog");
  url.searchParams.set("utm_campaign", slug);
  return url.toString();
}

export function formatPostDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
