import type { MetadataRoute } from 'next';
import { siteConfig } from '@/constants/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacy', '/terms', '/ja/privacy', '/ja/terms'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
