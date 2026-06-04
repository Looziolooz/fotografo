"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global Lenis smooth scroll (matches the target site). Disabled when the user
 * prefers reduced motion. Also drives `.reveal` fade-ups via IntersectionObserver.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | undefined;
    let raf = 0;

    if (!reduce) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            if (el.dataset.revealDelay) el.style.animationDelay = `${el.dataset.revealDelay}ms`;
            el.classList.add("is-inview");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      io.disconnect();
    };
  }, []);

  return null;
}
