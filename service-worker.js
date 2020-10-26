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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","dff65c75b141d0e0e04d31f58a15e20f"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","c342492bd62d8f0599118a2022354047"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","52f7fbf2a23b6e55600663a5488c18b6"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","8464aad9f60652aa188357f9c3e13678"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","96b9156637d2626f3845b1f600a90be5"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","42a1faab72592a1f711e11b331b40d0f"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","c6cbad49c9c39fe771aa08fe9dbb1ebf"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","c9dbf47a9b387626ce0072ddea751576"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","5afe50394e4b49c20134b2e8d5e41988"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","b70a060448837d4f5ecc28073e544f9c"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","ccafafcf823c8152262d66d9a17404f9"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","dff00d55c984e9f99b7af85d1a758f1e"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","5c3e9989a71aa75b3e863d44890173f6"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","d282b2ff97280200e834d945f52b3670"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","fa1a1136c51ff07fd5b1bccb2ec1558c"],["C:/Users/19029/hexo/public/2020/07/29/sheep/index.html","15ad83b6751e44b16ecdea0f3b23133b"],["C:/Users/19029/hexo/public/2020/08/07/Mockingbird/index.html","1564379586241f7c4519909d2c5f6720"],["C:/Users/19029/hexo/public/2020/08/09/Haruki/index.html","109a05287a01f704ff3826f09192dfe3"],["C:/Users/19029/hexo/public/2020/09/13/fansi/index.html","d64d6490f6d245a2d7ce4e5748315956"],["C:/Users/19029/hexo/public/2020/09/13/summarize/index.html","a889c5588fedc52bf884b4ec349c4ce0"],["C:/Users/19029/hexo/public/about/index.html","a1e01f740579c9c933dc44a6eb1f75ce"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","4583b695ed9d14f3377744fc600802b3"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","8d2f24b86a979b9950c2a119d2e83d62"],["C:/Users/19029/hexo/public/archives/2019/index.html","b7c1dc03d4c05e966d04cfec9290ccf4"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","d8f39cc5857dfb8531eac144c3616328"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","8220fe3246d23d5632c255dc0fd17420"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","2133c957cc96c97f97cff1e8cd578c43"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","2089311a85d1c439992c81c79e74ceda"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","84a6479dea007a5d4ffdc4970276fe02"],["C:/Users/19029/hexo/public/archives/2020/08/index.html","e17b3e2682808acff1c9c80615f4e8c0"],["C:/Users/19029/hexo/public/archives/2020/09/index.html","e4c9e72fbfd9372957fb68797a42ace1"],["C:/Users/19029/hexo/public/archives/2020/index.html","8ad605f78920ff370d74b19f25f2e26d"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","8973aa2cfb9e04763043dd1c67c7f9c1"],["C:/Users/19029/hexo/public/archives/index.html","7b194207442b8d64fc1fc5803366e1dc"],["C:/Users/19029/hexo/public/archives/page/2/index.html","e1056d4b8a822002440cb7e73e6ca138"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","043b0bdc2af43940ba6b99c6a5860461"],["C:/Users/19029/hexo/public/categories/index.html","0f4c64ebf44c9baac2fd2bab693e11f4"],["C:/Users/19029/hexo/public/categories/写作/index.html","a9f53da4f468dc46d247831d21e460d6"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","d4fb8fba9ed8ae5860cb6c61bb0d49b2"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","6022ca867e30e9747df20c353160fc8f"],["C:/Users/19029/hexo/public/categories/感想/index.html","80c5255e1114e8e9d76cb3f44966395a"],["C:/Users/19029/hexo/public/categories/数学/index.html","2328ddfb4a9219c1282952065cb2b0ee"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","563709cf45e7b8f51e916e9c365bbbae"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","b5f4c479dd6c4f7ad336528016a7b846"],["C:/Users/19029/hexo/public/comment/index.html","aa9a655e20a1db5d6efe77a619036082"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","9e68a62210ab58e684a4d2e179484aec"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","aa11e303f471d4a47db352a9485f77df"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","5964807aa0a7d0b1dd575de3bcbc8c2c"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","d1c1674c383e3507638322d44a79983e"],["C:/Users/19029/hexo/public/music/index.html","31fee14983c74a98b58dde2d2b7a1395"],["C:/Users/19029/hexo/public/page/2/index.html","b4436d736a16c1a5e2a0550500abd857"],["C:/Users/19029/hexo/public/tags/English/index.html","df01edf289205dd8f39a9f8318c73d37"],["C:/Users/19029/hexo/public/tags/KNN/index.html","cdcac6f710dffba0e18c999826e45742"],["C:/Users/19029/hexo/public/tags/git/index.html","c465638b3b052c2366e711432ab039a0"],["C:/Users/19029/hexo/public/tags/index.html","cf246be48f073c0a3f2e106effa075e7"],["C:/Users/19029/hexo/public/tags/假期/index.html","1fa933077f512700fe73a9c24285af9a"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","0d9d0140bcc8298adfdccfde11479639"],["C:/Users/19029/hexo/public/tags/总结/index.html","0d8c28a59acbb19403c86c7a4364a4d4"],["C:/Users/19029/hexo/public/tags/感悟/index.html","c9b2959cd448344467bb51c4bfd50ea7"],["C:/Users/19029/hexo/public/tags/感想/index.html","b2d190bd43328fb02cb45704beb4dbaf"],["C:/Users/19029/hexo/public/tags/时空/index.html","d896bbe51f7b5732586e848f35165a9c"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","14e7f76e4f448070bac04fa5e9b50f68"],["C:/Users/19029/hexo/public/tags/笔记/index.html","3f73564412d10f84c159086ad454a006"],["C:/Users/19029/hexo/public/tags/线代/index.html","99478d47ac2e3a67051e2d9e0aeb95e7"],["C:/Users/19029/hexo/public/tags/读书/index.html","1f7f5927b14a9f3d6017fd15ced7f026"],["C:/Users/19029/hexo/public/tags/随想/index.html","c24258a1326d2fbaaa08a01f7237155d"]];
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







