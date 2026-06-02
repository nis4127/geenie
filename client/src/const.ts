// Geenie Media Styleguide Content Configuration (CH-Rechtschreibung)

export interface LogoAsset {
  name: string;
  role: string;
  usage: string;
  originalUrl: string;
  compressedUrl: string;
  fileName: string;
}

export interface ColorToken {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  usage: string;
  bgClass: string;
  textClass: string;
}

export interface RuleTable {
  headers: string[];
  rows: string[][];
}

export interface StyleguideSection {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  description: string;
  content?: string;
  rules?: RuleTable;
}

export const BRAND_IDENTITY = {
  name: "Geenie Media",
  philosophy: "Tactical Magic",
  philosophyDescription: "Die Marke verbindet die erinnerungsstarke Wunsch- und Geenie-Symbolik mit einer erwachsenen, dunklen, präzisen und systemischen Premium-Ästhetik. Das Design soll nicht verspielt wirken, sondern wie ein operatives Wachstumssystem: klar, schnell, fokussiert und beweisorientiert.",
  toneOfVoice: {
    principles: [
      { title: "No-Bullshit", desc: "Keine Floskeln, keine leeren Superlative, keine Marketing-Nebelkerzen." },
      { title: "Strategisch", desc: "Jede Aussage zeigt Richtung, System oder Entscheidungslogik." },
      { title: "Operativ", desc: "Texte führen zu Handlung, nicht zu Selbstbespiegelung." },
      { title: "Premium", desc: "Ruhige Autorität, klare Struktur, präzise Wortwahl." },
      { title: "Menschlich", desc: "Trotz Dominanz bleibt die Sprache verständlich und nah an Machern." }
    ],
    examples: [
      { situation: "Claim", text: "Aus echter Qualität wird digitale Dominanz." },
      { situation: "CTA", text: "15-Minuten System-Check starten." },
      { situation: "Angebotsintro", text: "Wir bauen kein schönes Marketing. Wir bauen ein System, das Qualität sichtbar macht." },
      { situation: "Case Study", text: "Vorher unsichtbar. Danach klar positioniert, messbar stärker und preisstabiler." },
      { situation: "Verboten", text: "Full-Service 360° Marketinglösungen für alle Kanäle." }
    ]
  }
};

