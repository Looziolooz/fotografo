export type Lang = "it" | "en";

export type I18nDict = {
  header: {
    nav: { label: string; href: string }[];
    cta: string;
    brandSub: string;
    mobileFoot: string;
  };
  hero: {
    eyebrow: string;
    title: [string, string, string];
    sub: string;
    meta: { k: string; v: string }[];
    corner: string;
    scroll: string;
  };
  filosofia: {
    eyebrow: string;
    title: [string, string, string];
    par1: string;
    par2: string;
    signature: string;
    signatureSub: string;
  };
  stats: { num: string; label: string }[];
  gallery: {
    eyebrow: string;
    title: [string, string, string];
    desc: string;
    filters: string[];
    of: string;
    close: string;
  };
  servizi: {
    eyebrow: string;
    title: [string, string, string];
    desc: string;
    from: string;
    badge: string;
    plans: {
      title: string;
      tagline: string;
      features: string[];
      price: string;
    }[];
  };
  testimonianze: {
    eyebrow: string;
    title: [string, string, string];
    items: { quote: string; name: string; location: string }[];
  };
  diario: {
    eyebrow: string;
    title: [string, string, string];
    desc: string;
    posts: { title: string; excerpt: string; category: string }[];
  };
  contact: {
    eyebrow: string;
    title: [string, string, string];
    desc: string;
    infoText: string;
    points: { k: string; v: string }[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      locationLabel: string;
      locationPlaceholder: string;
      dateLabel: string;
      datePlaceholder: string;
      budgetLabel: string;
      venueLabel: string;
      horizonLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      privacy: string;
      submit: string;
    };
    success: {
      title: string;
      desc: string;
    };
  };
  closing: {
    quote: [string, string, string];
    who: string;
  };
  footer: {
    desc: string;
    col1: { title: string; items: { label: string; href: string }[] };
    col2: { title: string; items: { label: string; href: string }[] };
    col3: { title: string; items: { label: string; href: string }[] };
    copyright: string;
    tagline: string;
  };
};

