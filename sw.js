/* Service worker — Desafio Atleta Híbrido
   -----------------------------------------------------------
   O app é um arquivo único (index.html, ~250 KB com catálogo e
   ilustrações embutidos). Os três arquivos abaixo existem só
   para o PWA: instalação na tela de início e uso offline.

   Caminhos relativos ('./') são obrigatórios: no GitHub Pages
   o site vive em /<repo>/, não na raiz do domínio. Caminho
   absoluto ('/index.html') apontaria para fora do projeto.
   -----------------------------------------------------------
   Ao publicar uma versão nova do app, mude CACHE para v6, v7...
   Sem isso o navegador continua servindo a versão antiga do
   cache e sua atualização não aparece no celular.            */
const CACHE = 'atleta-hibrido-v5';
const ASSETS = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      /* allSettled em vez de addAll: se um asset falhar, os
         outros continuam cacheados em vez de derrubar a
         instalação inteira. */
      Promise.allSettled(ASSETS.map(a => c.add(a)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;  // fontes externas passam direto

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) {
        /* Stale-while-revalidate: entrega o cache na hora e
           busca a versão nova em segundo plano, para a próxima
           abertura. O treino nunca fica esperando a rede. */
        fetch(e.request)
          .then(r => { if (r && r.ok) caches.open(CACHE).then(c => c.put(e.request, r.clone())); })
          .catch(() => {});
        return cached;
      }
      return fetch(e.request).catch(() => caches.match('./index.html'));
    })
  );
});
