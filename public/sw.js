self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => Promise.all(cacheNames.map((name) => caches.delete(name))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url))))
  );
});

self.addEventListener("fetch", () => {
  // Intentionally empty: let the network handle every request.
});
