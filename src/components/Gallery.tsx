"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useLang } from "@/context/LangContext";

type Photo = { src: string; title: string; loc: string; tags: string[] };

const PHOTOS: Photo[] = [
  { src: "/images/gallery/gallery-1.jpg", title: "Chiara & Marco", loc: "Montalcino, Toscana", tags: ["toscana", "pellicola"] },
  { src: "/images/gallery/gallery-2.jpg", title: "Sofia & Alessandro", loc: "Positano, Costiera", tags: ["costiera"] },
  { src: "/images/gallery/gallery-3.jpg", title: "Giulia & Andrea", loc: "Firenze", tags: ["toscana"] },
  { src: "/images/gallery/gallery-4.jpg", title: "Emma & Luca", loc: "Siena, Toscana", tags: ["toscana", "pellicola"] },
  { src: "/images/gallery/gallery-5.jpg", title: "Valentina & Matteo", loc: "Ravello", tags: ["costiera", "pellicola"] },
  { src: "/images/gallery/gallery-6.jpg", title: "Alice & Giovanni", loc: "Lucca", tags: ["toscana"] },
  { src: "/images/gallery/gallery-7.jpg", title: "Martina & Federico", loc: "San Gimignano", tags: ["toscana", "pellicola"] },
  { src: "/images/gallery/gallery-8.jpg", title: "Francesca & Roberto", loc: "Capri", tags: ["costiera"] },
  { src: "/images/gallery/gallery-9.jpg", title: "Elena & Davide", loc: "Val d'Orcia", tags: ["toscana", "pellicola"] },
];

const FILTER_TAGS = ["", "toscana", "costiera", "pellicola"];

export default function Gallery() {
  const { t } = useLang();
  const [filterIdx, setFilterIdx] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const tag = FILTER_TAGS[filterIdx];
  const filtered = tag ? PHOTOS.filter((p) => p.tags.includes(tag)) : PHOTOS;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox((lightbox - 1 + filtered.length) % filtered.length);
      if (e.key === "ArrowRight") setLightbox((lightbox + 1) % filtered.length);
    },
    [lightbox, filtered.length]
  );

  return (
    <section id="portfolio" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <h2>
            {t.gallery.title[0]}<em>{t.gallery.title[1]}</em>{t.gallery.title[2]}
          </h2>
          <p>{t.gallery.desc}</p>
        </div>
        <div className="filters">
          {t.gallery.filters.map((f, i) => (
            <button
              key={f}
              className={`pill ${filterIdx === i ? "active" : ""}`}
              onClick={() => setFilterIdx(i)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div style={{ height: 28 }} />
      <div className="wrap">
        <div className="masonry">
          {filtered.map((photo, i) => (
            <div key={i} className="photo" onClick={() => setLightbox(i)}>
              <div className="photo-num">
                {(i + 1).toString().padStart(2, "0")}
              </div>
              <div className="photo-frame">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={600}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="photo-corners" />
              <div className="photo-caption">
                <span className="t">{photo.title}</span>
                <span className="l">{photo.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-img">
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                fill
                sizes="(max-width: 880px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="lightbox-meta">
              <div className="eyebrow">{t.gallery.eyebrow}</div>
              <h3>{filtered[lightbox].title}</h3>
              <p>{filtered[lightbox].loc}</p>
              <p>
                {lightbox + 1} {t.gallery.of} {filtered.length}
              </p>
            </div>
          </div>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            {t.gallery.close}
          </button>
        </div>
      )}
    </section>
  );
}
