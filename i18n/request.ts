import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` reflects the [locale] segment matched by the proxy.
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    // Required as of next-intl v4 — always return the resolved locale.
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
