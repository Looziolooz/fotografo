"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function Home() {
  const { lang } = useLang();
  const intro = lang === "it"
    ? "Matrimoni in location italiane spettacolari · Coppie italiane e internazionali"
    : "Weddings in spectacular Italian locations · Italian and international couples";
  const cta = lang === "it" ? "Entra nel portfolio" : "Enter the portfolio";

  return (
    <section className="home-splash">
      <div className="wrap-narrow home-splash-inner">
        <div className="eyebrow">{intro}</div>
        <h1 className="home-title">
          Atelier <em>Solari</em>
        </h1>
        <Link href="/portfolio" className="home-cta">
          {cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
