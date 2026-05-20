"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useLang } from "@/context/LangContext";

type Photo = {
  src: string;
  title: string;
  loc: string;
  tags: string[];
  noteIt: string;
  noteEn: string;
};

const PHOTOS: Photo[] = [
  { src: "/images/gallery/gallery-1.jpg", title: "Chiara & Marco",      loc: "Montalcino, Toscana", tags: ["toscana", "pellicola"],
    noteIt: "Il momento in cui Marco l'ha vista uscire dalla cascina, e ha smesso di parlare.",
    noteEn: "The moment Marco saw her walk out of the farmhouse, and stopped talking mid-sentence." },
  { src: "/images/gallery/gallery-2.jpg", title: "Sofia & Alessandro",  loc: "Positano, Costiera", tags: ["costiera"],
    noteIt: "Lei rideva di qualcosa che il fratello aveva detto cinque minuti prima. Lui non sapeva ancora il perché.",
    noteEn: "She was laughing at something her brother had said five minutes earlier. He still didn't know why." },
  { src: "/images/gallery/gallery-3.jpg", title: "Giulia & Andrea",     loc: "Firenze", tags: ["toscana"],
    noteIt: "L'attesa, prima dell'ingresso in chiesa. Andrea contava i passi che mancavano.",
    noteEn: "The wait before walking into the church. Andrea was counting the steps left." },
  { src: "/images/gallery/gallery-4.jpg", title: "Emma & Luca",         loc: "Siena, Toscana", tags: ["toscana", "pellicola"],
    noteIt: "Hanno fatto le promesse senza foglietto. Solo Luca, a tratti, dimenticava una frase.",
    noteEn: "They made their vows without a written script. Only Luca, at times, forgot a line." },
  { src: "/images/gallery/gallery-5.jpg", title: "Valentina & Matteo",  loc: "Ravello", tags: ["costiera", "pellicola"],
    noteIt: "Il velo si era impigliato sulla sua giacca. Lei ha sorriso senza accorgersene.",
    noteEn: "The veil had caught on his jacket. She smiled without noticing." },
  { src: "/images/gallery/gallery-6.jpg", title: "Alice & Giovanni",    loc: "Lucca", tags: ["toscana"],
    noteIt: "La pioggia li ha sorpresi. Sono rimasti fermi a guardarsi, bagnati.",
    noteEn: "The rain caught them off guard. They stood still, looking at each other, soaked." },
  { src: "/images/gallery/gallery-7.jpg", title: "Martina & Federico",  loc: "San Gimignano", tags: ["toscana", "pellicola"],
    noteIt: "Hanno chiesto di camminare un attimo da soli, dopo la cerimonia. Cinque minuti di silenzio.",
    noteEn: "They asked to walk alone for a moment, after the ceremony. Five minutes of silence." },
  { src: "/images/gallery/gallery-8.jpg", title: "Francesca & Roberto", loc: "Capri", tags: ["costiera"],
    noteIt: "Mezzogiorno a Capri. Il primo ballo l'hanno fatto al sole, senza musica.",
    noteEn: "Noon in Capri. Their first dance was in the sun, no music." },
  { src: "/images/gallery/gallery-9.jpg", title: "Elena & Davide",      loc: "Val d'Orcia", tags: ["toscana", "pellicola"],
    noteIt: "Davide le ha sussurrato qualcosa al brindisi. Lei ha riso forte, gli altri si sono girati.",
    noteEn: "Davide whispered something to her at the toast. She laughed loudly, the others turned." },
];

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
                      : lang === "it" ? "Un istante in più" : "One more moment"
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
                  </button>
                  <div className="photo-face photo-face-back" aria-hidden={!isFlipped}>
                    <p className="photo-back-note">{note}</p>
                    <div className="photo-back-couple">{photo.title}</div>
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
