import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDict, type Locale } from "@/content/i18n";

const PORTRAIT = "/images/portfolio/about-portrait.webp";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const a = getDict(lang as Locale).about;
  return { title: a.metaTitle, description: a.metaDescription };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  const a = getDict(l).about;
  return (
    <>
      <Header lang={l} />
      <main className="px-[clamp(1.25rem,5vw,4.5rem)] pt-[clamp(7rem,14vh,11rem)]">
        <h1 className="font-display max-w-[13ch] text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.04]">{a.heading}</h1>

        <div className="mt-[clamp(3rem,6vw,5.5rem)] grid gap-[clamp(2rem,5vw,4rem)] md:grid-cols-2 md:items-center">
          <div className="reveal relative aspect-[5/6] w-full overflow-hidden bg-neutral-100">
            <Image src={PORTRAIT} alt={a.heading} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
          <div>
            <p className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05]">{a.lede}</p>
            <p className="reveal mt-9 max-w-[48ch] font-sans text-[15px] leading-[1.85] text-black/75">{a.intro}</p>
            <p className="reveal mt-6 max-w-[48ch] font-sans text-[15px] leading-[1.85] text-black/75">{a.style}</p>
          </div>
        </div>

        <p className="reveal font-display mx-auto my-[clamp(4.5rem,11vw,9rem)] max-w-[22ch] text-center text-[clamp(1.75rem,4.6vw,3.4rem)] uppercase leading-[1.12]">{a.quoteA}</p>

        <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-8 md:grid-cols-2">
          {a.paragraphs.map((p, i) => (
            <p key={i} className="reveal max-w-[52ch] font-sans text-[15px] leading-[1.85] text-black/75" data-reveal-delay={i * 60}>{p}</p>
          ))}
        </div>

        <p className="reveal font-display mx-auto my-[clamp(4.5rem,11vw,9rem)] max-w-[24ch] text-center text-[clamp(1.6rem,4.2vw,3rem)] uppercase leading-[1.12]">{a.quoteB}</p>
      </main>
      <Footer lang={l} />
    </>
  );
}
