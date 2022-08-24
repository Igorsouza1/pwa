/* eslint-disable no-console */

import { register } from 'register-service-worker'


//PADRAO
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {

      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      self.addEventListener('fetch', function (event) {
        event.respondWith(
          caches.open('cavalo_pwa_v2-precache-v2').then(function (cache) {
            return cache.match(event.request).then(function (response) {
              var fetchPromise = fetch(event.request).then(function (networkResponse) {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
              return response || fetchPromise;
            });
          }),
        );
      });
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}




