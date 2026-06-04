"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/i18n";
import { cn } from "@/lib/utils";

/** Numbered editorial accordion (first item open by default). */
export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-black/12">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="border-b border-black/12">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-baseline gap-5 py-[clamp(1.4rem,2.5vw,2rem)] text-left"
            >
              <span className="w-8 shrink-0 font-sans text-[12px] tracking-[0.2em] text-black/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display flex-1 text-[clamp(1.2rem,2.4vw,1.9rem)] leading-tight">{f.q}</span>
              <span className="shrink-0 font-sans text-xl leading-none text-black/50">{isOpen ? "–" : "+"}</span>
            </button>
            <div className={cn("grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="min-h-0">
                <p className="max-w-[62ch] pb-8 pl-13 font-sans text-[15px] leading-[1.8] text-black/70">{f.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
