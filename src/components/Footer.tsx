"use client";

import { useLang } from "@/context/LangContext";

const COLOPHON_IT = {
  heading: "Colofone",
  lines: [
    "Composto in DM Sans di Colophon Foundry e Fraunces di Undercase Type.",
    "Sistema cromatico in OKLCH, hue 50, calibrato sulla luce delle colline toscane.",
    "Pellicola di riferimento: Kodak Portra 400, medio formato.",
    "Grana al 3% per restituire la consistenza dell'analogico.",
  ],
  legal: "Atelier Solari · Firenze e Positano",
  rights: "Tutti i diritti riservati",
  tagline: "Fatto a mano in Toscana",
};

const COLOPHON_EN = {
  heading: "Colophon",
  lines: [
    "Set in DM Sans by Colophon Foundry and Fraunces by Undercase Type.",
    "Color system in OKLCH, hue 50, tuned to the light of Tuscan hills.",
    "Reference film: Kodak Portra 400, medium format.",
    "Grain at 3% to bring back the analog feel.",
  ],
  legal: "Atelier Solari · Florence and Positano",
  rights: "All rights reserved",
  tagline: "Hand-made in Tuscany",
};

const toRoman = (n: number): string => {
  const map: [number, string][] = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [v, s] of map) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
};

export default function Footer() {
  const { t, lang } = useLang();
  const c = lang === "it" ? COLOPHON_IT : COLOPHON_EN;
  const year = new Date().getFullYear();
  const romanYear = toRoman(year);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="display-sm">Atelier Solari</div>
            <p>{t.footer.desc}</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">{t.footer.col1.title}</div>
            <ul>
              {t.footer.col1.items.map((item) => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">{t.footer.col2.title}</div>
            <ul>
              {t.footer.col2.items.map((item) => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">{t.footer.col3.title}</div>
            <ul>
              {t.footer.col3.items.map((item) => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="colophon">
          <div className="colophon-head">{c.heading}</div>
          <div className="colophon-body">
            {c.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="colophon-meta">
            <span>© {romanYear} · {c.legal}</span>
            <span>{c.rights}</span>
            <span>{c.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
