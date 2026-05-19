"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-inner">
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <h1 className="display">
          {t.hero.title[0]}<em>{t.hero.title[1]}</em>{t.hero.title[2]}
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-meta">
          {t.hero.meta.map((m, i) => (
            <div key={i} className="hero-meta-item">
              <span className="k">{m.k}</span>
              <span className="v">{m.v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-corner">{t.hero.corner}</div>
      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <div className="line" />
      </div>
    </section>
  );
}
