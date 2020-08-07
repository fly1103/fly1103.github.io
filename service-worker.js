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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","074d158ac1de252f1ad2fdbe4be305cf"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","7b23b9e8ed38eb74e1cbb626c852b6cd"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","5cb7083b0256b2ae12cca6f4f6c9466c"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","4b2a4fc360fdb5110143941ac2050116"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","78c29411df920a3e644a098bdd1368bb"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","6968779691ba49c6b475c14ee76de27f"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","a86e6a3841f99a00c604d9fc1eb3913e"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","0b6a70bdc8bf3b0b57da10dffcbc6582"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","e25e3236fc0e880e9adcc2520d917313"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","31864c78db523874797098f8f30ca58b"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","e7ad0d0b46e6f26ae19a811ae1309ac6"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","47d305f147b2dee16c41f1aae9b4a0c6"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","88c844af636d2426e866146cdb0e432a"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","8bc348bd2c28c980b560eb9774e7368c"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","27806f8154d86fae59caa8757ebd03d7"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","6434238fff526aa7f7ec6629d4a77cf1"],["C:/Users/19029/hexo/public/2020/07/29/sheep/index.html","bd563d4ac0e0871a2f39ce80ffd07f57"],["C:/Users/19029/hexo/public/2020/08/07/Mockingbird/index.html","16b0ff8fd5a2582bba2e9dac13dae498"],["C:/Users/19029/hexo/public/about/index.html","8dc01d2f1699b09af892d9fdb2a56dcc"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","b60e4cffe52949559673d4caed44be7f"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","729769f55b0ac71802af131063828045"],["C:/Users/19029/hexo/public/archives/2019/index.html","117dd3edfeaea83e205e83eedeb7ae8f"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","2aa2ac989fdf5041c27ed202b05fb771"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","9ad5dbf1b6bcfe7ae9399e99f266cf5c"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","b2fe604b73b69c77d4ab9a6f76e450ed"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","4c6c3ee43a5c1aae6d238e9ad64882b1"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","e5b4246b7c9ad892675491082aab7639"],["C:/Users/19029/hexo/public/archives/2020/08/index.html","36d00c4ce5935e98c158844de9b6b455"],["C:/Users/19029/hexo/public/archives/2020/index.html","8e6fe81f7796e72a2430ccb17d6ff47d"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","e456673d9a62409f2eafc648b14698f4"],["C:/Users/19029/hexo/public/archives/index.html","1738fb96c582987189be2a5e945be39d"],["C:/Users/19029/hexo/public/archives/page/2/index.html","99a2d62d77794ad501232d50283bfe8c"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","1026d5a3bdbeaf96c69be747c1c70a2c"],["C:/Users/19029/hexo/public/categories/index.html","de1c839cbcaf2d072d70b7204d6d4c34"],["C:/Users/19029/hexo/public/categories/写作/index.html","bac6e9ef1a1bbd3bdabda56be307f4b1"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","382a7d1fc95bcf6151c83994ac6d546f"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","8a0401b40a3d8c013cab176e00d5c6fc"],["C:/Users/19029/hexo/public/categories/感想/index.html","a5042ed9bd42d809f5606e5d1c680b03"],["C:/Users/19029/hexo/public/categories/数学/index.html","7e6a2606177c4f839646e46eef29f446"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","7fa469cc6e05437fac492639d4ebaff0"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","af96510d366f24d8a413a72d412d9b9e"],["C:/Users/19029/hexo/public/comment/index.html","34755f428c19db8dd2dd12dd1dc46d76"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","541dc208b3fba37a15f55e83185c6199"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","ad25999bb97c7873944cfc0b0a328879"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","808a2a794c056fc6a5d07283295df8f1"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","8d5c4d3fc0debbc9a1a312ef4ebafa16"],["C:/Users/19029/hexo/public/music/index.html","db5e8b603cf6e6a4e172438bfb149391"],["C:/Users/19029/hexo/public/page/2/index.html","3abcf9a29f470b60cdb6fe4954f7f626"],["C:/Users/19029/hexo/public/tags/English/index.html","9ff1e89bbd3be2fdf86519dc6b892b0e"],["C:/Users/19029/hexo/public/tags/KNN/index.html","c611726c0fefcb776c246f9ee6d409a4"],["C:/Users/19029/hexo/public/tags/git/index.html","a683c67162c48c9b11dae8de2875113e"],["C:/Users/19029/hexo/public/tags/index.html","6b377d2afd11716c0b5f0d4baa598fee"],["C:/Users/19029/hexo/public/tags/假期/index.html","b419d7e257fbb2d419c03141726677d8"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","839e55025c674f249d777c7e5c7ad1c3"],["C:/Users/19029/hexo/public/tags/总结/index.html","d530a972c6aafee7826749bfe06b1c05"],["C:/Users/19029/hexo/public/tags/时空/index.html","0c4e40542ce7d8933beac95385d82570"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","ccac6fcf6aa7af2ce272677910f4b253"],["C:/Users/19029/hexo/public/tags/笔记/index.html","472f3b321d026ae3ad56a76ca82598bd"],["C:/Users/19029/hexo/public/tags/线代/index.html","08c9a589dc38481302418e6f64efa961"],["C:/Users/19029/hexo/public/tags/读书/index.html","bfc5ec787ea24a3301fb12c3e40dc98d"],["C:/Users/19029/hexo/public/tags/随想/index.html","4cfa2f8dc069f8c3e0d0ab89a743bd3d"]];
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







