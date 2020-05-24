/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","6862bfe74c75644a52bfa75bc8e0e392"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","431c666f0f84681cf2b2fc20ae8095df"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","6d873786051719fa9ca3207e1ac58b6f"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","5a488a573bbaa35ce18c6a2c38bbfaaf"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","4e3ce4f10b439bb41428d4e791cae470"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","75928b28cb18569117ef67dbe22dbeca"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","36250199589b8b207b6d9312ad329266"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","3314f8d98c0f3eca1d13a407270261b6"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","0ad2eee0cd45fbc5b38ed2558cc6bbca"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","0b0e6f09777b0144460a1c4b71b4ef5a"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","40a36cc56e41e4a54675a3250685b920"],["C:/Users/19029/hexo/public/2020/03/20/physics/index.html","d23d5b0eecd2247aadba2c0e7d40cc93"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","9cc85cb2380b90637a749d08d9d44349"],["C:/Users/19029/hexo/public/2020/04/15/模拟电路/index.html","3531b5b8b833f87b33f701b270ffe926"],["C:/Users/19029/hexo/public/2020/05/07/电子线路实习/index.html","b32c33a62cfae1495c3b1eb7609ff090"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","952a67185da2954bf6ed1af942e5b06b"],["C:/Users/19029/hexo/public/2020/05/18/数据库/index.html","38683cb8b40edae96b3fc88bfbd45d67"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","86f32d2dc7c6c9ecef86051114246660"],["C:/Users/19029/hexo/public/about/index.html","8f83baca85f68a5de63e59e386b03218"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","1eab7530f9dfe77ef614e57ae964e950"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","0eb6ef067e43b589012b8341c7b34883"],["C:/Users/19029/hexo/public/archives/2019/index.html","6fae506310f8ef6e8ad9fcae36aadfcf"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","c732722a4a6cd5bfda8ae39160627523"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","7ff8b2289207fc4a5a0ca4613a257d5b"],["C:/Users/19029/hexo/public/archives/2020/04/index.html","53001719918d3f34645e2005517e086d"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","733c7470f04a41e991d572648c292840"],["C:/Users/19029/hexo/public/archives/2020/index.html","86eaed1236f46a61e1cc289c302e7029"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","9422375e96179dc065a1c1c50be7e40e"],["C:/Users/19029/hexo/public/archives/index.html","26e02ee7e76f66a37be0ae4e376ab48f"],["C:/Users/19029/hexo/public/archives/page/2/index.html","7299b5acfa6a45dc8696d50f12ca734f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","10809e9c337648cc7c4e025321ee6121"],["C:/Users/19029/hexo/public/categories/index.html","babba61a98b1dec26e57471ef3cc3dd1"],["C:/Users/19029/hexo/public/categories/写作/index.html","edd2b13bf87861de50566085eed0f2c8"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","67b5a4e3fae9d7adf1dd0683fe03343c"],["C:/Users/19029/hexo/public/categories/感想/index.html","c10bf8591b744651bd3fdf29da3f9721"],["C:/Users/19029/hexo/public/categories/数学/index.html","8bb62d92544e7be2466e07f9accff4a4"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","f509a375c7f4ea2adbd32067e546e1b0"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","1347feefac8bf56809ac42df9b14d9b2"],["C:/Users/19029/hexo/public/categories/课堂笔记/index.html","7d14a788c43190ee0b5f84ad93a6695e"],["C:/Users/19029/hexo/public/comment/index.html","214add7fb0539e0cb793fe2c781a5233"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","7c487342fc38ecd21ba300c8f97e7fd9"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","f301f0edca923e6f03aca07797fe729b"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","2b7f4ce6405429854964f548ed2a4802"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","deb7efec60380af04f4f2a805e2b98b1"],["C:/Users/19029/hexo/public/music/index.html","98daf4c7c1c269785fe1735ad6adc1af"],["C:/Users/19029/hexo/public/page/2/index.html","4a57aebe73f6648ceba505411b84802e"],["C:/Users/19029/hexo/public/tags/English/index.html","14f85790523ec10de7e3bae5ca103895"],["C:/Users/19029/hexo/public/tags/KNN/index.html","5a8a4a4997caf4ef64c5d75edc540b9d"],["C:/Users/19029/hexo/public/tags/index.html","98804556a443e5a41b002d6aaae23dba"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","cf94d6e9ecb1e7bccc261584839171dc"],["C:/Users/19029/hexo/public/tags/总结/index.html","4d784d157311f0cd5af4a0b9912181b7"],["C:/Users/19029/hexo/public/tags/时空/index.html","3b76e173d19619340b2585a372d21269"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","9525ac008ef91cb0fe5aa18935e3d452"],["C:/Users/19029/hexo/public/tags/笔记/index.html","6bb069ed19ba2335cbab9cf3ce0fc375"],["C:/Users/19029/hexo/public/tags/线代/index.html","7c30dac29a21f00b20db681fad7db7ae"],["C:/Users/19029/hexo/public/tags/读书/index.html","03fc234d74aac15d907b8f1964e8490d"],["C:/Users/19029/hexo/public/tags/随想/index.html","0e2befa40630c53099c00ec9b4e43549"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







