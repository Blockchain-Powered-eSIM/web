import Image from "next/image";

import Twitter from "@/assets/icons/twitter-fill.svg";
import type { Author, PostReadingTime } from "@/lib/blog";
import { formatPostDate } from "@/lib/utils";

export function AuthorCard({
  author,
  date,
  readingTime,
}: {
  author: Author;
  date: Date;
  readingTime: PostReadingTime;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-cashmere-100">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-sm font-semibold text-outer-space-950">
              {author.name}
            </span>
            {author.twitter ? (
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on X`}
                className="text-esim-black-400 hover:text-cashmere-600"
              >
                <Image src={Twitter} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
          <span className="text-xs text-esim-black-500">{author.role}</span>
        </div>
      </div>

      <span className="hidden text-esim-black-300 sm:inline" aria-hidden="true">
        ·
      </span>

      <div className="flex items-center gap-2 text-xs text-esim-black-500">
        <time dateTime={date.toISOString()}>{formatPostDate(date)}</time>
        <span aria-hidden="true">·</span>
        <span>{readingTime.text}</span>
      </div>
    </div>
  );
}
