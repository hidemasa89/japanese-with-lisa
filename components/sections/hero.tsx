'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { HeroIllustration } from '@/components/sections/hero-illustration';

export function Hero() {
  const t = useTranslations('Home.hero');
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-8">
      {/* Soft ambient color wash behind the hero content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[32rem] bg-[radial-gradient(ellipse_at_top,_var(--color-washi-mist)_0%,_transparent_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-bold tracking-wide text-primary uppercase"
          >
            {t('eyebrow')}
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-5 font-display text-4xl leading-[1.1] font-semibold text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 font-display text-xl font-medium text-balance text-primary sm:text-2xl"
          >
            {t('subtitle')}
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground lg:mx-0"
          >
            {t('description')}
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button asChild size="xl">
              <Link href="/contact">
                {t('ctaPrimary')}
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/lessons">{t('ctaSecondary')}</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroIllustration
            bubbleJa={t('bubbleJa')}
            bubbleEn={t('bubbleEn')}
            liveLabel={t('liveBadge')}
          />
        </motion.div>
      </div>
    </section>
  );
}
