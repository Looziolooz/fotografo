"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

type Work = {
  src: string;
  couple: string;
  location: string;
  year: string;
};

const WORKS: Work[] = [
  { src: "/images/gallery/gallery-1.jpg", couple: "Chiara & Marco",       location: "Montalcino, Toscana",      year: "2025" },
  { src: "/images/gallery/gallery-2.jpg", couple: "Sofia & Alessandro",   location: "Positano, Costiera",       year: "2025" },
  { src: "/images/gallery/gallery-3.jpg", couple: "Giulia & Andrea",      location: "Firenze",                  year: "2024" },
  { src: "/images/gallery/gallery-4.jpg", couple: "Emma & Luca",          location: "Siena, Toscana",           year: "2024" },
  { src: "/images/gallery/gallery-5.jpg", couple: "Valentina & Matteo",   location: "Ravello, Costiera",        year: "2024" },
  { src: "/images/gallery/gallery-6.jpg", couple: "Alice & Giovanni",     location: "Lucca, Toscana",           year: "2023" },
  { src: "/images/gallery/gallery-7.jpg", couple: "Martina & Federico",   location: "San Gimignano, Toscana",   year: "2023" },
  { src: "/images/gallery/gallery-8.jpg", couple: "Francesca & Roberto",  location: "Capri",                    year: "2023" },
  { src: "/images/gallery/gallery-9.jpg", couple: "Elena & Davide",       location: "Val d'Orcia, Toscana",     year: "2022" },
];

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

      {WORKS.map((w, i) => (
        <article key={i} className="work-tile">
          <div className="work-image">
            <Image
              src={w.src}
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
              <span className="work-counter-total">{WORKS.length.toString().padStart(2, "0")}</span>
            </span>
            <span className="work-year">{w.year}</span>
          </div>
          <div className="work-center">
            <h3 className="work-couple">{w.couple}</h3>
            <div className="work-location">{w.location}</div>
          </div>
        </article>
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
