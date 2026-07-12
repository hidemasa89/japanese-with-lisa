import { Sparkles, MessagesSquare, Award, Briefcase, Plane, Video, type LucideIcon } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

import { features, type FeatureContent } from '@/constants/home-content';
import type { Locale } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/sections/section-heading';

const iconMap: Record<FeatureContent['icon'], LucideIcon> = {
  sparkles: Sparkles,
  messages: MessagesSquare,
  award: Award,
  briefcase: Briefcase,
  plane: Plane,
  video: Video,
};

export function Features() {
  const t = useTranslations('Home.features');
  const locale = useLocale() as Locale;
  const items = features[locale];

  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="flex flex-col gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
