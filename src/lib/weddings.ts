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

/* Single source of truth: 7 matrimoni italo-stranieri (destination weddings).
   Gallery, FeaturedWorks e /portfolio/[slug] importano da qui. */
export const WEDDINGS: Wedding[] = [
  {
    slug: "sophie-marco",
    couple: "Sophie & Marco",
    location: "Montalcino, Toscana",
    year: "2025",
    tags: ["toscana", "pellicola"],
    cover: "/images/works/sophie-marco/cover.png",
    gallery: [
      "/images/works/sophie-marco/01.png",
      "/images/works/sophie-marco/02.png",
      "/images/works/sophie-marco/03.png",
    ],
    noteIt: "Il momento in cui Marco l'ha vista uscire dalla cascina, e ha smesso di parlare.",
    noteEn: "The moment Marco saw her walk out of the farmhouse, and stopped talking mid-sentence.",
    descriptionIt:
      "Sophie è venuta da Londra portando con sé un'idea precisa di luce, e ha trovato esattamente quella che cercava sulle colline di Montalcino. Un matrimonio di settembre, pellicola medio formato, cerimonia sotto un olmo e ritratti tra le vigne al tramonto.",
    descriptionEn:
      "Sophie came from London with a precise idea of light in mind, and found exactly what she was looking for on the hills of Montalcino. A September wedding, medium format film, ceremony under an elm, portraits in the vines at sunset.",
  },
  {
    slug: "astrid-alessandro",
    couple: "Astrid & Alessandro",
    location: "Positano, Costiera Amalfitana",
    year: "2025",
    tags: ["costiera"],
    cover: "/images/works/astrid-alessandro/cover.png",
    gallery: [
      "/images/works/astrid-alessandro/01.png",
      "/images/works/astrid-alessandro/02.png",
      "/images/works/astrid-alessandro/03.png",
    ],
    noteIt: "Alessandro l'aveva vista in piazzetta tre estati prima. Astrid se l'è ricordato solo guardando l'album.",
    noteEn: "Alessandro had seen her in the piazzetta three summers earlier. Astrid only remembered while looking at the album.",
    descriptionIt:
      "Astrid è arrivata da Stoccolma con la sua famiglia per tre giorni di festa a Positano. La cerimonia su una terrazza affacciata sul mare, il taglio della torta sotto una pergola di rose, una traversata in barca all'imbrunire. Limoni e bouganville come unica scenografia.",
    descriptionEn:
      "Astrid came from Stockholm with her family for three days of celebration in Positano. A ceremony on a terrace overlooking the sea, the cake cut under a rose pergola, a boat crossing at dusk. Lemons and bougainvillea as the only set design.",
  },
  {
    slug: "charlotte-luca",
    couple: "Charlotte & Luca",
    location: "Siena, Toscana",
    year: "2024",
    tags: ["toscana", "pellicola"],
    cover: "/images/works/charlotte-luca/cover.png",
    gallery: [
      "/images/works/charlotte-luca/01.png",
      "/images/works/charlotte-luca/02.png",
    ],
    noteIt: "Hanno fatto le promesse senza foglietto. Solo Luca, a tratti, dimenticava una frase.",
    noteEn: "They made their vows without a written script. Only Luca, at times, forgot a line.",
    descriptionIt:
      "Charlotte è venuta da Parigi e Luca da Siena: si sono incontrati a metà strada, in un podere delle Crete Senesi, in una giornata calda di luglio. Cerimonia all'aperto sotto una quercia, promesse a memoria, un primo ballo iniziato troppo presto perché nessuno voleva aspettare.",
    descriptionEn:
      "Charlotte came from Paris and Luca from Siena: they met in the middle, in a farmhouse in the Crete Senesi, on a warm July day. An outdoor ceremony under an oak, vows by heart, a first dance that started too early because no one wanted to wait.",
  },
  {
    slug: "valentina-james",
    couple: "Valentina & James",
    location: "Ravello, Costiera Amalfitana",
    year: "2024",
    tags: ["costiera", "pellicola"],
    cover: "/images/works/valentina-james/cover.png",
    gallery: [
      "/images/works/valentina-james/01.png",
      "/images/works/valentina-james/02.png",
    ],
    noteIt: "Il velo si era impigliato sulla sua giacca. Valentina ha sorriso senza accorgersene.",
    noteEn: "The veil had caught on his jacket. Valentina smiled without noticing.",
    descriptionIt:
      "James è arrivato da Edimburgo, Valentina dalla provincia di Salerno. Villa Cimbrone a Ravello li aspettava. Cerimonia sul Belvedere dell'Infinito, ritratti tra le statue al tramonto, cena nei giardini con la musica fino a tardi.",
    descriptionEn:
      "James came from Edinburgh, Valentina from the province of Salerno. Villa Cimbrone in Ravello was waiting for them. A ceremony on the Terrace of Infinity, portraits among the statues at sunset, dinner in the gardens with music until late.",
  },
  {
    slug: "anastasia-federico",
    couple: "Anastasia & Federico",
    location: "San Gimignano, Toscana",
    year: "2023",
    tags: ["toscana", "pellicola"],
    cover: "/images/works/anastasia-federico/cover.png",
    gallery: [
      "/images/works/anastasia-federico/01.png",
      "/images/works/anastasia-federico/02.png",
    ],
    noteIt: "Hanno chiesto di camminare un attimo da soli, dopo la cerimonia. Cinque minuti di silenzio.",
    noteEn: "They asked to walk alone for a moment, after the ceremony. Five minutes of silence.",
    descriptionIt:
      "Anastasia ha lasciato Mosca alla fine dell'inverno per sposarsi in Toscana con Federico. Le torri di San Gimignano sullo sfondo, una piccola cerimonia con quaranta persone, e cinque minuti rubati ai testimoni per camminare da soli sulle mura.",
    descriptionEn:
      "Anastasia left Moscow at the end of winter to marry Federico in Tuscany. The towers of San Gimignano in the background, a small ceremony with forty people, and five minutes stolen from the witnesses to walk alone on the city walls.",
  },
  {
    slug: "eleanor-roberto",
    couple: "Eleanor & Roberto",
    location: "Capri",
    year: "2023",
    tags: ["costiera"],
    cover: "/images/works/eleanor-roberto/cover.png",
    gallery: [
      "/images/works/eleanor-roberto/01.png",
      "/images/works/eleanor-roberto/02.png",
      "/images/works/eleanor-roberto/03.png",
      "/images/works/eleanor-roberto/04.png",
    ],
    noteIt: "Mezzogiorno a Capri. Il primo ballo l'hanno fatto al sole, senza musica.",
    noteEn: "Noon in Capri. Their first dance was in the sun, no music.",
    descriptionIt:
      "Eleanor è arrivata da Dublino con cinquanta amici. Capri d'estate, mezzogiorno pieno. La cerimonia sulla terrazza dell'hotel, il primo ballo improvvisato senza band, una traversata in barca nel tardo pomeriggio. Roberto non ha smesso di sorridere per dodici ore.",
    descriptionEn:
      "Eleanor came from Dublin with fifty friends. Capri in summer, full noon. The ceremony on the hotel terrace, the first dance improvised without a band, a boat crossing in the late afternoon. Roberto did not stop smiling for twelve hours.",
  },
  {
    slug: "helena-davide",
    couple: "Helena & Davide",
    location: "Val d'Orcia, Toscana",
    year: "2022",
    tags: ["toscana", "pellicola"],
    cover: "/images/works/helena-davide/cover.png",
    gallery: [
      "/images/works/helena-davide/01.png",
      "/images/works/helena-davide/02.png",
      "/images/works/helena-davide/03.png",
    ],
    noteIt: "Davide le ha sussurrato qualcosa al brindisi. Helena ha riso forte, gli altri si sono girati.",
    noteEn: "Davide whispered something to her at the toast. Helena laughed loudly, the others turned.",
    descriptionIt:
      "Helena è venuta da Monaco con i genitori e una valigia di sole intenzioni. Val d'Orcia in ottobre, la luce migliore dell'anno. Una piccola cerimonia in un podere isolato, un tramonto che sembrava scritto per loro, e un brindisi che ha cambiato la temperatura della serata.",
    descriptionEn:
      "Helena came from Munich with her parents and a single suitcase full of intentions. Val d'Orcia in October, the best light of the year. A small ceremony in an isolated farmhouse, a sunset that seemed written for them, a toast that changed the temperature of the evening.",
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
