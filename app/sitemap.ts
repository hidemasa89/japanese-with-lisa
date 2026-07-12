import type { MetadataRoute } from 'next';
import { siteConfig } from '@/constants/site';
import { routing } from '@/i18n/routing';

// Excludes /privacy and /terms — both are marked noindex (placeholder
// content) and have no place in a sitemap meant to guide crawling toward
// pages that should actually rank.
const pages = ['', '/about', '/lessons', '/pricing', '/faq', '/contact'];

function urlFor(locale: string, page: string) {
  return locale === routing.defaultLocale
    ? `${siteConfig.url}${page || '/'}`
    : `${siteConfig.url}/${locale}${page}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: urlFor(routing.defaultLocale, page),
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, urlFor(locale, page)])
      ),
    },
  }));
}
