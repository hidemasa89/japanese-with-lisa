import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { faqs } from '@/constants/faq-content';
import type { Locale } from '@/types';
import { buildMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/sections/section-heading';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.faq' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/faq',
    locale: locale as AppLocale,
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Faq');
  const items = faqs[locale as Locale];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <Reveal className="mt-12" delay={0.1}>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={0.2}>
          <Button asChild size="lg">
            <Link href="/contact">{t('cta')}</Link>
          </Button>
        </Reveal>
      </div>
    </main>
  );
}
