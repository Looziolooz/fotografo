"use client";

import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

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
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Atelier Solari. {t.footer.copyright}</span>
          <span>{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
