"use client";

import { useLang } from "@/context/LangContext";

export default function Testimonianze() {
  const { t } = useLang();

  return (
    <section className="section bg-card-soft">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t.testimonianze.eyebrow}</div>
          <h2>
            {t.testimonianze.title[0]}<em>{t.testimonianze.title[1]}</em>{t.testimonianze.title[2]}
          </h2>
        </div>
        <div className="testimonianze">
          {t.testimonianze.items.map((tItem, i) => (
            <div key={i} className="testimonial">
              <div className="stars">{'★'.repeat(5)}</div>
              <div className="quote-mark">&ldquo;</div>
              <blockquote>{tItem.quote}</blockquote>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{tItem.name.charAt(0)}</div>
                <div className="testimonial-who">
                  <span className="n">{tItem.name}</span>
                  <span className="where">{tItem.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
