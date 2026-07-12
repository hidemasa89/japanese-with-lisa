import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { buildMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.privacy' });
  return {
    ...buildMetadata({
      title: t('title'),
      description: t('description'),
      path: '/privacy',
      locale: locale as AppLocale,
    }),
    // Placeholder content (see notice on the page) — keep it out of search
    // results until it's replaced with the real policy.
    robots: { index: false, follow: true },
  };
}

/**
 * Placeholder only. Real privacy-policy copy needs to describe this site's
 * actual data practices (the Supabase contact-form table added in step 5,
 * any analytics, cookies, etc.) and should be reviewed by a legal
 * professional before launch — see the on-page notice below.
 */
export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const footer = await getTranslations('Footer');
  const legal = await getTranslations('Legal');

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        {footer('privacyPolicy')}
      </h1>
      <p className="mt-6 rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">
        {legal('placeholderNotice')}
      </p>
    </main>
  );
}
