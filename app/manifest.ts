import type { MetadataRoute } from 'next';
import { siteConfig } from '@/constants/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brand,
    short_name: `${siteConfig.name} Japanese`,
    description: siteConfig.description.en,
    start_url: '/',
    display: 'standalone',
    background_color: siteConfig.themeColorLight,
    theme_color: siteConfig.accentColor,
    orientation: 'portrait-primary',
    icons: [
      { src: '/icon-192', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
