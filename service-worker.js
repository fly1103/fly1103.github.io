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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","6340acbff134a41fd2480ec0277981ca"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","93b4497ab2ce9de17418028a3d0bb7be"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","cb0d30c5c6168f9808667d206e067b19"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","20bc83b26f906a2ef79cd3f1bc16ed2c"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","764f20895b713943ba2e4cd3ef08f57d"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","2a7729ff1222f2c05ee8b6d743517873"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","9c750356b09123c7636e6baf0597cdfb"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","7c0d5db8d2320bfefe4f36cad12ad4e0"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","77473d66690d9d7cf8119561696e371c"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","9c79654ed5986119df379197099f699f"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","cb828a23d6c6f851a1c8a7924f65269c"],["C:/Users/19029/hexo/public/2020/03/20/physics/index.html","9725ea8eba52baf4c8922eed5788c229"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","74088de7beb3ae9d0cc03bce42484faf"],["C:/Users/19029/hexo/public/2020/04/15/模拟电路/index.html","200fbc790aa4d76623d64be9d6b0e945"],["C:/Users/19029/hexo/public/2020/05/07/电子线路实习/index.html","3f32b58fb86a4f916705bb66e47cd7ea"],["C:/Users/19029/hexo/public/about/index.html","5aa7161f71a190257d53e37125a619f4"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","bd0f44341c74ead60daa24a0f77af0ff"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","e32b985281dfea461e93a93840174c4e"],["C:/Users/19029/hexo/public/archives/2019/index.html","1cbcef3fb5a28dc3bffcc6528006aee4"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","ce488688064d4c346261067043fa7b8d"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","51b5a4f44f120b77608cc1c6a938ae41"],["C:/Users/19029/hexo/public/archives/2020/04/index.html","cf8d69c9ff927c3374e57338b20b92ba"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","e5eedb37ccb5295c8b73fd54271bbd55"],["C:/Users/19029/hexo/public/archives/2020/index.html","e3e39e1f3ab59e069918f86de6300db8"],["C:/Users/19029/hexo/public/archives/index.html","e66a772b84a9cb4e0f1f0e92d636d89e"],["C:/Users/19029/hexo/public/archives/page/2/index.html","86ba943f0f52afe72778b3b241c4e18c"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","ad21799d387123fabbeaf05b774a4e79"],["C:/Users/19029/hexo/public/categories/index.html","1f2566c0f4f129429f5a3bb9c32ee221"],["C:/Users/19029/hexo/public/categories/写作/index.html","af3247ada17793e598fde4f116cd07b1"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","67ba4421ebc7c042a586941e07671379"],["C:/Users/19029/hexo/public/categories/感想/index.html","3bfac81c0749982ab9c83ac15374e0a5"],["C:/Users/19029/hexo/public/categories/数学/index.html","eb930acfe301d3fce4ce3380d517b12e"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","1353896b6a925a4ce4b228928c3b1121"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","765486ae88d7f1c0c0a73ce9f89e0568"],["C:/Users/19029/hexo/public/categories/课堂笔记/index.html","51a9da7442670a5ba12e860c8ebcf0cd"],["C:/Users/19029/hexo/public/comment/index.html","a17b925609ba55befc28df2642241d8e"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","f3a0397804dfcb835b795b460dfbece6"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","67bfaed8d2fec70ac65dd2775ce1729b"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/link/index.html","35fc3467eeb11a48552dccc00a458068"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","80fc4bb4d1a561dc494e69d9119c34a8"],["C:/Users/19029/hexo/public/music/index.html","51cb131477a516a0eacdf1f58a230c92"],["C:/Users/19029/hexo/public/page/2/index.html","45be67fd74edaa26ba142c352a3ada7f"],["C:/Users/19029/hexo/public/tags/English/index.html","a481b46584049aef363ade55607b099e"],["C:/Users/19029/hexo/public/tags/KNN/index.html","65b25b33876090ab98b85f917cc2141e"],["C:/Users/19029/hexo/public/tags/index.html","76daecd0ab02da1b803fc48f543e142f"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","d635a7c4dc82b40b9ecf2e7efdee6616"],["C:/Users/19029/hexo/public/tags/总结/index.html","446753bc5982e4e8b4f7e999fcced3f7"],["C:/Users/19029/hexo/public/tags/时空/index.html","511cd23f4b8bfa3846bed0e21b70c9a2"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","9d4ea442fac595fbc49e5c0872ec98fd"],["C:/Users/19029/hexo/public/tags/笔记/index.html","997398428aea520540fa52dd11692ac2"],["C:/Users/19029/hexo/public/tags/线代/index.html","5bbfebca9ea04999295bd875e2202b4a"],["C:/Users/19029/hexo/public/tags/读书/index.html","ce15b8ab442845387bd8677f09f8979a"],["C:/Users/19029/hexo/public/tags/随想/index.html","7773e985a60008e6056f307960161982"]];
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







