import type { NavItem } from '@/types';

/**
 * Single source of truth for the main site navigation, used by both the
 * desktop header and the mobile menu (built in step 3).
 */
export const mainNav: NavItem[] = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/lessons', labelKey: 'lessons' },
  { href: '/pricing', labelKey: 'pricing' },
  { href: '/faq', labelKey: 'faq' },
  { href: '/contact', labelKey: 'contact' },
];
