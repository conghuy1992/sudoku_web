'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "185f26ebeddf704501049ca172567d3d",
"index.html": "8dcd225b28eaa47e692f01c900197d92",
"/": "8dcd225b28eaa47e692f01c900197d92",
"main.dart.js": "ea3e705669271418588485ae76422f3f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"README.md": "26c1ee308932c74797a854b5f7673dd3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1a411b0ca597342b7959d3d810c679f7",
".git/ORIG_HEAD": "bce1088cd158da35a551fc74dc449d58",
".git/config": "1ad5283b3d6b8a61237c3a8c3292c612",
".git/objects/6f/7a91cd545c15a2b60033dfee600daf84cdbe99": "5ab99d75125c8abf2dda816628d9aee1",
".git/objects/69/9dd77b6ab23cfa66f06847ebce97e8cad53e5a": "79929e8d3a79e6f0162f58f6a2822cc1",
".git/objects/9d/23f0fef23bda5cc9976cd95ebd7a18d70e0d81": "c600e76cdb28efdfc7643c06367e75f2",
".git/objects/be/6b85f1a38374d327155db0ce5a505ccaea91cf": "f4f681705f3d9afdf963670df47cfa1f",
".git/objects/df/39b8873c0e51524667e4b02309bf9c6715f0ac": "5464fffa65268d69ad724283a6cc22e3",
".git/objects/df/b0b08a2c584caf79b64ab1d0e9a0ae8a3a04f8": "05e16b9701c0d664503d96582ece0c15",
".git/objects/d1/5b87879e0d7a2cb9e3a9bcf500904bb86a8d5e": "e1a702db114ed8d6a7b4ec0a2a051da3",
".git/objects/d8/b8cec33d80e4e3c7ac06c0283c657770d31f61": "a93f074b790bc8b44802490e68071043",
".git/objects/ca/0e6b5c1407c7c826364c444db8e22c27ec3f6a": "c2d209f4a786da3c5abff52911bcd63b",
".git/objects/ca/87e8ceb4d5f7cb408820d9f7c560d0572ac9ec": "88a755feb2c940fe1de0801df160e628",
".git/objects/pack/pack-139e2599296865aad82f7fd4eab0a695678fddca.pack": "a5ee57049b18f5163145786303c738eb",
".git/objects/pack/pack-139e2599296865aad82f7fd4eab0a695678fddca.idx": "18428901233277d6290687805a7964fc",
".git/objects/29/f7844aa5ade6e4c6a45e07af49c4842ac1c41b": "9c30c06f9b0e25f2d40b6e152d032b6b",
".git/objects/42/6abe00ac2ce7da8723d1a368379bd1b26f9171": "ee388f02bdc62ab0c2ccc5435da85d26",
".git/objects/1a/83451641df2edcb50c911ce3e6a1fe7c0d6cbc": "229fb2f48a195c70dcddd04e11d3d48f",
".git/objects/36/b963aa1de23e43229a6d69f8a5d58ced37ba4d": "934b278a77d544d821b65f7adb008697",
".git/objects/01/060211421f9831e9f5a35874a5045e7ea33c9a": "d6113b756c0577bf0d6e5eede2ac65d3",
".git/objects/d5/a692d0bac75b0841f30ba9c8e7daa97785b474": "69bacd258d54760ee909b5e7f2cf7387",
".git/objects/d5/1ea214b7c19bf22681f67180243792353ab1ed": "0863d44610d5577b1b0a85746ed80a13",
".git/objects/c5/4071aa1d0b57b95c302c4adcd925814689eb30": "3d781578a92b370e8636a2746a965075",
".git/objects/e9/30273005686794f7b0a49e641c61a00524be99": "ca12c1341b5364d82395525e9cb8d4f5",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/1b/693893da7e03a58f525645ec4048215841164a": "9af2e275df5401348d362cdaec691177",
".git/objects/84/9b2e863eb84babfdc0b1326a13c32716a0fca6": "bfd43275d1ffea2eafda873c1c222dfa",
".git/objects/84/73f95d2a57570eea2174eda00dd7c63df62104": "4be1df4cf579252cc4506952c1dd7d96",
".git/objects/8d/d1fc46b001b3bb236f8c17e35344e66196019c": "1e79f3490b21a2420bac452d5faf8869",
".git/objects/1c/a435fcabb9ffa374edccf6ab4885096ccf204b": "b51cc762e618b469947b9f2d82901f96",
".git/objects/8b/db44516eab1ccf57fcc84d423a93a09aae894a": "742af396bc062dfe369f39eacf145963",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a2f2572cf52c732e7a23abf2fb8c8bb",
".git/logs/refs/heads/main": "5a2f2572cf52c732e7a23abf2fb8c8bb",
".git/logs/refs/remotes/origin/HEAD": "cc0d0acc0145b5bb61bd318e820f9d4d",
".git/logs/refs/remotes/origin/main": "c5a90a4f358e21b8362a01423aa14b23",
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
".git/refs/heads/main": "0c4d96eb4ba15ceae5050c9140b770f0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0c4d96eb4ba15ceae5050c9140b770f0",
".git/index": "d684399fe1b3c0518ca55a2097c226f8",
".git/packed-refs": "fd6dcc1a943c86257557e3881a84796d",
".git/COMMIT_EDITMSG": "628d2c089df08d60db181cf99c7817c4",
".git/FETCH_HEAD": "0710298b9244a64d6216932753fb78ce",
"assets/AssetManifest.json": "a73b137a3f7c5549290c9277f69b09e4",
"assets/NOTICES": "49d85725ff5a1c3622aea0203de37f04",
"assets/FontManifest.json": "8b8da91e43aa488be84dc5706b1a7e3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/sudoku_level.txt": "7113758e4760c6f46ff00c95ed212ed9",
"assets/assets/images/ic_tip.png": "da32489eda1fbe4cb64737af5740649c",
"assets/assets/images/ic_alert.png": "ecbf45cc567821223fda1d7fd824b633",
"assets/assets/images/ic_eraser.png": "b7746378e6f2e72330837b76c57335e4",
"assets/assets/images/ic_highlighter.png": "2cdc543a1a77b0ff867fa08604458dd4",
"assets/assets/fonts/google_sans.ttf": "e4bbdbbd1865865732c8183dad65d983",
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
