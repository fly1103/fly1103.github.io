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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","9c2ef29e0fdc224918b35d97f61728d4"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","75e1a99013fa79f59fea35aedbb006f5"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","d976c38b3f7c228215cbd35dd9848f5e"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","a53a8b377c93023fabdfe51fba111c6c"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","19fcf2ebd5cfc8fd337481dfa8860ed9"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","55faa964387a4c8c71942a61b5f5e101"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","94522cff3547913244984c11d0c9130a"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","14fa39d62c0f68c4f4e77a583e5885db"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","c149ee3a0e8e0036669b125d5ecdaec3"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","d67ff51a689b47e9f35d3acd186d87c1"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","32989caac608b4e340030e896795be88"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","4477c4981c3cc8809be64591b8ac4bfd"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","46d75821f89351ecea675c7340a5be59"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","151668fdb2ca7c9d513207d58cecddf3"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","61fa278a6b82fad8c709549f11a5fb7f"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","eca3ca99cd9fd8e214dc6b748087300b"],["C:/Users/19029/hexo/public/2020/07/29/sheep/index.html","531e8bd0e3dc965575f55056ce717ee7"],["C:/Users/19029/hexo/public/about/index.html","8e3346d76d46f267215ca017ce98b4e0"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","3f53d7ad3c9a68ee58029cd437ba680f"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","585d4eb215e6f4fdd4bf5e57cdfe41f9"],["C:/Users/19029/hexo/public/archives/2019/index.html","d0f7fe4b3889090635b35042b899a8f3"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","346b46ea64fd0f0cccea4edc1b744b45"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","d508ef90c40662914e16e1bb3e00a9fa"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","745ffe1cb1a0968ec683330a82c60fa1"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","f57d1912340ee9cdfb5c0bbef8d1cfe5"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","207acccbb9660272845faaf1aa47321d"],["C:/Users/19029/hexo/public/archives/2020/index.html","774074ef0310e0ef90b6891b334988c2"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","f666685951aa78bea7c7dacbb85c7a23"],["C:/Users/19029/hexo/public/archives/index.html","c6a482af5f8be9495a1b555b87efc9e7"],["C:/Users/19029/hexo/public/archives/page/2/index.html","76f3387082f37b77f9876644b8e19abb"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","c809bf6e8add3d27816cc2b2315ef054"],["C:/Users/19029/hexo/public/categories/index.html","0e5508e499a999042e937a754c1ec5d5"],["C:/Users/19029/hexo/public/categories/写作/index.html","e3ece663c41aef3d7274afddf4c034fa"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","af79eb2041a1ad193cacc3bd62aecbce"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","fee6420774bef75dc115847ed8c49c5b"],["C:/Users/19029/hexo/public/categories/感想/index.html","14210ffeb31342bcfaa8b2d49f283ef4"],["C:/Users/19029/hexo/public/categories/数学/index.html","ab34d18a1bb47887b25f415a8b9caf5d"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","2751f53f2355a6de7acf1585830eaef9"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","2601b4ae567ebb5afb52537ec76087db"],["C:/Users/19029/hexo/public/comment/index.html","4fe6b8408e6ec15f09c9846f5e3e43f7"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","b278f8d2948135366d0e5502a7c50f10"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","98a7937609da20e2668d93cbbbbafa6b"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","1296523e1b107be62d1118cdd81e387c"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","5c0f61d8362d3d843a1854b873987bbe"],["C:/Users/19029/hexo/public/music/index.html","c87e8c611e5859c7bca467217a4c5b3b"],["C:/Users/19029/hexo/public/page/2/index.html","346b650d65205d717e5ffcdda444d470"],["C:/Users/19029/hexo/public/tags/English/index.html","3be343e029fcba38538fb4e2287d5d1d"],["C:/Users/19029/hexo/public/tags/KNN/index.html","ce902dbdcd22c46f2306cbfbf4ee8f61"],["C:/Users/19029/hexo/public/tags/git/index.html","f9c42e521b3037598141829bd5df5a83"],["C:/Users/19029/hexo/public/tags/index.html","9fa607c3b25049f5c359bfcedf3d7cb7"],["C:/Users/19029/hexo/public/tags/假期/index.html","142681eeb949a197aadd27a332458411"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","58395def4a51a3f14e75cfa60dd7d670"],["C:/Users/19029/hexo/public/tags/总结/index.html","a59d2802a4815d961c5ba8d46c069502"],["C:/Users/19029/hexo/public/tags/时空/index.html","2a078eddc9a61dac94718b9bec51dfa2"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","32e5c6c8c4a8862805ecd1a1e4498b04"],["C:/Users/19029/hexo/public/tags/笔记/index.html","e8fbb3bb9ab3a1c61db97e4123739640"],["C:/Users/19029/hexo/public/tags/线代/index.html","b7a000ef23a165cc5c13380b6c7da367"],["C:/Users/19029/hexo/public/tags/读书/index.html","0ab389796c9db83d5a1ebaad6099f2c0"],["C:/Users/19029/hexo/public/tags/随想/index.html","f742c2037e942f4415d789ad7ebd8b1e"]];
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







