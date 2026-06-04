import ContactForm from "@/components/ContactForm";
import ClosingQuote from "@/components/ClosingQuote";

export const metadata = {
  title: "Contatti — Atelier Solari",
  description: "Scrivici per organizzare il racconto del vostro matrimonio.",
};

export default function ContattiPage() {
  return (
    <>
      <ContactForm />
      <ClosingQuote />
    </>
  );
}