export const LOGO_ASSETS: LogoAsset[] = [
  {
    name: "Primärlogo farbig",
    role: "Master-Logo mit maximaler Markenwirkung",
    usage: "Cover, Hero-Flächen, Key Visuals, prominente Markenmomente",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/Primaerlogo_Farbig-8Bw7f3S4Y7v8aYq2a7A9R.png",
    compressedUrl: "/manus-storage/Primaerlogo_Farbig_173ac888.png",
    fileName: "Primärlogo_Farbig.pdf"
  },
  {
    name: "Primärlogo Light Mode",
    role: "Schwarzes Primärlogo auf hellen Flächen",
    usage: "Rechnungen, Angebote, Briefpapier, helle PDF-Seiten",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/Primaerlogo_schwarzweiss_LightMode-9C7Xq2w7Yv8R3Wq2a9A8X.png",
    compressedUrl: "/manus-storage/Primaerlogo_schwarzweiss_LightMode_c49ecfaf.png",
    fileName: "Primärlogo_schwarzweiss_LightMode.pdf"
  },
  {
    name: "Primärlogo Dark Mode",
    role: "Weisses Primärlogo auf dunklen Flächen",
    usage: "Präsentationen, Videos, Social, Dark-Mode-Webflächen",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/Primaerlogo_weissschwarz_DarkMode-2C8Wq3e7Yv9R4Wq2a7A6X.png",
    compressedUrl: "/manus-storage/Primaerlogo_weissschwarz_DarkMode_d1d34933.png",
    fileName: "Primärlogo_weissschwarz_DarkMode.pdf"
  },
  {
    name: "Sekundärlogo farbig",
    role: "Horizontale Markenlösung",
    usage: "Website-Header, Signaturen, Social-Banner, Querformat-Kommunikation",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/Sekundaerlogo_farbig-3D8Xq2w7Yv8R3Wq2a9A8Y.png",
    compressedUrl: "/manus-storage/Sekundaerlogo_farbig_6629eca6.png",
    fileName: "Sekundärlogo_farbig.pdf"
  },
  {
    name: "Sekundärlogo Light Mode",
    role: "Schwarze horizontale Version",
    usage: "Helle Header, Angebotslayouts, Dokumentfussbereiche",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/Sekundaerlogo_weissschwarz_DarkMode-4C9Wq3e7Yv9R4Wq2a7A6Y.png",
    compressedUrl: "/manus-storage/Sekundaerlogo_weissschwarz_DarkMode_0c260d88.png",
    fileName: "Sekundärlogo_weissschwarz_DarkMode.pdf"
  },
  {
    name: "Sekundärlogo Dark Mode",
    role: "Weisse horizontale Version",
    usage: "Dunkle Header, Video-Endcards, Präsentationsleisten",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/Sekundaerlogo_Geenie_LightMode-5D7Xq2w7Yv8R3Wq2a9A8Z.png",
    compressedUrl: "/manus-storage/Sekundaerlogo_Geenie_LightMode_3a85d978.png",
    fileName: "Sekundärlogo_Geenie_LightMode.pdf"
  },
  {
    name: "Bildsprache-Icon farbig",
    role: "Reduzierter Memory-Code",
    usage: "Kampagnenflächen, Avatar, Thumbnail, Favicon-Ableitung",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/BildspracheIcon_farbig-6D8Xq2w7Yv8R3Wq2a9A8X.png",
    compressedUrl: "/manus-storage/BildspracheIcon_farbig_ddcb4b1f.png",
    fileName: "BildspracheIcon_farbig.pdf"
  },
  {
    name: "Bildsprache-Icon Light Mode",
    role: "Schwarzes Symbol",
    usage: "Kleine helle Flächen, UI-Platzhalter, reduzierte Dokumentzonen",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/BildspracheIcon_schwarzweiss_LightMOde-7C9Wq3e7Yv9R4Wq2a7A6X.png",
    compressedUrl: "/manus-storage/BildspracheIcon_schwarzweiss_LightMOde_5f4b6204.png",
    fileName: "BildspracheIcon_schwarzweiss_LightMOde.pdf"
  },
  {
    name: "Bildsprache-Icon Dark Mode",
    role: "Weisses Symbol",
    usage: "Kleine dunkle Flächen, Video-Wasserzeichen, Dark UI",
    originalUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663702552407/BQZ3mZXWwzZe6WnFsghK6k/BildspracheIcon_weissschwarz_DarkMode-8D7Xq2w7Yv8R3Wq2a9A8Y.png",
    compressedUrl: "/manus-storage/BildspracheIcon_weissschwarz_DarkMode_46b2a613.png",
    fileName: "BildspracheIcon_weissschwarz_DarkMode.pdf"
  }
];

