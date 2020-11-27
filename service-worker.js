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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","a1b1105c022fd0350aa0f7ce4a215473"],["D:/hexo/public/2019/09/18/百年孤独/index.html","442aa8061ff159e07a8bcf1e6d69ff79"],["D:/hexo/public/2019/09/18/鼠疫/index.html","662ab8bd43cb46b3006066e35cde2ac0"],["D:/hexo/public/2019/12/20/cloud/index.html","1693bceb1a6de2d325771f5f6e781707"],["D:/hexo/public/2019/12/21/knn/index.html","d170aed8bf51c777bfba67d62deface3"],["D:/hexo/public/2019/12/23/finish/index.html","5a534c3670b4e65faf0e534b3ecaa629"],["D:/hexo/public/2020/02/24/单词本/index.html","0d2d06d5fcc95beb3feb9f17d4852ffe"],["D:/hexo/public/2020/02/24/英语听力/index.html","4980891ff22e5111fbbb868387500b8a"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","40d011061e46ec0ad3cb27b8df11179b"],["D:/hexo/public/2020/02/28/Linear/index.html","fc9d3b320a23783bb5d67dfe78b7c543"],["D:/hexo/public/2020/03/21/time/index.html","bfbb9e7a5052b94bbc1b4fe6cb048254"],["D:/hexo/public/2020/05/23/1984/index.html","a82164ee1e1c10943b8d57ec477dca3f"],["D:/hexo/public/2020/06/09/git笔记/index.html","4043b42213bac3c6f46b62c47a878dc4"],["D:/hexo/public/2020/07/29/sheep/index.html","14f1a1ea6b5c72251e862b8db21c7e20"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","651160ef147f07c463664279f05f2018"],["D:/hexo/public/2020/08/09/Haruki/index.html","ac31cb366081c2a2c57ab8d08a7a12af"],["D:/hexo/public/2020/09/13/summarize/index.html","6cbd01e7460d74c3d15a79ec721fff99"],["D:/hexo/public/2020/10/19/Thorn/index.html","33b9230e6d390cab7061ff0af40ba6ea"],["D:/hexo/public/2020/10/28/huiyi/index.html","82abd8ac03fad701ccead9ceafeafd4a"],["D:/hexo/public/2020/11/04/birthday/index.html","89bf01ed1aa825dbdb1f1b53c93ea577"],["D:/hexo/public/2020/11/26/一点感悟/index.html","c9c68d688ce54be8a542979549add6b3"],["D:/hexo/public/about/index.html","1f402bf287b1bc7661e6b0cb637b5ebd"],["D:/hexo/public/archives/2019/09/index.html","b723b275359b60b6e4dde3dfe9b8d8eb"],["D:/hexo/public/archives/2019/12/index.html","b1fda0520469585d501263806e86087a"],["D:/hexo/public/archives/2019/index.html","f3e1e71301fe37ea1ff9d3c6a1ca6909"],["D:/hexo/public/archives/2020/02/index.html","b581fc2d6ef043c009b8dbc2818c9e3d"],["D:/hexo/public/archives/2020/03/index.html","c4c65837b7313ad508682e1dd800cf38"],["D:/hexo/public/archives/2020/05/index.html","fef8cb6ee2390975765a9a7ceb346d42"],["D:/hexo/public/archives/2020/06/index.html","ff8b46aeb13dd279e5227ba8641c3c24"],["D:/hexo/public/archives/2020/07/index.html","610e21cabb0441a26dd547354ebe0eb6"],["D:/hexo/public/archives/2020/08/index.html","a6d0aa0f8243c5812760d3b379884fe9"],["D:/hexo/public/archives/2020/09/index.html","08ea7ebe5f6660e52cf69596c1c0db1a"],["D:/hexo/public/archives/2020/10/index.html","76759a52ccc6d39dcfd48d2338ee3472"],["D:/hexo/public/archives/2020/11/index.html","73216fcf185f6d787aa453b83cfd945d"],["D:/hexo/public/archives/2020/index.html","081b27252e92b32ef8b03560184448f7"],["D:/hexo/public/archives/2020/page/2/index.html","1799db041e53ce26a538742ad59fbbcc"],["D:/hexo/public/archives/index.html","ef380da69d5c249091328659dd414051"],["D:/hexo/public/archives/page/2/index.html","a6039c54d24fb7006f055dd60b480586"],["D:/hexo/public/archives/page/3/index.html","7ad9e5ed72ade5e201e5aa7b089ce98d"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","36359d69fe869a9509b7dc2da9b02516"],["D:/hexo/public/categories/index.html","b8274936eaa7f53b3e718acebc0136ff"],["D:/hexo/public/categories/写作/index.html","0704402e7e1ecc63abd968c9315c437d"],["D:/hexo/public/categories/外语学习/index.html","f109f611e188b207481201b01a799966"],["D:/hexo/public/categories/学习笔记/index.html","cf74389ac782ba624181a8664b7145a0"],["D:/hexo/public/categories/感想/index.html","e4fb8192b6bc9edaf2f8207b44d66cd3"],["D:/hexo/public/categories/数学/index.html","65ba0db0e47a6e842a2b6ebac4c732b5"],["D:/hexo/public/categories/机器学习/index.html","cad5e9b979475121cabc68c8d320eb13"],["D:/hexo/public/categories/读书笔记/index.html","8e6f934774459885f9a1ed0eda17ae0c"],["D:/hexo/public/comment/index.html","be4a5dbd7763919d8bbda87e98ab2d2e"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","5adf3912da2bb379015b3ca5feb1c7e7"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","e9c85f4bdd92b0f0d14be308dfb35360"],["D:/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","f42d3d6a486a32fa6520024617f34f7d"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","bf54abee36c7e077b97236098a960c71"],["D:/hexo/public/music/index.html","958e49e1b393621e3ca4a499c07185da"],["D:/hexo/public/page/2/index.html","e90b54fc79c1108aa3f7f1ac40550eeb"],["D:/hexo/public/page/3/index.html","fbb283b20e1f79d2a33110ecd150763e"],["D:/hexo/public/tags/English/index.html","e280d3d355f0ec6fa37a19d4dd85502f"],["D:/hexo/public/tags/KNN/index.html","14a0677c8890ae625da1ba40663f6832"],["D:/hexo/public/tags/git/index.html","8c759e14e50b5adfa715a74c777a547d"],["D:/hexo/public/tags/index.html","b00db657f821f2e5312fa429483c9b5a"],["D:/hexo/public/tags/回忆/index.html","8cae02e189e489c76e832010885c5fe8"],["D:/hexo/public/tags/建站-hexo/index.html","a1fbefab31a7e3dbcefdea5bff7305a0"],["D:/hexo/public/tags/总结/index.html","689b43ecdf24de9f0abde2245efaa615"],["D:/hexo/public/tags/感悟/index.html","f9e9e1160476e82ac5daf9a524cd17ca"],["D:/hexo/public/tags/感想/index.html","201e33fc9956d839a019baf67701acaf"],["D:/hexo/public/tags/时空/index.html","9836426a48ff8a85ca3007ede14a46c6"],["D:/hexo/public/tags/林轩田/index.html","ba476496cea85f887e0db85a4b60744d"],["D:/hexo/public/tags/线代/index.html","68d2b3f7fc2baca5ed4e8d74727bd213"],["D:/hexo/public/tags/读书/index.html","00b0f489815c11edc7dd6d93785abd28"],["D:/hexo/public/tags/随想/index.html","401619753e29de0aa38188ac2d5a5d65"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







