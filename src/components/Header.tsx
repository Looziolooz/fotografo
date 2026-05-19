"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
import type { Lang } from "@/lib/i18n";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = t.header.nav.map((item) => item.href.slice(1));
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [t]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${!scrolled ? "transparent" : ""}`}>
      <div className="header-inner">
        <a href="#" className="brand">
          <span className="brand-mark">S</span>
          <span>
            <span className="brand-name">Atelier Solari</span>
            <span className="brand-sub">{t.header.brandSub}</span>
          </span>
        </a>
        <nav className="nav">
          {t.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
          <div className="lang-switch">
            <button onClick={() => setLang("it")} className={lang === "it" ? "active" : ""}>IT</button>
            <span>/</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
          </div>
          <a href="#contatti" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: "12px" }}>
            {t.header.cta}
          </a>
        </nav>
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && <div className="mobile-overlay" onClick={close} />}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          {t.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-link ${active === item.href.slice(1) ? "active" : ""}`}
              onClick={close}
            >
              <span className="mobile-num">
                {String(t.header.nav.indexOf(item) + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
          <div className="mobile-lang" style={{ display: "flex", gap: 8, marginTop: 24 }}>
            <button
              onClick={() => setLang("it")}
              className={`pill ${lang === "it" ? "active" : ""}`}
              style={{ flex: 1, textAlign: "center" }}
            >
              IT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`pill ${lang === "en" ? "active" : ""}`}
              style={{ flex: 1, textAlign: "center" }}
            >
              EN
            </button>
          </div>
          <a
            href="#contatti"
            className="btn btn-primary"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
            onClick={close}
          >
            {t.header.cta}
          </a>
          <div className="mobile-foot">
            <span>{t.header.mobileFoot}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
