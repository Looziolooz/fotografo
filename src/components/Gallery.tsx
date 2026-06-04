"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { WEDDINGS, FILTER_TAGS } from "@/lib/weddings";

export default function Gallery() {
  const { t, lang } = useLang();
  const [filterIdx, setFilterIdx] = useState(0);
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const tag = FILTER_TAGS[filterIdx];
  const filtered = tag ? WEDDINGS.filter((p) => p.tags.includes(tag)) : WEDDINGS;

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
          {filtered.map((wedding, i) => {
            const isFlipped = flipped.has(i);
            const note = lang === "it" ? wedding.noteIt : wedding.noteEn;
            return (
              <div key={wedding.slug} className={`photo ${isFlipped ? "is-flipped" : ""}`}>
                <button
                  type="button"
                  className="photo-flip-btn"
                  onClick={(e) => toggleFlip(e, i)}
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
                  <Link
                    href={`/portfolio/${wedding.slug}`}
                    className="photo-face photo-face-front"
                    aria-label={`${wedding.couple}, ${wedding.location}`}
                    tabIndex={isFlipped ? -1 : 0}
                  >
                    <div className="photo-num" aria-hidden="true">
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="photo-frame">
                      <Image
                        src={wedding.cover}
                        alt={wedding.couple}
                        width={600}
                        height={800}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="photo-corners" />
                    <div className="photo-caption">
                      <span className="t">{wedding.couple}</span>
                      <span className="l">{wedding.location}</span>
                    </div>
                  </Link>
                  <div className="photo-face photo-face-back" aria-hidden={!isFlipped}>
                    <p className="photo-back-note">{note}</p>
                    <div className="photo-back-couple">{wedding.couple}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
