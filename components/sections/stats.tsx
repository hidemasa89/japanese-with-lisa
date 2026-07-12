import { useTranslations, useLocale } from 'next-intl';

import { stats } from '@/constants/home-content';
import type { Locale } from '@/types';
import { Reveal } from '@/components/motion/reveal';

export function Stats() {
  const t = useTranslations('Home.stats');
  const locale = useLocale() as Locale;
  const items = stats[locale];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-sakura to-beni px-6 py-14 text-center text-white sm:px-12">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide uppercase">
            {t('eyebrow')}
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {items.map((stat, i) => (
            <Reveal key={stat.key} delay={i * 0.1}>
              <p className="font-display text-4xl font-bold sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-white/85">{t(stat.key)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
