export const locales = ['en', 'de', 'nl', 'fr', 'es'] as const;
export const publishedLocales = ['en', 'de', 'nl'] as const;

export type Locale = (typeof locales)[number];
export type PublishedLocale = (typeof publishedLocales)[number];
export type PageKey = 'home' | 'services' | 'work' | 'method' | 'privacy' | 'legal';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  fr: 'Français',
  es: 'Español',
};

export const routes: Record<PublishedLocale, Record<PageKey, string>> = {
  en: {
    home: '/en/',
    services: '/en/services/',
    work: '/en/work/',
    method: '/en/method/',
    privacy: '/en/privacy/',
    legal: '/en/legal/',
  },
  de: {
    home: '/de/',
    services: '/de/leistungen/',
    work: '/de/projekte/',
    method: '/de/arbeitsweise/',
    privacy: '/de/datenschutz/',
    legal: '/de/impressum/',
  },
  nl: {
    home: '/nl/',
    services: '/nl/diensten/',
    work: '/nl/werk/',
    method: '/nl/werkwijze/',
    privacy: '/nl/privacy/',
    legal: '/nl/bedrijfsgegevens/',
  },
};

export const localeFromUrl = (pathname: string): PublishedLocale => {
  const candidate = pathname.split('/').filter(Boolean)[0];
  return publishedLocales.includes(candidate as PublishedLocale)
    ? (candidate as PublishedLocale)
    : 'en';
};

export const routeFor = (locale: PublishedLocale, page: PageKey) => routes[locale][page];
