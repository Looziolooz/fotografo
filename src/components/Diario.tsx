"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

const DIARIO_IMAGES = [
  "/images/blog-1.jpg",
  "/images/blog-2.jpg",
  "/images/blog-3.jpg",
  "/images/blog-4.jpg",
];
const DIARIO_DURATIONS = [null, "4 min", "6 min", null];

export default function Diario() {
  const { t } = useLang();

  return (
    <section id="diario" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t.diario.eyebrow}</div>
          <h2>
            {t.diario.title[0]}<em>{t.diario.title[1]}</em>{t.diario.title[2]}
          </h2>
          <p>{t.diario.desc}</p>
        </div>
      </div>
      <div style={{ height: 20 }} />
      <div className="wrap">
        <div className="diario">
          {t.diario.posts.map((post, i) => (
            <div key={i} className={`diario-card ${i === 0 ? "wide" : ""}`}>
              <Image
                src={DIARIO_IMAGES[i]}
                alt={post.title}
                fill
                sizes={i === 0 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 25vw"}
                style={{ objectFit: "cover" }}
              />
              {DIARIO_DURATIONS[i] && <div className="duration">{DIARIO_DURATIONS[i]}</div>}
              <div className="scrim" />
              <div className="body">
                <div className="eyebrow">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
