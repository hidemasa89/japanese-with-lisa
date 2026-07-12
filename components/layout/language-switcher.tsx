'use client';

import * as React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type AppLocale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const localeLabels: Record<AppLocale, string> = {
  en: 'EN',
  ja: '日本語',
};

/**
 * A compact two-way toggle rather than a dropdown — with only two supported
 * locales, showing both options at once is faster to scan and tap than
 * opening a menu to reveal the second choice.
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Common');

  return (
    <div
      role="group"
      aria-label={t('language')}
      className="inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-secondary/60 p-1"
    >
      {routing.locales.map((loc: AppLocale) => {
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            aria-pressed={isActive}
            disabled={isActive}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={cn(
              'rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200',
              isActive
                ? 'bg-background text-primary shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {localeLabels[loc]}
          </button>
        );
      })}
    </div>
  );
}
