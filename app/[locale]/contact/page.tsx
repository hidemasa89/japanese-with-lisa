import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { buildMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/sections/section-heading';
import { ContactForm } from '@/components/forms/contact-form';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.contact' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/contact',
    locale: locale as AppLocale,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <Reveal className="mt-10" delay={0.1}>
          <Card>
            <CardContent className="py-8">
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </main>
  );
}
