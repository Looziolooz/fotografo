import StatsStrip from "@/components/StatsStrip";
import Servizi from "@/components/Servizi";
import Testimonianze from "@/components/Testimonianze";

export const metadata = {
  title: "Servizi — Atelier Solari",
  description: "Piani fotografici su misura per il vostro matrimonio.",
};

export default function ServiziPage() {
  return (
    <>
      <StatsStrip />
      <Servizi />
      <Testimonianze />
    </>
  );
}
