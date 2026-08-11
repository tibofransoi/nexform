import type { PageKey, PublishedLocale } from '../i18n/config';

type Service = {
  number: string;
  title: string;
  summary: string;
  detail: string;
  outcome: string;
};

type Content = {
  langName: string;
  skip: string;
  nav: Record<'work' | 'services' | 'method', string>;
  cta: { audit: string; booking: string; whatsapp: string; unavailable: string };
  seo: Record<PageKey, { title: string; description: string }>;
  hero: {
    eyebrow: string;
    lines: string[];
    lead: string;
    promise: string;
    coverage: string;
    checks: string[];
  };
  form: {
    urlLabel: string;
    nameLabel: string;
    emailLabel: string;
    continue: string;
    submit: string;
    edit: string;
    statuses: string[];
    invalidUrl: string;
    invalidName: string;
    invalidEmail: string;
    missingEndpoint: string;
    networkError: string;
    successTitle: string;
    successCopy: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    items: { value: string; suffix?: string; label: string; verified: boolean }[];
    note: string;
  };
  tension: {
    eyebrow: string;
    title: string;
    cheapTitle: string;
    cheapCopy: string;
    slowTitle: string;
    slowCopy: string;
    routeTitle: string;
    routeCopy: string;
  };
  servicesIntro: { eyebrow: string; title: string; copy: string };
  services: Service[];
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    studioTitle: string;
    studioTag: string;
    studioCopy: string;
    studioPoints: string[];
    childcareTitle: string;
    childcareTag: string;
    childcareCopy: string;
    confidential: string;
  };
  loop: {
    eyebrow: string;
    title: string;
    copy: string;
    steps: { title: string; copy: string }[];
  };
  markets: {
    eyebrow: string;
    title: string;
    copy: string;
    items: { code: string; title: string; copy: string }[];
  };
  final: { eyebrow: string; title: string; copy: string };
  servicesPage: {
    eyebrow: string;
    title: string;
    intro: string;
    includedTitle: string;
    included: string[];
    pricingTitle: string;
    pricingCopy: string;
  };
  workPage: {
    eyebrow: string;
    title: string;
    intro: string;
    proofTitle: string;
    proofCopy: string;
    permissionTitle: string;
    permissionCopy: string;
  };
  methodPage: {
    eyebrow: string;
    title: string;
    intro: string;
    phases: { number: string; title: string; copy: string }[];
    aiTitle: string;
    aiCopy: string;
  };
  privacy: { title: string; intro: string; sections: { title: string; copy: string }[] };
  legal: { title: string; intro: string; rows: { label: string; value: string }[] };
  footer: { claim: string; location: string; privacy: string; legal: string; todo: string };
};

