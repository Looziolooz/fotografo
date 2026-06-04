"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GRID_CARDS } from "@/content/galleries";
import type { Locale } from "@/content/i18n";

/**
 * The home "rullino": an editorial grid of portrait portfolio cards that scrolls
 * vertically and loops seamlessly back to the start, forever. The grid is
 * rendered twice; a wheel/touch-driven offset is eased each frame and applied as
 * a wrapped translateY so the second copy fills the seam. Cards link to the
 * couple's portfolio page.
 */
export function InfiniteGrid({ lang }: { lang: Locale }) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const copyA = useRef<HTMLDivElement>(null);
  const copyB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vp = viewport.current!;
    const tr = track.current!;
    const a = copyA.current!;
    const b = copyB.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let H = b.offsetTop - a.offsetTop || tr.offsetHeight / 2;
    let target = 0;
    let current = 0;
    let raf = 0;
    let lastTouch = 0;
    const wrap = (v: number) => ((v % H) + H) % H;

    const measure = () => { H = b.offsetTop - a.offsetTop || tr.offsetHeight / 2; };
    const onWheel = (e: WheelEvent) => { e.preventDefault(); target += e.deltaY; };
    const onTouchStart = (e: TouchEvent) => { lastTouch = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      target += (lastTouch - y) * 1.5;
      lastTouch = y;
    };

    // Continuous "film roll" drift (px/frame); wheel + touch add on top of it.
    const AUTO = reduce ? 0 : 0.65;
    const loop = () => {
      target += AUTO;
      current += (target - current) * (reduce ? 1 : 0.09);
      tr.style.transform = `translate3d(0, ${-wrap(current)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    measure();
    raf = requestAnimationFrame(loop);

    vp.addEventListener("wheel", onWheel, { passive: false });
    vp.addEventListener("touchstart", onTouchStart, { passive: true });
    vp.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("resize", measure);
    const imgsLoaded = setTimeout(measure, 1200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(imgsLoaded);
      vp.removeEventListener("wheel", onWheel);
      vp.removeEventListener("touchstart", onTouchStart);
      vp.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={viewport} className="fixed inset-0 touch-none overflow-hidden bg-white">
      <div ref={track} className="flex flex-col gap-[clamp(0.5rem,1.2vw,1rem)] will-change-transform">
        <Copy gridRef={copyA} lang={lang} />
        <Copy gridRef={copyB} ariaHidden lang={lang} />
      </div>
    </div>
  );
}

function Copy({ gridRef, ariaHidden, lang }: { gridRef: React.Ref<HTMLDivElement>; ariaHidden?: boolean; lang: Locale }) {
  return (
    <div
      ref={gridRef}
      aria-hidden={ariaHidden}
      className="grid grid-cols-2 gap-[clamp(0.5rem,1.2vw,1rem)] px-[clamp(0.5rem,1.2vw,1rem)] md:grid-cols-3"
    >
      {GRID_CARDS.map((c, i) => (
        <Link
          key={(ariaHidden ? "b" : "a") + i}
          href={`/${lang}/portfolio/${c.slug}`}
          tabIndex={ariaHidden ? -1 : undefined}
          className="group relative block aspect-[4/5] overflow-hidden bg-neutral-100"
        >
          <Image
            src={c.thumb}
            alt={`${c.names} — ${c.location}`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            priority={!ariaHidden && i < 6}
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-1.5 bg-gradient-to-t from-black/60 via-black/15 to-transparent px-4 pb-6 pt-16 text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="font-display text-[clamp(1.1rem,1.6vw,1.6rem)] leading-none">{c.names}</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/85">{c.location}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