const IT: I18nDict = {
  header: {
    nav: [
      { label: "Filosofia", href: "#filosofia" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Servizi", href: "#servizi" },
      { label: "Diario", href: "#diario" },
      { label: "Contatti", href: "#contatti" },
    ],
    cta: "Richiedi preventivo",
    brandSub: "Fotografia di Matrimoni",
    mobileFoot: "Atelier Solari — Firenze / Positano",
  },
  hero: {
    eyebrow: "Atelier Solari",
    title: ["La luce ", "perfetta", " per il tuo giorno"],
    sub: "Fotografia di matrimoni in Toscana e Costiera Amalfitana. Pellicola, medio formato, emozioni senza tempo.",
    meta: [
      { k: "Basata in", v: "Toscana" },
      { k: "Formato", v: "Pellicola & digitale" },
      { k: "Stile", v: "Vintage luxury" },
    ],
    corner: "Fotografia di matrimoni",
    scroll: "Scorri",
  },
  filosofia: {
    eyebrow: "La nostra filosofia",
    title: ["Ogni amore ha una ", "luce", " unica"],
    par1: "Non cerchiamo la posa perfetta. Aspettiamo il momento in cui vi dimenticate che siamo lì — e allora accade la magia. Fotografiamo con pellicola medio formato e digitale, perché ogni strumento ha la sua anima.",
    par2: "La Toscana con le sue colline senza tempo, la Costiera Amalfitana con la luce che danza sul mare: sono i nostri set preferiti. Ma il vero soggetto siete voi.",
    signature: "Lorenzo Solari",
    signatureSub: "Fotografo & Founder",
  },
  stats: [
    { num: "14+", label: "Anni di esperienza" },
    { num: "320+", label: "Matrimoni" },
    { num: "18", label: "Paesi raggiunti" },
    { num: "100%", label: "Coppie soddisfatte" },
  ],
  gallery: {
    eyebrow: "Portfolio",
    title: ["I nostri ", "lavori", ""],
    desc: "Ogni matrimonio è una storia d'amore unica. Ecco alcune delle coppie che ci hanno scelto.",
    filters: ["Tutte", "Toscana", "Costiera", "Pellicola"],
    of: "di",
    close: "Chiudi [Esc]",
  },
  servizi: {
    eyebrow: "Servizi",
    title: ["Piani su ", "misura", ""],
    desc: "Ogni storia merita il suo racconto. Scegli il piano che fa per te, o costruiamone insieme uno su misura.",
    from: "A partire da",
    badge: "Più richiesto",
    plans: [
      {
        title: "Intimo",
        tagline: "L'essenziale con cura artigianale",
        features: [
          "8 ore di copertura",
          "1 fotografo",
          "50 foto ritoccate",
          "Consegna digitale in 30 giorni",
          "Album fine-art 20 pagine",
        ],
        price: "€ 2.900",
      },
      {
        title: "Sul Serio",
        tagline: "Il nostro più richiesto",
        features: [
          "12 ore di copertura",
          "2 fotografi",
          "200 foto ritoccate",
          "Consegna digitale in 20 giorni",
          "Album fine-art 40 pagine",
          "Pellicola medio formato",
          "Boudoir preview",
        ],
        price: "€ 4.500",
      },
      {
        title: "Gran Galà",
        tagline: "Lusso senza compromessi",
        features: [
          "Copertura weekend (2 giorni)",
          "2 fotografi + assistente",
          "400+ foto ritoccate",
          "Consegna digitale in 15 giorni",
          "Album luxury 60 pagine",
          "Pellicola medio formato",
          "Boudoir preview",
          "Video highlights 3 min",
          "Prova su pellicola pre-matrimonio",
        ],
        price: "€ 7.200",
      },
    ],
  },
  testimonianze: {
    eyebrow: "Testimonianze",
    title: ["La voce delle ", "coppie", ""],
    items: [
      {
        quote: "Lorenzo non è solo un fotografo: è un narratore. Rivedere le foto del nostro matrimonio ci ha fatto piangere e ridere come se fosse di nuovo quel giorno.",
        name: "Chiara & Marco",
        location: "Montalcino, Toscana",
      },
      {
        quote: "La scelta della pellicola ha reso ogni scatto un'opera d'arte. Non ci siamo mai sentiti così a nostro agio davanti a un obiettivo.",
        name: "Sofia & Alessandro",
        location: "Positano, Costiera Amalfitana",
      },
      {
        quote: "Avevamo paura di risultare rigidi, ma Lorenzo ci ha guidati con una naturalezza incredibile. Il risultato? Emozioni pure, senza filtri.",
        name: "Giulia & Andrea",
        location: "Firenze",
      },
    ],
  },
  diario: {
    eyebrow: "Diario",
    title: ["Storie, guide & ", "ispirazione", ""],
    desc: "Un diario a più voci tra consigli, racconti e dietro le quinte dei matrimoni che abbiamo fotografato.",
    posts: [
      {
        title: "Matrimonio in Toscana: la guida definitiva",
        excerpt: "Tutto quello che devi sapere per organizzare un matrimonio da sogno tra le colline toscane.",
        category: "Guide",
      },
      {
        title: "Pellicola vs Digitale",
        excerpt: "Perché scegliamo entrambi i formati e come li utilizziamo per raccontare la vostra storia.",
        category: "Tecnica",
      },
      {
        title: "Costiera Amalfitana: location segrete",
        excerpt: "Gli angoli nascosti della Costiera che solo chi vive il territorio conosce.",
        category: "Location",
      },
      {
        title: "I preparativi: emozioni in bianco e nero",
        excerpt: "Il backstage del matrimonio di Eleonora e Tommaso tra specchi, risate e qualche lacrima.",
        category: "Storie",
      },
    ],
  },
  contact: {
    eyebrow: "Contatti",
    title: ["Scrivici, ", "incontriamoci", ""],
    desc: "Raccontaci la tua storia. Ti risponderemo entro 24 ore per organizzare una chiacchierata senza impegno.",
    infoText: "Crediamo che il primo passo sia conoscersi. Un caffè (in presenza o virtuale) per capire se siamo le persone giuste per raccontare il tuo giorno più bello.",
    points: [
      { k: "Sede", v: "Firenze / Positano" },
      { k: "Email", v: "hello@ateliersolari.it" },
      { k: "Telefono", v: "+39 055 123 4567" },
    ],
    form: {
      nameLabel: "Nome e Cognome",
      namePlaceholder: "Il tuo nome",
      emailLabel: "Email",
      emailPlaceholder: "La tua email",
      locationLabel: "Location del matrimonio",
      locationPlaceholder: "Es. Montalcino, Siena — oppure non lo so ancora",
      dateLabel: "Data (indicativa)",
      datePlaceholder: "Es. Primavera 2027",
      budgetLabel: "Budget indicativo",
      venueLabel: "Tipo di location",
      horizonLabel: "Orizzonte temporale",
      messageLabel: "Raccontaci la tua storia",
      messagePlaceholder: "Parlaci di voi: come vi siete conosciuti, cosa sognate per il vostro giorno...",
      privacy: "I tuoi dati saranno trattati con riservatezza e mai condivisi.",
      submit: "Invia richiesta",
    },
    success: {
      title: "Grazie!",
      desc: "Ti risponderemo entro 24 ore. Controlla la tua casella di posta (e anche la cartella spam, ci teniamo a non perderci).",
    },
  },
  closing: {
    quote: ["La luce perfetta non esiste. Esiste ", "la vostra", " luce."],
    who: "— Atelier Solari",
  },
  footer: {
    desc: "Fotografia di matrimoni in Toscana e Costiera Amalfitana. Pellicola, medio formato, ricordi che durano.",
    col1: {
      title: "Servizi",
      items: [
        { label: "Piani", href: "#servizi" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Album fine-art", href: "#" },
        { label: "Boudoir", href: "#" },
      ],
    },
    col2: {
      title: "Esplora",
      items: [
        { label: "Filosofia", href: "#filosofia" },
        { label: "Diario", href: "#diario" },
        { label: "FAQ", href: "#" },
        { label: "Contatti", href: "#contatti" },
      ],
    },
    col3: {
      title: "Social",
      items: [
        { label: "Instagram", href: "#" },
        { label: "Pinterest", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
    copyright: "Tutti i diritti riservati.",
    tagline: "Fatto con cuore in Toscana",
  },
};

const EN: I18nDict = {
  header: {
    nav: [
      { label: "About", href: "#filosofia" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Services", href: "#servizi" },
      { label: "Journal", href: "#diario" },
      { label: "Contact", href: "#contatti" },
    ],
    cta: "Get a quote",
    brandSub: "Wedding Photography",
    mobileFoot: "Atelier Solari — Florence / Positano",
  },
  hero: {
    eyebrow: "Atelier Solari",
    title: ["The ", "perfect", " light for your day"],
    sub: "Wedding photography in Tuscany and the Amalfi Coast. Film, medium format, timeless emotions.",
    meta: [
      { k: "Based in", v: "Tuscany" },
      { k: "Format", v: "Film & digital" },
      { k: "Style", v: "Vintage luxury" },
    ],
    corner: "Wedding photography",
    scroll: "Scroll",
  },
  filosofia: {
    eyebrow: "Our Philosophy",
    title: ["Every love has a unique ", "light", ""],
    par1: "We don't chase the perfect pose. We wait for the moment you forget we're there — and then the magic happens. We shoot with medium format film and digital, because every tool has its soul.",
    par2: "Tuscany with its timeless hills, the Amalfi Coast with light dancing on the sea: these are our favorite sets. But the real subject is you.",
    signature: "Lorenzo Solari",
    signatureSub: "Photographer & Founder",
  },
  stats: [
    { num: "14+", label: "Years of experience" },
    { num: "320+", label: "Weddings" },
    { num: "18", label: "Countries reached" },
    { num: "100%", label: "Happy couples" },
  ],
  gallery: {
    eyebrow: "Portfolio",
    title: ["Our ", "work", ""],
    desc: "Every wedding is a unique love story. Here are some of the couples who chose us.",
    filters: ["All", "Tuscany", "Amalfi Coast", "Film"],
    of: "of",
    close: "Close [Esc]",
  },
  servizi: {
    eyebrow: "Services",
    title: ["Tailor-made ", "plans", ""],
    desc: "Every story deserves its telling. Choose the plan that fits you, or let's build one together.",
    from: "Starting from",
    badge: "Most popular",
    plans: [
      {
        title: "Intimate",
        tagline: "The essentials with artisan care",
        features: [
          "8 hours coverage",
          "1 photographer",
          "50 edited photos",
          "Digital delivery in 30 days",
          "20-page fine-art album",
        ],
        price: "$ 3,200",
      },
      {
        title: "The Real Deal",
        tagline: "Our most requested",
        features: [
          "12 hours coverage",
          "2 photographers",
          "200 edited photos",
          "Digital delivery in 20 days",
          "40-page fine-art album",
          "Medium format film",
          "Boudoir preview",
        ],
        price: "$ 4,900",
      },
      {
        title: "Grand Gala",
        tagline: "Luxury without compromise",
        features: [
          "Weekend coverage (2 days)",
          "2 photographers + assistant",
          "400+ edited photos",
          "Digital delivery in 15 days",
          "60-page luxury album",
          "Medium format film",
          "Boudoir preview",
          "3-min highlight video",
          "Pre-wedding film trial",
        ],
        price: "$ 7,900",
      },
    ],
  },
  testimonianze: {
    eyebrow: "Testimonials",
    title: ["What ", "couples", " say"],
    items: [
      {
        quote: "Lorenzo is not just a photographer: he's a storyteller. Looking at our wedding photos made us cry and laugh as if it were that day all over again.",
        name: "Chiara & Marco",
        location: "Montalcino, Tuscany",
      },
      {
        quote: "Choosing film made every shot a work of art. We've never felt so at ease in front of a lens.",
        name: "Sofia & Alessandro",
        location: "Positano, Amalfi Coast",
      },
      {
        quote: "We were afraid of looking stiff, but Lorenzo guided us with incredible naturalness. The result? Pure emotions, no filters.",
        name: "Giulia & Andrea",
        location: "Florence",
      },
    ],
  },
  diario: {
    eyebrow: "Journal",
    title: ["Stories, guides & ", "inspiration", ""],
    desc: "A multi-voice journal of tips, tales, and behind-the-scenes from the weddings we've photographed.",
    posts: [
      {
        title: "Tuscany Wedding: The Ultimate Guide",
        excerpt: "Everything you need to know to plan a dream wedding among the Tuscan hills.",
        category: "Guides",
      },
      {
        title: "Film vs Digital",
        excerpt: "Why we use both formats and how we leverage each to tell your story.",
        category: "Technique",
      },
      {
        title: "Amalfi Coast: Secret Locations",
        excerpt: "Hidden gems of the Coast that only locals know.",
        category: "Locations",
      },
      {
        title: "Getting Ready: Emotions in Black & White",
        excerpt: "Behind the scenes of Eleonora and Tommaso's wedding between mirrors, laughs, and a few tears.",
        category: "Stories",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: ["Write to us, ", "let's meet", ""],
    desc: "Tell us your story. We'll reply within 24 hours to arrange a no-obligation chat.",
    infoText: "We believe the first step is getting to know each other. A coffee (in person or virtual) to see if we're the right people to tell your most beautiful day.",
    points: [
      { k: "Based in", v: "Florence / Positano" },
      { k: "Email", v: "hello@ateliersolari.it" },
      { k: "Phone", v: "+39 055 123 4567" },
    ],
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "Your email",
      locationLabel: "Wedding Location",
      locationPlaceholder: "E.g. Montalcino, Siena — or I don't know yet",
      dateLabel: "Date (estimated)",
      datePlaceholder: "E.g. Spring 2027",
      budgetLabel: "Estimated Budget",
      venueLabel: "Venue Type",
      horizonLabel: "Planning Timeline",
      messageLabel: "Tell us your story",
      messagePlaceholder: "Tell us about yourselves: how you met, what you dream for your day...",
      privacy: "Your data will be treated confidentially and never shared.",
      submit: "Send inquiry",
    },
    success: {
      title: "Thank you!",
      desc: "We'll reply within 24 hours. Check your inbox (and spam folder — we'd hate to miss each other).",
    },
  },
  closing: {
    quote: ["Perfect light doesn't exist. There's only ", "yours", "."],
    who: "— Atelier Solari",
  },
  footer: {
    desc: "Wedding photography in Tuscany and the Amalfi Coast. Film, medium format, memories that last.",
    col1: {
      title: "Services",
      items: [
        { label: "Plans", href: "#servizi" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Fine-art album", href: "#" },
        { label: "Boudoir", href: "#" },
      ],
    },
    col2: {
      title: "Explore",
      items: [
        { label: "About", href: "#filosofia" },
        { label: "Journal", href: "#diario" },
        { label: "FAQ", href: "#" },
        { label: "Contact", href: "#contatti" },
      ],
    },
    col3: {
      title: "Social",
      items: [
        { label: "Instagram", href: "#" },
        { label: "Pinterest", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
    copyright: "All rights reserved.",
    tagline: "Made with heart in Tuscany",
  },
};

export const DICT: Record<Lang, I18nDict> = { it: IT, en: EN };
