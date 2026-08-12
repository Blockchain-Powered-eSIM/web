import type { ReactNode } from "react";

import { ManifestoShell } from "@/components/manifesto/manifesto-shell";

/**
 * Route-level shell for /manifesto: watercolor background + frosted card (#25).
 * The global NavBar/Footer (app/layout.tsx) stay in place; NavBar switches to
 * a frosted variant on this route instead of duplicating the nav.
 */
export default function ManifestoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      <ManifestoShell>{children}</ManifestoShell>
    </main>
  );
}
