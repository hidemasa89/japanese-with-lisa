import { defineRouting } from 'next-intl/routing';

/**
 * Central routing configuration, shared between the proxy (locale
 * negotiation), the navigation helpers, and the request config.
 *
 * Default locale is English rather than Japanese: the primary audience is
 * global learners of Japanese — many of them beginners who can't yet read
 * Japanese — so an English landing experience is the safer default. Visitors
 * can switch to Japanese at any time via the language switcher.
 */
export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
  // 'as-needed' keeps the default locale's URLs clean (e.g. /about) while
  // still prefixing other locales explicitly (e.g. /ja/about).
  localePrefix: 'as-needed',
});

export type AppLocale = (typeof routing.locales)[number];
