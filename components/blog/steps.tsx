import type { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <div className="steps not-prose my-8 text-[1.0625rem] leading-[1.7] text-[#2B3F47] [&_strong]:font-semibold [&_strong]:text-[#193238]">
      {children}
    </div>
  );
}
