"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";

const BUDGET_IT = ["€ 2.000–3.000", "€ 3.000–5.000", "€ 5.000+"];
const BUDGET_EN = ["$ 2,200–3,300", "$ 3,300–5,500", "$ 5,500+"];

const VENUE_TYPES_IT = ["Villa", "Castello", "Masseria", "Spiaggia", "Borgo", "Non lo so"];
const VENUE_TYPES_EN = ["Villa", "Castle", "Farmhouse", "Beach", "Medieval village", "Not sure yet"];

const HORIZONS_IT = ["2026", "2027", "2028+", "Non ancora definito"];
const HORIZONS_EN = ["2026", "2027", "2028+", "Not yet decided"];

export default function ContactForm() {
  const { t, lang } = useLang();
  const [budget, setBudget] = useState("");
  const [venue, setVenue] = useState("");
  const [horizon, setHorizon] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const budgetOptions = lang === "it" ? BUDGET_IT : BUDGET_EN;
  const venueOptions = lang === "it" ? VENUE_TYPES_IT : VENUE_TYPES_EN;
  const horizonOptions = lang === "it" ? HORIZONS_IT : HORIZONS_EN;

  return (
    <section id="contatti" className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2>
            {t.contact.title[0]}<em>{t.contact.title[1]}</em>{t.contact.title[2]}
          </h2>
          <p>{t.contact.desc}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p>{t.contact.infoText}</p>
            <ul className="contact-points">
              {t.contact.points.map((p, i) => (
                <li key={i}>
                  <div className="ic">
                    {i === 0 ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ) : i === 1 ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 4l-10 8L2 4" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="k">{p.k}</div>
                    <div className="v">{p.v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {submitted ? (
            <div className="form-card">
              <div className="form-success">
                <div className="check">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>{t.contact.success.title}</h3>
                <p>{t.contact.success.desc}</p>
              </div>
            </div>
          ) : (
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="nome">{t.contact.form.nameLabel}</label>
                    <input id="nome" type="text" placeholder={t.contact.form.namePlaceholder} required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{t.contact.form.emailLabel}</label>
                    <input id="email" type="email" placeholder={t.contact.form.emailPlaceholder} required />
                  </div>

                  {/* Bostadstyp — Venue Type */}
                  <div className="field full">
                    <label>{t.contact.form.venueLabel}</label>
                    <div className="budget-options">
                      {venueOptions.map((v) => (
                        <button
                          key={v}
                          type="button"
                          className={`opt ${venue === v ? "on" : ""}`}
                          onClick={() => setVenue(v)}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tidshorisont — Planning Timeline */}
                  <div className="field full">
                    <label>{t.contact.form.horizonLabel}</label>
                    <div className="budget-options">
                      {horizonOptions.map((h) => (
                        <button
                          key={h}
                          type="button"
                          className={`opt ${horizon === h ? "on" : ""}`}
                          onClick={() => setHorizon(h)}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field full">
                    <label htmlFor="location">{t.contact.form.locationLabel}</label>
                    <input id="location" type="text" placeholder={t.contact.form.locationPlaceholder} />
                  </div>
                  <div className="field full">
                    <label htmlFor="data">{t.contact.form.dateLabel}</label>
                    <input id="data" type="text" placeholder={t.contact.form.datePlaceholder} />
                  </div>
                  <div className="field full">
                    <label>{t.contact.form.budgetLabel}</label>
                    <div className="budget-options">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`opt ${budget === b ? "on" : ""}`}
                          onClick={() => setBudget(b)}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="field full">
                    <label htmlFor="message">{t.contact.form.messageLabel}</label>
                    <textarea
                      id="message"
                      placeholder={t.contact.form.messagePlaceholder}
                      required
                    />
                  </div>
                </div>
                <div className="form-submit-row">
                  <span className="privacy-note">{t.contact.form.privacy}</span>
                  <button type="submit" className="btn btn-primary">
                    {t.contact.form.submit}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