const en: Content = {
  langName: 'English',
  skip: 'Skip to content',
  nav: { work: 'Work', services: 'Services', method: 'Method' },
  cta: {
    audit: 'Check my website',
    booking: 'Book a short intro',
    whatsapp: 'WhatsApp us',
    unavailable: 'Available after contact details are confirmed',
  },
  seo: {
    home: {
      title: 'Conversion-Ready Web Design for SMEs | Nexform',
      description: 'Conversion-ready web design, written in your customers’ language and delivered at small-business speed. Get a free website check.',
    },
    services: {
      title: 'Websites, Care Plans & Meta Ads | Nexform',
      description: 'One studio for multilingual websites, local SEO, ongoing care and Meta Ads. Start with a free personal website check.',
    },
    work: {
      title: 'Website & Meta Ads Work | Nexform',
      description: 'See how Nexform connects fast websites, native-language copy and hands-on Meta Ads craft for small businesses.',
    },
    method: {
      title: 'A Faster Agency-Grade Web Process | Nexform',
      description: 'A clear, AI-leveraged production process for premium small-business websites—without a three-month agency timeline.',
    },
    privacy: {
      title: 'Privacy | Nexform',
      description: 'How Nexform handles website-check submissions, analytics and personal information. Registration details remain pending.',
    },
    legal: {
      title: 'Company Details | Nexform',
      description: 'Nexform company and contact information. Registration details will be completed before commercial launch.',
    },
  },
  hero: {
    eyebrow: 'Websites + Meta Ads · built for small business',
    lines: ['Your website', 'shouldn’t make', 'you look small.'],
    lead: 'Nexform builds conversion-ready websites and ad funnels for small businesses—in your market’s language, in days rather than months.',
    promise: 'A personal teardown in your inbox within 24 hours. No pitch deck attached.',
    coverage: 'Your check covers',
    checks: ['Speed', 'Mobile', 'Findability', 'Conversion'],
  },
  form: {
    urlLabel: 'Your website URL',
    nameLabel: 'Your name',
    emailLabel: 'Work email',
    continue: 'Start the check',
    submit: 'Send for review',
    edit: 'Change URL',
    statuses: ['Scanning…', 'Checking speed…', 'Analyzing mobile…'],
    invalidUrl: 'Enter a complete website address, such as yourwebsite.com.',
    invalidName: 'Tell us who should receive the audit.',
    invalidEmail: 'Enter an email address we can send the audit to.',
    missingEndpoint: 'The audit inbox is not connected yet. Please use the booking option for now.',
    networkError: 'The request did not reach us. Check your connection and try once more.',
    successTitle: 'Your site is in the queue.',
    successCopy: 'We’ll review it personally and send the audit within 24 hours.',
  },
  proof: {
    eyebrow: 'Verified proof ledger',
    title: 'Only numbers we can stand behind.',
    items: [
      { value: '0', label: 'projects — awaiting verified total', verified: false },
      { value: '0', suffix: 's', label: 'average load time — awaiting measurement', verified: false },
      { value: '4', label: 'client languages', verified: true },
    ],
    note: 'We publish project and performance figures only when the source can be checked.',
  },
  tension: {
    eyebrow: 'The gap we built Nexform for',
    title: 'Too polished to be a template. Too practical to be agency theatre.',
    cheapTitle: 'Cheap and forgettable',
    cheapCopy: 'A template gets pages online. It rarely makes a local business look like the obvious choice.',
    slowTitle: 'Impressive and immobilising',
    slowCopy: 'Traditional agency layers can turn a focused website into a three-month process and an €8–15k decision.',
    routeTitle: 'The Nexform route',
    routeCopy: 'A focused team, AI-leveraged production and performance-marketing judgement: the finish of an agency build at small-business speed.',
  },
  servicesIntro: {
    eyebrow: 'From first diagnosis to repeat demand',
    title: 'One loop. No hand-offs into the void.',
    copy: 'Start with evidence. Build what matters. Keep it sharp. Then send the right people to it.',
  },
  services: [
    { number: '01', title: 'Free Website Check', summary: 'A personal teardown, not an automated score.', detail: 'We review speed, mobile usability, findability and the moments where potential customers drop away.', outcome: 'You get a prioritised list of what is costing attention and enquiries.' },
    { number: '02', title: 'Website creation', summary: 'A premium site built around the next customer action.', detail: 'Strategy, market-native copy, design, static development, local SEO foundations, legal-page structure and handover.', outcome: 'Launch timing and fixed price will be published once confirmed.' },
    { number: '03', title: 'Care Plan', summary: 'The site stays fast, current and useful after launch.', detail: 'Hosting, updates, small changes and a monthly report written for an owner—not an analytics department.', outcome: 'Monthly scope and pricing remain to be confirmed.' },
    { number: '04', title: 'Social & Meta Ads', summary: 'Campaigns and landing pages designed as one system.', detail: 'We create, run and improve campaigns ourselves, so site decisions are informed by what people actually click and buy.', outcome: 'Management pricing and ad-budget terms remain to be confirmed.' },
  ],
  work: {
    eyebrow: 'Selected evidence',
    title: 'The work carries the trust.',
    intro: 'No borrowed logos, invented awards or anonymous five-star quotes. Until permissions and figures are documented, we show only what can be substantiated.',
    studioTitle: 'Nexform’s own launch system',
    studioTag: 'Multilingual web platform · Nexform',
    studioCopy: 'This site is the first public proof of the system: native market routes, a performance budget, a real conversion path and an interaction standard documented before build.',
    studioPoints: ['EN, DE and NL market editions', 'Static Astro delivery', 'Motion with a full reduced-motion path'],
    childcareTitle: 'A childcare provider',
    childcareTag: 'Meta Ads · identity withheld',
    childcareCopy: 'Nexform has run Meta advertising for a childcare company. The client name, creative and performance figures stay private until written publication permission is received.',
    confidential: 'Results pending publication permission',
  },
  loop: {
    eyebrow: 'The conversion loop',
    title: 'The campaign teaches the site. The site improves the campaign.',
    copy: 'When one team owns the path from first click to enquiry, the learning does not disappear between suppliers.',
    steps: [
      { title: 'Check', copy: 'Find the friction before prescribing a redesign.' },
      { title: 'Build', copy: 'Create the shortest credible route to action.' },
      { title: 'Learn', copy: 'Use campaign and enquiry signals, not opinions.' },
      { title: 'Improve', copy: 'Turn the useful signals into the next iteration.' },
    ],
  },
  markets: {
    eyebrow: 'No translation layer',
    title: 'Written where your customers are standing.',
    copy: 'The argument changes with the language. German copy leads with process confidence; Dutch copy says directly what the customer gets.',
    items: [
      { code: 'DE', title: 'Deutsch', copy: 'Clear scope, dependable process and evidence before adjectives.' },
      { code: 'NL', title: 'Nederlands', copy: 'Direct language, short lines and no inflated agency promises.' },
      { code: 'EN', title: 'English', copy: 'Plain English without imported agency jargon.' },
      { code: 'FR', title: 'Français', copy: 'Clear French copy written for a direct, professional presentation.' },
    ],
  },
  final: {
    eyebrow: 'Start with the evidence',
    title: 'Give us the URL. We’ll show you what it is costing you.',
    copy: 'No obligation and no automated grade dressed up as consulting. A person reviews the site and sends the useful part first.',
  },
  servicesPage: {
    eyebrow: 'Nexform services',
    title: 'A website is not the finish line. It is where demand lands.',
    intro: 'The offer follows the actual customer journey: diagnose the weak points, rebuild the path, keep it healthy and bring qualified attention to it.',
    includedTitle: 'Every website build is designed to include',
    included: ['Market-specific copy direction', 'Responsive design and static Astro development', 'Local SEO foundations and structured data', 'Privacy and legal-page structure', 'Performance, accessibility and interaction QA', 'A handover an owner can understand'],
    pricingTitle: 'Fixed scope, before work begins',
    pricingCopy: 'The final launch promise and productised prices are still being confirmed. They will be published as fixed offers rather than disguised hourly estimates.',
  },
  workPage: {
    eyebrow: 'Proof policy',
    title: 'No case-study theatre.',
    intro: 'Nexform is early. That is not permission to pad the portfolio. Every published result must trace to a project, a measurement and client permission.',
    proofTitle: 'What is already real',
    proofCopy: 'The multilingual site system you are using now and hands-on Meta Ads work for a childcare provider. Both are described only as far as the current evidence allows.',
    permissionTitle: 'What appears next',
    permissionCopy: 'Before-and-after screens from close-circle projects and full client stories will be added as soon as owners approve publication and the results are verified.',
  },
  methodPage: {
    eyebrow: 'How Nexform works',
    title: 'Fewer meetings. More visible progress.',
    intro: 'Small-business speed comes from a constrained process, not from skipping strategy, accessibility or QA.',
    phases: [
      { number: '01', title: 'Find the commercial problem', copy: 'The Website Check identifies what blocks trust, findability and enquiries.' },
      { number: '02', title: 'Lock the argument and design', copy: 'Positioning, page hierarchy, tokens and the signature interaction are approved before production code.' },
      { number: '03', title: 'Write for the market', copy: 'Each launch language gets its own argument and native rhythm rather than a literal translation.' },
      { number: '04', title: 'Build and test', copy: 'Static pages, conversion wiring, local SEO and motion are tested across the agreed viewports.' },
      { number: '05', title: 'Launch and learn', copy: 'Care and Meta Ads turn real visitor behaviour into the next useful improvement.' },
    ],
    aiTitle: 'AI compresses production—not judgement.',
    aiCopy: 'We use AI to accelerate research, production and checking. Positioning, design decisions, copy review and the final quality gate remain deliberate human work.',
  },
  privacy: {
    title: 'Privacy',
    intro: 'This page describes the intended data flow. Controller and registration details must be completed before the commercial site launches.',
    sections: [
      { title: 'Website Check', copy: 'The form collects a website URL, name and email solely to prepare and deliver the requested audit. The final form provider, retention period and processor details are [TODO: confirm].' },
      { title: 'Analytics', copy: 'The site is designed for privacy-friendly Plausible analytics without advertising cookies. The analytics domain is [TODO: confirm].' },
      { title: 'Your rights', copy: 'The responsible entity, privacy contact and procedure for access, correction or deletion requests are [TODO: complete before launch].' },
    ],
  },
  legal: {
    title: 'Company details',
    intro: 'Nexform is not yet registered. The following information must be completed before the first commercial launch or invoice.',
    rows: [
      { label: 'Legal entity', value: '[TODO: legal name]' },
      { label: 'Registered address', value: '[TODO: full address]' },
      { label: 'KVK number', value: '[TODO: KVK]' },
      { label: 'BTW number', value: '[TODO: BTW]' },
      { label: 'Email', value: '[TODO: hello@confirmed-domain]' },
      { label: 'Phone', value: '[TODO: phone number]' },
    ],
  },
  footer: {
    claim: 'Websites that carry their weight.',
    location: 'Websites · Care · Meta Ads',
    privacy: 'Privacy',
    legal: 'Company details',
    todo: 'Contact and registration details pending',
  },
};

