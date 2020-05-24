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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","93dfa9c3861157e86fdc127f98c3e4c8"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","47c9b30ad30cc89f71cf97847d349f7a"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","1528aaa380453005f26b4929bb50bb4f"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","1c4b1de631557a01ab8188765ab18617"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","88d7803eef1725d12912eaef320a26f4"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","31c773b560f7a8866d998367b67e6cc8"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","9d18b34f0d5ca5937b443af415434377"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","0bba52d2ba8f7bc1687a99e76e6668cc"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","227539cd7da4100c05a459c91b335ae5"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","07b46dc7c95a910d31568355753e636f"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","3bc83a80f32fadc4151946a775b85bf9"],["C:/Users/19029/hexo/public/2020/03/20/physics/index.html","b261b0ce8a3d33bb749c128aabfe0682"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","924937a9644ef6d775a424e43cab86b2"],["C:/Users/19029/hexo/public/2020/04/15/模拟电路/index.html","1f884f23404009ed007ce52c702dd57e"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","432b693a053d0aa6273b400b505947e2"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","c71ed001ab483f31fa5276816b38c45a"],["C:/Users/19029/hexo/public/about/index.html","255f52dc74f60edb3c429d4b35b22941"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","45ba1393b6c5b7b7a9fbff12ae4c7e42"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","0c00b5816c5e047af2dcf75ffaf8f19e"],["C:/Users/19029/hexo/public/archives/2019/index.html","ad09ba1fe3e33d4003ec73c20b677c29"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","45b60419c4a4186ffd934a21c86defb3"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","8c4245c0b48d0a7ec8116608a079c839"],["C:/Users/19029/hexo/public/archives/2020/04/index.html","0bfee37d9cb6345ed27284c15d33b067"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","528b635dc671c6b99d4420b0dac35862"],["C:/Users/19029/hexo/public/archives/2020/index.html","98257d4e4aebfcc196341667881ce1bb"],["C:/Users/19029/hexo/public/archives/index.html","f4af594a82c2132627e71898c0bf212f"],["C:/Users/19029/hexo/public/archives/page/2/index.html","f67e2effc313d7467970efc69ad685d2"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","1e1e855f3124a5a487d520961ae1f3c2"],["C:/Users/19029/hexo/public/categories/index.html","b9ab605043fcdd705df831b24680b11b"],["C:/Users/19029/hexo/public/categories/写作/index.html","390353f315c196e635538bd22cac586b"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","af4d9aaa452dfb8cacee37302906a0c1"],["C:/Users/19029/hexo/public/categories/感想/index.html","0f7b91ced4c8839f6b364fa89c130ccf"],["C:/Users/19029/hexo/public/categories/数学/index.html","f664215c881ca6200dfe46511c038a99"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","d2c91b2e5123e59d7748b155a6beb9c8"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","6fd12deb1a5d97a497738d8ff02be912"],["C:/Users/19029/hexo/public/categories/课堂笔记/index.html","24c16d6ef8bc1e7989fdef97e9997ac0"],["C:/Users/19029/hexo/public/comment/index.html","09fc3d45119c74855b3bf2b4adfa9c9a"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","62fdc5260bcae830e66b0fe4c59a5681"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","65b64b69b2c36d4d5e7945c77ecd2088"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","f14f50dd8ca369072a0e8cb2327a8d29"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","bfd719c5a10f062eda4ed3083a5841db"],["C:/Users/19029/hexo/public/music/index.html","ef82158d6b50bac051773ba5768fdc3a"],["C:/Users/19029/hexo/public/page/2/index.html","a269566717bb84e7458ead2c10bad211"],["C:/Users/19029/hexo/public/tags/English/index.html","da2e06cf18a0e11873e79dc5c3481f22"],["C:/Users/19029/hexo/public/tags/KNN/index.html","2840a14cd66272f221441d5dd61cbb92"],["C:/Users/19029/hexo/public/tags/index.html","71535e2754ff018e90dd81f77e2d57b7"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","df3bfd595e1b8df91ea019123d1d0543"],["C:/Users/19029/hexo/public/tags/总结/index.html","efa617a621137927b2f25da42979dae0"],["C:/Users/19029/hexo/public/tags/时空/index.html","f7e6472ee89dd6c73b5607224835ae42"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","601c1a77560f8c7bd993ead2bf9b41e8"],["C:/Users/19029/hexo/public/tags/笔记/index.html","cb5953f655858638a6d854d4e3d1046e"],["C:/Users/19029/hexo/public/tags/线代/index.html","744d7bfb42795ccf5edc1c9cc9c79f28"],["C:/Users/19029/hexo/public/tags/读书/index.html","d22f361af2ab99f3fdccf59a7a955a6e"],["C:/Users/19029/hexo/public/tags/随想/index.html","d57c236ab67b1424f2b87aa8d20b9c3c"]];
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







