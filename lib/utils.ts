import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind class lists safely, resolving conflicting utilities
 * (e.g. `cn('p-2', condition && 'p-4')`) in favor of the later class.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
