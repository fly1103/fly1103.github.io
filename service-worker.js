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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","e22fc82557db2ed83dc7551a82c48f90"],["D:/hexo/public/2019/09/18/百年孤独/index.html","0cc05dd33ceba35494018fa16e202fca"],["D:/hexo/public/2019/09/18/鼠疫/index.html","9e26ea230d414897b8e34bdee501d2de"],["D:/hexo/public/2019/12/20/cloud/index.html","c51107813808deeb05207f5aa9dc13cc"],["D:/hexo/public/2019/12/21/knn/index.html","738c30aed01a6ff80398a54e6f64a7e1"],["D:/hexo/public/2019/12/23/finish/index.html","384788034c15658ae77f7c9ea2a8f932"],["D:/hexo/public/2020/02/24/单词本/index.html","d038e796f8703eca8964aef872454d60"],["D:/hexo/public/2020/02/24/英语听力/index.html","804008495d922c064bbe4d8ee2344522"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","3606ee96c4b4189b5b5838b846670b35"],["D:/hexo/public/2020/02/28/Linear/index.html","b489fa18aae4397068b430d52dd9048d"],["D:/hexo/public/2020/03/21/time/index.html","eb6d2a32c553c2921ea4531cc5b7c69c"],["D:/hexo/public/2020/05/23/1984/index.html","27b666dfbe35145fbeff4c818d6641e6"],["D:/hexo/public/2020/06/09/git笔记/index.html","a7d3cc2455cd3671899ff4f7d63d191c"],["D:/hexo/public/2020/07/29/sheep/index.html","82c1171009117177db94016949bb0e2f"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","b31950f276af25fe23a53b6b2b3e723b"],["D:/hexo/public/2020/08/09/Haruki/index.html","864e69684916d155e7dd617cfa6730de"],["D:/hexo/public/2020/09/13/summarize/index.html","7856fc25a67abac1aefe938dbeaed4a9"],["D:/hexo/public/2020/10/19/Thorn/index.html","be719f2702dbbac6d5bb8f31d20ca116"],["D:/hexo/public/2020/10/28/huiyi/index.html","c1a2f82c0dc177dd4a033e9edec4c0fe"],["D:/hexo/public/2020/11/26/一点感悟/index.html","bdd5fe022aa82c57d199d27e8bd846c5"],["D:/hexo/public/2021/01/02/crime/index.html","b9ba73471dcd981436522172189b7406"],["D:/hexo/public/2021/03/08/mother/index.html","ab1548a4c2eba071da33f036a4215118"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","47dcfbcf96d300b61319d4d1a6c0a97b"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","54275bd5eb9519cfff5ab29736455cc4"],["D:/hexo/public/about/index.html","18488cca4e6d08b1a98a75823a85cf3d"],["D:/hexo/public/archives/2019/09/index.html","b04e520b8202136dd65aa8249d6c7569"],["D:/hexo/public/archives/2019/12/index.html","d213a9364752c56fabce8abf628d37fb"],["D:/hexo/public/archives/2019/index.html","2709eece0a3fa42e3e0ce8012b2dd0d3"],["D:/hexo/public/archives/2020/02/index.html","c107d2e72c725f907f14a7ff352b714b"],["D:/hexo/public/archives/2020/03/index.html","04838dd185830082ceddcdcbe88a4e2c"],["D:/hexo/public/archives/2020/05/index.html","083157e96a7d5f71c1f3d944b3cfe020"],["D:/hexo/public/archives/2020/06/index.html","57cd6ff49cc5666e664388d36a20c5ba"],["D:/hexo/public/archives/2020/07/index.html","9fcd4114aa320cbdca3e5929f0364b51"],["D:/hexo/public/archives/2020/08/index.html","799ade812f10f2eedd3b8da8324f1e9f"],["D:/hexo/public/archives/2020/09/index.html","32c37a0c2341a6250948b3f8ad82e59e"],["D:/hexo/public/archives/2020/10/index.html","1b3a3c240e2e0477016ce2c3975491a0"],["D:/hexo/public/archives/2020/11/index.html","7b0740c6052cb31483487cc7fb3e2e1d"],["D:/hexo/public/archives/2020/index.html","7e02594d8b0f130855b2961d6f12c78f"],["D:/hexo/public/archives/2020/page/2/index.html","fab4db151d02548dbd56468eac7897ef"],["D:/hexo/public/archives/2021/01/index.html","12ba529da4a1efafe4742123f2c722fe"],["D:/hexo/public/archives/2021/03/index.html","0bd5c39e0ec70807ca229c9f4c0cdd50"],["D:/hexo/public/archives/2021/index.html","ad626624303f1cb5cea0c9b4be7bbc22"],["D:/hexo/public/archives/index.html","7279903a31f76c8f08f2e43754409165"],["D:/hexo/public/archives/page/2/index.html","1c30317c1ef81e816793312e15e93ef6"],["D:/hexo/public/archives/page/3/index.html","611809bb84c3e3115d95726383582b6a"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","723d2c9245a23403849b46423f59b7ff"],["D:/hexo/public/categories/index.html","2743281b956fc89bf828518b7cbae0a9"],["D:/hexo/public/categories/写作/index.html","d537e7b44a904b455fd77a4bfc8b6f4e"],["D:/hexo/public/categories/外语学习/index.html","394098ea7162aecca40b67e07399da0b"],["D:/hexo/public/categories/学习笔记/index.html","2c48a3bf5cb6e69a0c2cbee63d236ceb"],["D:/hexo/public/categories/感想/index.html","f519202942c81ff425845fe63442b810"],["D:/hexo/public/categories/数学/index.html","24db8a98918386d70b25d1cdb9eeef50"],["D:/hexo/public/categories/文章收藏/index.html","b683ecd674ab5943dc6502649e2ca65d"],["D:/hexo/public/categories/机器学习/index.html","be7d04ba592d7ee45cb1ea6d24507d3d"],["D:/hexo/public/categories/考研日记/index.html","ee812405ff3fef085343c4524ff63a43"],["D:/hexo/public/categories/读书笔记/index.html","291c08ee75b0c419917c1b9115174813"],["D:/hexo/public/comment/index.html","6cb5dc7af7cb80474ea3b24b0c8787cb"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","7ae99ad8d8fc4af8b9620a8fd2f88883"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","abccc2557933e3e0169e3f686bce4b81"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","b0323ff1803233325d724e75821249e9"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","fa30445b9d4d6dd0e8429d09daec6109"],["D:/hexo/public/music/index.html","b2e05e3782a1d7514dd831ac138779d0"],["D:/hexo/public/page/2/index.html","bfe7a66b66c049b71d0a7a3c03df0a2e"],["D:/hexo/public/page/3/index.html","50b7a17ab719a0d716172928d70ba6e2"],["D:/hexo/public/tags/English/index.html","0c12a73c9a4afb5f1156deb5f4bf1a78"],["D:/hexo/public/tags/KNN/index.html","d334f2398f3c86fa34a17cf507dd9b72"],["D:/hexo/public/tags/git/index.html","eae3d893207b137e8846327fbb48643d"],["D:/hexo/public/tags/index.html","1b7ec487cc87c2f742a7d9d1ac337506"],["D:/hexo/public/tags/余华/index.html","370d3820f2d840af7127eef2a6cda74b"],["D:/hexo/public/tags/回忆/index.html","6562335e532a3f4dcf5d9ca9f8294e3c"],["D:/hexo/public/tags/建站-hexo/index.html","d3785b6b5388c5ec24bd0591cc755031"],["D:/hexo/public/tags/总结/index.html","9ccfb74e7b0e5b3cd5a29964f06aaa85"],["D:/hexo/public/tags/感悟/index.html","86d68686b893f7b3abdc3beb0dd75fe2"],["D:/hexo/public/tags/时空/index.html","81dfb4723fce55ff8098680b2cfa702a"],["D:/hexo/public/tags/林轩田/index.html","06ca9fb04b00f0990c2176793b63de46"],["D:/hexo/public/tags/线代/index.html","1bf7fc969e8d14f860d7b012d8f1981a"],["D:/hexo/public/tags/考研/index.html","b0a5024c72d1a8af75083ab68b13b623"],["D:/hexo/public/tags/读书/index.html","6057663ef427934443b52305c446d284"],["D:/hexo/public/tags/阎连科/index.html","3b6144b6c51dec82d2e505e8e964ff49"],["D:/hexo/public/tags/随想/index.html","29c0a4eefbb1975bf5072d676d849f74"]];
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







