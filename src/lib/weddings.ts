export type Wedding = {
  slug: string;
  couple: string;
  location: string;
  year: string;
  tags: string[];
  cover: string;
  gallery: string[];
  noteIt: string;
  noteEn: string;
  descriptionIt: string;
  descriptionEn: string;
};

/* Single source of truth per tutti i matrimoni del portfolio.
   Componenti Gallery, FeaturedWorks e /portfolio/[slug] importano da qui. */
export const WEDDINGS: Wedding[] = [
  {
    slug: "chiara-marco",
    couple: "Chiara & Marco",
    location: "Montalcino, Toscana",
    year: "2025",
    tags: ["toscana", "pellicola"],
    cover: "/images/gallery/gallery-1.jpg",
    gallery: [],
    noteIt: "Il momento in cui Marco l'ha vista uscire dalla cascina, e ha smesso di parlare.",
    noteEn: "The moment Marco saw her walk out of the farmhouse, and stopped talking mid-sentence.",
    descriptionIt:
      "Un matrimonio sotto le colline di Montalcino, in una giornata di settembre che sembrava ordinaria fino al momento in cui la luce ha cambiato. Pellicola medio formato, cerimonia sotto un olmo, ritratti tra le vigne al tramonto.",
    descriptionEn:
      "A wedding under the hills of Montalcino, on a September day that looked ordinary until the light shifted. Medium format film, a ceremony under an elm, portraits among the vines at sunset.",
  },
  {
    slug: "sofia-alessandro",
    couple: "Sofia & Alessandro",
    location: "Positano, Costiera Amalfitana",
    year: "2025",
    tags: ["costiera"],
    cover: "/images/gallery/gallery-2.jpg",
    gallery: [],
    noteIt: "Lei rideva di qualcosa che il fratello aveva detto cinque minuti prima. Lui non sapeva ancora il perché.",
    noteEn: "She was laughing at something her brother had said five minutes earlier. He still didn't know why.",
    descriptionIt:
      "Positano d'estate, la cerimonia su una terrazza affacciata sul mare. Limoni come cornice, vento leggero, una coppia che non ha mai smesso di tenersi la mano per tutto il giorno.",
    descriptionEn:
      "Positano in summer, the ceremony on a terrace overlooking the sea. Lemons as framing, light wind, a couple that never let go of each other's hands through the day.",
  },
  {
    slug: "giulia-andrea",
    couple: "Giulia & Andrea",
    location: "Firenze",
    year: "2024",
    tags: ["toscana"],
    cover: "/images/gallery/gallery-3.jpg",
    gallery: [],
    noteIt: "L'attesa, prima dell'ingresso in chiesa. Andrea contava i passi che mancavano.",
    noteEn: "The wait before walking into the church. Andrea was counting the steps left.",
    descriptionIt:
      "Cerimonia in un chiostro nascosto del centro di Firenze, ricevimento in una villa sulle colline di Fiesole. Una giornata di silenzio e di vento, e un ingresso in chiesa che non dimenticheremo.",
    descriptionEn:
      "A ceremony in a hidden cloister in the heart of Florence, reception in a villa on the hills of Fiesole. A day of silence and wind, and an entrance into the church we won't forget.",
  },
  {
    slug: "emma-luca",
    couple: "Emma & Luca",
    location: "Siena, Toscana",
    year: "2024",
    tags: ["toscana", "pellicola"],
    cover: "/images/gallery/gallery-4.jpg",
    gallery: [],
    noteIt: "Hanno fatto le promesse senza foglietto. Solo Luca, a tratti, dimenticava una frase.",
    noteEn: "They made their vows without a written script. Only Luca, at times, forgot a line.",
    descriptionIt:
      "Una giornata calda di luglio nelle Crete Senesi. Cerimonia all'aperto, promesse a memoria, e un primo ballo iniziato troppo presto perché nessuno voleva aspettare.",
    descriptionEn:
      "A warm July day in the Crete Senesi. An outdoor ceremony, vows by heart, and a first dance that started too early because no one wanted to wait.",
  },
  {
    slug: "valentina-matteo",
    couple: "Valentina & Matteo",
    location: "Ravello, Costiera Amalfitana",
    year: "2024",
    tags: ["costiera", "pellicola"],
    cover: "/images/gallery/gallery-5.jpg",
    gallery: [],
    noteIt: "Il velo si era impigliato sulla sua giacca. Lei ha sorriso senza accorgersene.",
    noteEn: "The veil had caught on his jacket. She smiled without noticing.",
    descriptionIt:
      "Villa Cimbrone, Ravello. La cerimonia sul Belvedere dell'Infinito, ritratti tra le statue al tramonto, cena nei giardini con la musica fino a tardi.",
    descriptionEn:
      "Villa Cimbrone, Ravello. The ceremony on the Terrace of Infinity, portraits among the statues at sunset, dinner in the gardens with music until late.",
  },
  {
    slug: "alice-giovanni",
    couple: "Alice & Giovanni",
    location: "Lucca, Toscana",
    year: "2023",
    tags: ["toscana"],
    cover: "/images/gallery/gallery-6.jpg",
    gallery: [],
    noteIt: "La pioggia li ha sorpresi. Sono rimasti fermi a guardarsi, bagnati.",
    noteEn: "The rain caught them off guard. They stood still, looking at each other, soaked.",
    descriptionIt:
      "Una villa storica fuori Lucca, un temporale di maggio arrivato senza preavviso, e una coppia che ha deciso di non ripararsi. Le foto migliori sono nate da lì.",
    descriptionEn:
      "A historic villa outside Lucca, a May storm that arrived without warning, and a couple that decided not to take shelter. The best photographs came from that moment.",
  },
  {
    slug: "martina-federico",
    couple: "Martina & Federico",
    location: "San Gimignano, Toscana",
    year: "2023",
    tags: ["toscana", "pellicola"],
    cover: "/images/gallery/gallery-7.jpg",
    gallery: [],
    noteIt: "Hanno chiesto di camminare un attimo da soli, dopo la cerimonia. Cinque minuti di silenzio.",
    noteEn: "They asked to walk alone for a moment, after the ceremony. Five minutes of silence.",
    descriptionIt:
      "Le torri di San Gimignano sullo sfondo, una piccola cerimonia con quaranta persone, e cinque minuti rubati ai testimoni per camminare da soli sulle mura.",
    descriptionEn:
      "The towers of San Gimignano in the background, a small ceremony with forty people, and five minutes stolen from the witnesses to walk alone along the walls.",
  },
  {
    slug: "francesca-roberto",
    couple: "Francesca & Roberto",
    location: "Capri",
    year: "2023",
    tags: ["costiera"],
    cover: "/images/gallery/gallery-8.jpg",
    gallery: [],
    noteIt: "Mezzogiorno a Capri. Il primo ballo l'hanno fatto al sole, senza musica.",
    noteEn: "Noon in Capri. Their first dance was in the sun, no music.",
    descriptionIt:
      "Capri d'estate, mezzogiorno pieno. La cerimonia sulla terrazza dell'hotel, il primo ballo improvvisato senza band, e una traversata in barca nel tardo pomeriggio.",
    descriptionEn:
      "Capri in summer, full noon. The ceremony on the hotel terrace, the first dance improvised without a band, and a boat crossing in the late afternoon.",
  },
  {
    slug: "elena-davide",
    couple: "Elena & Davide",
    location: "Val d'Orcia, Toscana",
    year: "2022",
    tags: ["toscana", "pellicola"],
    cover: "/images/gallery/gallery-9.jpg",
    gallery: [],
    noteIt: "Davide le ha sussurrato qualcosa al brindisi. Lei ha riso forte, gli altri si sono girati.",
    noteEn: "Davide whispered something to her at the toast. She laughed loudly, the others turned.",
    descriptionIt:
      "Val d'Orcia in ottobre, la luce migliore dell'anno. Una piccola cerimonia in un podere isolato, e un tramonto che sembrava scritto per loro.",
    descriptionEn:
      "Val d'Orcia in October, the best light of the year. A small ceremony in an isolated farmhouse, and a sunset that seemed written for them.",
  },
];

export const FILTER_TAGS = ["", "toscana", "costiera", "pellicola"];

export function getWedding(slug: string): Wedding | undefined {
  return WEDDINGS.find((w) => w.slug === slug);
}

export function getAdjacentWedding(slug: string): Wedding {
  const idx = WEDDINGS.findIndex((w) => w.slug === slug);
  const nextIdx = (idx + 1) % WEDDINGS.length;
  return WEDDINGS[nextIdx];
}
