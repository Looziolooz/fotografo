"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GalleryImage } from "@/content/galleries";
import type { Locale } from "@/content/i18n";

interface Props {
  lang: Locale;
  names: string;
  location: string;
  description: string;
  images: GalleryImage[];
  next: { slug: string; names: string; location: string; thumb: string };
  labels: { scroll: string; nextProject: string };
}

/**
 * Per-wedding gallery as a smooth horizontal scroll: an intro panel (couple +
 * description), the photographs at a fixed height (width by aspect ratio), then a
 * "Next project" panel. Vertical wheel intent and pointer-drag both move the
 * track horizontally, eased and clamped. Mirrors the original portfolio pages.
 */
export function HorizontalGallery({ lang, names, location, description, images, next, labels }: Props) {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vp = viewport.current!;
    const tr = track.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let maxX = Math.max(0, tr.scrollWidth - vp.clientWidth);
    let target = 0;
    let current = 0;
    let raf = 0;
    const clamp = (v: number) => Math.max(0, Math.min(maxX, v));
    const measure = () => { maxX = Math.max(0, tr.scrollWidth - vp.clientWidth); target = clamp(target); };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      target = clamp(target + d);
    };

    let dragging = false;
    let startX = 0;
    let startTarget = 0;
    const onDown = (e: PointerEvent) => { dragging = true; startX = e.clientX; startTarget = target; };
    const onMove = (e: PointerEvent) => { if (dragging) target = clamp(startTarget - (e.clientX - startX) * 1.1); };
    const onUp = () => { dragging = false; };

    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toUpperCase();
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      const step = Math.min(720, vp.clientWidth * 0.6);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { target = clamp(target + step); e.preventDefault(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { target = clamp(target - step); e.preventDefault(); }
      else if (e.key === "Home") { target = 0; e.preventDefault(); }
      else if (e.key === "End") { target = maxX; e.preventDefault(); }
    };

    const loop = () => {
      current += (target - current) * (reduce ? 1 : 0.09);
      tr.style.transform = `translate3d(${-current}px,0,0)`;
      raf = requestAnimationFrame(loop);
    };

    measure();
    raf = requestAnimationFrame(loop);
    const t = setTimeout(measure, 1200);
    vp.addEventListener("wheel", onWheel, { passive: false });
    vp.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      vp.removeEventListener("wheel", onWheel);
      vp.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={viewport} className="fixed inset-0 touch-none overflow-hidden bg-white">
      <div ref={track} className="flex h-full w-max items-center will-change-transform">
        {/* Intro panel */}
        <section className="flex h-full w-[86vw] shrink-0 flex-col justify-center gap-6 px-[clamp(1.5rem,5vw,5rem)] sm:w-[44vw]">
          <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-black/50">{location}</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">{names}</h1>
          <p className="max-w-[44ch] font-sans text-[14px] leading-[1.85] text-black/70">{description}</p>
          <span className="mt-2 font-sans text-[11px] uppercase tracking-[0.24em] text-black/40">{labels.scroll} →</span>
        </section>

        {/* Photographs */}
        {images.map((img, i) => (
          <div key={i} className="flex h-full shrink-0 items-center pr-[clamp(0.6rem,1.4vw,1.25rem)]">
            <div className="relative h-[clamp(50svh,70svh,78svh)] bg-neutral-100" style={{ aspectRatio: `${img.w} / ${img.h}` }}>
              <Image
                src={img.src}
                alt={`${names} — ${i + 1}`}
                fill
                sizes="80vw"
                className="object-cover"
                priority={i < 2}
                draggable={false}
              />
            </div>
          </div>
        ))}

        {/* Next project */}
        <Link
          href={`/${lang}/portfolio/${next.slug}`}
          className="group relative flex h-full w-[84vw] shrink-0 items-center justify-center overflow-hidden sm:w-[40vw]"
        >
          <Image src={next.thumb} alt={next.names} fill sizes="50vw" className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" draggable={false} />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/30" />
          <div className="relative z-10 flex flex-col items-center gap-3 text-center text-white">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em]">{labels.nextProject}</span>
            <span className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-none">{next.names}</span>
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/80">{next.location}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
