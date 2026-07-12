import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { buildOgImageContent } from '@/lib/seo/og-image-content';

// Previously re-exported everything from opengraph-image.tsx. Next.js's
// build-time static analysis for these metadata-file exports doesn't
// follow re-exports (it warned that `runtime` fell back to a default
// instead), so each convention export is now declared directly here —
// only the shared JSX content itself is imported.
export const runtime = 'edge';
export const alt = 'Learn Japanese with Lisa';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home.hero' });

  return new ImageResponse(
    buildOgImageContent({ title: t('title'), subtitle: t('subtitle') }),
    { ...size }
  );
}
