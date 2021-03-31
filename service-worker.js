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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","3d831304db070317428ff235e00d5964"],["D:/hexo/public/2019/09/18/百年孤独/index.html","6a84323b343b8adcc5ea8112c1266c63"],["D:/hexo/public/2019/09/18/鼠疫/index.html","fde52d38b7eec08cce77c2f5f383fa06"],["D:/hexo/public/2019/12/20/cloud/index.html","7a6fe766ba7d0828946ba82daad8984d"],["D:/hexo/public/2019/12/21/knn/index.html","960212d5456c4f9b47703fbcdc4c4617"],["D:/hexo/public/2019/12/23/finish/index.html","541f2a97357f92638adaca3f039bb72c"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","6611197bb11d79e3e75a785c17cfb83d"],["D:/hexo/public/2020/02/28/Linear/index.html","fd77b5505ceb71231a44c05168731e92"],["D:/hexo/public/2020/03/21/time/index.html","f223a96b9a5df949e69d6138e976e007"],["D:/hexo/public/2020/05/23/1984/index.html","559bef0edc2df53fb6eca26f3272650a"],["D:/hexo/public/2020/06/09/git笔记/index.html","e317dd6205dafd7e8a4d06b6a03b8cfe"],["D:/hexo/public/2020/07/29/sheep/index.html","fa45de014d4f593782525dcf5fa0ff42"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","da32482c58717e797e6e168f8d2179c8"],["D:/hexo/public/2020/08/09/Haruki/index.html","e7e860a5b0498fd19d4d7383b953b4c8"],["D:/hexo/public/2020/09/13/summarize/index.html","9c6eb4ee37c2fbe602680c8a69f99609"],["D:/hexo/public/2020/10/19/Thorn/index.html","e9da145c8f2913eec9e04facdbd9727e"],["D:/hexo/public/2020/10/28/huiyi/index.html","a2b635cc65931d942f4519cdd11f90ff"],["D:/hexo/public/2020/11/26/一点感悟/index.html","97880bb15fb48c399a24ce47030d5ac2"],["D:/hexo/public/2021/01/02/crime/index.html","74d67d538607835e5c01258df208468f"],["D:/hexo/public/2021/03/08/mother/index.html","d134182a3c939db77a81dddf16282281"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","19f7d8f07e2205e8e2a10b28b71bfb5a"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","c1807f3b162a63d0465a4d843de2ef5d"],["D:/hexo/public/about/index.html","e9def9068a0e691875a4d3e13e109e61"],["D:/hexo/public/archives/2019/09/index.html","4b1ae89f137a061275758c65f9f6c480"],["D:/hexo/public/archives/2019/12/index.html","aa1ea5c441ac3ceb3f6d090868a52ad6"],["D:/hexo/public/archives/2019/index.html","3d9560a440ce54bba8c75d1f7864dbaa"],["D:/hexo/public/archives/2020/02/index.html","195a74e7d1ed6b29d8e73c9423c26d01"],["D:/hexo/public/archives/2020/03/index.html","c29efbcc9579e88f6ab74b3d2080aa6a"],["D:/hexo/public/archives/2020/05/index.html","ffcfc3c00acfbbc337e60e3eabd8a41d"],["D:/hexo/public/archives/2020/06/index.html","ec5061045dbda617baf8fae83145bf50"],["D:/hexo/public/archives/2020/07/index.html","5737d705c66ecc3d6c064dc6a1011df4"],["D:/hexo/public/archives/2020/08/index.html","51d0e5722134b5281d867a51d5a83000"],["D:/hexo/public/archives/2020/09/index.html","5b689a276a2ffda1c12698a3d3617368"],["D:/hexo/public/archives/2020/10/index.html","42586782e883e8b22e04ae6b438f40c2"],["D:/hexo/public/archives/2020/11/index.html","cb4372248e019e5688d4a4cd8c12333b"],["D:/hexo/public/archives/2020/index.html","e5e61de667eb9fe552ea8bccef1225a9"],["D:/hexo/public/archives/2020/page/2/index.html","e36f57f80b908f4dab8cc10b615b81fb"],["D:/hexo/public/archives/2021/01/index.html","0fad4fc7b3cb53d96c406a621fe0a0f8"],["D:/hexo/public/archives/2021/03/index.html","559772d34b7acc6dfad57952c6477b76"],["D:/hexo/public/archives/2021/index.html","68d976b50d19a88f8e429ab33968e4cd"],["D:/hexo/public/archives/index.html","4ca115060c7cdcdf7dec33d4a49565db"],["D:/hexo/public/archives/page/2/index.html","88501a2f6268b18f91913ee581c553c7"],["D:/hexo/public/archives/page/3/index.html","f51d9d94a4dd84c0e585603e15a7cdf2"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","8de194003720a3488dca9bb598e05d3a"],["D:/hexo/public/categories/index.html","3cf3f90f844c2d17ca88323aa50cc8d9"],["D:/hexo/public/categories/写作/index.html","94c051875400244b1ee3e0af670ae38a"],["D:/hexo/public/categories/学习笔记/index.html","97850f6f21f204071df06911269ca4d1"],["D:/hexo/public/categories/感想/index.html","290871a7d13d455982747c0730827aac"],["D:/hexo/public/categories/数学/index.html","42357f3bc7ade4f0aaf5350808673887"],["D:/hexo/public/categories/文章收藏/index.html","548d36262ec30d0f3833659e46d98829"],["D:/hexo/public/categories/机器学习/index.html","1aa09299efb7d9381b2fdb807104e29c"],["D:/hexo/public/categories/考研日记/index.html","50abb351052bb3450eb992f355413069"],["D:/hexo/public/categories/读书笔记/index.html","fbd0022bc6a60f86aeaed03256a766c4"],["D:/hexo/public/comment/index.html","383e1c3d7ce1090b585f1189af462a0b"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","e4e21ae64ecb26b022518356c471f674"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","2025ec9f9dbf2c0e6f3546d97e1f4408"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","0acdaa2ba19f048dcad53cf8051ce655"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","cf17c62be5945dc41682ac14b92e7d1c"],["D:/hexo/public/music/index.html","3015ce1c8b6a636e95308d9867827119"],["D:/hexo/public/page/2/index.html","90eca42065ea90a1203984dbe9ea8074"],["D:/hexo/public/page/3/index.html","aa0e55e87b1c746db09c019893237102"],["D:/hexo/public/tags/KNN/index.html","ee89a69caf4b0e089406f5f10120268b"],["D:/hexo/public/tags/git/index.html","30af4e888c8b274150a267ce4deb402b"],["D:/hexo/public/tags/index.html","014a7e45a27a80a71be0f2cdeef0a36f"],["D:/hexo/public/tags/余华/index.html","ba26537d867b7f4213b36fca55fbfae6"],["D:/hexo/public/tags/回忆/index.html","1035ae55d1f29f3d4a75876ae6cefb87"],["D:/hexo/public/tags/建站-hexo/index.html","7a903216b0faca62c92230b1503647d0"],["D:/hexo/public/tags/总结/index.html","1a662840023c71b0c5d8f53cabd4a90b"],["D:/hexo/public/tags/感悟/index.html","7f7534c1784921aee4b6f7efd1dc3a61"],["D:/hexo/public/tags/时空/index.html","b79b26147c8e1f69d21b4f748cbab852"],["D:/hexo/public/tags/林轩田/index.html","93d1cada51fb5873b7bf83e80751a6a2"],["D:/hexo/public/tags/线代/index.html","ec26b27cb1ce264ce1b83130eaa750d3"],["D:/hexo/public/tags/考研/index.html","e707e70a4e72bd5a2218798c233cb941"],["D:/hexo/public/tags/读书/index.html","dc0054c9d8ef0b4361ee18a50b7cbe69"],["D:/hexo/public/tags/阎连科/index.html","be9cbe4536862de1a643b2833354b5c5"],["D:/hexo/public/tags/随想/index.html","107a0c96943bde3e8909879fedb3a1ad"]];
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







