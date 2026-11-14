const CACHE = 'oic-academy-v23';
const CACHE_PREFIX = 'oic-academy-';
const ASSETS = ['./','./index.html','./styles.css','./feedback.css','./rationales.js','./authored-questions.js','./question-translations.js','./question-references.js','./data.js','./study-engine.js','./guided-labs.js','./case-analysis.js','./curriculum.js','./curriculum-depth.js','./curriculum-workbook.js','./app.js','./manifest.webmanifest','./assets/oic-academy.svg','./assets/oic-academy-180.png','./assets/oic-academy-192.png','./assets/oic-academy-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('message', event => {
  if (event.data?.type !== 'CHECK_OFFLINE_CACHE' || !event.source) return;
  event.waitUntil(caches.open(CACHE).then(async cache => {
    const checks = await Promise.all(ASSETS.map(path => cache.match(new URL(path, self.registration.scope).href)));
    event.source.postMessage({type:'OFFLINE_CACHE_STATUS',ready:checks.every(Boolean),cached:checks.filter(Boolean).length,total:ASSETS.length});
  }));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(request, {ignoreSearch:true});
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch {
      if (request.mode === 'navigate') {
        const appShell = await cache.match(new URL('./', self.registration.scope).href);
        if (appShell) return appShell;
      }
      return new Response('This resource is not available offline. Open the academy online once to cache it.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
    }
  })());
});
