'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "185f26ebeddf704501049ca172567d3d",
"index.html": "1dc2dd2a2ca5f471a8988206c2b15a72",
"/": "1dc2dd2a2ca5f471a8988206c2b15a72",
"main.dart.js": "4d5e86ee8a3fc3bfee68975ef62dd40b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"README.md": "26c1ee308932c74797a854b5f7673dd3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1a411b0ca597342b7959d3d810c679f7",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/ORIG_HEAD": "2fa54e1b7fa67e9c54bff22b40b9a13d",
".git/MERGE_MSG": "aa2d05c1669cdac977f4fb9b9fd3af25",
".git/config": "1ad5283b3d6b8a61237c3a8c3292c612",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/b880cea42b0968c817a1c8d8d00bc2ea684beb": "cc0c9d7dd9eaa02593bc4eb4a8e57e7f",
".git/objects/6f/7a91cd545c15a2b60033dfee600daf84cdbe99": "5ab99d75125c8abf2dda816628d9aee1",
".git/objects/33/b67cf33e2b1f10081d80ced910e79f0131bc7a": "676a6810c14908f783187c7f60f860ae",
".git/objects/be/6b85f1a38374d327155db0ce5a505ccaea91cf": "f4f681705f3d9afdf963670df47cfa1f",
".git/objects/df/39b8873c0e51524667e4b02309bf9c6715f0ac": "5464fffa65268d69ad724283a6cc22e3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b8cec33d80e4e3c7ac06c0283c657770d31f61": "a93f074b790bc8b44802490e68071043",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/73061a5c20f8a66bff87cd25c9365de98d53e0": "598bde4f1cd412fd992b99d4d2432d1f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/pack/pack-7414e952dd95de3e89c0bc0558f92ce2ee9abdb3.idx": "2dc27a3469992e5e8b962dd97126b7df",
".git/objects/pack/pack-7414e952dd95de3e89c0bc0558f92ce2ee9abdb3.pack": "4dee9659146c9c9f18fed8377da7a016",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/c12399566963d34c2707884154020f0e295b85": "dc581ee8bcfe5e82c244455eee286e67",
".git/objects/29/f7844aa5ade6e4c6a45e07af49c4842ac1c41b": "9c30c06f9b0e25f2d40b6e152d032b6b",
".git/objects/74/d7b94c0b96e457582f9e62f6d865d324e79db2": "cd78bcaf175418a6c08908a0807b9853",
".git/objects/1a/a6d478fb0ea0577aefb552b2d3cace5dd27873": "28de49d582f6043d5e100f3bade44be5",
".git/objects/17/5b3cc9ceffd5c430969e6d86bb90cc6fcb0fe3": "1d8d7321fa5baadfa99c24c44af0ba6c",
".git/objects/8a/261a82b54edfc31988a98f06cff4a9c2061a7b": "6839f6cb17edd3f78e5470fc550bf23e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/2cad56632b020a3b76c709ba810f1b40c5f3f5": "9275ed575f3cb2da87dc9ecc86dacef6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/6327084e23355413c1ad9c8772ff03e416cdde": "1941a87262a4529d6eca4bd2caf6c3f5",
".git/objects/36/b963aa1de23e43229a6d69f8a5d58ced37ba4d": "934b278a77d544d821b65f7adb008697",
".git/objects/65/8b29f41ea4a010f2897f9aa3e436f36901d9cb": "0f06cc5084189c9c1f11c2b631290aae",
".git/objects/54/8a10c70c8acfbe8c31193953a20103031c406d": "67b0738a814814f72430cf6570efa736",
".git/objects/3f/e502f56db24477cf09e71cb29d0b393b3a7d71": "08369c57c0996273b970c60d5844e187",
".git/objects/5b/1896f34dfd2e84cdc5a892bdee9d6ba12ee884": "5c397ec6e4231e649d82a84951a5ce03",
".git/objects/64/c60a178039f9215babde2ce0cf47a958c8aa5c": "ba1874b11bde39f1ccdb198babe0d070",
".git/objects/a0/301bea862ca865df65598dbf694510fe3be0d3": "3336365aec6974a17b10eb5256d500b3",
".git/objects/b6/2a60ffad6bcdf77073145ce87daba5aa000d40": "7227a841dc58c1e9be4c6c2d2b4b5b46",
".git/objects/af/5f02ccbf83b27579bc48101ceca832ee5241f0": "9dc3707ff91756cda163a6834a666396",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/daa16f945b6726a59a372cbcbe4a36930a7393": "f2c5f771af928bc8c7c68fdb90f032bf",
".git/objects/b0/6fdf76e0f1e8d193c17be701c7d0e9f52f817c": "d857acebf4e021f878c390043121ff87",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6c5c640b67818172fe6cc597ff49e32be239c1": "f8cb751a30d29e2890d0a6a6f919cf16",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c5/4071aa1d0b57b95c302c4adcd925814689eb30": "3d781578a92b370e8636a2746a965075",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/30273005686794f7b0a49e641c61a00524be99": "ca12c1341b5364d82395525e9cb8d4f5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/693893da7e03a58f525645ec4048215841164a": "9af2e275df5401348d362cdaec691177",
".git/objects/4a/d38ba8845aa045912263700f2f2319653962ed": "dc2438b7d884170ae020d6ae7c582f74",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/d1fc46b001b3bb236f8c17e35344e66196019c": "1e79f3490b21a2420bac452d5faf8869",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/eb281e8b56c83b9cb47d2420ebb8d86625f87a": "708ac43cdeed1f7d5116d513d74886e8",
".git/objects/13/77cbd152f5e0c41215980635d0d978ba20d3da": "2279c57d81bb00dd3ea1877f7e6154b5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10d1971df1b08eb5c04f59da724ad17f",
".git/logs/refs/heads/main": "fa02c5fc8801aac9180648a364d578ce",
".git/logs/refs/remotes/origin/HEAD": "07862281bbf53c31a59062c7ea1613bf",
".git/logs/refs/remotes/origin/main": "b6f104c314fb73443fc0bb9114b04ec6",
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
".git/refs/heads/main": "2fa54e1b7fa67e9c54bff22b40b9a13d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "088d1264e8666c83db05cb989cdaa3c4",
".git/index": "b4cb8fa511c2a46cd762b244acd82e59",
".git/MERGE_HEAD": "088d1264e8666c83db05cb989cdaa3c4",
".git/packed-refs": "89ffa87ab4341b7acaa49516e43ae0e8",
".git/COMMIT_EDITMSG": "7f561fee02043bb43351a4a46eca23ac",
".git/FETCH_HEAD": "6b1c2e92ed2afe3eb9aa34e66a5642d4",
"assets/AssetManifest.json": "44bf31fd030c392ee4b33a8ffb5b4cfd",
"assets/NOTICES": "49d85725ff5a1c3622aea0203de37f04",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/sudoku_level.txt": "7113758e4760c6f46ff00c95ed212ed9",
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
