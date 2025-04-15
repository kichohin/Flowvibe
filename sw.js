// sw.js (Service Worker)

const CACHE_NAME = "flowvibe-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./about.html",
  "./icon-192.png",
  "./icon-512.png",
  "./manifest.json",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
];

// インストール時にキャッシュ保存
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエストに応じてキャッシュ or ネットワーク
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 古いキャッシュの削除
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
