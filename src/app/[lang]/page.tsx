import { Header } from "@/components/Header";
import { InfiniteGrid } from "@/components/InfiniteGrid";
import type { Locale } from "@/content/i18n";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  return (
    <>
      <Header lang={l} />
      <main>
        <InfiniteGrid lang={l} />
      </main>
    </>
  );
}
