importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

const API_URL = "https://atenea-app-ud23b.ondigitalocean.app/";
workbox.loadModule("workbox-background-sync");
const { precacheAndRoute, createHandlerBoundToURL } = workbox.precaching;
const { registerRoute, NavigationRoute } = workbox.routing;
const { NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

// if (!location.origin.includes("localhost")) {
//   workbox.setConfig({ debug: false });
// }

// precache all assets, images, txt, js, css and index.html
precacheAndRoute(self.__WB_MANIFEST);

//register allow offline navigation routes
const handler = createHandlerBoundToURL("/index.html");
const navigationRoute = new NavigationRoute(handler, {
  allowlist: [new RegExp("/home/docente"), new RegExp("/asistencia/*")],
});
registerRoute(navigationRoute);

// // Gets Offline
// const cacheNetworkFirst = [
//   "/api/v1/student/getall-students/",
//   "/api/v1/user/get-users/",
// ];

// registerRoute(({ request, url }) => {
//   // console.log({request, url})
//   if (cacheNetworkFirst.includes(url.pathname)) return true;

//   return false;
// }, new NetworkFirst());

// Posts Offline
const bgSyncPlugin = new BackgroundSyncPlugin("offline-posts", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  new RegExp(API_URL + "api/v1/attendence/new-attendence"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);
