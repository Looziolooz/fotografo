"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/content/site";
import { getDict, type Locale } from "@/content/i18n";
import { Wordmark } from "@/components/Wordmark";
import { cn } from "@/lib/utils";

/**
 * Fixed minimal top bar — MENU (full-screen overlay) · centered Solari
 * wordmark · language switch + Instagram. `mix-blend-difference` keeps it
 * legible over both the white gutters and the photographs.
 */
export function Header({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const dict = getDict(lang);
  const pathname = usePathname();
  const other: Locale = lang === "en" ? "it" : "en";
  const switchHref = `/${other}${pathname.replace(/^\/(en|it)(?=\/|$)/, "")}`;
  const href = (path: string) => `/${lang}${path}`;
  // White text over photo backgrounds (home + portfolio), dark over the
  // white-background content pages.
  const isPhotoBg = pathname === `/${lang}` || pathname.includes("/portfolio/");

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        {isPhotoBg && (
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[185%] bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
          />
        )}
        <div
          className={cn(
            "pointer-events-auto relative flex items-center justify-between px-[clamp(1rem,3vw,2.75rem)] py-[clamp(1rem,1.8vw,1.6rem)]",
            isPhotoBg ? "text-white" : "text-black",
          )}
        >
          <button onClick={() => setOpen(true)} className="font-sans text-[11px] uppercase tracking-[0.28em] transition-opacity hover:opacity-60">
            {dict.common.menu}
          </button>

          <Link href={href("")} aria-label={SITE.name}>
            <Wordmark />
          </Link>

          <div className="flex items-center gap-[clamp(0.75rem,1.6vw,1.5rem)]">
            <Link href={switchHref} className="font-sans text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60" aria-label={`Switch to ${other.toUpperCase()}`}>
              {other.toUpperCase()}
            </Link>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hidden font-sans text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60 sm:block">
              {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white text-black transition-[clip-path,opacity] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ clipPath: open ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
      >
        <div className="flex items-center justify-between px-[clamp(1rem,3vw,2.75rem)] py-[clamp(1rem,1.8vw,1.6rem)]">
          <Wordmark />
          <button onClick={() => setOpen(false)} className="font-sans text-[11px] uppercase tracking-[0.28em] transition-opacity hover:opacity-60">
            {dict.common.close}
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2 px-[clamp(1.25rem,6vw,6rem)]">
          {dict.nav.map((item, i) => (
            <Link
              key={`${item.label}-${i}`}
              href={href(item.path)}
              onClick={() => setOpen(false)}
              className="font-display w-fit text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] transition-opacity hover:opacity-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-end justify-between gap-6 px-[clamp(1.25rem,6vw,6rem)] py-[clamp(1.5rem,3vw,3rem)] font-sans text-[12px] uppercase tracking-[0.16em] text-black/70">
          <div className="flex flex-col gap-1">
            <a href={`mailto:${SITE.email}`} className="hover:text-black">{SITE.email}</a>
            {SITE.phones.map((ph) => (
              <a key={ph} href={`tel:${ph.replace(/\s/g, "")}`} className="hover:text-black">{ph}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href={switchHref} onClick={() => setOpen(false)} className="hover:text-black">{other.toUpperCase()}</Link>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-black">{SITE.instagramHandle}</a>
          </div>
        </div>
      </div>
    </>
  );
}
