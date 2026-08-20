import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Logomark from "@/assets/logomark.svg";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.kokio.mobile";

/** Download card for the Android app, dropped into blog posts that mention
 * it. Mirrors ManifestoCTA's image + frosted-panel structure, but the image
 * is the same beach-scene art behind the homepage hero (see components/hero.tsx)
 * — clouds ~y0-600, ocean band ~y995-1120, sand + a bucket shape from ~y1120
 * down to ~y1582 (out of a 2068-tall viewBox). At the frosted panel's usual
 * height, object-top only shows plain sky, so the crop is pulled down to
 * ~58% to land on the ocean-to-sand-and-bucket band instead. */
export function AppDownloadCTA() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="not-prose group relative my-8 block overflow-hidden rounded-3xl border-2 border-ocean"
    >
      <Image
        src="/beach-scene-desktop.svg"
        alt=""
        fill
        sizes="(min-width: 768px) 42rem, 100vw"
        className="object-cover object-[50%_58%] transition-transform duration-500 group-hover:scale-105"
      />
      <div className="relative flex flex-col gap-3 bg-white/75 p-6 backdrop-blur-sm transition-colors group-hover:bg-white/65 md:p-8">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-outer-space-950/70">
          <Image
            src={Logomark}
            alt=""
            aria-hidden="true"
            className="h-4 w-4"
          />
          Koki&apos;o on Android
        </span>
        <p className="font-heading text-lg font-bold text-outer-space-950 md:text-xl">
          Koki&apos;o is live on Android &mdash; iOS lands shortly.
        </p>
        <p className="max-w-md text-sm leading-relaxed text-outer-space-950/80 md:text-base">
          Pick a plan that fits how you travel in over 200 countries. Pay
          with crypto or card, no KYC, no data collection. Simple, private
          and secure.
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-outer-space-950">
          Get it on Google Play
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </a>
  );
}
