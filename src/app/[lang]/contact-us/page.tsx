import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/content/site";
import { getDict, type Locale } from "@/content/i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const c = getDict(lang as Locale).contact;
  return { title: c.metaTitle, description: c.metaDescription };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  const c = getDict(l).contact;
  return (
    <>
      <Header lang={l} />
      <main className="px-[clamp(1.25rem,5vw,4.5rem)] pb-[clamp(2rem,5vw,4rem)] pt-[clamp(7rem,14vh,11rem)]">
        <div className="grid gap-[clamp(2.5rem,6vw,5rem)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="font-display max-w-[10ch] text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1.02]">{c.heading}</h1>
            <div className="mt-[clamp(2rem,4vw,3rem)] flex flex-col gap-2 font-sans text-[13px] uppercase tracking-[0.14em] text-black/70">
              <a href={`mailto:${SITE.email}`} className="w-fit underline-offset-4 hover:text-black hover:underline">{SITE.email}</a>
              {SITE.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="w-fit hover:text-black">{p}</a>
              ))}
            </div>
          </div>

          <ContactForm fields={c.fields} submit={c.submit} success={c.success} />
        </div>
      </main>
      <Footer lang={l} />
    </>
  );
}
