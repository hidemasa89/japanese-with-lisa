import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline',
  robots: { index: false, follow: false },
};

/**
 * Standalone (non-localized) fallback shown by the service worker when a
 * navigation request fails with no network connection. Deliberately simple
 * and bilingual rather than running through next-intl, since it needs to
 * work even when nothing else can load.
 */
export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
      <p className="text-4xl">📡</p>
      <h1 className="font-display text-xl font-semibold">
        You&rsquo;re offline / オフラインです
      </h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        Please check your internet connection and try again.
        <br />
        インターネット接続をご確認の上、再度お試しください。
      </p>
    </main>
  );
}
