import { createNavigation } from 'next-intl/navigation';
import { routing } from '@/i18n/routing';

/**
 * Lightweight, locale-aware wrappers around Next.js' navigation APIs.
 * Use these instead of `next/link` / `next/navigation` anywhere the locale
 * prefix needs to be handled automatically.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
