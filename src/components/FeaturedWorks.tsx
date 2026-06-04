"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { WEDDINGS } from "@/lib/weddings";

export default function FeaturedWorks() {
  const { lang } = useLang();
  const intro = lang === "it" ? "Lavori in evidenza" : "Featured work";
  const exploreLabel = lang === "it" ? "Esplora il portfolio" : "Explore portfolio";

  return (
    <section id="featured" className="featured" aria-label={intro}>
      <div className="featured-intro">
        <div className="wrap">
          <div className="eyebrow">{intro}</div>
        </div>
      </div>

      {WEDDINGS.map((w, i) => (
        <Link key={w.slug} href={`/portfolio/${w.slug}`} className="work-tile">
          <div className="work-image">
            <Image
              src={w.cover}
              alt={`${w.couple} — ${w.location}`}
              fill
              sizes="100vw"
              priority={i === 0}
              quality={85}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="work-scrim" aria-hidden="true" />
          <div className="work-meta-top">
            <span className="work-counter">
              {(i + 1).toString().padStart(2, "0")}
              <span className="work-counter-sep"> / </span>
              <span className="work-counter-total">{WEDDINGS.length.toString().padStart(2, "0")}</span>
            </span>
            <span className="work-year">{w.year}</span>
          </div>
          <div className="work-center">
            <h3 className="work-couple">{w.couple}</h3>
            <div className="work-location">{w.location}</div>
          </div>
        </Link>
      ))}

      <div className="featured-outro">
        <div className="wrap">
          <a href="#portfolio" className="featured-cta">
            {exploreLabel}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
