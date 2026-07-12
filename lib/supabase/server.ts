import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from '@/lib/supabase/types';

/**
 * Supabase client for Server Components, Server Actions, and Route
 * Handlers. Must be created fresh per request (it reads the request's
 * cookies), so call this at the top of each Server Action rather than
 * caching the result.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: any) {
          try {
            cookiesToSet.forEach(({ name, value, options }: any) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component during static rendering, where
            // cookies can't be written. Safe to ignore: this project has no
            // auth session that needs refreshing, only a one-way insert.
          }
        },
      },
    }
  );
}
