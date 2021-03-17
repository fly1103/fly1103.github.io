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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","6159864cfb3ed2ac6210b71b0ad54767"],["D:/hexo/public/2019/09/18/百年孤独/index.html","895ba2e0191b8e9af1e291c55a0a1dd1"],["D:/hexo/public/2019/09/18/鼠疫/index.html","5bc415d984d9e773400c9e82f10ac84e"],["D:/hexo/public/2019/12/20/cloud/index.html","13a98e70ebf681fc180c17233e7785ea"],["D:/hexo/public/2019/12/21/knn/index.html","05422f476aa127da6b7e49844c64b96d"],["D:/hexo/public/2019/12/23/finish/index.html","f902f2380a26529ef68d28f8c0f170bd"],["D:/hexo/public/2020/02/24/单词本/index.html","bacd923ffe472e2db5909f777d2bbd4c"],["D:/hexo/public/2020/02/24/英语听力/index.html","fdd2a6665aecf2c874f1b8b723069bfa"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","0cfc4b9ba5f593becaa3192c07845f4e"],["D:/hexo/public/2020/02/28/Linear/index.html","184af8db6f6378c468866aa20a99991c"],["D:/hexo/public/2020/03/21/time/index.html","d7b64d5fa8fd3896de10848962eb2955"],["D:/hexo/public/2020/05/23/1984/index.html","fa6b3d2b772f5d6cb46563c5da160e3a"],["D:/hexo/public/2020/06/09/git笔记/index.html","1827f18cd0a4550355556c9476c5f2a7"],["D:/hexo/public/2020/07/29/sheep/index.html","1d739e3f7f90d494d6628d17209101b6"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","5f9ee5e2e72a176c532411ccfe134231"],["D:/hexo/public/2020/08/09/Haruki/index.html","9d786eca1f3a151529d6139972516d6a"],["D:/hexo/public/2020/09/13/summarize/index.html","2888a79cb48cb01eb991523802703913"],["D:/hexo/public/2020/10/19/Thorn/index.html","bd4d8d2c09257d7cd8ad0961cf78dee0"],["D:/hexo/public/2020/10/28/huiyi/index.html","1bae36b0edad0a2a8d894127ef8ed61f"],["D:/hexo/public/2020/11/26/一点感悟/index.html","cfca550cba96738faba15804af966edc"],["D:/hexo/public/2021/01/02/crime/index.html","b9605ab041a801294b8031b6bfe2c807"],["D:/hexo/public/2021/03/08/mother/index.html","af62d00962e8a8ff6cbda218cee48eed"],["D:/hexo/public/2021/03/17/我对文学的看法/index.html","7fe15054dcd9f131754586eb104632c2"],["D:/hexo/public/about/index.html","328d20f0584f936d4c84ce9af7e9dc5d"],["D:/hexo/public/archives/2019/09/index.html","e40622a38bd5700bc10b4192993d7fe7"],["D:/hexo/public/archives/2019/12/index.html","bccbfaaf3225b8c4bd78b19bed565750"],["D:/hexo/public/archives/2019/index.html","999222c8d2366ecff3bf8ca0f48983f2"],["D:/hexo/public/archives/2020/02/index.html","e66016da0b0f54a557a6cf56b328558b"],["D:/hexo/public/archives/2020/03/index.html","ddb78a652c40e23d8efbc44a4158f0be"],["D:/hexo/public/archives/2020/05/index.html","db362cdb51c4b635aa1ccdd081409cdb"],["D:/hexo/public/archives/2020/06/index.html","dc63b366027bde8c4ae3101d69e60897"],["D:/hexo/public/archives/2020/07/index.html","6c3aba94cbf9b4f7bbd7bfb6db497ae1"],["D:/hexo/public/archives/2020/08/index.html","854882702ce48da2dd2118ce39d64eec"],["D:/hexo/public/archives/2020/09/index.html","0abc19f1d70fb291313ca9cbbd6b7811"],["D:/hexo/public/archives/2020/10/index.html","4485c9deb2bc9abd133fc485510ef585"],["D:/hexo/public/archives/2020/11/index.html","465a952358875094edc252589df94a96"],["D:/hexo/public/archives/2020/index.html","7e69e5b27f7f157df5269aac6b1e7410"],["D:/hexo/public/archives/2020/page/2/index.html","76a4197a6ff0dd615999a449d771d92a"],["D:/hexo/public/archives/2021/01/index.html","cc39d658ad66c82b1d6702d4b7ddd1ce"],["D:/hexo/public/archives/2021/03/index.html","afa11084a2f98e1d45cc9a4b3605ab6a"],["D:/hexo/public/archives/2021/index.html","89b77b933725bd79d58f5bf10e365447"],["D:/hexo/public/archives/index.html","025dd672a713b9f793fc9122bfb6f2da"],["D:/hexo/public/archives/page/2/index.html","434d9422919416034daf77bfc7bac5f3"],["D:/hexo/public/archives/page/3/index.html","771d2e773fa798c37267357e7bfaf4b9"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","40497c81a9562c50b21c178163b0a945"],["D:/hexo/public/categories/index.html","0a3a38385cfbf222eb53f5f1e1772d9c"],["D:/hexo/public/categories/写作/index.html","2c76c976113d6a9ba871bb711edd2ae1"],["D:/hexo/public/categories/外语学习/index.html","bb2f882442580516b1a4c52fff2c7cca"],["D:/hexo/public/categories/学习笔记/index.html","a9e3e54814b7e58a57386173c2fe9013"],["D:/hexo/public/categories/感想/index.html","8a1eee82ca7d1c08ba5d26962e52039b"],["D:/hexo/public/categories/数学/index.html","44776a742f1e86a678d862af2c125ea6"],["D:/hexo/public/categories/文章收藏/index.html","0100cf21c12b95358e329b3e4cf9fc17"],["D:/hexo/public/categories/机器学习/index.html","87875a5eec29732aea5fad8ccae23792"],["D:/hexo/public/categories/考研日记/index.html","5bddde9320310641e0ddaaf35c7044bf"],["D:/hexo/public/categories/读书笔记/index.html","610d9ecbda9c0335d1b11fc0b95749fc"],["D:/hexo/public/comment/index.html","4121305781870da8bc592284a8823244"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","00592f05e0f3a28d3520daeaba4c3dcc"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","8ec14d3de65139ff18cdf09d79496580"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","de28cc38da0b134f15136ad35b3f8985"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","b99c6578eb9224379c1b1d0209ddcebe"],["D:/hexo/public/music/index.html","b68b8739acbc980f8a7b1ad7fbca8561"],["D:/hexo/public/page/2/index.html","f98a0bdfb4c6ef9fea214d7aef6feb54"],["D:/hexo/public/page/3/index.html","2dd4d172c70374f92f738846c0af104d"],["D:/hexo/public/tags/English/index.html","79c8ec220fe866ffd5ffffff17dae8f5"],["D:/hexo/public/tags/KNN/index.html","09e2e637254435664391ba3a01630fe0"],["D:/hexo/public/tags/git/index.html","99e96457881e0ed92bafc265df8e72ba"],["D:/hexo/public/tags/index.html","62e81ba04de7dba7c265d990b3c1caf8"],["D:/hexo/public/tags/回忆/index.html","30fba729c347ed557d4d9b1c23171f92"],["D:/hexo/public/tags/建站-hexo/index.html","8e46a6d58631bac2329993fd2dbe4b6d"],["D:/hexo/public/tags/总结/index.html","cf558d55eea0630f263dfe20e0724f52"],["D:/hexo/public/tags/感悟/index.html","733c916821ab8e91d77bd378dc488959"],["D:/hexo/public/tags/时空/index.html","c7d67e31239c24d470efc70c7d65eb7d"],["D:/hexo/public/tags/林轩田/index.html","878358659588645ebc028e36b4e1c53b"],["D:/hexo/public/tags/王安忆/index.html","8123267eb33f2dfb6d57df7f741f1218"],["D:/hexo/public/tags/线代/index.html","b0a7f89a1fa80cd0e3fd9ef0942c7ae6"],["D:/hexo/public/tags/考研/index.html","34c13e3b455f01708721a4fa1e9069da"],["D:/hexo/public/tags/读书/index.html","2eaf325f6108ef4f9d27cb074343aa92"],["D:/hexo/public/tags/随想/index.html","ffe90a443075f0fb2d9f284dce5cf13f"]];
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







