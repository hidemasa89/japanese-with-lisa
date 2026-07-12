import type { AppLocale } from '@/i18n/routing';

/** Re-exported for convenience so most code can `import type { Locale }`. */
export type Locale = AppLocale;

/** A single entry in the main site navigation. */
export interface NavItem {
  /** Pathname *without* a locale prefix — the locale-aware <Link> adds it. */
  href: string;
  /** Key into the `Nav` namespace in messages/{locale}.json. */
  labelKey: string;
}

/**
 * More domain types (lesson courses, testimonials, FAQ entries, the contact
 * form schema, etc.) are added in later steps as those features are built,
 * to avoid guessing at shapes before the content that fills them exists.
 */
