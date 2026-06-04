"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import type { Wedding } from "@/lib/weddings";

export default function WeddingDetail({
  wedding,
  next,
}: {
  wedding: Wedding;
  next: Wedding;
}) {
  const { lang } = useLang();
  const description = lang === "it" ? wedding.descriptionIt : wedding.descriptionEn;
  const backLabel = lang === "it" ? "Tutti i lavori" : "All projects";
  const nextLabel = lang === "it" ? "Prossimo matrimonio" : "Next project";

  /* When no extra gallery photos exist (gallery: [] in weddings.ts) we still
     render a vertical sequence using the cover image so the page feels editorial
     rather than empty. As Lorenzo uploads per-wedding photos this will fill in. */
  const galleryImages = wedding.gallery.length > 0
    ? wedding.gallery
    : [wedding.cover, wedding.cover, wedding.cover];

  return (
    <article className="wedding-detail">
      {/* HERO */}
      <header className="wedding-hero">
        <div className="wedding-hero-image">
          <Image
            src={wedding.cover}
            alt={`${wedding.couple} — ${wedding.location}`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="wedding-hero-scrim" aria-hidden="true" />
        <div className="wedding-hero-meta-top">
          <Link href="/portfolio" className="wedding-back">
            ← {backLabel}
          </Link>
          <span className="wedding-year">{wedding.year}</span>
        </div>
        <div className="wedding-hero-center">
          <h1 className="wedding-couple">{wedding.couple}</h1>
          <div className="wedding-location">{wedding.location}</div>
        </div>
      </header>

      {/* DESCRIPTION */}
      <section className="wedding-desc">
        <div className="wrap-narrow">
          <p>{description}</p>
        </div>
      </section>

      {/* GALLERY VERTICALE */}
      <section className="wedding-gallery">
        {galleryImages.map((src, i) => (
          <div key={i} className="wedding-gallery-image">
            <Image
              src={src}
              alt={`${wedding.couple} — ${i + 1}`}
              width={1600}
              height={2000}
              sizes="(max-width: 880px) 100vw, 80vw"
              quality={88}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </section>

      {/* NEXT PROJECT */}
      <section className="wedding-next">
        <Link href={`/portfolio/${next.slug}`} className="wedding-next-link">
          <div className="wedding-next-eyebrow">
            <span>{nextLabel}</span>
            <span aria-hidden="true">→</span>
          </div>
          <div className="wedding-next-image">
            <Image
              src={next.cover}
              alt={next.couple}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="wedding-next-scrim" aria-hidden="true" />
            <div className="wedding-next-overlay">
              <div className="wedding-next-couple">{next.couple}</div>
              <div className="wedding-next-location">{next.location}</div>
            </div>
          </div>
        </Link>
      </section>
    </article>
  );
}
