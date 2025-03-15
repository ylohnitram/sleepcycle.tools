// sw.js
const CACHE_NAME = 'v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
});
