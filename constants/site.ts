/**
 * Central place for site-wide constants that are referenced from metadata,
 * structured data, the footer, and PWA config. Keeping them here means the
 * production domain only needs to change in one place before launch.
 */
export const siteConfig = {
  name: 'Lisa',
  brand: 'Learn Japanese with Lisa',
  // TODO: replace with the real production domain before deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.learn-japanese-with-lisa.com',
  description: {
    en: 'Fun, practical, and personalized Japanese lessons for learners of every level, worldwide.',
    ja: '世界中の日本語学習者のための、楽しく実践的でパーソナライズされた日本語レッスン。',
  },
  accentColor: '#EC4899',
  themeColorLight: '#FFFCFB',
  themeColorDark: '#15111A',
  // Left empty for now — filled in whenever Lisa provides real profile links.
  // The Contact page only renders an icon if its `href` is non-empty.
  social: {
    instagram: '',
    youtube: '',
    tiktok: '',
  },
} as const;