const de: Content = {
  ...en,
  langName: 'Deutsch',
  skip: 'Zum Inhalt springen',
  nav: { work: 'Projekte', services: 'Leistungen', method: 'Arbeitsweise' },
  cta: { audit: 'Website prüfen lassen', booking: 'Kennenlernen buchen', whatsapp: 'Per WhatsApp schreiben', unavailable: 'Nach Bestätigung der Kontaktdaten verfügbar' },
  seo: {
    home: { title: 'Verkaufsstarkes Webdesign für KMU | Nexform', description: 'Schnelle, verkaufsstarke Websites für KMU – auf Deutsch konzipiert statt übersetzt. Kostenlose Website-Prüfung anfordern.' },
    services: { title: 'Websites, Betreuung & Meta Ads | Nexform', description: 'Website, lokale SEO, laufende Betreuung und Meta Ads aus einer Hand. Für kleine Unternehmen, klar und nachvollziehbar.' },
    work: { title: 'Webdesign- und Meta-Ads-Projekte | Nexform', description: 'Nachprüfbare Arbeit statt Agenturtheater: mehrsprachige Website-Systeme und praktische Meta-Ads-Erfahrung für KMU.' },
    method: { title: 'Unser schneller Website-Prozess | Nexform', description: 'Ein klarer, KI-gestützter Prozess für hochwertige KMU-Websites – ohne monatelange Agenturschleifen oder Abstriche bei der Qualität.' },
    privacy: { title: 'Datenschutz | Nexform', description: 'Informationen zur Verarbeitung von Website-Check-Anfragen und zur datensparsamen Reichweitenmessung bei Nexform.' },
    legal: { title: 'Impressum | Nexform', description: 'Anbieter- und Kontaktdaten von Nexform. Die Registerangaben werden vor dem kommerziellen Start vollständig ergänzt.' },
  },
  hero: {
    eyebrow: 'Websites + Meta Ads · für kleine Unternehmen',
    lines: ['Ihre Website', 'darf Sie nicht', 'klein aussehen lassen.'],
    lead: 'Nexform baut verkaufsstarke Websites und Werbestrecken für KMU – auf Deutsch konzipiert und in Tagen statt Monaten umgesetzt.',
    promise: 'Persönliche Analyse innerhalb von 24 Stunden. Ohne Verkaufspräsentation im Anhang.',
    coverage: 'Wir prüfen',
    checks: ['Ladezeit', 'Mobil', 'Sichtbarkeit', 'Anfragen'],
  },
  form: {
    urlLabel: 'Adresse Ihrer Website', nameLabel: 'Ihr Name', emailLabel: 'Geschäftliche E-Mail', continue: 'Prüfung starten', submit: 'Zur Prüfung senden', edit: 'URL ändern',
    statuses: ['Website wird erfasst…', 'Ladezeit wird geprüft…', 'Mobile Ansicht wird analysiert…'],
    invalidUrl: 'Bitte geben Sie eine vollständige Adresse ein, zum Beispiel ihrewebsite.de.', invalidName: 'An wen dürfen wir die Analyse schicken?', invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    missingEndpoint: 'Das Analyse-Postfach ist noch nicht verbunden. Nutzen Sie bis dahin bitte die Terminoption.', networkError: 'Die Anfrage ist nicht angekommen. Prüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    successTitle: 'Ihre Website ist vorgemerkt.', successCopy: 'Wir prüfen sie persönlich und schicken die Analyse innerhalb von 24 Stunden.',
  },
  proof: {
    eyebrow: 'Nachprüfbare Zahlen', title: 'Wir veröffentlichen nur, was wir belegen können.',
    items: [
      { value: '0', label: 'Projekte – bestätigte Gesamtzahl ausstehend', verified: false },
      { value: '0', suffix: 's', label: 'mittlere Ladezeit – Messung ausstehend', verified: false },
      { value: '4', label: 'Kundensprachen', verified: true },
    ],
    note: 'Projekt- und Leistungszahlen erscheinen erst, wenn die Quelle geprüft ist.',
  },
  tension: {
    eyebrow: 'Für diese Lücke gibt es Nexform', title: 'Zu hochwertig für den Baukasten. Zu pragmatisch für Agenturtheater.',
    cheapTitle: 'Günstig und austauschbar', cheapCopy: 'Ein Baukasten bringt Seiten online. Er macht einen lokalen Betrieb selten zur überzeugenden ersten Wahl.',
    slowTitle: 'Aufwendig und unbeweglich', slowCopy: 'Klassische Agenturstrukturen machen aus einer klaren Website schnell ein Dreimonatsprojekt und eine Investition von 8.000 bis 15.000 Euro.',
    routeTitle: 'Der Nexform-Weg', routeCopy: 'Ein fokussiertes Team, KI-gestützte Produktion und echte Performance-Marketing-Erfahrung: Agenturqualität in einem KMU-tauglichen Ablauf.',
  },
  servicesIntro: { eyebrow: 'Von der Diagnose bis zur laufenden Nachfrage', title: 'Ein Kreislauf. Kein Weiterreichen ins Ungewisse.', copy: 'Mit Fakten anfangen. Das Richtige bauen. Laufend schärfen. Dann die passenden Menschen darauf aufmerksam machen.' },
  services: [
    { number: '01', title: 'Kostenlose Website-Prüfung', summary: 'Eine persönliche Analyse statt einer automatischen Punktzahl.', detail: 'Wir prüfen Ladezeit, mobile Nutzung, Auffindbarkeit und die Stellen, an denen Interessenten abspringen.', outcome: 'Sie erhalten eine priorisierte Liste der Schwachstellen, die Aufmerksamkeit und Anfragen kosten.' },
    { number: '02', title: 'Website-Erstellung', summary: 'Eine hochwertige Website rund um den nächsten Kundenschritt.', detail: 'Strategie, deutschsprachige Texte, Design, statische Entwicklung, lokale SEO-Grundlagen, rechtliche Seitenstruktur und Übergabe.', outcome: 'Umsetzungsdauer und Festpreis werden veröffentlicht, sobald sie verbindlich feststehen.' },
    { number: '03', title: 'Care Plan', summary: 'Die Website bleibt auch nach dem Start schnell, aktuell und nützlich.', detail: 'Hosting, Aktualisierungen, kleine Änderungen und ein Monatsbericht, den Geschäftsinhaber ohne Analytics-Team verstehen.', outcome: 'Monatlicher Leistungsumfang und Preis sind noch zu bestätigen.' },
    { number: '04', title: 'Social & Meta Ads', summary: 'Kampagnen und Zielseiten als gemeinsames System.', detail: 'Wir entwickeln, steuern und verbessern Kampagnen selbst. Deshalb beruhen Website-Entscheidungen auf echten Klick- und Anfrage-Signalen.', outcome: 'Betreuungspreis und Regeln zum Werbebudget sind noch zu bestätigen.' },
  ],
  work: {
    eyebrow: 'Ausgewählte Nachweise', title: 'Die Arbeit schafft Vertrauen.',
    intro: 'Keine geliehenen Logos, erfundenen Auszeichnungen oder anonymen Fünf-Sterne-Zitate. Bis Freigaben und Zahlen dokumentiert sind, zeigen wir nur Nachprüfbares.',
    studioTitle: 'Nexforms eigenes Launch-System', studioTag: 'Mehrsprachige Website · Nexform', studioCopy: 'Diese Website ist der erste öffentliche Nachweis des Systems: eigenständige Sprachversionen, ein festes Performance-Budget, ein echter Anfrageweg und vorab dokumentierte Interaktionsstandards.',
    studioPoints: ['Eigene Fassungen für EN, DE und NL', 'Statische Auslieferung mit Astro', 'Bewegung mit vollständiger Reduced-Motion-Variante'],
    childcareTitle: 'Ein Kinderbetreuungsunternehmen', childcareTag: 'Meta Ads · Name nicht veröffentlicht', childcareCopy: 'Nexform hat Meta-Werbung für einen Anbieter im Bereich Kinderbetreuung umgesetzt. Name, Werbemittel und Kennzahlen bleiben vertraulich, bis eine schriftliche Freigabe vorliegt.', confidential: 'Ergebnisse warten auf Veröffentlichungsfreigabe',
  },
  loop: {
    eyebrow: 'Der Conversion-Kreislauf', title: 'Die Kampagne verbessert die Website. Die Website verbessert die Kampagne.', copy: 'Wenn ein Team den Weg vom ersten Klick bis zur Anfrage verantwortet, gehen Erkenntnisse nicht zwischen Dienstleistern verloren.',
    steps: [
      { title: 'Prüfen', copy: 'Erst die Reibung finden, dann eine neue Website empfehlen.' },
      { title: 'Bauen', copy: 'Den kürzesten glaubwürdigen Weg zur Anfrage schaffen.' },
      { title: 'Lernen', copy: 'Kampagnen- und Anfrage-Signale statt Meinungen nutzen.' },
      { title: 'Verbessern', copy: 'Aus belastbaren Signalen den nächsten sinnvollen Schritt machen.' },
    ],
  },
  markets: {
    eyebrow: 'Keine Übersetzungsschicht', title: 'Geschrieben aus Sicht Ihrer Kundschaft.', copy: 'Das Argument verändert sich mit der Sprache. Die deutsche Fassung setzt auf Prozesssicherheit; die niederländische sagt direkt, was Kunden bekommen.',
    items: [
      { code: 'DE', title: 'Deutsch', copy: 'Klarer Umfang, verlässlicher Ablauf und Belege vor Adjektiven.' },
      { code: 'NL', title: 'Nederlands', copy: 'Direkte Sprache, kurze Wege und keine aufgeblähten Versprechen.' },
      { code: 'EN', title: 'English', copy: 'Klares Englisch ohne importierte Agenturfloskeln.' },
      { code: 'FR', title: 'Français', copy: 'Klare französische Texte für einen professionellen, direkten Auftritt.' },
    ],
  },
  final: { eyebrow: 'Beginnen Sie mit den Fakten', title: 'Schicken Sie uns die URL. Wir zeigen, was sie Sie kostet.', copy: 'Unverbindlich und ohne automatische Punktzahl im Beratungslook. Ein Mensch prüft die Website und liefert zuerst den nützlichen Teil.' },
  servicesPage: {
    eyebrow: 'Leistungen von Nexform', title: 'Die Website ist nicht das Ziel. Dort landet die Nachfrage.', intro: 'Das Angebot folgt dem tatsächlichen Kundenweg: Schwachstellen erkennen, den Weg neu bauen, ihn verlässlich betreuen und passende Aufmerksamkeit darauf lenken.',
    includedTitle: 'Bei jeder Website-Erstellung vorgesehen', included: ['Textrichtung für den deutschen Markt', 'Responsives Design und statische Astro-Entwicklung', 'Lokale SEO-Grundlagen und strukturierte Daten', 'Struktur für Datenschutz und Impressum', 'Performance-, Barrierefreiheits- und Interaktionsprüfung', 'Eine verständliche Übergabe'],
    pricingTitle: 'Fester Umfang vor dem Start', pricingCopy: 'Das verbindliche Zeitversprechen und die Produktpreise sind noch in Abstimmung. Sie werden als Festangebote veröffentlicht, nicht als verschleierte Stundenschätzung.',
  },
  workPage: {
    eyebrow: 'Unser Umgang mit Referenzen', title: 'Keine inszenierten Fallstudien.', intro: 'Nexform ist jung. Das ist kein Grund, das Portfolio aufzublasen. Jedes veröffentlichte Ergebnis braucht ein echtes Projekt, eine Messung und die Freigabe des Kunden.',
    proofTitle: 'Was bereits belegt ist', proofCopy: 'Das mehrsprachige Website-System, das Sie gerade nutzen, und praktische Meta-Ads-Arbeit für einen deutschen Kinderbetreuungsanbieter. Beides wird nur so weit beschrieben, wie es die vorhandenen Belege erlauben.',
    permissionTitle: 'Was als Nächstes folgt', permissionCopy: 'Vorher-Nachher-Ansichten aus Projekten im direkten Umfeld und ausführliche Kundengeschichten kommen hinzu, sobald die Inhaber der Veröffentlichung zustimmen und Ergebnisse geprüft sind.',
  },
  methodPage: {
    eyebrow: 'So arbeitet Nexform', title: 'Weniger Besprechungen. Mehr sichtbarer Fortschritt.', intro: 'KMU-taugliches Tempo entsteht durch einen klar begrenzten Prozess – nicht durch Abstriche bei Strategie, Barrierefreiheit oder Prüfung.',
    phases: [
      { number: '01', title: 'Das geschäftliche Problem finden', copy: 'Die Website-Prüfung zeigt, was Vertrauen, Auffindbarkeit und Anfragen bremst.' },
      { number: '02', title: 'Argument und Design festlegen', copy: 'Positionierung, Seitenstruktur, Tokens und Leitinteraktion werden vor dem Produktionscode freigegeben.' },
      { number: '03', title: 'Für den Markt schreiben', copy: 'Jede Startsprache erhält ein eigenes Argument und einen natürlichen Rhythmus statt einer wörtlichen Übersetzung.' },
      { number: '04', title: 'Bauen und prüfen', copy: 'Statische Seiten, Anfragewege, lokale SEO und Bewegung werden in allen vereinbarten Ansichten getestet.' },
      { number: '05', title: 'Starten und lernen', copy: 'Betreuung und Meta Ads verwandeln echtes Besucherverhalten in die nächste sinnvolle Verbesserung.' },
    ],
    aiTitle: 'KI verkürzt die Produktion – nicht das Nachdenken.', aiCopy: 'Wir nutzen KI, um Recherche, Produktion und Prüfung zu beschleunigen. Positionierung, Designentscheidungen, Textprüfung und die finale Qualitätskontrolle bleiben bewusste menschliche Arbeit.',
  },
  privacy: {
    title: 'Datenschutz', intro: 'Diese Seite beschreibt den vorgesehenen Datenfluss. Verantwortlicher und Registerangaben müssen vor dem kommerziellen Start ergänzt werden.',
    sections: [
      { title: 'Website-Prüfung', copy: 'Das Formular erfasst Website-Adresse, Name und E-Mail ausschließlich zur Erstellung und Zustellung der angeforderten Analyse. Formularanbieter, Speicherdauer und Auftragsverarbeitung sind [TODO: bestätigen].' },
      { title: 'Reichweitenmessung', copy: 'Vorgesehen ist die datensparsame Analyse mit Plausible ohne Werbe-Cookies. Die Analysedomain ist [TODO: bestätigen].' },
      { title: 'Ihre Rechte', copy: 'Verantwortliche Stelle, Datenschutzkontakt sowie der Ablauf für Auskunft, Berichtigung oder Löschung sind [TODO: vor Start vervollständigen].' },
    ],
  },
  legal: {
    title: 'Impressum', intro: 'Nexform ist noch nicht registriert. Die folgenden Angaben müssen vor dem ersten kommerziellen Start oder der ersten Rechnung vollständig ergänzt werden.',
    rows: [
      { label: 'Rechtsträger', value: '[TODO: vollständiger Name]' }, { label: 'Anschrift', value: '[TODO: vollständige Anschrift]' }, { label: 'KVK-Nummer', value: '[TODO: KVK]' }, { label: 'USt.-/BTW-Nummer', value: '[TODO: BTW]' }, { label: 'E-Mail', value: '[TODO: hello@bestätigte-domain]' }, { label: 'Telefon', value: '[TODO: Telefonnummer]' },
    ],
  },
  footer: { claim: 'Websites, die ihren Beitrag leisten.', location: 'Websites · Betreuung · Meta Ads', privacy: 'Datenschutz', legal: 'Impressum', todo: 'Kontakt- und Registerdaten ausstehend' },
};

