import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Links our i18n/request.ts to next-intl's request-scoped config.
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // All imagery on this site is either a locally-drawn SVG or generated
  // on-the-fly via next/og, so no remote image domains need to be allowlisted.
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Fail the production build on type errors / lint errors rather than
  // silently shipping broken code.
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withNextIntl(nextConfig);
