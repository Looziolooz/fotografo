"use client";

import { useLang } from "@/context/LangContext";

export default function StatsStrip() {
  const { t } = useLang();

  return (
    <section className="section-pad-sm">
      <div className="wrap">
        <div className="stats-strip">
          {t.stats.map((s) => (
            <div key={s.label} className="stat-cell">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
