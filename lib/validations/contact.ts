import { z } from 'zod';

export interface ContactValidationMessages {
  nameRequired: string;
  nameTooLong: string;
  emailInvalid: string;
  countryRequired: string;
  messageTooShort: string;
  messageTooLong: string;
}

/**
 * Built as a factory rather than a static schema so field messages can be
 * supplied in the visitor's current locale (via next-intl in the form
 * component) instead of being hardcoded in English.
 */
export function createContactFormSchema(messages: ContactValidationMessages) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(1, messages.nameRequired)
      .max(100, messages.nameTooLong),
    email: z.email(messages.emailInvalid),
    country: z.string().min(1, messages.countryRequired),
    message: z
      .string()
      .trim()
      .min(10, messages.messageTooShort)
      .max(2000, messages.messageTooLong),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;
