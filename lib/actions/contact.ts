'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';

// Defensive, locale-independent re-validation. The form (step 6, client
// side) already validates with translated messages via
// lib/validations/contact.ts — never trust that alone, since a request
// can reach this action without going through the rendered form at all.
const serverContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email(),
  country: z.string().min(1).max(100),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(['en', 'ja']),
});

export type ContactActionInput = z.infer<typeof serverContactSchema>;

export type ContactActionResult =
  | { success: true }
  | { success: false; error: 'invalid_input' | 'not_configured' | 'insert_failed' };

/**
 * Called directly from the client form's submit handler (not bound to a
 * <form action={...}> element), so it takes a plain typed object rather
 * than FormData. Returns a semantic error code rather than a message so
 * the client can display it in the visitor's own locale.
 */
export async function submitContactForm(
  input: ContactActionInput
): Promise<ContactActionResult> {
  const parsed = serverContactSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, error: 'invalid_input' };
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    // Supabase hasn't been connected yet (step 5's env vars aren't set).
    // Fail gracefully with a clear code rather than letting the client
    // below throw on an invalid URL.
    return { success: false, error: 'not_configured' };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from('contact_messages').insert({
      name: parsed.data.name,
      email: parsed.data.email,
      country: parsed.data.country,
      message: parsed.data.message,
      locale: parsed.data.locale,
    });

    if (error) {
      return { success: false, error: 'insert_failed' };
    }

    return { success: true };
  } catch {
    // Any unexpected failure (network issue, misconfigured project, etc.)
    // — never let this Server Action throw uncaught, since that would
    // surface as an unhandled rejection in the form instead of the
    // friendly toast the UI is built to show.
    return { success: false, error: 'insert_failed' };
  }
}
