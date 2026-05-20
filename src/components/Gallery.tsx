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
  noteIt: string;
  noteEn: string;
};

const PHOTOS: Photo[] = [
  { src: "/images/gallery/gallery-1.jpg", title: "Chiara & Marco",     loc: "Montalcino, Toscana", tags: ["toscana", "pellicola"],
    shot: { roll: 24, frame: 12, shutter: "1/250", aperture: "f/2.8", film: "Portra 400", time: "17:42" },
    noteIt: "La luce calava dietro le vigne. Lei ha riso al momento giusto, l'ultimo del rullino.",
    noteEn: "Light was dropping behind the vines. She laughed at the right moment, the last on the roll." },
  { src: "/images/gallery/gallery-2.jpg", title: "Sofia & Alessandro", loc: "Positano, Costiera", tags: ["costiera"],
    shot: { roll: 11, frame: 4,  shutter: "1/500", aperture: "f/4",   film: "Digitale",   time: "18:15" },
    noteIt: "Positano alle sei e un quarto. Sapevo che lui l'avrebbe presa così, ma non quando.",
    noteEn: "Positano at quarter past six. I knew he'd catch her like that, just not when." },
  { src: "/images/gallery/gallery-3.jpg", title: "Giulia & Andrea",    loc: "Firenze", tags: ["toscana"],
    shot: { roll: 7,  frame: 22, shutter: "1/125", aperture: "f/2",   film: "Digitale",   time: "20:30" },
    noteIt: "Dentro il chiostro, il sole entrava da una sola finestra. Tre passi indietro, basta.",
    noteEn: "Inside the cloister, sun came from one window only. Three steps back, that was all." },
  { src: "/images/gallery/gallery-4.jpg", title: "Emma & Luca",        loc: "Siena, Toscana", tags: ["toscana", "pellicola"],
    shot: { roll: 19, frame: 8,  shutter: "1/250", aperture: "f/2.8", film: "Portra 400", time: "16:55" },
    noteIt: "Hanno cambiato idea sull'orario. Meglio così, la luce era tutta lì.",
    noteEn: "They changed their minds about timing. Better that way, the light was all there." },
  { src: "/images/gallery/gallery-5.jpg", title: "Valentina & Matteo", loc: "Ravello", tags: ["costiera", "pellicola"],
    shot: { roll: 31, frame: 15, shutter: "1/500", aperture: "f/4",   film: "Portra 800", time: "19:08" },
    noteIt: "Ravello, vento. Lui le teneva il velo. Una sola posa, niente da dire.",
    noteEn: "Ravello, wind. He held her veil. One frame, nothing to say." },
  { src: "/images/gallery/gallery-6.jpg", title: "Alice & Giovanni",   loc: "Lucca", tags: ["toscana"],
    shot: { roll: 4,  frame: 30, shutter: "1/200", aperture: "f/2.8", film: "Digitale",   time: "15:20" },
    noteIt: "A Lucca piove sempre quando non dovrebbe. Bagnati, contenti.",
    noteEn: "It always rains in Lucca when it shouldn't. Wet, happy." },
  { src: "/images/gallery/gallery-7.jpg", title: "Martina & Federico", loc: "San Gimignano", tags: ["toscana", "pellicola"],
    shot: { roll: 16, frame: 6,  shutter: "1/250", aperture: "f/2",   film: "Portra 400", time: "17:11" },
    noteIt: "San Gimignano dall'alto. Le torri erano una cornice, non un soggetto.",
    noteEn: "San Gimignano from above. The towers framed them, not the subject." },
  { src: "/images/gallery/gallery-8.jpg", title: "Francesca & Roberto",loc: "Capri", tags: ["costiera"],
    shot: { roll: 9,  frame: 18, shutter: "1/1000",aperture: "f/5.6", film: "Digitale",   time: "13:40" },
    noteIt: "Capri a mezzogiorno, sole pieno. Tutto bianco tranne loro.",
    noteEn: "Capri at noon, full sun. Everything white except them." },
  { src: "/images/gallery/gallery-9.jpg", title: "Elena & Davide",     loc: "Val d'Orcia", tags: ["toscana", "pellicola"],
    shot: { roll: 28, frame: 24, shutter: "1/125", aperture: "f/2.8", film: "Portra 400", time: "18:55" },
    noteIt: "Val d'Orcia al tramonto. Diciotto secondi tra una nuvola e l'altra.",
    noteEn: "Val d'Orcia at sunset. Eighteen seconds between two clouds." },
];

const pad = (n: number) => n.toString().padStart(2, "0");

const FILTER_TAGS = ["", "toscana", "costiera", "pellicola"];

export default function Gallery() {
  const { t, lang } = useLang();
  const [filterIdx, setFilterIdx] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

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
          {filtered.map((photo, i) => {
            const isFlipped = flipped.has(i);
            const note = lang === "it" ? photo.noteIt : photo.noteEn;
            return (
              <div key={i} className={`photo ${isFlipped ? "is-flipped" : ""}`}>
                <button
                  type="button"
                  className="photo-flip-btn"
                  onClick={() => toggleFlip(i)}
                  aria-label={
                    isFlipped
                      ? lang === "it" ? "Torna alla foto" : "Back to photo"
                      : lang === "it" ? "Appunti del fotografo" : "Photographer's notes"
                  }
                  aria-pressed={isFlipped}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                </button>
                <div className="photo-inner">
                  <button
                    type="button"
                    className="photo-face photo-face-front"
                    onClick={() => setLightbox(i)}
                    aria-label={`${photo.title}, ${photo.loc}`}
                    tabIndex={isFlipped ? -1 : 0}
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
                  <div className="photo-face photo-face-back" aria-hidden={!isFlipped}>
                    <div className="photo-back-eyebrow">
                      {lang === "it" ? "Appunti" : "Notes"} · {photo.shot.time}
                    </div>
                    <p className="photo-back-note">{note}</p>
                    <div className="photo-back-meta">
                      <span>{photo.shot.film}</span>
                      <span>·</span>
                      <span>{photo.shot.shutter}</span>
                      <span>·</span>
                      <span>{photo.shot.aperture}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
