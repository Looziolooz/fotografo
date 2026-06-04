"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

const STORIA_IT = {
  eyebrow: "Storia · 01",
  title: ["Chiara & Marco, ", "Montalcino"] as [string, string],
  meta: "14 settembre 2025 · Castello di Vicarello",

  introCh: "Q",
  intro:
    "uando Chiara mi ha scritto a febbraio, mi ha mandato una sola fotografia: la finestra della sua cucina con la pioggia. “Voglio una giornata che assomigli a questa luce,” diceva il messaggio. Sette mesi dopo, eravamo in cima a una collina vicino a Montalcino, e il sole stava facendo esattamente quello che lei aveva chiesto.",

  chapter1Eyebrow: "I · La cerimonia",
  chapter1:
    "Hanno fatto la promessa sotto un olmo che doveva avere più di duecento anni. Il vento muoveva le foglie, e ogni tanto una luce verde gli passava sopra. La pellicola medio formato è esigente con il vento: devi aspettare. Ho aspettato due fotogrammi prima di scattare.",

  quote: "Non voglio una posa. Voglio che vi dimentichiate che sono qui.",
  quoteWho: "Chiara, durante il primo caffè a Firenze",

  chapter2Eyebrow: "II · I ritratti, tra le vigne",
  chapter2:
    "Mezz’ora con loro, mentre la luce calava. Non sapevano cosa fare con le mani, come capita sempre. Allora abbiamo camminato. Le foto migliori sono venute mentre lei gli stava raccontando qualcosa che non ho sentito.",

  closingEyebrow: "Coda",
  closing:
    "L’album è arrivato a fine novembre. Chiara mi ha rimandato un messaggio, stavolta senza foto: “È come ricordare un sogno fatto bene.” Non potrei dirlo meglio.",

  ctaLabel: "Vedi tutto il portfolio",
  ctaHref: "/portfolio",
};

const STORIA_EN = {
  eyebrow: "Story · 01",
  title: ["Chiara & Marco, ", "Montalcino"] as [string, string],
  meta: "September 14, 2025 · Castello di Vicarello",

  introCh: "W",
  intro:
    "hen Chiara wrote to me in February, she sent only one picture: the window of her kitchen, in the rain. “I want a day that looks like this light,” the message said. Seven months later, we were on a hilltop near Montalcino, and the sun was doing exactly what she had asked.",

  chapter1Eyebrow: "I · The ceremony",
  chapter1:
    "They made their promise under an elm that had to be more than two hundred years old. The wind moved the leaves, and now and then a green light passed over them. Medium format film is demanding with wind: you wait. I waited two frames before pressing the shutter.",

  quote: "I don’t want a pose. I want you to forget I’m here.",
  quoteWho: "Chiara, over our first coffee in Florence",

  chapter2Eyebrow: "II · Portraits, among the vines",
  chapter2:
    "Half an hour with them, as the light dropped. They didn’t know what to do with their hands, as always. So we walked. The best frames came while she was telling him something I couldn’t hear.",

  closingEyebrow: "Coda",
  closing:
    "The album arrived in late November. Chiara wrote me back, this time without a photo: “It’s like remembering a dream you remembered well.” I couldn’t say it better.",

  ctaLabel: "See the full portfolio",
  ctaHref: "/portfolio",
};

const IMAGES = {
  intro: "/images/gallery/gallery-1.jpg",
  chapter1: "/images/gallery/gallery-4.jpg",
  chapter2: "/images/gallery/gallery-7.jpg",
  closing: "/images/gallery/gallery-9.jpg",
};

export default function Storia() {
  const { lang } = useLang();
  const s = lang === "it" ? STORIA_IT : STORIA_EN;

  return (
    <section id="storia" className="storia">
      <div className="wrap">
        <header className="storia-head">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2 className="storia-title">
            {s.title[0]}<em>{s.title[1]}</em>
          </h2>
          <div className="storia-meta">{s.meta}</div>
        </header>
      </div>

      <div className="wrap storia-block storia-block-intro">
        <div className="storia-image storia-image-1">
          <Image
            src={IMAGES.intro}
            alt="Chiara & Marco, Montalcino"
            width={720}
            height={960}
            sizes="(max-width: 880px) 100vw, 50vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="storia-text storia-text-1">
          <p>
            <span className="storia-dropcap">{s.introCh}</span>
            {s.intro}
          </p>
        </div>
      </div>

      <div className="wrap storia-block storia-block-ch1">
        <div className="storia-text storia-text-2">
          <div className="storia-eyebrow">{s.chapter1Eyebrow}</div>
          <p>{s.chapter1}</p>
        </div>
        <div className="storia-image storia-image-2">
          <Image
            src={IMAGES.chapter1}
            alt=""
            width={720}
            height={960}
            sizes="(max-width: 880px) 100vw, 55vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="wrap">
        <blockquote className="storia-quote">
          <p>&ldquo;{s.quote}&rdquo;</p>
          <cite>— {s.quoteWho}</cite>
        </blockquote>
      </div>

      <div className="wrap storia-block storia-block-ch2">
        <div className="storia-image storia-image-3">
          <Image
            src={IMAGES.chapter2}
            alt=""
            width={720}
            height={960}
            sizes="(max-width: 880px) 100vw, 50vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="storia-text storia-text-3">
          <div className="storia-eyebrow">{s.chapter2Eyebrow}</div>
          <p>{s.chapter2}</p>
        </div>
      </div>

      <div className="wrap storia-block storia-block-closing">
        <div className="storia-text storia-text-closing">
          <div className="storia-eyebrow">{s.closingEyebrow}</div>
          <p>{s.closing}</p>
          <a href={s.ctaHref} className="storia-cta">
            {s.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="storia-image storia-image-closing">
          <Image
            src={IMAGES.closing}
            alt=""
            width={960}
            height={640}
            sizes="(max-width: 880px) 100vw, 60vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
