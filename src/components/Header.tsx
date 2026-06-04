"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  /* Header transparent solo su rotte con hero scuro full-bleed:
     /portfolio (FeaturedWorks cinematic) e /portfolio/[slug] (wedding hero). */
  const wantsTransparent = pathname.startsWith("/portfolio");
  const transparentClass = !isHome && wantsTransparent && !scrolled ? "transparent" : "";

  return (
    <header className={`site-header ${transparentClass}`}>
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">S</span>
          <span>
            <span className="brand-name">Atelier Solari</span>
            <span className="brand-sub">{t.header.brandSub}</span>
          </span>
        </Link>
        <nav className="nav">
          {t.header.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <div className="lang-switch">
            <button onClick={() => setLang("it")} className={lang === "it" ? "active" : ""}>IT</button>
            <span>/</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
          </div>
          <Link href="/contatti" className="btn btn-primary">
            {t.header.cta}
          </Link>
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
          {t.header.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-link ${isActive(item.href) ? "active" : ""}`}
              onClick={close}
            >
              <span className="mobile-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
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
          <Link
            href="/contatti"
            className="btn btn-primary"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
            onClick={close}
          >
            {t.header.cta}
          </Link>
          <div className="mobile-foot">
            <span>{t.header.mobileFoot}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
