export function TLDRBox({ items }: { items: string[] }) {
  return (
    <div className="rounded-3xl bg-cashmere-50 p-6 md:p-8">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-cashmere-700">
        TL;DR
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-outer-space-900 md:text-base">
            <span aria-hidden="true" className="text-cashmere-600">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