const nl: Content = {
  ...en,
  langName: 'Nederlands',
  skip: 'Ga naar de inhoud',
  nav: { work: 'Werk', services: 'Diensten', method: 'Werkwijze' },
  cta: { audit: 'Laat mijn site checken', booking: 'Plan een korte kennismaking', whatsapp: 'Stuur een WhatsApp', unavailable: 'Beschikbaar zodra de contactgegevens zijn bevestigd' },
  seo: {
    home: { title: 'Webdesign dat klanten oplevert | Nexform', description: 'Snelle websites die klanten opleveren, geschreven in de taal van je klant. Vraag de gratis persoonlijke Website Check aan.' },
    services: { title: 'Websites, beheer & Meta Ads | Nexform', description: 'Eén studio voor meertalige websites, lokale SEO, doorlopend beheer en Meta Ads. Begin met een gratis Website Check.' },
    work: { title: 'Webdesign- en Meta Ads-werk | Nexform', description: 'Bekijk hoe Nexform snelle websites, sterke teksten en praktische Meta Ads-kennis samenbrengt voor mkb-bedrijven.' },
    method: { title: 'Een sneller webdesignproces | Nexform', description: 'Een helder, AI-versneld proces voor sterke mkb-websites, zonder maandenlange bureaurondes of concessies aan kwaliteit.' },
    privacy: { title: 'Privacy | Nexform', description: 'Lees hoe Nexform aanvragen voor de Website Check, privacyvriendelijke statistieken en persoonsgegevens verwerkt.' },
    legal: { title: 'Bedrijfsgegevens | Nexform', description: 'Bedrijfs- en contactgegevens van Nexform. Registratiegegevens worden vóór de commerciële lancering volledig aangevuld.' },
  },
  hero: {
    eyebrow: 'Websites + Meta Ads · gemaakt voor het mkb', lines: ['Je website', 'mag je bedrijf', 'niet klein maken.'],
    lead: 'Nexform bouwt websites en advertentiefunnels die klanten in beweging krijgen — geschreven voor jouw markt en opgeleverd in dagen in plaats van maanden.',
    promise: 'Binnen 24 uur een persoonlijke analyse in je inbox. Zonder verkooppresentatie erbij.', coverage: 'We checken', checks: ['Snelheid', 'Mobiel', 'Vindbaarheid', 'Conversie'],
  },
  form: {
    urlLabel: 'Adres van je website', nameLabel: 'Je naam', emailLabel: 'Zakelijk e-mailadres', continue: 'Start de check', submit: 'Stuur ter beoordeling', edit: 'Wijzig URL',
    statuses: ['Website wordt bekeken…', 'Snelheid wordt gecheckt…', 'Mobiele versie wordt geanalyseerd…'],
    invalidUrl: 'Vul een volledig webadres in, bijvoorbeeld jouwwebsite.nl.', invalidName: 'Aan wie mogen we de analyse sturen?', invalidEmail: 'Vul een geldig e-mailadres in.', missingEndpoint: 'De audit-inbox is nog niet gekoppeld. Gebruik voorlopig de afspraakoptie.', networkError: 'Je aanvraag kwam niet aan. Controleer je verbinding en probeer het nog één keer.',
    successTitle: 'Je website staat in de rij.', successCopy: 'We bekijken hem persoonlijk en sturen de analyse binnen 24 uur.',
  },
  proof: {
    eyebrow: 'Controleerbare cijfers', title: 'Alleen getallen die we kunnen onderbouwen.',
    items: [{ value: '0', label: 'projecten — geverifieerd totaal volgt', verified: false }, { value: '0', suffix: 's', label: 'gemiddelde laadtijd — meting volgt', verified: false }, { value: '4', label: 'klanttalen', verified: true }],
    note: 'Project- en prestatiecijfers komen pas online als de bron controleerbaar is.',
  },
  tension: {
    eyebrow: 'Daarom bestaat Nexform', title: 'Te goed voor een dertien-in-een-dozijn-template. Te nuchter voor bureautheater.',
    cheapTitle: 'Goedkoop en inwisselbaar', cheapCopy: 'Met een template kom je online. Het maakt een lokaal bedrijf zelden de vanzelfsprekende eerste keuze.',
    slowTitle: 'Mooi en muurvast', slowCopy: 'Bij een traditioneel bureau wordt een gerichte website al snel een traject van drie maanden en een beslissing van €8.000 tot €15.000.',
    routeTitle: 'De Nexform-route', routeCopy: 'Een klein team, AI-versnelde productie en echte performance-marketingkennis: de afwerking van een bureau, op mkb-tempo.',
  },
  servicesIntro: { eyebrow: 'Van eerste diagnose tot terugkerende vraag', title: 'Eén lus. Geen doorgeefluik.', copy: 'Begin met bewijs. Bouw wat telt. Houd het scherp. Stuur er daarna de juiste mensen naartoe.' },
  services: [
    { number: '01', title: 'Gratis Website Check', summary: 'Een persoonlijke analyse, geen automatisch rapportcijfer.', detail: 'We kijken naar snelheid, mobiel gebruik, vindbaarheid en de plekken waar potentiële klanten afhaken.', outcome: 'Je krijgt een duidelijke volgorde van wat aandacht en aanvragen kost.' },
    { number: '02', title: 'Website laten maken', summary: 'Een sterke site rond de volgende stap van je klant.', detail: 'Strategie, Nederlandse copy, ontwerp, statische bouw, lokale SEO-basis, juridische paginastructuur en overdracht.', outcome: 'Doorlooptijd en vaste prijs worden gepubliceerd zodra ze definitief zijn.' },
    { number: '03', title: 'Care Plan', summary: 'Je site blijft na de lancering snel, actueel en bruikbaar.', detail: 'Hosting, updates, kleine wijzigingen en een maandrapport dat je zonder analytics-afdeling begrijpt.', outcome: 'Maandelijkse inhoud en prijs moeten nog worden bevestigd.' },
    { number: '04', title: 'Social & Meta Ads', summary: 'Campagnes en landingspagina’s als één systeem.', detail: 'We maken, beheren en verbeteren campagnes zelf. Daardoor baseren we websitekeuzes op echt klik- en aanvraaggedrag.', outcome: 'Beheerprijs en afspraken over advertentiebudget volgen nog.' },
  ],
  work: {
    eyebrow: 'Geselecteerd bewijs', title: 'Het werk draagt het vertrouwen.', intro: 'Geen geleende logo’s, verzonnen prijzen of anonieme vijfsterrenquotes. Zolang toestemming en cijfers niet vastliggen, tonen we alleen wat aantoonbaar is.',
    studioTitle: 'Nexforms eigen lanceersysteem', studioTag: 'Meertalig webplatform · Nexform', studioCopy: 'Deze site is het eerste openbare bewijs van het systeem: eigen taalversies, een vast prestatiebudget, een echte conversieroute en interactieregels die vóór de bouw zijn vastgelegd.',
    studioPoints: ['Eigen versies voor EN, DE en NL', 'Statische Astro-oplevering', 'Beweging met een volledige reduced-motion-route'],
    childcareTitle: 'Een kinderopvangbedrijf in Duitsland', childcareTag: 'Meta Ads · naam afgeschermd', childcareCopy: 'Nexform heeft Meta-advertenties uitgevoerd voor een Duits kinderopvangbedrijf. Naam, advertenties en resultaten blijven privé totdat schriftelijke toestemming voor publicatie is ontvangen.', confidential: 'Resultaten wachten op publicatietoestemming',
  },
  loop: {
    eyebrow: 'De conversielus', title: 'De campagne leert de site. De site verbetert de campagne.', copy: 'Als één team de weg van eerste klik tot aanvraag bewaakt, verdwijnen lessen niet tussen verschillende leveranciers.',
    steps: [{ title: 'Check', copy: 'Zoek de wrijving voordat je een nieuwe site adviseert.' }, { title: 'Bouw', copy: 'Maak de kortste geloofwaardige route naar actie.' }, { title: 'Leer', copy: 'Gebruik campagne- en aanvraagsignalen in plaats van meningen.' }, { title: 'Verbeter', copy: 'Zet bruikbare signalen om in de volgende gerichte stap.' }],
  },
  markets: {
    eyebrow: 'Geen vertaallaag', title: 'Geschreven in de taal van je klant.', copy: 'Het verhaal verandert per taal. De Duitse versie legt de nadruk op proceszekerheid; de Nederlandse zegt direct waar het op staat.',
    items: [{ code: 'NL', title: 'Nederlands', copy: 'Directe taal, korte lijnen en geen opgeblazen bureauclaims.' }, { code: 'DE', title: 'Deutsch', copy: 'Heldere scope, betrouwbaar proces en bewijs vóór bijvoeglijke naamwoorden.' }, { code: 'EN', title: 'English', copy: 'Helder Engels zonder geïmporteerde bureautaal.' }, { code: 'FR', title: 'Français', copy: 'Heldere Franse tekst voor een professionele en directe presentatie.' }],
  },
  final: { eyebrow: 'Begin met het bewijs', title: 'Geef ons de URL. Wij laten zien wat hij je kost.', copy: 'Vrijblijvend en zonder automatische score vermomd als advies. Een mens bekijkt je site en stuurt het nuttige deel eerst.' },
  servicesPage: {
    eyebrow: 'Diensten van Nexform', title: 'Een website is niet de finish. Daar landt je vraag.', intro: 'Het aanbod volgt de echte klantreis: zwakke plekken vinden, de route opnieuw bouwen, hem gezond houden en er gerichte aandacht naartoe sturen.',
    includedTitle: 'In iedere websitebouw nemen we mee', included: ['Copyrichting voor de Nederlandse markt', 'Responsief ontwerp en statische Astro-bouw', 'Lokale SEO-basis en structured data', 'Structuur voor privacy en bedrijfsgegevens', 'Performance-, toegankelijkheids- en interactie-QA', 'Een overdracht die een ondernemer begrijpt'],
    pricingTitle: 'Vaste scope vóór de start', pricingCopy: 'De definitieve opleverbelofte en productprijzen worden nog vastgesteld. We publiceren ze als vaste pakketten, niet als verhulde urenraming.',
  },
  workPage: {
    eyebrow: 'Ons bewijsbeleid', title: 'Geen opgepoetste cases.', intro: 'Nexform is jong. Dat is geen reden om het portfolio op te blazen. Ieder gepubliceerd resultaat moet terug te leiden zijn naar een echt project, een meting en toestemming.',
    proofTitle: 'Wat al echt is', proofCopy: 'Het meertalige websitesysteem dat je nu gebruikt en hands-on Meta Ads-werk voor een Duits kinderopvangbedrijf. Beide worden alleen beschreven voor zover het bewijs reikt.',
    permissionTitle: 'Wat hierna komt', permissionCopy: 'Voor-en-na-schermen uit projecten in de eigen kring en volledige klantverhalen worden toegevoegd zodra eigenaren publicatie goedkeuren en de resultaten zijn geverifieerd.',
  },
  methodPage: {
    eyebrow: 'Zo werkt Nexform', title: 'Minder overleg. Meer zichtbaar werk.', intro: 'Mkb-tempo komt van een strak proces, niet van het overslaan van strategie, toegankelijkheid of kwaliteitscontrole.',
    phases: [{ number: '01', title: 'Vind het commerciële probleem', copy: 'De Website Check laat zien wat vertrouwen, vindbaarheid en aanvragen afremt.' }, { number: '02', title: 'Zet verhaal en ontwerp vast', copy: 'Positionering, paginastructuur, tokens en kenmerkende interactie worden goedgekeurd vóór productiecode.' }, { number: '03', title: 'Schrijf voor de markt', copy: 'Iedere lanceertaal krijgt een eigen verhaal en natuurlijk ritme, geen letterlijke vertaling.' }, { number: '04', title: 'Bouw en test', copy: 'Statische pagina’s, conversieroutes, lokale SEO en beweging worden op alle afgesproken schermmaten getest.' }, { number: '05', title: 'Lanceer en leer', copy: 'Beheer en Meta Ads zetten echt bezoekersgedrag om in de volgende nuttige verbetering.' }],
    aiTitle: 'AI versnelt productie — niet het denkwerk.', aiCopy: 'We gebruiken AI om onderzoek, productie en controle sneller te maken. Positionering, ontwerpkeuzes, copyreview en de laatste kwaliteitscheck blijven bewust mensenwerk.',
  },
  privacy: {
    title: 'Privacy', intro: 'Deze pagina beschrijft de beoogde gegevensstroom. Verantwoordelijke en registratiegegevens moeten vóór de commerciële lancering worden aangevuld.',
    sections: [{ title: 'Website Check', copy: 'Het formulier verzamelt websiteadres, naam en e-mail uitsluitend om de gevraagde analyse te maken en te versturen. Formulierleverancier, bewaartermijn en verwerkersgegevens zijn [TODO: bevestigen].' }, { title: 'Statistieken', copy: 'De site is ontworpen voor privacyvriendelijke Plausible-statistieken zonder advertentiecookies. Het analytics-domein is [TODO: bevestigen].' }, { title: 'Je rechten', copy: 'De verantwoordelijke partij, het privacycontact en de werkwijze voor inzage, correctie of verwijdering zijn [TODO: vóór lancering aanvullen].' }],
  },
  legal: {
    title: 'Bedrijfsgegevens', intro: 'Nexform is nog niet geregistreerd. De onderstaande gegevens moeten vóór de eerste commerciële lancering of factuur volledig worden ingevuld.',
    rows: [{ label: 'Juridische entiteit', value: '[TODO: juridische naam]' }, { label: 'Vestigingsadres', value: '[TODO: volledig adres]' }, { label: 'KVK-nummer', value: '[TODO: KVK]' }, { label: 'BTW-nummer', value: '[TODO: BTW]' }, { label: 'E-mail', value: '[TODO: hello@bevestigd-domein]' }, { label: 'Telefoon', value: '[TODO: telefoonnummer]' }],
  },
  footer: { claim: 'Websites die hun werk doen.', location: 'Websites · Beheer · Meta Ads', privacy: 'Privacy', legal: 'Bedrijfsgegevens', todo: 'Contact- en registratiegegevens volgen' },
};

