importScripts("/imgalign/precache-manifest.23b52bc5e29bf73b83445bd0d9b7fb56.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


workbox.core.setCacheNameDetails({prefix: "imgalign"});


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();

workbox.routing.registerNavigationRoute('/imgalign/index.html');
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize();

self.addEventListener('install', () => {
  self.skipWaiting();
});
