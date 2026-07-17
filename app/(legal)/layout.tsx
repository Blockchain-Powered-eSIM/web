import type { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main className="px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl rounded-4xl border border-esim-black-100 bg-background p-6 shadow-sm md:p-12 lg:p-16">
        {children}
      </div>
    </main>
  );
}
