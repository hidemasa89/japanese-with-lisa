import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { buildMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { FaqTeaser } from '@/components/sections/faq-teaser';
import { FinalCta } from '@/components/sections/final-cta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.home' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/',
    locale: locale as AppLocale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <FaqTeaser />
      <FinalCta />
    </main>
  );
}
