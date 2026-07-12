'use client';

import { useEffect } from 'react';

/**
 * Registers the PWA service worker after the page has loaded. Silently
 * no-ops on unsupported browsers or in development, where a stale cached
 * service worker would otherwise fight with fast refresh.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !('serviceWorker' in navigator) ||
      process.env.NODE_ENV !== 'production'
    ) {
      return;
    }

    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // PWA support is a progressive enhancement — a failed registration
        // should never block or degrade the core site experience.
      });
    };

    window.addEventListener('load', register);
    return () => window.removeEventListener('load', register);
  }, []);

  return null;
}
