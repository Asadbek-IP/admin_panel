'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9bca7b4d704f5e6f84ee1383c1451721",
"version.json": "e2beae725bda21014aff2f51a18c89ca",
"index.html": "ff5725744461d8a24ad2b486951bd544",
"/": "ff5725744461d8a24ad2b486951bd544",
"main.dart.js": "fb403910f43974df3d34ea45b27a3bed",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/splashTaxi.png": "70c02d17ea9e21f3639819c9c7bcd5a4",
"manifest.json": "f85743accb25a4d8f1f79b127c2a8fbd",
".git/config": "3ac3233fa80a009b7777dbaf217435d8",
".git/objects/61/1e922127a577fa2701da32058f1e992163ecfe": "d381cafa29bf53effbdfa6f606e6ba19",
".git/objects/3e/2e15b886d44dc683bfa8aa5d5d59b821caf971": "b501e1377c195632f80f415aefd393dd",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/4da12fe8116d7d12525a85484df9b37568dacc": "1f7bcb4062cf8bfb902c467e1fe032e0",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/886b6a19fa68cc4c57435eb9c5cb95d4013641": "ce888ebc3090a01f14c32b4ee54ad635",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/34/30b6cea95e5c3d2c9f386d768d790513c93a0b": "425eb71978cb5a8f53f60a4c440445fa",
".git/objects/a3/f81bdbe85ef13807da646712286cbe40f7b462": "c410cdc7673b1ae56480df28eeb98a77",
".git/objects/b5/1338f3139002a6c675e0c2f48c1be657ef055a": "32dca6364195a40e0f2eb9d454278f91",
".git/objects/bb/e221d9afb3e34edd599cd5eea4cf53d074505e": "e78b6ae691afd83a92f4ae2c174381dd",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ec/4f8f283a3fb64a8ea1a11e83fe4c2118a78ecb": "1c5dbb9fac82c69cfd49c722593a0f02",
".git/objects/29/b1e1a50ae026733594a51311006ee6038df9e6": "8531f4f15a15ce4b5c42d834ab400376",
".git/objects/7c/fa88860339fb950da29c569a6fb615603e4f7c": "38a6566b7fb638fb238077fbdff413ea",
".git/objects/8f/146452357c66687e770b193ab2a730edf2ca3e": "37f3553b85b83b0f711c4d4593782279",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/9f/05119185c156ff07ea9332f93e09f6154b8629": "70e6624197f3f1ad0fcec544703df06e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/eed292ba15c6724864f8ddfd3c6e769a6cd531": "93bff8d9bf2e36c973788b809b1e2e53",
".git/objects/5d/b4f344ee44576cf2b7612f97519ca0776235b0": "d8d903ebe8f59034ae6b52871e437428",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/a4d233b0b27b5c2d1d47ff9e405ecaa22189a4": "c3deeeeb02193ddd3d9d2e4684bc5f09",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/0fd4c46fd2a12789ae87e7bb698973f7aa20a4": "d9ed320693f48bb9cf51758da1f0f1e8",
".git/objects/99/589e99af718a998b1c55dc6a47e73659c00ad2": "1315eb67c4c2f4f3b425fa0eae891bd0",
".git/objects/99/b5c6e486c965d03d94d2f7fccb8bf686a021a4": "53e1627d80ac06a23314d40f39357053",
".git/objects/63/1dd7db61eb07d19c7273ac6d8eef4949609c45": "067bf863c7b50c6b5572c05f833f79c5",
".git/objects/90/048a22fba561811e8cc8d9e39a144d832867f1": "a759518daaec7f6f2e3a531b24d7325f",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/ba260fb6d5e82a9358a4f41d775e57a2f73085": "1e47b40e14c03b61cf7b77b65c58603e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/c8f1126cc4878a3d9cbacd65e80d216465e800": "8736316ad68f339dcfbbc3d172a5c424",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/767a5e6405f7fc0bc9d8c4cccc40d76477e9a1": "e34f06418189dab35ba7b293a96c1e7b",
".git/objects/db/be8983e3966072099a35b4141fd963f113cf53": "adfb3c3e6681183c9a0f5635c854bb5e",
".git/objects/ff/dad7c655de3f34aaaa38257a37d8e5468bd1d4": "4a7720230b8676da6ee59382f0091f93",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/17aeeb5d367eb84ef30bd058d6ee4718bfdf4e": "b257b5ada53e111f071e8b31c7caeaa5",
".git/objects/23/256eaf164aa81eb76b09b03982abff65f71207": "c7cca4f25f344420b24ae84195b4b3fb",
".git/objects/2e/dfb1ed6bf8543c38da4ee495709886062ab208": "fc3e131278032b44ffd803e4e9243993",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/71aaf1b2eb1d72acf6ada0c3c23f12f1986a20": "11a53bd0ee9ab9c5a6b1bebd8c641e6b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44c2594f304d60d6aef1d8be93b8495b",
".git/logs/refs/heads/main": "a008e46147b519ff072ac209238ef745",
".git/logs/refs/remotes/origin/main": "6cb5e1ed33d8ed4a2f26cedf5ef6d403",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3c50936ccc2696863c77fa5b9a8be90f",
".git/refs/remotes/origin/main": "3c50936ccc2696863c77fa5b9a8be90f",
".git/index": "bc29459f5cf4188ad29dce7770aea71a",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "1fe1d55e768dd367f07b02bb1295488d",
"assets/NOTICES": "d1e0beded4c801c7d4fa96b67c480905",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "7161d57d3510c144412b83d571a66f5d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9d639f4020f82df18b6718e02d8a888a",
"assets/fonts/MaterialIcons-Regular.otf": "5bfe3cebf256492d4957606f72667285",
"assets/assets/images/lider_white_icon.png": "70c02d17ea9e21f3639819c9c7bcd5a4",
"assets/assets/images/lider_white_icon%2520copy.png": "70c02d17ea9e21f3639819c9c7bcd5a4",
"assets/assets/images/marker.png": "cfc4da7810da241e0e6b2d8f3772ef84",
"assets/assets/icons/driver.svg": "3a186cd32772015a88b7245ed1feb0a4",
"assets/assets/icons/tariff.svg": "f6fd0884e2b3ce54dca598540f626ae7",
"assets/assets/icons/car-type.svg": "06a35ba213c90f5249d66a2759b6bef4",
"assets/assets/icons/location.svg": "55aa40f8ec2a12fe3b339401dd96b9e1",
"assets/assets/icons/handshake.svg": "c7ada2c31913762a101f784cbffb4b4e",
"assets/assets/icons/stats.svg": "64a7d3743a9e6677a2fb0235afe6512e",
"assets/assets/icons/operator.svg": "6bc42d002335cb70f963243423e23f63",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
