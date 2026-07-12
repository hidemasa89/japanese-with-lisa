import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Sparkles,
  MessagesSquare,
  Award,
  Briefcase,
  Plane,
  Video as VideoIcon,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

import { courses, formatTags } from '@/constants/courses-content';
import type { FeatureContent } from '@/constants/home-content';
import type { Locale } from '@/types';
import { buildMetadata } from '@/lib/seo/metadata';
import type { AppLocale } from '@/i18n/routing';
import { siteConfig } from '@/constants/site';
import { Link } from '@/i18n/navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/sections/section-heading';

const iconMap: Record<FeatureContent['icon'], LucideIcon> = {
  sparkles: Sparkles,
  messages: MessagesSquare,
  award: Award,
  briefcase: Briefcase,
  plane: Plane,
  video: VideoIcon,
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.lessons' });
  return buildMetadata({
    title: t('title'),
    description: t('description'),
    path: '/lessons',
    locale: locale as AppLocale,
  });
}

export default async function LessonsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Lessons');
  const common = await getTranslations('Common');
  const items = courses[locale as Locale];
  const tags = formatTags[locale as Locale];

  const coursesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((course, i) => ({
      '@type': 'Course',
      position: i + 1,
      name: course.title,
      description: course.description,
      provider: {
        '@type': 'Person',
        name: siteConfig.name,
      },
    })),
  };

  return (
    <main className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <JsonLd data={coursesJsonLd} />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((course, i) => {
            const Icon = iconMap[course.icon];
            return (
              <Reveal key={course.title} delay={(i % 2) * 0.1}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="flex h-full flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                        <Icon className="size-6" />
                      </span>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>
                    <ul className="mt-1 flex flex-col gap-1.5">
                      {course.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="mt-auto w-fit">
                      <Link href="/contact">
                        {common('bookLesson')}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}

          {/* Sixth "slot": online-lessons format card, echoing the home feature grid */}
          <Reveal delay={0.4}>
            <Card className="flex h-full flex-col items-center justify-center gap-4 border-dashed bg-secondary/40 text-center">
              <CardContent className="flex flex-col items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <VideoIcon className="size-6" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('formatLabel')}: {tags.join(' · ')}
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">{common('bookLesson')}</Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