export const COLOR_TOKENS: ColorToken[] = [
  {
    name: "Operator Black",
    role: "Primary Dark",
    hex: "#050505",
    rgb: "5 / 5 / 5",
    cmyk: "0 / 0 / 0 / 98",
    usage: "Dark-Mode-Flächen, Cover, Bühnenmoment",
    bgClass: "bg-[#050505]",
    textClass: "text-[#F6F4EA]"
  },
  {
    name: "Graphite System",
    role: "Surface Dark",
    hex: "#111318",
    rgb: "17 / 19 / 24",
    cmyk: "29 / 21 / 0 / 91",
    usage: "Karten, Module, UI-Flächen",
    bgClass: "bg-[#111318]",
    textClass: "text-[#F6F4EA]"
  },
  {
    name: "Tactical Grey",
    role: "Surface Mid",
    hex: "#242832",
    rgb: "36 / 40 / 50",
    cmyk: "28 / 20 / 0 / 80",
    usage: "Sekundärflächen, Tabellen, Rasterlinien",
    bgClass: "bg-[#242832]",
    textClass: "text-[#F6F4EA]"
  },
  {
    name: "Signal White",
    role: "Text Light",
    hex: "#F6F4EA",
    rgb: "246 / 244 / 234",
    cmyk: "0 / 1 / 5 / 4",
    usage: "Text auf dunklen Flächen",
    bgClass: "bg-[#F6F4EA]",
    textClass: "text-[#050505]"
  },
  {
    name: "Geenie Gold",
    role: "Heritage Accent",
    hex: "#FFD400",
    rgb: "255 / 212 / 0",
    cmyk: "0 / 17 / 100 / 0",
    usage: "Logo-Heritage, Key Marker, Akzente",
    bgClass: "bg-[#FFD400]",
    textClass: "text-[#050505]"
  },
  {
    name: "System Lime",
    role: "Tech Accent",
    hex: "#DEFF9A",
    rgb: "222 / 255 / 154",
    cmyk: "13 / 0 / 40 / 0",
    usage: "CTA, Status, Systemhinweise",
    bgClass: "bg-[#DEFF9A]",
    textClass: "text-[#050505]"
  },
  {
    name: "Deep Interface Blue",
    role: "Trust Blue",
    hex: "#1B6BFF",
    rgb: "27 / 107 / 255",
    cmyk: "89 / 58 / 0 / 0",
    usage: "Digitale Interaktion, Links, UI-Zustände",
    bgClass: "bg-[#1B6BFF]",
    textClass: "text-[#FFFFFF]"
  }
];

