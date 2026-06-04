import Link from "next/link";
import { SITE } from "@/content/site";
import { getDict, type Locale } from "@/content/i18n";

/**
 * Closing footer — large serif "let's connect" CTA over nav + contact details,
 * then the legal line. Localized; not rendered on the home page.
 */
export function Footer({ lang }: { lang: Locale }) {
  const dict = getDict(lang);
  const href = (path: string) => `/${lang}${path}`;

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="px-[clamp(1.25rem,5vw,4.5rem)] pb-[clamp(2rem,4vw,3.5rem)] pt-[clamp(3.5rem,8vw,7rem)]">
        <Link href={href("/contact-us")} className="font-display block max-w-[16ch] text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] transition-opacity hover:opacity-60">
          {dict.common.letsStart}
        </Link>

        <div className="mt-[clamp(2.5rem,6vw,5rem)] grid grid-cols-1 gap-10 border-t border-black/10 pt-10 sm:grid-cols-3">
          <nav className="flex flex-col gap-2 font-sans text-[12px] uppercase tracking-[0.18em]">
            {dict.nav.map((item, i) => (
              <Link key={`${item.label}-${i}`} href={href(item.path)} className="w-fit transition-opacity hover:opacity-50">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 font-sans text-[12px] uppercase tracking-[0.18em] text-black/70">
            <a href={`mailto:${SITE.email}`} className="w-fit hover:text-black">{SITE.email}</a>
            {SITE.phones.map((ph) => (
              <a key={ph} href={`tel:${ph.replace(/\s/g, "")}`} className="w-fit hover:text-black">{ph}</a>
            ))}
          </div>

          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="font-sans text-[12px] uppercase tracking-[0.18em] sm:justify-self-end">
            {SITE.instagramHandle}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-sans text-[11px] uppercase tracking-[0.16em] text-black/45">
          <span>{dict.footer.copyright}</span>
          <span>{dict.footer.credit}</span>
          <span>{dict.footer.terms}</span>
        </div>
      </div>
    </footer>
  );
}
