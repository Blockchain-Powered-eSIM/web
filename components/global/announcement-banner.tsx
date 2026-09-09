import React from "react";
import Image from "next/image";

import Twitter from "@/assets/icons/twitter-fill.svg";
import { TWITTER_URL } from "@/config/site";
import { LAUNCH_NOTICE } from "@/lib/site-copy";

const AnnouncementBanner = () => {
  return (
    <div className="w-full bg-cashmere-500">
      <div className="container flex items-center justify-center gap-2 px-4 py-3 text-center">
        <p className="text-sm font-light text-outer-space-950 md:text-base">
          <span className="font-bold">{LAUNCH_NOTICE}</span> Follow us on{" "}
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:text-outer-space-800"
          >
            <Image
              src={Twitter}
              alt="X"
              width={16}
              height={16}
              className="relative top-[3px] inline-block h-4 w-4"
            />
          </a>{" "}
          for updates.
        </p>
      </div>
    </div>
  );
};
AnnouncementBanner.displayName = "AnnouncementBanner";

export { AnnouncementBanner };
