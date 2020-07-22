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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","00ad5a778462ea045d6654bc7a1d6a7d"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","de56ccdf26ab7f4787df57b7ea7f24af"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","4a55dc56a39de13781e98b35b15438fd"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","8e261a0840b49d45149add36798d85aa"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","9181081914f533ba108ceb93c834b7cb"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","194115bad324799af8cc6e74f16f14b3"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","bffd9c1d9406d531f0b88c7985defa0b"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","2ffc5f8e78ff9d0fcdaa69a248924bd7"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","974b2bec9998d1a9dc76e7c64b4e2f6a"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","a62571d7157256420c8436f91ae632a3"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","a7fd4f5c0bd6e06d7fffac75fe513785"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","7de13b4cf71445a01adf5fa8ec5d5cd8"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","3f3d11ea91b469a76ca973ba1a110bdd"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","9898a3414f4c06f6060bc7f63aee78d1"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","d70fd1cb6c716975aa43d718e3331357"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","ececc815c88747b6bae691cb4daf8e1e"],["C:/Users/19029/hexo/public/about/index.html","37b974f679fc6be990392a3bee8953cf"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","175bd86d98fe9bd6683a8ab60dbea61b"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","f24d21bf916e53b6cce32c8eb37cb761"],["C:/Users/19029/hexo/public/archives/2019/index.html","21e57f59e51d8db1bdb47d6fb7ecc416"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","f066098276786f8c286082794e14816b"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","255143bbc2d33caa82748e766bf57e4b"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","ad7d4018ebc2fcca8b5c2b0142a09feb"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","13cd3a4f2553c5ac51ac539e3d1d754c"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","0808a8084ae589b3634f58c8b8a2de9d"],["C:/Users/19029/hexo/public/archives/2020/index.html","17de62500332e08debdcc3fcc615a2a0"],["C:/Users/19029/hexo/public/archives/index.html","05222ab36b1127f0292a8f855410d4aa"],["C:/Users/19029/hexo/public/archives/page/2/index.html","ab52b512e2b41b1331c3906fd6c04fc2"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","0baa6885f855f22a7a0753516d9e7abd"],["C:/Users/19029/hexo/public/categories/index.html","7a341b85d99dc25fd6eb31f2b58b09c2"],["C:/Users/19029/hexo/public/categories/写作/index.html","cbb8c8214dda017846cec06b14d6ece1"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","ddf35ca1a1c474b2608f878e62015280"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","158273bd843e0fe141392bf736ed02df"],["C:/Users/19029/hexo/public/categories/感想/index.html","3e8d57c59d1dd772ffea79c6c0e3808a"],["C:/Users/19029/hexo/public/categories/数学/index.html","8560678ed5526ddc23f3bd8134f979a9"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","6c32f247a6a34048e5748b551cbc1b40"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","90305eb68fb422a3fd6da47355b70038"],["C:/Users/19029/hexo/public/comment/index.html","78860a67817484b01931db7375eff437"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","b100c863ed8efb5ca65a57add29a6ab0"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","12f15fc0869b55e2b52d7c2e39081fff"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","6b9f7ed1e53c13940ab136ef468159ad"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","03473b4fb3f17047e93c7f58d68905df"],["C:/Users/19029/hexo/public/music/index.html","a9c2d6a9fd017b3a314fd11c92244930"],["C:/Users/19029/hexo/public/page/2/index.html","a87da1ca0e2c04695952c827e96e5926"],["C:/Users/19029/hexo/public/tags/English/index.html","9e612f5f90667ac926f86179787956d3"],["C:/Users/19029/hexo/public/tags/KNN/index.html","4baa814b08f0da98a21cd045421cc1ea"],["C:/Users/19029/hexo/public/tags/git/index.html","2bc90eaf5ff82ff851b61ddad5f0c8fa"],["C:/Users/19029/hexo/public/tags/index.html","9bb6d36970e2967eb52a4ebfecf5aedd"],["C:/Users/19029/hexo/public/tags/假期/index.html","538dd1b82877d29e7fa4241223cdb040"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","5ed0b12699110d055b34b9e3765f9d18"],["C:/Users/19029/hexo/public/tags/总结/index.html","0f615e5b88b0e710d05448f5336dff66"],["C:/Users/19029/hexo/public/tags/时空/index.html","1594b262f56783c70e6fc5749bf5e7b8"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","81fa52efc608d64e51dbff86629aa5be"],["C:/Users/19029/hexo/public/tags/笔记/index.html","6b82891344bb3fbddb0b16a254fad73f"],["C:/Users/19029/hexo/public/tags/线代/index.html","32772ca6b4deba98017bc99282e89fc4"],["C:/Users/19029/hexo/public/tags/读书/index.html","cc936bb4cc609d9d5b6f0f2a1ad3c393"],["C:/Users/19029/hexo/public/tags/随想/index.html","e86fe225b36cfabfc2fb8d8f224261aa"]];
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







