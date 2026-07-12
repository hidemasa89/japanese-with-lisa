import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/lib/supabase/types';

/**
 * Supabase client for the browser. The contact form (step 6) doesn't
 * actually need this — it submits through a Server Action using
 * `lib/supabase/server.ts` instead, which keeps the insert logic and its
 * validation on the server. This file exists for any future feature that
 * genuinely needs client-side access (e.g. realtime subscriptions).
 */
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
