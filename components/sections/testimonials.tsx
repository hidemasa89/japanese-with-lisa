import { Quote } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

import { testimonials } from '@/constants/home-content';
import type { Locale } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/sections/section-heading';

export function Testimonials() {
  const t = useTranslations('Home.testimonials');
  const locale = useLocale() as Locale;
  const items = testimonials[locale];

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <Card className="h-full bg-secondary/50">
                <CardContent className="flex h-full flex-col gap-4">
                  <Quote className="size-7 text-primary/50" aria-hidden />
                  <p className="flex-1 text-sm leading-relaxed text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.meta}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
