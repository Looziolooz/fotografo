import FeaturedWorks from "@/components/FeaturedWorks";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Portfolio — Atelier Solari",
  description: "Matrimoni fotografati in Toscana e Costiera Amalfitana.",
};

export default function PortfolioPage() {
  return (
    <>
      <FeaturedWorks />
      <Gallery />
    </>
  );
}
