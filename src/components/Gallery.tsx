"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useLang } from "@/context/LangContext";

const PHOTOS = [
  { src: "/images/gallery/gallery-1.jpg", title: "Chiara & Marco", loc: "Montalcino, Toscana" },
  { src: "/images/gallery/gallery-2.jpg", title: "Sofia & Alessandro", loc: "Positano, Costiera" },
  { src: "/images/gallery/gallery-3.jpg", title: "Giulia & Andrea", loc: "Firenze" },
  { src: "/images/gallery/gallery-4.jpg", title: "Emma & Luca", loc: "Siena, Toscana" },
  { src: "/images/gallery/gallery-5.jpg", title: "Valentina & Matteo", loc: "Ravello" },
  { src: "/images/gallery/gallery-6.jpg", title: "Alice & Giovanni", loc: "Lucca" },
  { src: "/images/gallery/gallery-7.jpg", title: "Martina & Federico", loc: "San Gimignano" },
  { src: "/images/gallery/gallery-8.jpg", title: "Francesca & Roberto", loc: "Capri" },
  { src: "/images/gallery/gallery-9.jpg", title: "Elena & Davide", loc: "Val d'Orcia" },
];

export default function Gallery() {
  const { t } = useLang();
  const [filter, setFilter] = useState(t.gallery.filters[0]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === t.gallery.filters[0] ? PHOTOS : PHOTOS;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox((lightbox - 1 + PHOTOS.length) % PHOTOS.length);
      if (e.key === "ArrowRight") setLightbox((lightbox + 1) % PHOTOS.length);
    },
    [lightbox]
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
          {t.gallery.filters.map((f) => (
            <button
              key={f}
              className={`pill ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
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
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].title}
                fill
                sizes="(max-width: 880px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="lightbox-meta">
              <div className="eyebrow">{t.gallery.eyebrow}</div>
              <h3>{PHOTOS[lightbox].title}</h3>
              <p>{PHOTOS[lightbox].loc}</p>
              <p>
                {lightbox + 1} {t.gallery.of} {PHOTOS.length}
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
