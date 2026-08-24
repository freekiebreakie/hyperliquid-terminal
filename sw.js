const CACHE_NAME = 'depth-v6.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/logo/depth-mark.svg',
  '/assets/app-icon/icon-192.png',
  '/assets/app-icon/icon-512.png',
  '/assets/app-icon/icon-maskable-512.png',
  '/assets/app-icon/apple-touch-icon-180.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(r => {
      const clone = r.clone();
      caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
