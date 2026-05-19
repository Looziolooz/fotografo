"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Filosofia() {
  const { t } = useLang();

  return (
    <section id="filosofia" className="section">
      <div className="wrap">
        <div className="filosofia">
          <div className="filosofia-photo">
            <Image
              src="/images/filosofia.jpg"
              alt=""
              fill
              sizes="(max-width: 880px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div className="corner-accent tl" />
            <div className="corner-accent br" />
          </div>
          <div>
            <div className="eyebrow">{t.filosofia.eyebrow}</div>
            <h2 style={{ marginTop: 6 }}>
              {t.filosofia.title[0]}<em>{t.filosofia.title[1]}</em>{t.filosofia.title[2]}
            </h2>
            <p><span className="dropcap">{t.filosofia.par1[0]}</span>{t.filosofia.par1.slice(1)}</p>
            <p>{t.filosofia.par2}</p>
            <div className="signature">
              {t.filosofia.signature}
              <small>{t.filosofia.signatureSub}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
