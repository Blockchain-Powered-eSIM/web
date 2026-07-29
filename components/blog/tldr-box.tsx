import { Sun } from "lucide-react";

export function TLDRBox({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl bg-[#FAF3DD] p-6 md:p-8">
      <p className="flex items-center gap-1.5 font-heading text-sm font-semibold uppercase tracking-wide text-cashmere-700">
        <Sun aria-hidden="true" className="h-4 w-4 text-[#E28355]" />
        TL;DR
      </p>
      <ul className="mt-3 flex list-none flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-outer-space-900 md:text-base">
            <span aria-hidden="true" className="text-[#E28355]">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
