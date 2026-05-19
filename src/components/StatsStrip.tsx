"use client";

import { useLang } from "@/context/LangContext";

export default function StatsStrip() {
  const { t } = useLang();
  const [anchor, ...rest] = t.stats;

  return (
    <section className="section-pad-sm">
      <div className="wrap">
        <div className="stats-strip">
          <div className="stat-cell">
            <div className="stat-num">{anchor.num}</div>
            <div className="stat-label">{anchor.label}</div>
          </div>
          <div className="stats-secondary">
            {rest.map((s) => (
              <div key={s.label} className="stat-cell">
                <div>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
