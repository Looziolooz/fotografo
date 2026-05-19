"use client";

import { useLang } from "@/context/LangContext";

export default function Servizi() {
  const { t } = useLang();

  return (
    <section id="servizi" className="section">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 56 }}>
          <div className="eyebrow">{t.servizi.eyebrow}</div>
          <h2>
            {t.servizi.title[0]}<em>{t.servizi.title[1]}</em>{t.servizi.title[2]}
          </h2>
          <p>{t.servizi.desc}</p>
        </div>
        <div className="servizi">
          {t.servizi.plans.map((plan, i) => (
            <div
              key={i}
              className={`servizio-card ${i === 1 ? "featured" : ""}`}
            >
              {i === 1 && <div className="servizio-badge">{t.servizi.badge}</div>}
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{plan.title}</h3>
              <div className="tagline">{plan.tagline}</div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="price">
                <span className="from">{t.servizi.from}</span>
                <span className="amt">{plan.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
