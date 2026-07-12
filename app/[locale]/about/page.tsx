import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { buildMetadata } from '@/lib/seo/metadata';
import { aboutContent } from '@/constants/about-content';
import type { Locale } from '@/types';
import type { AppLocale } from '@/i18n/routing';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';
import { AvatarPlaceholder } from '@/components/sections/avatar-placeholder';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.about' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/about',
    locale: locale as AppLocale,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('About');
  const content = aboutContent[locale as Locale];

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <AvatarPlaceholder />
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase">
              {t('eyebrow')}
            </span>
            <h1 className="mt-4 font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl">
              {t('title')}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground">
              {t('intro')}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {content.qualifications.map((item) => (
                <Badge key={item} variant="kinari">
                  {item}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Philosophy */}
        <Reveal className="mx-auto mt-24 max-w-3xl text-center sm:mt-32">
          <p className="font-display text-2xl leading-snug font-medium text-balance text-foreground sm:text-3xl">
            &ldquo;{t('philosophy.body')}&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold tracking-wide text-primary uppercase">
            {t('philosophy.title')}
          </p>
        </Reveal>

        {/* Method */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {t('methodTitle')}
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {content.methodItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardContent>
                    <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <Reveal className="mx-auto mt-24 max-w-2xl text-center sm:mt-32">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {t('hobbiesTitle')}
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {content.hobbies.map((hobby) => (
              <Badge key={hobby} variant="secondary">
                {hobby}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
