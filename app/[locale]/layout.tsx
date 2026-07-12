import type { Metadata, Viewport } from 'next';
import { Fredoka, Figtree, M_PLUS_Rounded_1c } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing, type AppLocale } from '@/i18n/routing';
import { siteConfig } from '@/constants/site';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ServiceWorkerRegister } from '@/components/providers/sw-register';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import { JsonLd } from '@/components/seo/json-ld';
import '@/app/globals.css';

// Display face — used with restraint (hero headline, section titles).
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

// Body / UI face.
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
});

// Japanese face — a rounded gothic that echoes Fredoka's warmth, legible
// down to body-copy sizes (it's designed as a UI typeface, not just display).
const mplusRounded = M_PLUS_Rounded_1c({
  subsets: [],
  weight: ['400', '500', '700', '800'],
  variable: '--font-mplus-rounded',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale: AppLocale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.home' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('title'),
      template: `%s | ${siteConfig.brand}`,
    },
    description: t('description'),
    formatDetection: {
      // These are personal-website heuristics (auto-linking phone numbers,
      // etc.) that add no value here and can look odd on mobile Safari.
      telephone: false,
      address: false,
      email: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: siteConfig.themeColorLight },
    { media: '(prefers-color-scheme: dark)', color: siteConfig.themeColorDark },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Guard against an invalid locale reaching this far (the proxy already
  // filters most requests, but direct navigation / prerendering can bypass it).
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables fully static rendering for this locale's subtree.
  setRequestLocale(locale);

  const about = await getTranslations({ locale, namespace: 'About' });
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Japanese Language Teacher',
    description: about('intro'),
    url: siteConfig.url,
    knowsLanguage: ['ja', 'en'],
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.brand,
      url: siteConfig.url,
    },
  };

  return (
    <html
      lang={locale}
      className={`${fredoka.variable} ${figtree.variable} ${mplusRounded.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <JsonLd data={personJsonLd} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
            <ServiceWorkerRegister />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
