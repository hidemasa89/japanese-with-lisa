import { useTranslations, useLocale } from 'next-intl';

import { faqs } from '@/constants/faq-content';
import type { Locale } from '@/types';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/sections/section-heading';

export function FaqTeaser() {
  const t = useTranslations('Home.faqTeaser');
  const locale = useLocale() as Locale;
  const preview = faqs[locale].slice(0, 3);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />

        <Reveal className="mt-10" delay={0.1}>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {preview.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-8 text-center" delay={0.2}>
          <Button asChild variant="outline" size="lg">
            <Link href="/faq">{t('cta')}</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
