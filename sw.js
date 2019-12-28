var CACHE_NAME = 'startline-pwa-caches';

var urlsToCache = [
    "index.html",
    "clock.html",
    "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
    "css/style.css",
    "js/index.js",
    "js/clock.js"
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache){
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});