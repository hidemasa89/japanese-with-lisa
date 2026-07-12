import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Clock3 } from 'lucide-react';

import { buildMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.pricing' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/pricing',
    locale: locale as AppLocale,
  });
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Pricing');

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <Card className="mx-auto max-w-lg text-center">
          <CardContent className="flex flex-col items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
              <Clock3 className="size-7" />
            </span>
            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
              {t('eyebrow')}
            </span>
            <h1 className="font-display text-2xl font-semibold text-balance text-foreground sm:text-3xl">
              {t('title')}
            </h1>
            <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
              {t('description')}
            </p>
            <Button asChild size="lg" className="mt-2">
              <Link href="/contact">{t('cta')}</Link>
            </Button>
          </CardContent>
        </Card>
      </Reveal>
    </main>
  );
}
