"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useLang } from "@/context/LangContext";

type Shot = {
  roll: number;
  frame: number;
  shutter: string;
  aperture: string;
  film: string;
  time: string;
};
type Photo = {
  src: string;
  title: string;
  loc: string;
  tags: string[];
  shot: Shot;
};

const PHOTOS: Photo[] = [
  { src: "/images/gallery/gallery-1.jpg", title: "Chiara & Marco",     loc: "Montalcino, Toscana", tags: ["toscana", "pellicola"],
    shot: { roll: 24, frame: 12, shutter: "1/250", aperture: "f/2.8", film: "Portra 400", time: "17:42" } },
  { src: "/images/gallery/gallery-2.jpg", title: "Sofia & Alessandro", loc: "Positano, Costiera", tags: ["costiera"],
    shot: { roll: 11, frame: 4,  shutter: "1/500", aperture: "f/4",   film: "Digitale",   time: "18:15" } },
  { src: "/images/gallery/gallery-3.jpg", title: "Giulia & Andrea",    loc: "Firenze", tags: ["toscana"],
    shot: { roll: 7,  frame: 22, shutter: "1/125", aperture: "f/2",   film: "Digitale",   time: "20:30" } },
  { src: "/images/gallery/gallery-4.jpg", title: "Emma & Luca",        loc: "Siena, Toscana", tags: ["toscana", "pellicola"],
    shot: { roll: 19, frame: 8,  shutter: "1/250", aperture: "f/2.8", film: "Portra 400", time: "16:55" } },
  { src: "/images/gallery/gallery-5.jpg", title: "Valentina & Matteo", loc: "Ravello", tags: ["costiera", "pellicola"],
    shot: { roll: 31, frame: 15, shutter: "1/500", aperture: "f/4",   film: "Portra 800", time: "19:08" } },
  { src: "/images/gallery/gallery-6.jpg", title: "Alice & Giovanni",   loc: "Lucca", tags: ["toscana"],
    shot: { roll: 4,  frame: 30, shutter: "1/200", aperture: "f/2.8", film: "Digitale",   time: "15:20" } },
  { src: "/images/gallery/gallery-7.jpg", title: "Martina & Federico", loc: "San Gimignano", tags: ["toscana", "pellicola"],
    shot: { roll: 16, frame: 6,  shutter: "1/250", aperture: "f/2",   film: "Portra 400", time: "17:11" } },
  { src: "/images/gallery/gallery-8.jpg", title: "Francesca & Roberto",loc: "Capri", tags: ["costiera"],
    shot: { roll: 9,  frame: 18, shutter: "1/1000",aperture: "f/5.6", film: "Digitale",   time: "13:40" } },
  { src: "/images/gallery/gallery-9.jpg", title: "Elena & Davide",     loc: "Val d'Orcia", tags: ["toscana", "pellicola"],
    shot: { roll: 28, frame: 24, shutter: "1/125", aperture: "f/2.8", film: "Portra 400", time: "18:55" } },
];

const pad = (n: number) => n.toString().padStart(2, "0");

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
            <button
              key={i}
              type="button"
              className="photo"
              onClick={() => setLightbox(i)}
              aria-label={`${photo.title}, ${photo.loc}`}
            >
              <div className="photo-num" aria-hidden="true">
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
              <div className="photo-frameno" aria-hidden="true">
                R{pad(photo.shot.roll)} · F{pad(photo.shot.frame)}
              </div>
            </button>
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
              <dl className="shot-data">
                <div><dt>Roll</dt><dd>{pad(filtered[lightbox].shot.roll)}</dd></div>
                <div><dt>Frame</dt><dd>{pad(filtered[lightbox].shot.frame)}</dd></div>
                <div><dt>Time</dt><dd>{filtered[lightbox].shot.time}</dd></div>
                <div><dt>Shutter</dt><dd>{filtered[lightbox].shot.shutter}</dd></div>
                <div><dt>Aperture</dt><dd>{filtered[lightbox].shot.aperture}</dd></div>
                <div><dt>Film</dt><dd>{filtered[lightbox].shot.film}</dd></div>
              </dl>
              <p className="lightbox-counter">
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
