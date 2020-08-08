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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","fb9c4526d927ec8ab1f84ecc0311f117"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","3659152281daec167b6e9ead16a6b7d9"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","0cc17a751f9f20015ad914c821c2ea7c"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","5b3bbd2ed6f08c849634994bbe826283"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","df51363c2c55d53cbe5a6fe186906114"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","1240566def83eae847f62b2371ff360a"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","f6a93e02ce1be71cfb64ceaf5b606d71"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","c657f831f013470a6ab3176613a5dddb"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","651f22b4f8fc73cc6b0c9347610023b0"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","cbe092116819d14a6b49a8c13c57dcf1"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","9fe3f8e26ef3c8a82174853abe6a2b42"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","9ec784a5d9db808b6adda22dcfbb8b0c"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","05336122f8c3220d8b72f0e2a67b4fcc"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","af12f544fa9f6b8408a66e8322bdc38b"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","9fb9441ac6963be9acf567930db748f3"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","369dce72ceefd82db55d3925dd25b6da"],["C:/Users/19029/hexo/public/2020/07/29/sheep/index.html","4378362615d121d57298c393ca1ba74d"],["C:/Users/19029/hexo/public/2020/08/07/Mockingbird/index.html","1bdaea93f474673bdc570045593468b0"],["C:/Users/19029/hexo/public/2020/08/09/Haruki/index.html","972a227dc23990f270595d19946757bf"],["C:/Users/19029/hexo/public/about/index.html","1c25686928ad46e562b0d0d0f4dd00d9"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","6f83df609539b9fc3241cc9902f2b7c7"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","fa47a9524980c06ba43fa99ea7efb55e"],["C:/Users/19029/hexo/public/archives/2019/index.html","8f80b8ea6a2895d60bebc44c51d231b2"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","ceb21df7b08b7263d766697d43423134"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","152a9651e665d8a49bf6676a0389832d"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","cee773e763058e6a767b9280d9c6bd01"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","6b36824ae46a8e0c38909ef274160e30"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","fc89234a600e9b80d5ab50abf2f9807a"],["C:/Users/19029/hexo/public/archives/2020/08/index.html","d1bbd7176b8efce39ab57847d3c44944"],["C:/Users/19029/hexo/public/archives/2020/index.html","f5252506a49744c10c67d719c7a72436"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","ebe6eac01c8b252cb6f3d6438c35d7b8"],["C:/Users/19029/hexo/public/archives/index.html","f7c953f574bca2eb4aa709dca22117bf"],["C:/Users/19029/hexo/public/archives/page/2/index.html","c7b86cef84aac66444ba2a88663b9717"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","0d4ef1090f0ff0a8fc7bedc263fff733"],["C:/Users/19029/hexo/public/categories/index.html","a04caef47b415e418c73304d11cab744"],["C:/Users/19029/hexo/public/categories/写作/index.html","2c6593c15e4da6716dd20c1653515896"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","1f35c378567be224a6c9b59e1d54bc5e"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","277147b7f2d27930182ebeb9712f7d01"],["C:/Users/19029/hexo/public/categories/感想/index.html","1b07aed07d0f7dffe0099a232e47592a"],["C:/Users/19029/hexo/public/categories/数学/index.html","dc1b9ef8cb163f725f0b03179d108f9c"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","a2499f515c9365d79addc28694f964d3"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","4de64330009c27125d27f7db5586e8d1"],["C:/Users/19029/hexo/public/comment/index.html","c9ca28326e0fb81ca700c580a9013099"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","afcecfa8ece3a6f8c1e65c4e125cd0b9"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","d8ab0396178d8fdd79de5bacdc3aae16"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","4ff6c9580890e79f050a9304b0dbcf9f"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","6eec9e6a3d6eccc55a3cfde70d32a877"],["C:/Users/19029/hexo/public/music/index.html","4dc4de46aa935a8d58d2971db194f9ae"],["C:/Users/19029/hexo/public/page/2/index.html","6131aa954316f20b144b4779b48880d3"],["C:/Users/19029/hexo/public/tags/English/index.html","759c3192f2ede021881fa57e5b521757"],["C:/Users/19029/hexo/public/tags/KNN/index.html","8b11ffcab6e5be21e3382c525648937d"],["C:/Users/19029/hexo/public/tags/git/index.html","047903baca7b46f5badb0c23d7aa3bf8"],["C:/Users/19029/hexo/public/tags/index.html","80e461fa8510bcd528f355a96d3fa42a"],["C:/Users/19029/hexo/public/tags/假期/index.html","562f845a861ceaacb8a87f866a573b3f"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","a496c2f5978ae3c33c18c61928a07c33"],["C:/Users/19029/hexo/public/tags/总结/index.html","3a2ccc7e13de2e45568cb0f76fb7f32c"],["C:/Users/19029/hexo/public/tags/感悟/index.html","00ab21cced2942fa562fe4940ae46576"],["C:/Users/19029/hexo/public/tags/时空/index.html","eec14bfa1168189a825b2f73007acf1c"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","11eb0a255492c000821a6fda9e0bf3d7"],["C:/Users/19029/hexo/public/tags/笔记/index.html","dc3c00f9ad72336eff9a256e69d5181e"],["C:/Users/19029/hexo/public/tags/线代/index.html","48403adc7b592bbcc427d844f09d5774"],["C:/Users/19029/hexo/public/tags/读书/index.html","4f7596e4a83642129ebbffdd50c35e98"],["C:/Users/19029/hexo/public/tags/随想/index.html","7a9f23dd23fbc67444f1a2c22d51214b"]];
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







