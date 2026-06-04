// Bilingual (EN / IT) dictionary for the Solari site.
// Couple names + locations live in site.ts (language-neutral).

export const LOCALES = ["en", "it"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const isLocale = (x: string): x is Locale => (LOCALES as readonly string[]).includes(x);

export interface NavItem {
  label: string;
  path: string;
}
export interface FaqItem {
  q: string;
  a: string;
}
export interface ContactField {
  label: string;
  required: boolean;
  placeholder: string;
  type: "text" | "email" | "select" | "textarea";
  options?: string[];
}

export interface Dictionary {
  langName: string;
  nav: NavItem[];
  common: {
    menu: string;
    close: string;
    scroll: string;
    nextProject: string;
    letsStart: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lede: string;
    intro: string;
    style: string;
    quoteA: string;
    quoteB: string;
    paragraphs: string[];
  };
  faq: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    items: FaqItem[];
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    submit: string;
    success: string;
    fields: ContactField[];
  };
  footer: {
    copyright: string;
    credit: string;
    terms: string;
  };
  portfolioDescription: string;
}

const NAV_PATHS = ["", "", "/about-us", "/faq", "/contact-us"];

export const DICT: Record<Locale, Dictionary> = {
  en: {
    langName: "English",
    nav: ["Home", "Portfolio", "About Us", "FAQ", "Contact"].map((label, i) => ({ label, path: NAV_PATHS[i] })),
    common: {
      menu: "Menu",
      close: "Close",
      scroll: "Scroll",
      nextProject: "Next project",
      letsStart: "Let's start the conversation",
    },
    about: {
      metaTitle: "Solari | About | Italy Wedding Photographer",
      metaDescription: "Editorial wedding photography — timeless moments, real emotions, across Italy.",
      heading: "Capturing love with intent and style",
      lede: "timeless moments, real emotions.",
      intro:
        "I'm Noro Solari, a wedding photographer who sees every celebration as a mix of fashion, feeling, and story. Since 2017 I've photographed over 250 weddings, always with the same goal: to capture not just how the day looks but how it feels.",
      style:
        "My style is shaped by editorial influences and real emotion. I focus on raw moments and the unique energy each couple brings. I like photographs that feel like memories, unfiltered and full of atmosphere. My work has been featured in leading magazines, reflecting my commitment to style and authenticity.",
      quoteA: "Let's connect and create something beautiful together.",
      quoteB: "If we work together, I will tell your story with honesty, style, and heart.",
      paragraphs: [
        "Outside of photography, I find inspiration in everyday rhythms. Music festivals, art exhibitions, and galleries keep my creativity alive. I enjoy good wine, honest conversations, and discovering new cultures. These experiences shape how I see and how I shoot, always with intention and an open mind.",
        "Your wedding is a living tapestry where raw emotion and curated elegance intertwine. Guided by fashion finesse and photojournalistic instinct, I capture genuine vibes — the laughter, tears, and silent vows — with warmth and sincerity.",
        "I balance artful portraiture with candid spontaneity, weaving a narrative that lasts beyond the wedding day itself. The result is timeless images that reflect the splendor you share and the depth of your love.",
      ],
    },
    faq: {
      metaTitle: "Solari | Wedding Photography FAQs",
      metaDescription: "Answers to the most common questions about booking, style, travel and process.",
      title: "FAQ",
      items: [
        { q: "What is your photography style?", a: "My photography blends editorial fashion aesthetics with candid moments and unique vibes. I capture refined cinematic compositions while embracing genuine unfiltered emotions. The result is a collection of images that feel effortless and elevated, timeless yet full of life." },
        { q: "How far in advance should we book you?", a: "I take on a limited number of weddings each year to give every couple the attention they deserve. For peak seasons (spring, summer, and fall), I recommend booking 12 months in advance. However, last-minute inquiries are always welcome if my schedule allows." },
        { q: "Do you travel for destination weddings?", a: "Yes, my work focuses on Italy's most iconic wedding locations such as Lake Como, Tuscany, Amalfi Coast, and Puglia. I am also available for weddings worldwide. I usually arrive a day early to explore the location, understand the lighting, and make sure we capture the best possible moments." },
        { q: "What is your booking process?", a: "To reserve your date, I require a signed contract and a 50% retainer. The final balance is due three weeks before your wedding. Since I take on a limited number of weddings, I encourage booking early to secure your date." },
        { q: "Do you offer engagement or pre-wedding sessions?", a: "Absolutely! Engagement and pre-wedding sessions are a wonderful way to get comfortable in front of the camera before your wedding day. These sessions have a relaxed editorial feel that creates stylish and personal images reflecting your unique love story." },
        { q: "Will you be the one photographing our wedding?", a: "Yes. I personally photograph every wedding I book to ensure consistency in vision and style. I also assemble and oversee the entire photography team when needed, ensuring every aspect of your wedding is captured with the same level of artistry." },
        { q: "Can we meet before the wedding?", a: "Yes, I recommend a video call or in-person meeting to discuss your vision, preferences, and timeline." },
        { q: "Will our photos be published?", a: "I frequently submit weddings to renowned international publications. If you're interested in having your wedding featured, we can discuss this option. If you prefer privacy, I also offer a Non-Disclosure Agreement (NDA) to ensure your images remain exclusive." },
      ],
    },
    contact: {
      metaTitle: "Solari | Contact | Italy Destination Photographer",
      metaDescription: "Get in touch to check availability and start planning your wedding photography in Italy.",
      heading: "Get in touch with us",
      submit: "Submit form",
      success: "Thank you — your inquiry has been received. I'll be in touch shortly.",
      fields: [
        { label: "Couple names", required: true, placeholder: "Your names", type: "text" },
        { label: "Your role", required: true, placeholder: "Please select", type: "select", options: ["Bride", "Groom", "Planner", "Other"] },
        { label: "Email", required: true, placeholder: "Email", type: "email" },
        { label: "Event type", required: true, placeholder: "Please select", type: "select", options: ["Wedding", "Elopement", "Engagement", "Editorial"] },
        { label: "Event date", required: true, placeholder: "1–3 July 2026", type: "text" },
        { label: "Budget", required: true, placeholder: "Please select", type: "select", options: ["Up to 3k", "3k – 5k", "5k – 8k", "8k+"] },
        { label: "Event venue and location", required: false, placeholder: "Lake Como, Italy", type: "text" },
        { label: "How did you hear about me?", required: false, placeholder: "Please select", type: "select", options: ["Instagram", "Google", "A friend", "A planner", "Magazine"] },
        { label: "Couple's instagram", required: false, placeholder: "@", type: "text" },
        { label: "Message", required: false, placeholder: "Tell me about your day…", type: "textarea" },
      ],
    },
    footer: {
      copyright: "©2026 Solari. All rights reserved.",
      credit: "Made by Solari",
      terms: "Terms & Conditions",
    },
    portfolioDescription:
      "From Lake Como to the Amalfi Coast, I capture weddings in Italy's most iconic locations. Blending editorial elegance with candid emotion, each image tells a timeless story — honest, cinematic, and unforgettable.",
  },

  it: {
    langName: "Italiano",
    nav: ["Home", "Portfolio", "Chi sono", "FAQ", "Contatti"].map((label, i) => ({ label, path: NAV_PATHS[i] })),
    common: {
      menu: "Menu",
      close: "Chiudi",
      scroll: "Scorri",
      nextProject: "Prossimo lavoro",
      letsStart: "Iniziamo a raccontare la vostra storia",
    },
    about: {
      metaTitle: "Solari | Chi sono | Fotografo di matrimoni in Italia",
      metaDescription: "Fotografia di matrimonio editoriale — momenti senza tempo, emozioni vere, in tutta Italia.",
      heading: "Catturare l'amore con intenzione e stile",
      lede: "momenti senza tempo, emozioni vere.",
      intro:
        "Sono Noro Solari, un fotografo di matrimoni che vede ogni celebrazione come un intreccio di moda, emozione e racconto. Dal 2017 ho fotografato oltre 250 matrimoni, sempre con lo stesso obiettivo: catturare non solo come appare la giornata, ma come si percepisce.",
      style:
        "Il mio stile nasce da influenze editoriali e da emozioni autentiche. Cerco i momenti veri e l'energia unica di ogni coppia. Amo le immagini che sembrano ricordi, senza filtri e piene di atmosfera. I miei lavori sono stati pubblicati su riviste di prestigio, a conferma della mia ricerca di stile e autenticità.",
      quoteA: "Conosciamoci e creiamo insieme qualcosa di bello.",
      quoteB: "Se lavoreremo insieme, racconterò la vostra storia con onestà, stile e cuore.",
      paragraphs: [
        "Oltre alla fotografia, trovo ispirazione nei ritmi di ogni giorno. Festival musicali, mostre d'arte e gallerie tengono viva la mia creatività. Amo il buon vino, le conversazioni sincere e la scoperta di nuove culture. Tutto questo plasma il mio sguardo e il mio modo di fotografare, sempre con intenzione e mente aperta.",
        "Il vostro matrimonio è un arazzo vivo in cui emozione pura ed eleganza curata si intrecciano. Guidato da sensibilità estetica e istinto fotogiornalistico, catturo le vibrazioni autentiche — le risate, le lacrime e le promesse silenziose — con calore e sincerità.",
        "Bilancio il ritratto d'autore con la spontaneità del candid, tessendo un racconto che dura oltre il giorno stesso. Il risultato sono immagini senza tempo che riflettono lo splendore che condividete e la profondità del vostro amore.",
      ],
    },
    faq: {
      metaTitle: "Solari | Domande frequenti",
      metaDescription: "Risposte alle domande più comuni su prenotazione, stile, viaggi e processo.",
      title: "FAQ",
      items: [
        { q: "Qual è il tuo stile fotografico?", a: "La mia fotografia unisce l'estetica editoriale di moda a momenti candidi e atmosfere uniche. Realizzo composizioni cinematografiche e raffinate, abbracciando emozioni autentiche e non filtrate. Il risultato è una collezione di immagini naturali ed eleganti, senza tempo eppure piene di vita." },
        { q: "Con quanto anticipo dovremmo prenotare?", a: "Accetto un numero limitato di matrimoni all'anno per dedicare a ogni coppia l'attenzione che merita. Per l'alta stagione (primavera, estate e autunno) consiglio di prenotare con 12 mesi di anticipo. Le richieste dell'ultimo minuto sono comunque benvenute, se la disponibilità lo consente." },
        { q: "Viaggi per i matrimoni in destinazione?", a: "Sì, il mio lavoro si concentra sulle location più iconiche d'Italia, come il Lago di Como, la Toscana, la Costiera Amalfitana e la Puglia. Sono disponibile anche per matrimoni in tutto il mondo. Di solito arrivo un giorno prima per esplorare il luogo, studiare la luce e assicurarmi di catturare i momenti migliori." },
        { q: "Come funziona la prenotazione?", a: "Per riservare la data servono un contratto firmato e un acconto del 50%. Il saldo è previsto tre settimane prima del matrimonio. Poiché accetto pochi matrimoni, consiglio di prenotare presto per assicurarsi la data." },
        { q: "Offri sessioni di engagement o pre-wedding?", a: "Assolutamente sì! Le sessioni di engagement e pre-wedding sono un modo meraviglioso per prendere confidenza con la macchina fotografica prima del giorno del matrimonio. Hanno un mood editoriale e rilassato e creano immagini eleganti e personali, che raccontano la vostra storia d'amore." },
        { q: "Sarai tu a fotografare il nostro matrimonio?", a: "Sì. Fotografo personalmente ogni matrimonio che accetto, per garantire coerenza di visione e stile. Quando serve, coordino anche l'intero team fotografico, assicurando lo stesso livello di cura in ogni momento." },
        { q: "Possiamo conoscerci prima del matrimonio?", a: "Certo, consiglio una videochiamata o un incontro di persona per parlare della vostra visione, delle preferenze e della tabella di marcia." },
        { q: "Le nostre foto verranno pubblicate?", a: "Propongo spesso i matrimoni a pubblicazioni internazionali di prestigio. Se vi interessa vedere il vostro matrimonio pubblicato, possiamo parlarne. Se invece preferite la riservatezza, offro un accordo di non divulgazione (NDA) per mantenere esclusive le vostre immagini." },
      ],
    },
    contact: {
      metaTitle: "Solari | Contatti | Fotografo di matrimoni in Italia",
      metaDescription: "Scrivimi per verificare la disponibilità e iniziare a pianificare la fotografia del vostro matrimonio in Italia.",
      heading: "Mettiamoci in contatto",
      submit: "Invia",
      success: "Grazie — la tua richiesta è stata ricevuta. Ti risponderò a breve.",
      fields: [
        { label: "Nomi della coppia", required: true, placeholder: "I vostri nomi", type: "text" },
        { label: "Il tuo ruolo", required: true, placeholder: "Seleziona", type: "select", options: ["Sposa", "Sposo", "Wedding planner", "Altro"] },
        { label: "Email", required: true, placeholder: "Email", type: "email" },
        { label: "Tipo di evento", required: true, placeholder: "Seleziona", type: "select", options: ["Matrimonio", "Elopement", "Engagement", "Editoriale"] },
        { label: "Data dell'evento", required: true, placeholder: "1–3 luglio 2026", type: "text" },
        { label: "Budget", required: true, placeholder: "Seleziona", type: "select", options: ["Fino a 3k", "3k – 5k", "5k – 8k", "Oltre 8k"] },
        { label: "Location e luogo dell'evento", required: false, placeholder: "Lago di Como, Italia", type: "text" },
        { label: "Come mi hai conosciuto?", required: false, placeholder: "Seleziona", type: "select", options: ["Instagram", "Google", "Un amico", "Un planner", "Una rivista"] },
        { label: "Instagram della coppia", required: false, placeholder: "@", type: "text" },
        { label: "Messaggio", required: false, placeholder: "Raccontami della vostra giornata…", type: "textarea" },
      ],
    },
    footer: {
      copyright: "©2026 Solari. Tutti i diritti riservati.",
      credit: "Realizzato da Solari",
      terms: "Termini e condizioni",
    },
    portfolioDescription:
      "Dal Lago di Como alla Costiera Amalfitana, fotografo matrimoni nelle location più iconiche d'Italia. Unendo eleganza editoriale ed emozione autentica, ogni immagine racconta una storia senza tempo — sincera, cinematografica e indimenticabile.",
  },
};

export const getDict = (locale: Locale): Dictionary => DICT[locale];