const fr: Content = {
  ...en,
  langName: 'Français',
  skip: 'Aller au contenu',
  nav: { work: 'Réalisations', services: 'Services', method: 'Méthode' },
  cta: {
    audit: 'Analyser mon site',
    booking: 'Planifier un échange',
    whatsapp: 'Nous écrire sur WhatsApp',
    unavailable: 'Disponible dès que les coordonnées sont confirmées',
  },
  seo: {
    home: { title: 'Création de sites web pour PME | Nexform', description: 'Des sites clairs, rapides et conçus pour générer des demandes. Création, suivi et campagnes Meta Ads.' },
    services: { title: 'Sites web, suivi et Meta Ads | Nexform', description: 'Conception de sites, maintenance et campagnes Meta Ads pour les petites entreprises.' },
    work: { title: 'Exemples de sites web | Nexform', description: 'Découvrez plusieurs directions de sites web conçues pour différents secteurs.' },
    method: { title: 'Notre méthode de travail | Nexform', description: 'Un processus simple et visible, du cadrage à la mise en ligne.' },
    privacy: { title: 'Confidentialité | Nexform', description: 'Informations sur le traitement des demandes et des données personnelles par Nexform.' },
    legal: { title: 'Mentions légales | Nexform', description: 'Informations légales et coordonnées de Nexform.' },
  },
  form: {
    urlLabel: 'Adresse de votre site',
    nameLabel: 'Votre nom',
    emailLabel: 'E-mail professionnel',
    continue: 'Lancer l’analyse',
    submit: 'Envoyer pour analyse',
    edit: 'Modifier l’URL',
    statuses: ['Lecture du site…', 'Vérification de la vitesse…', 'Analyse mobile…'],
    invalidUrl: 'Saisissez une adresse complète, par exemple votresite.fr.',
    invalidName: 'Indiquez le nom de la personne à contacter.',
    invalidEmail: 'Saisissez une adresse e-mail valide.',
    missingEndpoint: 'La boîte de réception du formulaire n’est pas encore connectée.',
    networkError: 'La demande n’a pas été envoyée. Vérifiez votre connexion et réessayez.',
    successTitle: 'Votre site a bien été envoyé.',
    successCopy: 'Nous allons l’examiner et revenir vers vous rapidement.',
  },
  privacy: {
    title: 'Confidentialité',
    intro: 'Cette page décrit le traitement prévu des données. Les informations relatives au responsable doivent être complétées avant le lancement commercial.',
    sections: [
      { title: 'Analyse de site', copy: 'Le formulaire recueille l’adresse du site, le nom et l’adresse e-mail uniquement afin de préparer et transmettre l’analyse demandée. Le prestataire du formulaire, la durée de conservation et les informations du sous-traitant restent à confirmer.' },
      { title: 'Mesure d’audience', copy: 'Le site est prévu pour utiliser Plausible, une solution de mesure respectueuse de la vie privée et sans cookies publicitaires. Le domaine d’analyse reste à confirmer.' },
      { title: 'Vos droits', copy: 'Les coordonnées du responsable ainsi que la procédure d’accès, de rectification ou de suppression seront indiquées avant le lancement.' },
    ],
  },
  legal: {
    title: 'Mentions légales',
    intro: 'Nexform n’est pas encore immatriculée. Les informations suivantes doivent être complétées avant le premier lancement commercial ou la première facture.',
    rows: [
      { label: 'Entité juridique', value: '[À compléter : raison sociale]' },
      { label: 'Adresse', value: '[À compléter : adresse complète]' },
      { label: 'Numéro d’immatriculation', value: '[À compléter]' },
      { label: 'Numéro de TVA', value: '[À compléter]' },
      { label: 'E-mail', value: '[À compléter : adresse e-mail]' },
      { label: 'Téléphone', value: '[À compléter : numéro de téléphone]' },
    ],
  },
  footer: {
    claim: 'Des sites web qui font leur travail.',
    location: 'Sites web · Suivi · Meta Ads',
    privacy: 'Confidentialité',
    legal: 'Mentions légales',
    todo: 'Coordonnées et informations légales à compléter',
  },
};

export const content: Record<PublishedLocale, Content> = { en, de, nl, fr };

export const getContent = (locale: PublishedLocale): Content => content[locale];
