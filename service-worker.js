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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","12f513673f88e9cbd0d3b108f0beeec6"],["D:/hexo/public/2019/09/18/百年孤独/index.html","cc2a1bd81220107287e13a1cac7bc1d1"],["D:/hexo/public/2019/09/18/鼠疫/index.html","e5885229e02ca01d1e7c2c3bec0030a5"],["D:/hexo/public/2019/12/20/cloud/index.html","d45edee520ec34bf3f973135a6851371"],["D:/hexo/public/2019/12/21/knn/index.html","a04c1db1079025514f6c141ff8193f57"],["D:/hexo/public/2019/12/23/finish/index.html","6ce1304a5e6514f537fed3aad180dec0"],["D:/hexo/public/2020/02/24/单词本/index.html","9631c7ef982fa720121d3e485ab24950"],["D:/hexo/public/2020/02/24/英语听力/index.html","6724b51879bf8add5c362c1e98fca121"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","ad4f7eccd59d10ef35dea8f8670a6119"],["D:/hexo/public/2020/02/28/Linear/index.html","d1499bb51883433e3e0b54a846361575"],["D:/hexo/public/2020/03/21/time/index.html","04a2ae04fffdb8480fa59127de004583"],["D:/hexo/public/2020/05/23/1984/index.html","31487277a35eccf9761dcc969d51cac6"],["D:/hexo/public/2020/06/09/git笔记/index.html","70b55b640c18ae602a56de56bcde3b04"],["D:/hexo/public/2020/07/29/sheep/index.html","ad6388236e220a2a3c2e09491e8695e2"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","8cc763c2753ed7aa31a32b9dc9131ce4"],["D:/hexo/public/2020/08/09/Haruki/index.html","b377368a44f2e7a3335cbdd0e7be8ac1"],["D:/hexo/public/2020/09/13/summarize/index.html","cfe195ef2b1a31fb3214be9378743ad3"],["D:/hexo/public/2020/10/19/Thorn/index.html","364d4c908237825f48c41e4024f17e76"],["D:/hexo/public/2020/10/28/huiyi/index.html","226e1ffffc69c808db2e07a0b741592d"],["D:/hexo/public/2020/11/26/一点感悟/index.html","8845b3b7865f11fc80b28050de8eda0c"],["D:/hexo/public/2021/01/02/crime/index.html","636594d8dd5d9d03be3cc7d85a9d33e3"],["D:/hexo/public/2021/03/08/mother/index.html","d734bf0fd4ce45f37a5a70b2d22fb341"],["D:/hexo/public/about/index.html","0794cd4583957d2466ebfc986a071087"],["D:/hexo/public/archives/2019/09/index.html","f81fc5248c6b01f029963ab082801912"],["D:/hexo/public/archives/2019/12/index.html","13ed28e7486e72f042cf6fc1120d4d12"],["D:/hexo/public/archives/2019/index.html","a094a2d7ebed2507cfab1e69a5799422"],["D:/hexo/public/archives/2020/02/index.html","a44fc6dfc671ac15d2af76cc89e1bfc2"],["D:/hexo/public/archives/2020/03/index.html","6cb45f1803d705e96f43c91bf8831c2d"],["D:/hexo/public/archives/2020/05/index.html","32e309aacf6e2740d32b0da5895a1f41"],["D:/hexo/public/archives/2020/06/index.html","23fb07b21f48841a6bf4615ec10c8e38"],["D:/hexo/public/archives/2020/07/index.html","fb5dc375940f2c5d140324dfdc8780ce"],["D:/hexo/public/archives/2020/08/index.html","cb8a29805c25e316eed5f1e986b5e1e4"],["D:/hexo/public/archives/2020/09/index.html","2287ba15900cbc5df3a36c8d49840d02"],["D:/hexo/public/archives/2020/10/index.html","9921591bb153aa835d99b7455db13049"],["D:/hexo/public/archives/2020/11/index.html","f73cc084fc327ca7c7b1addcbecb751f"],["D:/hexo/public/archives/2020/index.html","476efb2073387c4ba99dcb7c318fa191"],["D:/hexo/public/archives/2020/page/2/index.html","1f31e2b3d83102f8e0385ffc652d1b27"],["D:/hexo/public/archives/2021/01/index.html","aaa7551877d5e051668d3488b7ef94b0"],["D:/hexo/public/archives/2021/03/index.html","a4632f761426a5d39eab783b6eb9e1f4"],["D:/hexo/public/archives/2021/index.html","0c66355af7bcb69fcbcc52e2b7053f3f"],["D:/hexo/public/archives/index.html","734098e5f97f3b0318b4e32455281ba7"],["D:/hexo/public/archives/page/2/index.html","7aa5db32446bb54b417daa78a9d07386"],["D:/hexo/public/archives/page/3/index.html","5ee9c15b29403afb220b4e8536464ce7"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","c95e3c3e33059a951884b6abd7db6332"],["D:/hexo/public/categories/index.html","7b4974e88f4f71d9e83cc464c22424fc"],["D:/hexo/public/categories/写作/index.html","3efb137ad533ab614466e9e7f7c78d2f"],["D:/hexo/public/categories/外语学习/index.html","04f54043b9419e13ffa2a45ab3fc6bdf"],["D:/hexo/public/categories/学习笔记/index.html","575bf7e2e0dd250dc6036c2a94705bbd"],["D:/hexo/public/categories/感想/index.html","15de70b498dd7919d9df2367692a9e73"],["D:/hexo/public/categories/数学/index.html","ca294ca549fe36ecafe24fbf34a97bff"],["D:/hexo/public/categories/机器学习/index.html","4738a42b401bc1dbee8dc4de50150d6d"],["D:/hexo/public/categories/考研日记/index.html","6ca8b2f486b3f70fb997c611b2ecc8a5"],["D:/hexo/public/categories/读书笔记/index.html","b3926e42592c5f8db718a37eaa26feaf"],["D:/hexo/public/comment/index.html","47e07187d31906955271858eedc4fc23"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","97c29fab379357b77ad04fd1f2326ad2"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","ea93ea91960ad95c752777de0aa42cb8"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","6554e803a59d28d81d22cdd1aa44bb4a"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","0a3e822fecced8ee78cb247d0e833f26"],["D:/hexo/public/music/index.html","1a8e4cdd16b8a6548801b794e667ea8d"],["D:/hexo/public/page/2/index.html","df7477a4ddfeb53a5ca3a4b859677bc4"],["D:/hexo/public/page/3/index.html","7a61ff7536f876864526b4c3b6ebf59f"],["D:/hexo/public/tags/English/index.html","98db263fd79abc3f57df74955a79c21b"],["D:/hexo/public/tags/KNN/index.html","2084fa40c4eadca931796ef497a4b444"],["D:/hexo/public/tags/git/index.html","3a37b2039cdcd05ac45ec7c6f7cc373e"],["D:/hexo/public/tags/index.html","d8cf9d4222517326edd76314a6ba83c7"],["D:/hexo/public/tags/回忆/index.html","b41449e5f69fd8ebc66bc53afa8c8ee8"],["D:/hexo/public/tags/建站-hexo/index.html","62b03470a0123e1965df051febf9c4fa"],["D:/hexo/public/tags/总结/index.html","bbc4f7a3e2cdcc4a4b14628d81037b3e"],["D:/hexo/public/tags/感悟/index.html","529a0bbf8bbd9bc6ed8a83b0bcc13344"],["D:/hexo/public/tags/时空/index.html","aa56ad146c389f8f1ffbc9299eab580d"],["D:/hexo/public/tags/林轩田/index.html","9559fd1e9f232cb9b7f8db73fcca5446"],["D:/hexo/public/tags/线代/index.html","5ab58aece6802e98e4b9595203b87d00"],["D:/hexo/public/tags/考研/index.html","bbda6d5e4b4a2b15cff685f1bc1ad4f6"],["D:/hexo/public/tags/读书/index.html","c19014f0b69c5d3f944b1c7359c17071"],["D:/hexo/public/tags/随想/index.html","b72a808999b677dd4be78d717f64c09e"]];
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







