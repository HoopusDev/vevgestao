// Service worker mínimo: existe só para permitir instalar o app.
// Não guarda cache — tudo vem sempre da internet/Firebase, como no navegador.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
