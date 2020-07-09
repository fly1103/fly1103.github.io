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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","53f458cbe23f96248fc15d9f6fa55111"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","b545c32e30240f3dd85a652e6a0bfe32"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","ed3f47a016a45576a26499027fa173be"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","3ee446ad2237975547ee7f37cb7f63c3"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","b4af78c4815408eaf600070b5368eaaa"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","860cacb9199db4911d647f42fc0286b2"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","06e44c3d85aa62d82cf559cabcfa8549"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","441dbc6ba75440c530968ae62b090511"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","63fc6954dc3c76bc897f778237b30e9b"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","568868af5527b0b3bf5e395b4623a482"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","cb65c746da5cbcd6f928f005ef5b24f8"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","3a5b500b91578fdcdad78f454b0b6c0d"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","ee54d74a37dfedc32d759a8ebd0c7232"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","2326bffa388b69538399e196da6c5e67"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","4b1c9c8099178c543ede62e50f2d0dd2"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","e4e5b2c13399846e7fa37013442cb6c1"],["C:/Users/19029/hexo/public/about/index.html","395a603f533ce9fc5858d75c83db581c"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","273605ac4f71ce4cfe9fe59c3628e347"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","c4908c42fee8d1f8bc2af51ff3bd2412"],["C:/Users/19029/hexo/public/archives/2019/index.html","00d4dd4deca74c2ceb4aad8b4466d324"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","ef2bb8fd634bb0b25106ebdf3e1aaae8"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","73965397ee74d817dc9dba25cf074883"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","453bbcb1c3b9f412e0f19a912513d531"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","96deaff888ac31af55f3223acc7c3132"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","1501b5161e8653ae89412cc1e4c7ef4b"],["C:/Users/19029/hexo/public/archives/2020/index.html","4ed6ad8092121f8fe418e9e093bc1216"],["C:/Users/19029/hexo/public/archives/index.html","aa97592ebd5c3649c301236ade059b4b"],["C:/Users/19029/hexo/public/archives/page/2/index.html","9c8251ae878c49f1edd067951737c8a0"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","f50248fa301d5c816184689eb010e647"],["C:/Users/19029/hexo/public/categories/index.html","b27593f843b4cc22b4e624d711e04078"],["C:/Users/19029/hexo/public/categories/写作/index.html","a87755de8ec93f29b59bd9ae338878df"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","23b1d5c1b03070646ec00af4256c7eb6"],["C:/Users/19029/hexo/public/categories/感想/index.html","31a19416d74bd6b1068a902bc45dd0a5"],["C:/Users/19029/hexo/public/categories/数学/index.html","a365f37179a03f1ac7b35f8e6768a870"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","23264eb65b9324055c70cc38e036483c"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","2195fbcc8254c69698f0470775f5a118"],["C:/Users/19029/hexo/public/categories/课堂笔记/index.html","e44703c3b1de2007df7d3cd6555d91e6"],["C:/Users/19029/hexo/public/comment/index.html","e7ff720a056a9b0008fd972671f8ec82"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","dc6ee704277ca1b72666f7f18a2f7568"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","c7d62d555c44b43239e040d9a11503a5"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","162c0c404269920c8f742607cd4c86e5"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","9fab198eaf3512a3547422d0e88d850d"],["C:/Users/19029/hexo/public/music/index.html","a204f8835616d8b7e224a4c859e410fd"],["C:/Users/19029/hexo/public/page/2/index.html","2a1ddc41137694cbc48ee9ca51aa5aa3"],["C:/Users/19029/hexo/public/tags/English/index.html","7be68c8eb63fb88ad52a571d19d44771"],["C:/Users/19029/hexo/public/tags/KNN/index.html","c7c9db87b5e7724827ddbf0d98dc266f"],["C:/Users/19029/hexo/public/tags/index.html","6e80fddd25116e63d3949e5896cae2cc"],["C:/Users/19029/hexo/public/tags/假期/index.html","06c93179b528834d0eea775669d393c6"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","19f4feb31007488a41316db3a3ac85ea"],["C:/Users/19029/hexo/public/tags/总结/index.html","9d89eaac02f6ff71ddfe94ed5c450122"],["C:/Users/19029/hexo/public/tags/时空/index.html","3492f56a18b9761bca46d9af75a9da45"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","ddfb152ad1c023cc3c62204998e5c592"],["C:/Users/19029/hexo/public/tags/笔记/index.html","43cfe962c4ffd05dc8953cd5c1b48370"],["C:/Users/19029/hexo/public/tags/线代/index.html","34b3ebada314a122a72a3db0eb14d7c6"],["C:/Users/19029/hexo/public/tags/读书/index.html","8f83c01ea875da171b5ac3e71302e75a"],["C:/Users/19029/hexo/public/tags/随想/index.html","0e90e70426f7beee767c75354c00f189"]];
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







