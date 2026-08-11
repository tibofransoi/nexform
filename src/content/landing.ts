import type { PublishedLocale } from '../i18n/config';

type LandingCopy = {
  hero: { title: string; lead: string; primary: string; secondary: string };
  audit: { title: string; copy: string };
  services: { title: string; items: Array<{ title: string; copy: string }> };
  work: { title: string; items: Array<{ image: string; label: string; title: string }> };
  process: { title: string; items: Array<{ title: string; copy: string }> };
  final: { title: string; copy: string; primary: string; secondary: string };
  contact: {
    title: string; copy: string; name: string; email: string; website: string; message: string;
    submit: string; sending: string; success: string; error: string; missing: string;
  };
};

export const landingCopy: Record<PublishedLocale, LandingCopy> = {
  en: {
    hero: {
      title: 'Websites that do their job.',
      lead: 'We design and build clear, fast websites for small businesses. Meta Ads and ongoing support when needed.',
      primary: 'Contact us',
      secondary: 'Find out more',
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
      title: 'Website examples',
      items: [
        { image: '/images/work-architecture.jpg', label: 'Professional services', title: 'Architecture' },
        { image: '/images/work-bakery.jpg', label: 'Hospitality', title: 'Bakery and café' },
        { image: '/images/work-physio.jpg', label: 'Healthcare', title: 'Physiotherapy' },
        { image: '/images/work-construction.jpg', label: 'Building services', title: 'Construction' },
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
    contact: {
      title: 'Contact us', copy: 'Tell us what you need. A short message is enough.', name: 'Name', email: 'Email',
      website: 'Website (optional)', message: 'What can we help with?', submit: 'Send enquiry', sending: 'Sending…',
      success: 'Thanks. We’ll get back to you shortly.', error: 'Something went wrong. Please try again.',
      missing: 'The contact inbox is not connected yet.',
    },
  },
  de: {
    hero: {
      title: 'Websites, die ihren Zweck erfüllen.',
      lead: 'Wir konzipieren und bauen klare, schnelle Websites für kleine Unternehmen. Meta Ads und laufende Betreuung bei Bedarf.',
      primary: 'Kontakt aufnehmen',
      secondary: 'Mehr erfahren',
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
      title: 'Website-Beispiele',
      items: [
        { image: '/images/work-architecture.jpg', label: 'Dienstleistungen', title: 'Architektur' },
        { image: '/images/work-bakery.jpg', label: 'Gastronomie', title: 'Bäckerei und Café' },
        { image: '/images/work-physio.jpg', label: 'Gesundheit', title: 'Physiotherapie' },
        { image: '/images/work-construction.jpg', label: 'Baugewerbe', title: 'Bauunternehmen' },
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
    contact: {
      title: 'Kontakt', copy: 'Beschreiben Sie kurz, was Sie brauchen.', name: 'Name', email: 'E-Mail',
      website: 'Website (optional)', message: 'Wobei können wir helfen?', submit: 'Anfrage senden', sending: 'Wird gesendet…',
      success: 'Vielen Dank. Wir melden uns in Kürze.', error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
      missing: 'Der Kontakt-Posteingang ist noch nicht verbunden.',
    },
  },
  nl: {
    hero: {
      title: 'Websites die doen wat ze moeten doen.',
      lead: 'We ontwerpen en bouwen duidelijke, snelle websites voor kleine bedrijven. Meta Ads en doorlopende ondersteuning waar nodig.',
      primary: 'Neem contact op',
      secondary: 'Meer informatie',
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
      title: 'Websitevoorbeelden',
      items: [
        { image: '/images/work-architecture.jpg', label: 'Zakelijke dienstverlening', title: 'Architectuur' },
        { image: '/images/work-bakery.jpg', label: 'Horeca', title: 'Bakkerij en café' },
        { image: '/images/work-physio.jpg', label: 'Zorg', title: 'Fysiotherapie' },
        { image: '/images/work-construction.jpg', label: 'Bouwdiensten', title: 'Bouwbedrijf' },
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
    contact: {
      title: 'Neem contact op', copy: 'Vertel kort wat je nodig hebt.', name: 'Naam', email: 'E-mail',
      website: 'Website (optioneel)', message: 'Waar kunnen we mee helpen?', submit: 'Aanvraag versturen', sending: 'Versturen…',
      success: 'Bedankt. We nemen snel contact op.', error: 'Er ging iets mis. Probeer het opnieuw.',
      missing: 'De contactinbox is nog niet gekoppeld.',
    },
  },
};
