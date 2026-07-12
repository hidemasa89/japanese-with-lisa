// Next.js 16 renamed the `middleware.ts` file convention to `proxy.ts`
// (the exported function's *name* doesn't matter to Next.js — only the
// default export from a file at this path — but the file itself must be
// named `proxy.ts` and live next to package.json).
//
// This runs on every request to negotiate the locale (from the URL, a
// cookie, or the browser's Accept-Language header) before any page renders.
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match every pathname except:
    // - /api, /trpc (route handlers)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /offline (standalone PWA fallback page, intentionally not localized)
    // - /icon, /apple-icon, /icon-192, /icon-512 (root-level generated
    //   image routes — these have no file extension in their URL, so
    //   without this explicit exclusion they were being matched here and
    //   incorrectly rewritten to e.g. /ja/icon-192, which 404s since
    //   those routes only exist at the root, outside [locale])
    // - files with an extension (e.g. favicon.ico, sw.js, manifest)
    '/((?!api|trpc|_next|_vercel|offline|icon-192|icon-512|apple-icon|icon|.*\\..*).*)',
  ],
};
