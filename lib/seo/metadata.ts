import type { Metadata } from 'next';
import { siteConfig } from '@/constants/site';
import { routing, type AppLocale } from '@/i18n/routing';

interface BuildMetadataParams {
  title: string;
  description: string;
  /** Pathname *without* a locale prefix, e.g. '/', '/about', '/lessons'. */
  path: string;
  locale: AppLocale;
}

const ogLocaleMap: Record<AppLocale, string> = {
  en: 'en_US',
  ja: 'ja_JP',
};

/** Builds the URL for `path` under `locale`, respecting the 'as-needed' localePrefix. */
function localizedUrl(locale: string, path: string): string {
  const cleanPath = path === '/' ? '' : path;
  const prefixedPath =
    locale === routing.defaultLocale ? cleanPath || '/' : `/${locale}${cleanPath}`;
  return `${siteConfig.url}${prefixedPath}`;
}

/**
 * Shared metadata for every page: canonical URL, hreflang alternates for
 * every supported locale (plus x-default), and Open Graph / Twitter text
 * fields. The actual og:image / twitter:image tags come from the
 * opengraph-image.tsx / twitter-image.tsx file conventions and don't need
 * to be repeated here.
 */
export function buildMetadata({ title, description, path, locale }: BuildMetadataParams): Metadata {
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, localizedUrl(loc, path)])
  );

  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(locale, path),
      languages: {
        ...languages,
        'x-default': localizedUrl(routing.defaultLocale, path),
      },
    },
    openGraph: {
      title,
      description,
      url: localizedUrl(locale, path),
      siteName: siteConfig.brand,
      locale: ogLocaleMap[locale],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
