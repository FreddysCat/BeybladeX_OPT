self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('bey-pwa-v1').then((cache) => {
return cache.addAll([
'./index_5.html',
'./AVATAR FENIX BEYBLADE X.jpeg',
'./Shark Edge Gear Chip Designs.jpeg',
'./Beyblade_X_Logo.svg',
'./Pic1.jpeg',
'./Pic2.jpeg',
'./peakpx.jpg',
'./Audio.mp3',
'./udio.mp3'
 ]);
})
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => {
return response || fetch(e.request);
})
);
});