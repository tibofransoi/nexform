import type { PublishedLocale } from '../i18n/config';

type LandingCopy = {
  hero: { title: string; lead: string; primary: string; secondary: string };
  audit: { title: string; copy: string };
  services: { title: string; items: Array<{ title: string; copy: string }> };
  work: { title: string; items: Array<{ slug: string; image: string; label: string; title: string }> };
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
        { slug: 'architecture', image: '/images/work-architecture.jpg', label: 'Live demo · Professional services', title: 'Architecture' },
        { slug: 'bakery', image: '/images/work-bakery.jpg', label: 'Live demo · Hospitality', title: 'Bakery and café' },
        { slug: 'physio', image: '/images/work-physio.jpg', label: 'Live demo · Healthcare', title: 'Physiotherapy' },
        { slug: 'construction', image: '/images/work-construction.jpg', label: 'Live demo · Building services', title: 'Construction' },
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
        { slug: 'architecture', image: '/images/work-architecture.jpg', label: 'Live-Demo · Dienstleistungen', title: 'Architektur' },
        { slug: 'bakery', image: '/images/work-bakery.jpg', label: 'Live-Demo · Gastronomie', title: 'Bäckerei und Café' },
        { slug: 'physio', image: '/images/work-physio.jpg', label: 'Live-Demo · Gesundheit', title: 'Physiotherapie' },
        { slug: 'construction', image: '/images/work-construction.jpg', label: 'Live-Demo · Baugewerbe', title: 'Bauunternehmen' },
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
        { slug: 'architecture', image: '/images/work-architecture.jpg', label: 'Live demo · Zakelijke diensten', title: 'Architectuur' },
        { slug: 'bakery', image: '/images/work-bakery.jpg', label: 'Live demo · Horeca', title: 'Bakkerij en café' },
        { slug: 'physio', image: '/images/work-physio.jpg', label: 'Live demo · Zorg', title: 'Fysiotherapie' },
        { slug: 'construction', image: '/images/work-construction.jpg', label: 'Live demo · Bouwdiensten', title: 'Bouwbedrijf' },
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
  fr: {
    hero: {
      title: 'Des sites web qui font leur travail.',
      lead: 'Nous concevons des sites clairs et rapides pour les petites entreprises. Meta Ads et suivi continu si nécessaire.',
      primary: 'Nous contacter',
      secondary: 'En savoir plus',
    },
    audit: { title: 'Besoin d’un second avis ?', copy: 'Envoyez votre site. Nous l’examinerons et vous indiquerons les principaux points à corriger.' },
    services: {
      title: 'Ce que nous faisons',
      items: [
        { title: 'Conception et création de site', copy: 'Stratégie, textes, design et développement dans un seul projet.' },
        { title: 'Suivi du site', copy: 'Hébergement, mises à jour et améliorations utiles après la mise en ligne.' },
        { title: 'Meta Ads', copy: 'Mise en place, créations publicitaires et gestion continue des campagnes.' },
      ],
    },
    work: {
      title: 'Exemples de sites',
      items: [
        { slug: 'architecture', image: '/images/work-architecture.jpg', label: 'Démo en ligne · Services professionnels', title: 'Architecture' },
        { slug: 'bakery', image: '/images/work-bakery.jpg', label: 'Démo en ligne · Restauration', title: 'Boulangerie et café' },
        { slug: 'physio', image: '/images/work-physio.jpg', label: 'Démo en ligne · Santé', title: 'Kinésithérapie' },
        { slug: 'construction', image: '/images/work-construction.jpg', label: 'Démo en ligne · Bâtiment', title: 'Construction' },
      ],
    },
    process: {
      title: 'Notre méthode',
      items: [
        { title: 'Cadrage', copy: 'Nous définissons l’objectif, les pages et les livrables.' },
        { title: 'Design et développement', copy: 'Vous validez des versions concrètes au fil du projet.' },
        { title: 'Mise en ligne et amélioration', copy: 'Nous publions, mesurons et gérons les étapes suivantes.' },
      ],
    },
    final: {
      title: 'Vous avez un projet ?',
      copy: 'Envoyez-nous votre site ou un court brief. Nous vous proposerons une prochaine étape concrète.',
      primary: 'Analyser mon site',
      secondary: 'Voir les exemples',
    },
    contact: {
      title: 'Nous contacter', copy: 'Expliquez-nous brièvement ce dont vous avez besoin.', name: 'Nom', email: 'E-mail',
      website: 'Site web (facultatif)', message: 'Comment pouvons-nous vous aider ?', submit: 'Envoyer la demande', sending: 'Envoi…',
      success: 'Merci. Nous reviendrons vers vous rapidement.', error: 'Une erreur est survenue. Veuillez réessayer.',
      missing: 'La boîte de réception du formulaire n’est pas encore connectée.',
    },
  },
};
