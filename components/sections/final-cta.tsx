'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

export function FinalCta() {
  const t = useTranslations('Home.finalCta');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-border/70 bg-secondary/50 px-6 py-16 text-center sm:px-12">
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 text-[10rem] leading-none text-sakura/10 select-none"
          animate={shouldReduceMotion ? undefined : { rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          桜
        </motion.span>

        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-pretty text-muted-foreground">
            {t('description')}
          </p>
          <div className="mt-8">
            <Button asChild size="xl">
              <Link href="/contact">
                {t('cta')}
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