export const STYLEGUIDE_SECTIONS: StyleguideSection[] = [
  {
    id: "summary",
    chapter: "01",
    title: "Cover & Management Summary",
    subtitle: "Die Marke als operatives System",
    description: "Dieses digitale Brandbook dient als verbindliches Regelwerk für die visuelle und strategische Führung der Marke Geenie Media. Es definiert alle Richtlinien auf Enterprise-Niveau, um Konsistenz über alle analogen und digitalen Touchpoints hinweg zu garantieren.",
    content: "Geenie Media agiert in einem Marktumfeld, das von stetiger Veränderung geprägt ist. Umso wichtiger ist ein stabiles visuelles Fundament. Die Marke verbindet die erinnerungsstarke Wunsch- und Geenie-Symbolik mit einer erwachsenen, dunklen, präzisen und systemischen Premium-Ästhetik. Wir nennen diesen gestalterischen Ansatz 'Tactical Magic' – die perfekte Symbiose aus strategischer Präzision und kreativer Anziehungskraft."
  },
  {
    id: "strategy",
    chapter: "02",
    title: "Markenstrategie",
    subtitle: "Fundament für nachhaltiges Wachstum",
    description: "Unsere Strategie ist kein theoretisches Konstrukt, sondern ein pragmatischer Leitfaden für die tägliche Arbeit. Wir definieren klare Ziele, Zielgruppen und Positionierungsmerkmale.",
    rules: {
      headers: ["Säule", "Strategischer Fokus", "Operative Umsetzung"],
      rows: [
        ["Mission", "Qualität sichtbar machen", "Wir transformieren unsichtbare Qualität in digitale Dominanz."],
        ["Vision", "Führende System-Agentur", "Die erste Adresse für Enterprise-Markenführung und operatives Wachstum."],
        ["Zielgruppe", "Macher & Entscheider", "Unternehmer, die echten Wert von Marketing-Nebelkerzen unterscheiden können."],
        ["Differenzierung", "Beweisorientiert", "Keine Versprechen ohne Messbarkeit. Daten und Design arbeiten Hand in Hand."]
      ]
    }
  },
  {
    id: "identity",
    chapter: "03",
    title: "Corporate Identity",
    subtitle: "Persönlichkeit und Werte",
    description: "Die Corporate Identity bildet das emotionale und kommunikative Rückgrat von Geenie Media. Sie definiert, wer wir sind, woran wir glauben und wie wir kommunizieren.",
    rules: {
      headers: ["Markenwert", "Bedeutung", "Wirkung nach aussen"],
      rows: [
        ["Souverän", "Wir wissen, was wir tun, und strahlen diese Ruhe aus.", "Erzeugt Vertrauen und vermittelt hohe Kompetenz."],
        ["Präzise", "Keine Fehler, keine halben Sachen. Jedes Detail zählt.", "Sichert Premium-Qualität auf Enterprise-Niveau."],
        ["Mutig", "Wir gehen neue Wege und brechen veraltete Denkmuster.", "Hebt uns und unsere Kunden vom Wettbewerb ab."],
        ["Nahbar", "Trotz aller Professionalität bleiben wir auf Augenhöhe.", "Erleichtert die Zusammenarbeit und schafft echte Partnerschaften."]
      ]
    }
  },
  {
    id: "logo-rules",
    chapter: "05",
    title: "Logo Usage & Brand Application",
    subtitle: "Verbindliche Anwendungsregeln",
    description: "Um die Markenwirkung nicht zu schwächen, gelten für den Einsatz aller Logo-Varianten strenge Kontrast- und Hintergrundregeln. Jede Anwendung muss sich an der Systematik orientieren.",
    rules: {
      headers: ["Hintergrund", "Zulässige Logos", "Regel"],
      rows: [
        ["Heller Grund", "Schwarze Light-Mode-Versionen", "Das Logo muss klar und ohne Kontur sichtbar bleiben."],
        ["Dunkler Grund", "Weisse Dark-Mode-Versionen", "Weisse Logos dürfen nur auf ruhigen, dunklen Flächen stehen."],
        ["Geenie Gold", "Schwarze Versionen", "Gold dient als Heritage- und Markenfläche, nicht als Deko."],
        ["Signal Lime", "Schwarze reduzierte Versionen", "Lime wird für CTA und Status genutzt, nicht als Logo-Fläche."],
        ["Bildflächen", "Nur mit ruhiger Overlay-Zone", "Das Logo darf nie direkt auf unruhigen Bildbereichen liegen."]
      ]
    }
  },
  {
    id: "typography",
    chapter: "07",
    title: "Typografie",
    subtitle: "Schriftsystem und Hierarchien",
    description: "Die Typografie von Geenie Media vermittelt Systematik und gestalterischen Anspruch. Durch klare Kontraste und feste Hierarchien sichern wir die Lesbarkeit über alle Medien.",
    rules: {
      headers: ["Ebene", "Schriftfamilie", "Gewicht", "Einsatzbereich"],
      rows: [
        ["Display", "Space Grotesk", "Bold / ExtraBold (700-800)", "Cover, grosse Claims, Sektionstitel"],
        ["Headline", "Space Grotesk", "SemiBold (600)", "Abschnittstitel, Modulüberschriften"],
        ["Body", "Inter", "Regular / Medium (400-500)", "Fliesstext, Tabellen, Dokumente"],
        ["Mono / Data", "JetBrains Mono", "Regular / Medium (400-500)", "Kennzahlen, technische Labels, Raster"]
      ]
    }
  },
  {
    id: "documents",
    chapter: "09",
    title: "Dokument- & PDF-System",
    subtitle: "Geschäftsdokumente als Premium-Beweis",
    description: "Jedes Dokument, das Geenie Media verlässt, ist eine Visitenkarte der Marke. Daher folgen Rechnungen, Angebote und Berichte einem klaren, unumstösslichen Layoutraster.",
    rules: {
      headers: ["Baustein", "Layout-Regel", "Visuelle Umsetzung"],
      rows: [
        ["Coverseiten", "Starke Dark-Mode-Fläche", "Tiefes Navy mit grossem Logo und minimalem Begleittext."],
        ["Briefkopf", "Sekundärlogo linksbündig", "Klare Absenderzeile, strukturierte Metadaten auf Signal White."],
        ["Tabellen", "Hoher Kontrast, reduzierte Linien", "Header in Graphite System, Werte klar strukturiert."],
        ["Infoboxen", "Farbliche Codierung je nach Inhalt", "System Lime für operative Hinweise, Gold für Markenprinzipien."]
      ]
    }
  }
];
