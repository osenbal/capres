/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import { clientsClaim } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import {
  StaleWhileRevalidate,
  CacheFirst,
} from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import CONFIG from './globals/config';

clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-font-stylesheets',
  }),
);
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'google-font-web',
  }),
);

registerRoute(
  ({ url }) => url.origin === `${CONFIG.BASE_URL}`,
  new StaleWhileRevalidate({
    cacheName: 'dicoding-api-list',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'resource-statis',
  }),
);
