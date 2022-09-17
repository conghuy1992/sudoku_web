'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "185f26ebeddf704501049ca172567d3d",
"index.html": "36fd82cbebb389bb91fb07bfb9625852",
"/": "36fd82cbebb389bb91fb07bfb9625852",
"main.dart.js": "a8462454340450161b72669db0727345",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"README.md": "26c1ee308932c74797a854b5f7673dd3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1a411b0ca597342b7959d3d810c679f7",
".git/config": "1ad5283b3d6b8a61237c3a8c3292c612",
".git/objects/df/b0b08a2c584caf79b64ab1d0e9a0ae8a3a04f8": "05e16b9701c0d664503d96582ece0c15",
".git/objects/d1/5b87879e0d7a2cb9e3a9bcf500904bb86a8d5e": "e1a702db114ed8d6a7b4ec0a2a051da3",
".git/objects/pack/pack-139e2599296865aad82f7fd4eab0a695678fddca.pack": "a5ee57049b18f5163145786303c738eb",
".git/objects/pack/pack-139e2599296865aad82f7fd4eab0a695678fddca.idx": "18428901233277d6290687805a7964fc",
".git/objects/29/f7844aa5ade6e4c6a45e07af49c4842ac1c41b": "9c30c06f9b0e25f2d40b6e152d032b6b",
".git/objects/42/6abe00ac2ce7da8723d1a368379bd1b26f9171": "ee388f02bdc62ab0c2ccc5435da85d26",
".git/objects/1a/83451641df2edcb50c911ce3e6a1fe7c0d6cbc": "229fb2f48a195c70dcddd04e11d3d48f",
".git/objects/01/060211421f9831e9f5a35874a5045e7ea33c9a": "d6113b756c0577bf0d6e5eede2ac65d3",
".git/objects/e9/30273005686794f7b0a49e641c61a00524be99": "ca12c1341b5364d82395525e9cb8d4f5",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/84/73f95d2a57570eea2174eda00dd7c63df62104": "4be1df4cf579252cc4506952c1dd7d96",
".git/objects/1c/a435fcabb9ffa374edccf6ab4885096ccf204b": "b51cc762e618b469947b9f2d82901f96",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aff858fc6f5aca78757dedd6c698290f",
".git/logs/refs/heads/main": "aff858fc6f5aca78757dedd6c698290f",
".git/logs/refs/remotes/origin/HEAD": "cc0d0acc0145b5bb61bd318e820f9d4d",
".git/logs/refs/remotes/origin/main": "22bd4480c2e9c1f85fa56a8ee2152c50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bce1088cd158da35a551fc74dc449d58",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bce1088cd158da35a551fc74dc449d58",
".git/index": "7e5a365df607aa4567e62cb79766d0d1",
".git/packed-refs": "fd6dcc1a943c86257557e3881a84796d",
".git/COMMIT_EDITMSG": "7f561fee02043bb43351a4a46eca23ac",
"assets/AssetManifest.json": "37781c4f5df43aa8f0e489f22218ceb9",
"assets/NOTICES": "49d85725ff5a1c3622aea0203de37f04",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/sudoku_level.txt": "7113758e4760c6f46ff00c95ed212ed9",
"assets/assets/images/ic_tip.png": "da32489eda1fbe4cb64737af5740649c",
"assets/assets/images/ic_alert.png": "ecbf45cc567821223fda1d7fd824b633",
"assets/assets/images/ic_eraser.png": "b7746378e6f2e72330837b76c57335e4",
"assets/assets/images/ic_highlighter.png": "2cdc543a1a77b0ff867fa08604458dd4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
