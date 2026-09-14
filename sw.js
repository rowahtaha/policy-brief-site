// This site no longer uses a service worker. This file exists only to
// clean up an orphaned service worker + cache from an earlier version
// of the site, so returning visitors stop seeing stale cached pages
// and assets. It uninstalls itself once that cleanup is done.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clientsList = await self.clients.matchAll({ type: "window" });
      clientsList.forEach((client) => client.navigate(client.url));
    })()
  );
});
