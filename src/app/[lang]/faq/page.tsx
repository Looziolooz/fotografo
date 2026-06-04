import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import { getDict, type Locale } from "@/content/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const f = getDict(lang as Locale).faq;
  return { title: f.metaTitle, description: f.metaDescription };
}

export default async function FaqPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  const f = getDict(l).faq;
  return (
    <>
      <Header lang={l} />
      <main className="px-[clamp(1.25rem,5vw,4.5rem)] pt-[clamp(7rem,14vh,11rem)]">
        <h1 className="font-display text-[clamp(3rem,9vw,5.5rem)] leading-none">{f.title}</h1>
        <div className="mt-[clamp(2.5rem,6vw,4.5rem)] max-w-5xl pb-[clamp(2rem,5vw,4rem)]">
          <FaqList items={f.items} />
        </div>
      </main>
      <Footer lang={l} />
    </>
  );
}
