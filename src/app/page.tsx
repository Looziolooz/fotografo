import { LangProvider } from "@/context/LangContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Filosofia from "@/components/Filosofia";
import StatsStrip from "@/components/StatsStrip";
import Gallery from "@/components/Gallery";
import Servizi from "@/components/Servizi";
import Testimonianze from "@/components/Testimonianze";
import Diario from "@/components/Diario";
import ContactForm from "@/components/ContactForm";
import ClosingQuote from "@/components/ClosingQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Filosofia />
        <StatsStrip />
        <div className="divider-filigree">
          <span className="orn">~</span>
        </div>
        <Gallery />
        <div className="section-ornament">✦ ✦ ✦</div>
        <Servizi />
        <div className="section-ornament">✦ ✦ ✦</div>
        <Testimonianze />
        <Diario />
        <div className="divider-filigree">
          <span className="orn">✦</span>
        </div>
        <ContactForm />
        <ClosingQuote />
      </main>
      <Footer />
    </LangProvider>
  );
}
