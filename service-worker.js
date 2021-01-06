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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","cd23061980dc11f0f864046225e95734"],["D:/hexo/public/2019/09/18/百年孤独/index.html","67893e9125732305cd2819f7442afce7"],["D:/hexo/public/2019/09/18/鼠疫/index.html","b0491ed8f21d48d6648b86a25a399d16"],["D:/hexo/public/2019/12/20/cloud/index.html","95c34f75fc2610468ec68f9416c0ee4e"],["D:/hexo/public/2019/12/21/knn/index.html","9d9e21840ec1056c1e6a31690177f80f"],["D:/hexo/public/2019/12/23/finish/index.html","7a44d1bae94ac09a3bbf9e38903441d7"],["D:/hexo/public/2020/02/24/单词本/index.html","941a049f75486bac38b9cc7217c0302c"],["D:/hexo/public/2020/02/24/英语听力/index.html","23984207b906105ed30f82a74dd8e827"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","0278ef78af06f11c3c36e6b15255d608"],["D:/hexo/public/2020/02/28/Linear/index.html","1e8c9a00581ec3d63278cffe7e7572e7"],["D:/hexo/public/2020/03/21/time/index.html","9cb969f2ae90b735d7755c9aef785eef"],["D:/hexo/public/2020/05/23/1984/index.html","7c93576992d6edbad0c7a7b8979c8ee4"],["D:/hexo/public/2020/06/09/git笔记/index.html","c23e3a62a0b03f629dcc2905bae578f5"],["D:/hexo/public/2020/07/29/sheep/index.html","eb5fe051fef6aee81da26aa137f19e95"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","98d5c106a2b5e1b902565f8fc5141193"],["D:/hexo/public/2020/08/09/Haruki/index.html","68fe2c0eb61986721b02a8303747275c"],["D:/hexo/public/2020/09/13/summarize/index.html","d45e59f7fb85c35f085a4163442b7411"],["D:/hexo/public/2020/10/19/Thorn/index.html","6f971418d433742eba16eac5a7d74898"],["D:/hexo/public/2020/10/28/huiyi/index.html","b6a07289fcd4d421457408699c6f9455"],["D:/hexo/public/2020/11/26/一点感悟/index.html","ed626dad4921bebe4e0fd2159ac6a431"],["D:/hexo/public/2021/01/02/crime/index.html","5d0dc5d5c40080190ace9a559c1b642f"],["D:/hexo/public/about/index.html","e3e6df469df21356d322cb262ee6d78a"],["D:/hexo/public/archives/2019/09/index.html","138f6a74c35893e9d5d95da72302205e"],["D:/hexo/public/archives/2019/12/index.html","cb7129004f5d2c38eb7b93c33b7a1214"],["D:/hexo/public/archives/2019/index.html","e1c9c247e49001d20377e30e9196a894"],["D:/hexo/public/archives/2020/02/index.html","fa9e182792c5016757088685e5a351b4"],["D:/hexo/public/archives/2020/03/index.html","dc58ba808b6228e2a4350c189961433e"],["D:/hexo/public/archives/2020/05/index.html","7ff08ef98b7a8a4fe6dc4fc06b99f369"],["D:/hexo/public/archives/2020/06/index.html","e32e3e59665a4fb76dc055bb423f7373"],["D:/hexo/public/archives/2020/07/index.html","f97a6693597977df9c33f984019cd0d7"],["D:/hexo/public/archives/2020/08/index.html","6d50535c30ec990501f5d3825c937d8a"],["D:/hexo/public/archives/2020/09/index.html","ee596a4bc2d75e6b0f42ed86db6c5d75"],["D:/hexo/public/archives/2020/10/index.html","39ea89d77ea30790a32c4ebd1456135b"],["D:/hexo/public/archives/2020/11/index.html","951110b8f056f70492b8ac231d61f4aa"],["D:/hexo/public/archives/2020/index.html","7b6bd9ff2bdbe3bae86fe53e7d9a3d05"],["D:/hexo/public/archives/2020/page/2/index.html","e4146d841dceeef58397dfbd74b14926"],["D:/hexo/public/archives/2021/01/index.html","142b2e3051df6ec07c681d9e2a7a4d82"],["D:/hexo/public/archives/2021/index.html","a942fa43616b2ae6ae53090ca3ed9ad0"],["D:/hexo/public/archives/index.html","3865a08adf16c0c105dd319f53b1edc8"],["D:/hexo/public/archives/page/2/index.html","347fd1a93243f37faedd896ea432e75b"],["D:/hexo/public/archives/page/3/index.html","0c6bb101cccde20672c6971911d930e8"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","3ecb408f0ddfb21817a45ea1c1a7ea30"],["D:/hexo/public/categories/index.html","20c605c29c28eb19ae3b940bcc880a21"],["D:/hexo/public/categories/写作/index.html","2cee4698d56142d6da965fe2b5f72062"],["D:/hexo/public/categories/外语学习/index.html","63637bd30cc6aa4d01e4d115f3b14438"],["D:/hexo/public/categories/学习笔记/index.html","436cccc4314cf926350abe992da878f8"],["D:/hexo/public/categories/感想/index.html","b4ca0b3abe0c55a7285884602e801a30"],["D:/hexo/public/categories/数学/index.html","b294929d517a4ca9fb1c4a24ed0fd074"],["D:/hexo/public/categories/机器学习/index.html","13e8190d4d94c8dd88c083e4c8136ee0"],["D:/hexo/public/categories/读书笔记/index.html","9592d21e04bcbe2ee49226ace821057d"],["D:/hexo/public/comment/index.html","6a9ed261c435f96d23a23badc350b904"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","2223cdb09cb30f9076f91a9190a9c891"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","5a3ac9712c0aa9303e601a090611ac4f"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","36151058f9cdf4d16a8790fbe112454c"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","9bcd7f9cfcfccb7835ca18723dd562fd"],["D:/hexo/public/music/index.html","3253c5b9879c8debdbe80533b0e78a41"],["D:/hexo/public/page/2/index.html","3385b5ba5d2a08bc8eac54b1a048d761"],["D:/hexo/public/page/3/index.html","cdc35918280ebad61f6ccb49d7bfa47d"],["D:/hexo/public/tags/English/index.html","15258f5fd1922b94838c3eb054719f3b"],["D:/hexo/public/tags/KNN/index.html","f07d6035879d05a1efa3d288b674376f"],["D:/hexo/public/tags/git/index.html","a49047862a0961c85e1626599fe790d5"],["D:/hexo/public/tags/index.html","fb7524184f961415434bc0414f5260e3"],["D:/hexo/public/tags/回忆/index.html","1b5b0ea648826b6b00102738ef43304f"],["D:/hexo/public/tags/建站-hexo/index.html","17f0c9fb0b1badcbb1af9466db7a1c44"],["D:/hexo/public/tags/总结/index.html","36c5ca64896cd964908415db2445fd23"],["D:/hexo/public/tags/感悟/index.html","5fb03a232825c01d238125890903d34a"],["D:/hexo/public/tags/时空/index.html","57e9da76bfc270f977dcaa58bd9ede62"],["D:/hexo/public/tags/林轩田/index.html","f0e2e245cd869bdee4035428d2d5ec30"],["D:/hexo/public/tags/线代/index.html","4d247936f99a0d5741b8182de15e610d"],["D:/hexo/public/tags/读书/index.html","e7974d1d5fd0fc795071bc8ac14ee92d"],["D:/hexo/public/tags/随想/index.html","0b419cbc7b7b2a33b88245701d890aba"]];
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







