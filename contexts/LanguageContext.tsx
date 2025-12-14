import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav: {
      home: "Home",
      logistics: "Logistics",
      products: "Products",
      contact: "Contact",
      inquire: "Inquire"
    },
    footer: {
      description: "German excellence in warehousing, transshipment, and premium architectural surfaces. Bringing luxury materials to your doorstep with industrial precision.",
      collections: "Collections",
      contact: "Contact",
      rights: "© 2024 Plustation GmbH. All rights reserved.",
      privacy: "Privacy",
      imprint: "Imprint"
    },
    home: {
      est: "Est. Germany",
      heroTitlePrefix: "Premium",
      heroTitleMiddle: "Logistics &",
      heroTitleSuffix: "Surfaces",
      heroSubtitle: "Redefining industrial elegance. We bridge the gap between heavy logistics and exquisite architectural finishes.",
      viewCollection: "View Collection",
      servicesBtn: "Our Services",
      featuredProduct: "FEATURED PRODUCT",
      featuredDesc: "Black walnut technology wood veneer composite with brushed copper inlays.",
      scroll: "Scroll",
      collectionTitle: "The Ink Art Collection",
      archElements: "Architectural Elements",
      entryDoors: "Entry Doors",
      internalSurfaces: "Internal Surfaces",
      flooring: "Flooring",
      servicesTitlePrefix: "Precision in",
      servicesTitleSuffix: "Every Movement",
      servicesText: "Plustation GmbH operates at the intersection of luxury goods and industrial logistics. We understand that high-value architectural surfaces require more than just transport—they demand stewardship.",
      competencies: "Core Competencies",
      warehousing: "Warehousing",
      warehousingDesc: "Secure, climate-controlled storage solutions for sensitive materials.",
      transshipment: "Transshipment",
      transshipmentDesc: "Efficient European hub logistics and distribution management.",
      consulting: "Consulting",
      consultingDesc: "Expert advice on material selection and architectural integration.",
      qualityControl: "Quality Control",
      qualityControlDesc: "Rigorous inspection standards for all incoming and outgoing goods.",
      handling: "Specialized Handling for Large Formats",
      jit: "Just-in-Time Delivery for Construction Sites",
      global: "Global Sourcing Network",
      exploreLogistics: "Explore Logistics Solutions",
      quote: "\"The door is not merely an entrance, but the first chapter of a home's story. We craft the opening lines.\""
    },
    products: {
      archCollection: "Architectural Collection",
      titlePrefix: "Refining Space",
      titleSuffix: "Through",
      titleHighlight: "Materiality",
      description: "Discover our exclusive selection of luxury doors, premium flooring, and architectural finishes. Designed for the sophisticated modern interior.",
      catalogPdf: "Catalog PDF",
      filterView: "Filter View",
      showing: "Showing {count} Results",
      viewDetails: "View Details",
      newArrival: "New Arrival",
      exploreMaterials: "Explore Materials",
      loadMore: "Load More Collection",
      stayInformed: "Stay Informed",
      newsletterTitle: "Architectural Excellence Delivered to Your Inbox",
      subscribe: "Subscribe",
      noProducts: "No products found in this collection.",
      emailPlaceholder: "Email Address",
      categories: {
        all: "All Collections",
        entrance: "Entrance Systems",
        interior: "Interior Surfaces",
        hardware: "Hardware",
        lighting: "Lighting Accents"
      }
    },
    logistics: {
      heroTitle: "Global Logistics Network",
      heroSubtitle: "Precision supply chain management designed for high-value architectural surfaces and industrial goods.",
      capabilitiesTitle: "Operational Capabilities",
      warehousingTitle: "Premium Warehousing",
      warehousingDesc: "20,000+ sqm of secure, climate-controlled storage in Gelsenkirchen. Specialized racking for oversized slabs and delicate veneers.",
      transportTitle: "Multimodal Transport",
      transportDesc: "Integrated sea, rail, and road freight solutions connecting Asia manufacturing hubs with European markets.",
      customsTitle: "Customs Clearance",
      customsDesc: "Full-service customs brokerage handling complex import regulations, duties, and fiscal representation.",
      distributionTitle: "Site Delivery",
      distributionDesc: "Just-in-time delivery coordination directly to construction sites, minimizing on-site storage risks.",
      statsTitle: "Performance by the Numbers",
      stat1Label: "Containers / Year",
      stat2Label: "Storage Capacity",
      stat3Label: "On-Time Delivery",
      ctaTitle: "Ready to optimize your supply chain?",
      ctaButton: "Get a Quote"
    },
    contact: {
      getInTouch: "Get in Touch",
      titlePrefix: "Let's build something",
      titleSuffix: "extraordinary.",
      subtitle: "Whether you are interested in our luxury doors, flooring solutions, or logistics services, our team is ready to assist you.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Your Message",
      sendMessage: "Send Message",
      headquarters: "Headquarters",
      openHours: "Open today: 09:00 - 18:00",
      legalInfo: "Legal Information",
      managingDirector: "Managing Director",
      subjects: {
        general: "General Inquiry",
        doors: "Doors & Windows",
        flooring: "Flooring Materials",
        logistics: "Logistics & Warehousing"
      }
    }
  },
  de: {
    nav: {
      home: "Startseite",
      logistics: "Logistik",
      products: "Produkte",
      contact: "Kontakt",
      inquire: "Anfragen"
    },
    footer: {
      description: "Deutsche Exzellenz in Lagerung, Umschlag und hochwertigen Architekturoberflächen. Wir bringen Luxusmaterialien mit industrieller Präzision zu Ihnen.",
      collections: "Kollektionen",
      contact: "Kontakt",
      rights: "© 2024 Plustation GmbH. Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      imprint: "Impressum"
    },
    home: {
      est: "Gegr. Deutschland",
      heroTitlePrefix: "Premium",
      heroTitleMiddle: "Logistik &",
      heroTitleSuffix: "Oberflächen",
      heroSubtitle: "Industrielle Eleganz neu definiert. Wir schlagen die Brücke zwischen Schwerlogistik und exquisiten Architekturoberflächen.",
      viewCollection: "Kollektion ansehen",
      servicesBtn: "Unsere Leistungen",
      featuredProduct: "PRODUKT HIGHLIGHT",
      featuredDesc: "Schwarznuss-Technologiefurnier mit gebürsteten Kupfereinlagen.",
      scroll: "Scrollen",
      collectionTitle: "Die Ink Art Kollektion",
      archElements: "Architektonische Elemente",
      entryDoors: "Eingangstüren",
      internalSurfaces: "Innenoberflächen",
      flooring: "Bodenbeläge",
      servicesTitlePrefix: "Präzision in",
      servicesTitleSuffix: "jeder Bewegung",
      servicesText: "Die Plustation GmbH agiert an der Schnittstelle von Luxusgütern und Industrielogistik. Wir verstehen, dass hochwertige Architekturoberflächen mehr als nur Transport erfordern – sie verlangen Verantwortung.",
      competencies: "Kernkompetenzen",
      warehousing: "Lagerung",
      warehousingDesc: "Sichere, klimatisierte Lagerlösungen für empfindliche Materialien.",
      transshipment: "Umschlag",
      transshipmentDesc: "Effiziente europäische Hub-Logistik und Distributionsmanagement.",
      consulting: "Beratung",
      consultingDesc: "Expertenrat zu Materialauswahl und architektonischer Integration.",
      qualityControl: "Qualitätskontrolle",
      qualityControlDesc: "Strenge Inspektionsstandards für alle eingehenden und ausgehenden Waren.",
      handling: "Spezialisiertes Handling für Großformate",
      jit: "Just-in-Time Lieferung für Baustellen",
      global: "Globales Beschaffungsnetzwerk",
      exploreLogistics: "Logistiklösungen erkunden",
      quote: "\"Die Tür ist nicht bloß ein Eingang, sondern das erste Kapitel der Geschichte eines Hauses. Wir schreiben die ersten Zeilen.\""
    },
    products: {
      archCollection: "Architektur Kollektion",
      titlePrefix: "Raumveredelung",
      titleSuffix: "durch",
      titleHighlight: "Materialität",
      description: "Entdecken Sie unsere exklusive Auswahl an Luxustüren, Premium-Bodenbelägen und Architekturoberflächen. Entworfen für das anspruchsvolle moderne Interieur.",
      catalogPdf: "Katalog PDF",
      filterView: "Filteransicht",
      showing: "Zeige {count} Ergebnisse",
      viewDetails: "Details ansehen",
      newArrival: "Neuheit",
      exploreMaterials: "Materialien erkunden",
      loadMore: "Mehr laden",
      stayInformed: "Bleiben Sie informiert",
      newsletterTitle: "Architektonische Exzellenz in Ihrem Posteingang",
      subscribe: "Abonnieren",
      noProducts: "Keine Produkte in dieser Kollektion gefunden.",
      emailPlaceholder: "E-Mail Adresse",
      categories: {
        all: "Alle Kollektionen",
        entrance: "Eingangssysteme",
        interior: "Innenoberflächen",
        hardware: "Beschläge",
        lighting: "Lichtakzente"
      }
    },
    logistics: {
      heroTitle: "Globales Logistiknetzwerk",
      heroSubtitle: "Präzises Supply-Chain-Management für hochwertige Architekturoberflächen und Industriegüter.",
      capabilitiesTitle: "Operative Fähigkeiten",
      warehousingTitle: "Premium Lagerung",
      warehousingDesc: "Über 20.000 m² sichere, klimatisierte Lagerfläche in Gelsenkirchen. Spezialregale für übergroße Platten und empfindliche Furniere.",
      transportTitle: "Multimodaler Transport",
      transportDesc: "Integrierte See-, Bahn- und Straßenfrachtlösungen, die asiatische Fertigungszentren mit europäischen Märkten verbinden.",
      customsTitle: "Zollabfertigung",
      customsDesc: "Full-Service-Zollabwicklung für komplexe Importvorschriften, Zölle und fiskalische Vertretung.",
      distributionTitle: "Baustellenlieferung",
      distributionDesc: "Just-in-Time-Lieferkoordination direkt zur Baustelle zur Minimierung von Lagerrisiken vor Ort.",
      statsTitle: "Leistung in Zahlen",
      stat1Label: "Container / Jahr",
      stat2Label: "Lagerkapazität",
      stat3Label: "Pünktliche Lieferung",
      ctaTitle: "Bereit, Ihre Lieferkette zu optimieren?",
      ctaButton: "Angebot anfordern"
    },
    contact: {
      getInTouch: "Kontakt aufnehmen",
      titlePrefix: "Lassen Sie uns etwas",
      titleSuffix: "Außergewöhnliches bauen.",
      subtitle: "Ob Sie sich für unsere Luxustüren, Bodenbeläge oder Logistikdienstleistungen interessieren, unser Team steht bereit.",
      nameLabel: "Ihr Name",
      emailLabel: "E-Mail Adresse",
      subjectLabel: "Betreff",
      messageLabel: "Ihre Nachricht",
      sendMessage: "Nachricht senden",
      headquarters: "Hauptsitz",
      openHours: "Heute geöffnet: 09:00 - 18:00",
      legalInfo: "Rechtliche Informationen",
      managingDirector: "Geschäftsführer",
      subjects: {
        general: "Allgemeine Anfrage",
        doors: "Türen & Fenster",
        flooring: "Bodenmaterialien",
        logistics: "Logistik & Lagerung"
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; 
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
