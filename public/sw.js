// Minimal, conservative service worker.
//
// Scope is intentionally narrow: it only exists to (1) let the site be
// installed as a PWA and (2) show a friendly offline page instead of the
// browser's default error when navigation fails without a connection.
// It does NOT cache and serve stale HTML/JSON over the network, which
// would be a worse bug than having no service worker at all.
const CACHE_NAME = 'lisa-japanese-shell-v1';
const OFFLINE_URL = '/offline';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([OFFLINE_URL]))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only intercept top-level page navigations; everything else (assets,
  // API calls) goes straight to the network as normal.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
  }
});
