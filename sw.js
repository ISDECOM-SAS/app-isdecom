self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Solo escucha peticiones, necesario para que el celular permita la instalación
});