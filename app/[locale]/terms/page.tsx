import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { buildMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.terms' });
  return {
    ...buildMetadata({
      title: t('title'),
      description: t('description'),
      path: '/terms',
      locale: locale as AppLocale,
    }),
    robots: { index: false, follow: true },
  };
}

/** Placeholder only — see the note on the Privacy Policy page. */
export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const footer = await getTranslations('Footer');
  const legal = await getTranslations('Legal');

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        {footer('termsOfService')}
      </h1>
      <p className="mt-6 rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">
        {legal('placeholderNotice')}
      </p>
    </main>
  );
}
