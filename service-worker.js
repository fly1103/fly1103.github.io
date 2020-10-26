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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","4d6c72b548dcf8608b362ad1fb9365d0"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","a2545f42c57776b216b0900032958448"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","f397de73daa5a944ad0752e3329a1418"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","dc22bcaa6f9569a049652dc340ad30a9"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","862ab7d3e5300440b4d9923a91bc1169"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","207afd06a9e1ab036880ebddcf30e935"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","3e1be0c021d477eda7c9965657d1aad8"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","ab29165db402e4aa6e70b23977d23c95"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","28d35c988294af5f94903c9b97438eeb"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","2f35344870881ed6ee993d7ec151753f"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","6e9449ecdddfe2b810ab2e0db7b58db7"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","0d3035fe5da7f69c16e945f23997e555"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","8806f6e298155fb79150389a40be08d9"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","80cca266dc2ce9a63315906f3262569f"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","422d500987e93c116e123973d67a4eed"],["C:/Users/19029/hexo/public/2020/07/29/sheep/index.html","8375239862bbaac19ac11b792d82b897"],["C:/Users/19029/hexo/public/2020/08/07/Mockingbird/index.html","9c589d10d9bb19fe200739c3cf870fec"],["C:/Users/19029/hexo/public/2020/08/09/Haruki/index.html","0d45967162fe0987ec7d364bb252c1e2"],["C:/Users/19029/hexo/public/2020/09/13/fansi/index.html","b480a20d8e30b1c1bc4f4766111829b6"],["C:/Users/19029/hexo/public/2020/09/13/summarize/index.html","3fb550f49dd19e0104fcc4d88ce08432"],["C:/Users/19029/hexo/public/2020/10/19/Thorn/index.html","f3417a1bb3bd55a69cd9d780aeaf67ee"],["C:/Users/19029/hexo/public/about/index.html","1641964d4c0e99ed9272dffb82cf3d78"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","599e48fe81fd4557fa5df80827bd1fce"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","b2593b54acc3ee87169953955ab179bc"],["C:/Users/19029/hexo/public/archives/2019/index.html","9ebd49a57ee272430f0332dbfbd27384"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","0465c68f99e98ebb80bbb02fc2b1160a"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","3ab5de84390f02f80c99c7d98006b0da"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","b5134b18a94f0924b041825cfaebc445"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","8f8dc24468c352de842fd3cdb20d2b96"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","3e92a90a310b680e563c89610ad5fe53"],["C:/Users/19029/hexo/public/archives/2020/08/index.html","64d11fb85e4d98a1c744b56a5b13c666"],["C:/Users/19029/hexo/public/archives/2020/09/index.html","f5800ef858ac36ed7ef997579bfef52c"],["C:/Users/19029/hexo/public/archives/2020/10/index.html","1038331a25bc921dda02f87c3a92932f"],["C:/Users/19029/hexo/public/archives/2020/index.html","498d715e152056660c7b1b51d9ce731d"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","a844e504b58f64ae45f0cd952ba2f05b"],["C:/Users/19029/hexo/public/archives/index.html","f23dce40a048ff8f73d56c836d9f3e68"],["C:/Users/19029/hexo/public/archives/page/2/index.html","32f2b57b7f6a73502343226c1f484c97"],["C:/Users/19029/hexo/public/archives/page/3/index.html","6f6c66c2474694e418fcd054fbe3dd61"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","23a87306b56a3d9c09f707fb64bfdf90"],["C:/Users/19029/hexo/public/categories/index.html","bca5f2f0bbf8222282ce760451fbc96f"],["C:/Users/19029/hexo/public/categories/写作/index.html","9e277789b3483ce7af884336f527a5b8"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","be90a1972a8654b7e2a0ea0b022561a6"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","f9ba7225e5deba12de1ed15be862088d"],["C:/Users/19029/hexo/public/categories/感想/index.html","29a1e95bb4a480d523e084f95a6c418c"],["C:/Users/19029/hexo/public/categories/数学/index.html","db7664c1e4b4b10ae7ecb92ffd8f171e"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","770d5c94ed0bba2e6a125dcd39421fe9"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","c77b8a85c1af0b705cc11dab0088f3cd"],["C:/Users/19029/hexo/public/comment/index.html","8ead3fe4fa32f77ce5c3e1a47178fb7d"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","8dda780bff7576f06ba621a33a3a0b81"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","b0aff16a2a3712a2567c8bbebb5eabbd"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","9d7325d0aebc36fcc128de287dd9a9ce"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","bbc2d52e5d183f7951b22b80b2c52ae8"],["C:/Users/19029/hexo/public/music/index.html","a7e6c41115c92004a2abbfb843d199a8"],["C:/Users/19029/hexo/public/page/2/index.html","d7bd3a818fff060afc894686a4e20ad4"],["C:/Users/19029/hexo/public/page/3/index.html","eea7c2d635b0bee70baa0d7227fd20c8"],["C:/Users/19029/hexo/public/tags/English/index.html","a373b24f554a58f574c5fc79a9295586"],["C:/Users/19029/hexo/public/tags/KNN/index.html","37273bb5da6698abf0d3d4268ceba2f4"],["C:/Users/19029/hexo/public/tags/git/index.html","1c3eaa3b35ffb758e4f4494151b1020a"],["C:/Users/19029/hexo/public/tags/index.html","5ab7f4f74b40b79f1ff3eef9db9354e3"],["C:/Users/19029/hexo/public/tags/假期/index.html","c4b3fffaf9c803797cb681f7da1e5b89"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","6c50fd1b12a49b3e472e8aa2815353c7"],["C:/Users/19029/hexo/public/tags/总结/index.html","40a45e1d8b07aaff6b239d8b338f2f2a"],["C:/Users/19029/hexo/public/tags/感悟/index.html","b523601b14c661ccb6dd73222532308a"],["C:/Users/19029/hexo/public/tags/感想/index.html","98a980c388279ac28ed048b34d1e995f"],["C:/Users/19029/hexo/public/tags/时空/index.html","1f8f0fdb51168db00c53298b41ace2e8"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","d7fe1b0e2cad9c6fb74303bb063358d1"],["C:/Users/19029/hexo/public/tags/笔记/index.html","3715e4fcbdc2caa6f1949b94336e8b5f"],["C:/Users/19029/hexo/public/tags/线代/index.html","692784dead3043a4106dc1542d779280"],["C:/Users/19029/hexo/public/tags/读书/index.html","e0e47f340cb49fbd88aaa495d637f1f4"],["C:/Users/19029/hexo/public/tags/随想/index.html","7e4dcbeaa9c284cac9244a52294a8acb"]];
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







