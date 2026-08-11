import type { PublishedLocale } from '../i18n/config';

type LandingCopy = {
  hero: { title: string; lead: string; primary: string; secondary: string };
  audit: { title: string; copy: string };
  services: { title: string; items: Array<{ title: string; copy: string }> };
  work: {
    title: string;
    items: Array<{ type: 'site' | 'campaign'; label: string; title: string; copy: string }>;
  };
  process: { title: string; items: Array<{ title: string; copy: string }> };
  final: { title: string; copy: string; primary: string; secondary: string };
};

export const landingCopy: Record<PublishedLocale, LandingCopy> = {
  en: {
    hero: {
      title: 'Websites that do their job.',
      lead: 'We design and build clear, fast websites for small businesses. Meta Ads and ongoing support when needed.',
      primary: 'View our work',
      secondary: 'Check my website',
    },
    audit: { title: 'Want a second opinion?', copy: 'Send your website. We’ll review it and reply with the main issues.' },
    services: {
      title: 'What we do',
      items: [
        { title: 'Website design and build', copy: 'Strategy, copy, design and development in one project.' },
        { title: 'Website care', copy: 'Hosting, updates and practical improvements after launch.' },
        { title: 'Meta Ads', copy: 'Campaign setup, creative and ongoing management.' },
      ],
    },
    work: {
      title: 'Selected work',
      items: [
        { type: 'site', label: 'Website', title: 'Nexform', copy: 'Positioning, copy, design and multilingual build.' },
        { type: 'campaign', label: 'Confidential project', title: 'Childcare campaign', copy: 'Campaign structure, creative direction and landing flow.' },
      ],
    },
    process: {
      title: 'How we work',
      items: [
        { title: 'Scope', copy: 'We agree on the goal, pages and deliverables.' },
        { title: 'Design and build', copy: 'You review clear working versions as we go.' },
        { title: 'Launch and improve', copy: 'We launch, measure and handle what comes next.' },
      ],
    },
    final: {
      title: 'Have a project in mind?',
      copy: 'Send us your website or a short brief. We’ll suggest a practical next step.',
      primary: 'Check my website',
      secondary: 'View our work',
    },
  },
  de: {
    hero: {
      title: 'Websites, die ihren Zweck erfüllen.',
      lead: 'Wir konzipieren und bauen klare, schnelle Websites für kleine Unternehmen. Meta Ads und laufende Betreuung bei Bedarf.',
      primary: 'Arbeiten ansehen',
      secondary: 'Website prüfen lassen',
    },
    audit: { title: 'Eine zweite Meinung?', copy: 'Senden Sie uns Ihre Website. Wir prüfen sie und nennen die wichtigsten Punkte.' },
    services: {
      title: 'Was wir machen',
      items: [
        { title: 'Webdesign und Entwicklung', copy: 'Strategie, Texte, Design und Entwicklung aus einer Hand.' },
        { title: 'Website-Betreuung', copy: 'Hosting, Updates und sinnvolle Verbesserungen nach dem Launch.' },
        { title: 'Meta Ads', copy: 'Kampagnen-Setup, Creatives und laufende Betreuung.' },
      ],
    },
    work: {
      title: 'Ausgewählte Arbeiten',
      items: [
        { type: 'site', label: 'Website', title: 'Nexform', copy: 'Positionierung, Texte, Design und mehrsprachige Umsetzung.' },
        { type: 'campaign', label: 'Vertrauliches Projekt', title: 'Kita-Kampagne', copy: 'Kampagnenstruktur, Creative Direction und Landing-Flow.' },
      ],
    },
    process: {
      title: 'So arbeiten wir',
      items: [
        { title: 'Umfang', copy: 'Wir klären Ziel, Seiten und Ergebnisse.' },
        { title: 'Design und Umsetzung', copy: 'Sie prüfen laufend konkrete Arbeitsstände.' },
        { title: 'Launch und Weiterentwicklung', copy: 'Wir veröffentlichen, messen und betreuen die nächsten Schritte.' },
      ],
    },
    final: {
      title: 'Ein Projekt im Kopf?',
      copy: 'Senden Sie uns Ihre Website oder ein kurzes Briefing. Wir schlagen den nächsten sinnvollen Schritt vor.',
      primary: 'Website prüfen lassen',
      secondary: 'Arbeiten ansehen',
    },
  },
  nl: {
    hero: {
      title: 'Websites die doen wat ze moeten doen.',
      lead: 'We ontwerpen en bouwen duidelijke, snelle websites voor kleine bedrijven. Meta Ads en doorlopende ondersteuning waar nodig.',
      primary: 'Bekijk ons werk',
      secondary: 'Laat mijn website checken',
    },
    audit: { title: 'Een tweede mening?', copy: 'Stuur je website. We bekijken hem en noemen de belangrijkste punten.' },
    services: {
      title: 'Wat we doen',
      items: [
        { title: 'Websiteontwerp en bouw', copy: 'Strategie, tekst, ontwerp en ontwikkeling in één project.' },
        { title: 'Websitebeheer', copy: 'Hosting, updates en praktische verbeteringen na de livegang.' },
        { title: 'Meta Ads', copy: 'Campagne-opzet, creatie en doorlopend beheer.' },
      ],
    },
    work: {
      title: 'Geselecteerd werk',
      items: [
        { type: 'site', label: 'Website', title: 'Nexform', copy: 'Positionering, tekst, ontwerp en meertalige bouw.' },
        { type: 'campaign', label: 'Vertrouwelijk project', title: 'Kinderopvangcampagne', copy: 'Campagnestructuur, creatieve richting en landingsflow.' },
      ],
    },
    process: {
      title: 'Hoe we werken',
      items: [
        { title: 'Afbakening', copy: 'We spreken doel, pagina’s en oplevering af.' },
        { title: 'Ontwerp en bouw', copy: 'Je beoordeelt onderweg concrete werkversies.' },
        { title: 'Livegang en verbetering', copy: 'We lanceren, meten en pakken de volgende stappen op.' },
      ],
    },
    final: {
      title: 'Een project in gedachten?',
      copy: 'Stuur je website of een korte briefing. We stellen een praktische volgende stap voor.',
      primary: 'Laat mijn website checken',
      secondary: 'Bekijk ons werk',
    },
  },
};
