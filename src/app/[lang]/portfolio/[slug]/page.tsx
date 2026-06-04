import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { HorizontalGallery } from "@/components/HorizontalGallery";
import { GALLERIES } from "@/content/galleries";
import { SITE } from "@/content/site";
import { LOCALES, getDict, type Locale } from "@/content/i18n";

const SLUGS = Object.keys(GALLERIES);

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const g = GALLERIES[slug];
  if (!g) return {};
  return { title: `${SITE.name} | ${g.names} — ${g.location}`, description: getDict(lang as Locale).portfolioDescription };
}

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const l = lang as Locale;
  const g = GALLERIES[slug];
  if (!g) notFound();

  const dict = getDict(l);
  const idx = SLUGS.indexOf(slug);
  const nextSlug = SLUGS[(idx + 1) % SLUGS.length];
  const ng = GALLERIES[nextSlug];
  const next = { slug: nextSlug, names: ng.names, location: ng.location, thumb: `/images/portfolio/${nextSlug}/t1.webp` };

  return (
    <>
      <Header lang={l} />
      <main>
        <HorizontalGallery
          lang={l}
          names={g.names}
          location={g.location}
          description={dict.portfolioDescription}
          images={g.images}
          next={next}
          labels={{ scroll: dict.common.scroll, nextProject: dict.common.nextProject }}
        />
      </main>
    </>
  );
}
