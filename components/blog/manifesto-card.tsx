import Image from "next/image";
import Link from "next/link";

import type { Manifesto } from "@/lib/manifesto";

export function ManifestoCard({ manifesto }: { manifesto: Manifesto }) {
  return (
    <Link
      href="/manifesto"
      className="group flex flex-col overflow-hidden rounded-3xl border border-esim-black-100 bg-background shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cashmere-500 focus-visible:ring-offset-2 sm:flex-row"
    >
      <div className="relative h-48 w-full shrink-0 bg-cashmere-50 sm:h-auto sm:w-64">
        <Image
          src="/manifesto/meadow-bg.png"
          alt=""
          fill
          sizes="(min-width: 640px) 256px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="w-fit rounded-full bg-cashmere-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cashmere-700">
          Manifesto
        </span>
        <h2 className="font-heading text-xl font-bold text-outer-space-950 group-hover:text-cashmere-600 md:text-2xl">
          {manifesto.title}
        </h2>
        <p className="line-clamp-2 text-sm font-light text-esim-black-700 md:text-base">
          {manifesto.description}
        </p>
      </div>
    </Link>
  );
}
