// sw.js - ToneVault ThinClient Service Worker

self.addEventListener('install', (event) => {
    console.log('ToneVault ThinClient Engine Installed.');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('ToneVault ThinClient Engine Activated.');
});

// Always fetch the live files directly from the server to ensure instant updates
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
