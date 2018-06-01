var cacheName = 'ronnelsanchez';
var filesToCache = [
	'./',
	'./index.html',
	'./js/bootstrap.min.js',
  './js/nprogress.js',
  './css/bootstrap.css',
  './css/mobile.css',
  './css/nprogress.css',
  './css/styles.css',
	'./img/philippine-bg.gif'
];

self.addEventListener('install', function(e) {
	console.log('Install event fired.');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('Caching app shell...');
			return cache.addAll(filesToCache).then(function() {
				self.skipWaiting();
			});
		})
	);
});

self.addEventListener('activate', function(e) {
	console.log('Activate event fired.');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName) {
					console.log('Removing old cache...', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
	console.log('Fetch event fired.', e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response) {
			if (response) {
				console.log('Retrieving from cache...');
				return response;
			}
			console.log('Retrieving from URL...');
			return fetch(e.request).catch(function(e){
				console.log('Fetch request failed!');
			});
		})
	);
});
