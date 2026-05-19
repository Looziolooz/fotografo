"use client";

import { useLang } from "@/context/LangContext";

export default function ClosingQuote() {
  const { t } = useLang();

  return (
    <section className="closing-quote">
      <div className="wrap-narrow">
        <div className="mark">&ldquo;</div>
        <blockquote>
          {t.closing.quote[0]}<em>{t.closing.quote[1]}</em>{t.closing.quote[2]}
        </blockquote>
        <div className="who">{t.closing.who}</div>
      </div>
    </section>
  );
}
