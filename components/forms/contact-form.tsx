'use client';

import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { toast } from 'sonner';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { createContactFormSchema, type ContactFormValues } from '@/lib/validations/contact';
import { submitContactForm } from '@/lib/actions/contact';
import { countries } from '@/constants/countries';
import type { Locale } from '@/types';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ContactForm() {
  const t = useTranslations('ContactForm');
  const locale = useLocale() as Locale;
  const [submitted, setSubmitted] = React.useState(false);

  // Re-created each render from the current translations — cheap, and
  // guarantees error messages always match the active locale (including
  // after a language switch without a full remount).
  const schema = createContactFormSchema({
    nameRequired: t('errors.nameRequired'),
    nameTooLong: t('errors.nameTooLong'),
    emailInvalid: t('errors.emailInvalid'),
    countryRequired: t('errors.countryRequired'),
    messageTooShort: t('errors.messageTooShort'),
    messageTooLong: t('errors.messageTooLong'),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', country: '', message: '' },
  });

  async function onSubmit(values: ContactFormValues) {
    const result = await submitContactForm({ ...values, locale });

    if (!result.success) {
      toast.error(t('submitError'));
      return;
    }

    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-border/70 bg-card px-6 py-12 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">
          {t('successTitle')}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {t('successDescription')}
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
          {t('sendAnother')}
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">{t('nameLabel')}</Label>
        <Input
          id="name"
          autoComplete="name"
          placeholder={t('namePlaceholder')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
        />
        <FieldError id="name-error" message={errors.name?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">{t('emailLabel')}</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder={t('emailPlaceholder')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        <FieldError id="email-error" message={errors.email?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="country">{t('countryLabel')}</Label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="country" aria-invalid={!!errors.country}>
                <SelectValue placeholder={t('countryPlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError id="country-error" message={errors.country?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">{t('messageLabel')}</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder={t('messagePlaceholder')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {t('submitting')}
          </>
        ) : (
          t('submit')
        )}
      </Button>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence mode="wait">
      {message && (
        <motion.p
          id={id}
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.15 }}
          className="text-xs font-medium text-destructive"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
