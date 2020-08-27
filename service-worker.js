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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","bb113fffc2b603782e16c1ab60795f7e"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","6a8b59477e493a28eac97e9430452418"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","87f8b87b4806921bb6e849f0b69a94d0"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","8889e538c3769d835c0ba17bd59abdda"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","15371a67f5d2677f223b4c0a041287ef"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","1c007cce116d2c1f4eea405c625dcfef"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","22c891cbc9da15c4d7cb39b6a8101877"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","ddba5e2ab77bc878bbb227c2f378a2b7"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","53321233d7b4353bab85db6d5f9f091e"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","4fc5b037ed76a4083e923e1e18b89414"],["C:/Users/19029/hexo/public/2020/03/19/summarize/index.html","9f7743e392d4a83d11f20cdc4d2cb073"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","4ceca64d735346ee819ccd9642a87bf4"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","922b435480aba8a665ed6c702f76ed38"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","0b62a3fb9bb6e79b9e4d450eeecd06c6"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","e11d1be96c59a697922c9df9ecefc404"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","a1933feac283e7fdd0c6754cd00bb42b"],["C:/Users/19029/hexo/public/2020/07/29/sheep/index.html","43393df2cf7db4e9e12850f038e55c0e"],["C:/Users/19029/hexo/public/2020/08/07/Mockingbird/index.html","efcbfd0bdc08d5277e7a0e941b476e04"],["C:/Users/19029/hexo/public/2020/08/09/Haruki/index.html","83a5d176a3a94c1f60b7970c7107b20e"],["C:/Users/19029/hexo/public/2020/08/19/picture/index.html","1feb37ccc96e196706870a65ff15cba0"],["C:/Users/19029/hexo/public/about/index.html","c180a1753d547034213bef67a4d3b2d8"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","1cdd3cd69584decc7912e6f7209eb75f"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","255be0097c2af4dbc86edaafc573fdd4"],["C:/Users/19029/hexo/public/archives/2019/index.html","ccea4786590582a58aad8c6424b53fcb"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","b9d226ffc62f7b5e4ac1740846ff18b5"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","52e9a7fb52d3f53f1d737c3c223b50cb"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","6db178cc9471155092c056c146147275"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","fde3604a1b04766323686966d96bd75e"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","5abb2b3ce703752fdfc8f751cc4a6e06"],["C:/Users/19029/hexo/public/archives/2020/08/index.html","18bddab02d4f20ada6f6a583ea15ef6b"],["C:/Users/19029/hexo/public/archives/2020/index.html","34a4c1f7a312b32d7bb1c8470c08fefb"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","29e124fd6c2149adad3189ce78ab1711"],["C:/Users/19029/hexo/public/archives/index.html","267b87da4e5e15cf84b0406e8aacf3b8"],["C:/Users/19029/hexo/public/archives/page/2/index.html","c93d042c72f69252c6187be23ff59c28"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","151a9f6612c754d500dfa1a25853fa1b"],["C:/Users/19029/hexo/public/categories/index.html","0dc9c46b1e993534a2c95da4249683fa"],["C:/Users/19029/hexo/public/categories/写作/index.html","52fec8f358a6860fca013c87ed544596"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","ce819daff68526867e5780a5e8785a81"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","c073eb08741bd84ca399e079d25874a6"],["C:/Users/19029/hexo/public/categories/感想/index.html","cebc3cc746b41cd8410fcc1fc0d999f7"],["C:/Users/19029/hexo/public/categories/数学/index.html","e6598254fe19c22306414fa65c9b487a"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","8f0f6e613c1560c0be5a1988b62de868"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","37d070e12b4cdc0255dfa04c8642d0d7"],["C:/Users/19029/hexo/public/comment/index.html","a5281c836a5e3ca61da0eca854ae5bcd"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","f5ea774f6802341f189ef0ab3fe8cffd"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","e01a95654cc2cf739301df91ffb2c473"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","686847e59bb5374e81adca1661dce93f"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","fa03165ad21e89298138a76479ec8edc"],["C:/Users/19029/hexo/public/music/index.html","ab4f6bf5a64a9ca842ff7aa1bb15191f"],["C:/Users/19029/hexo/public/page/2/index.html","a1d6a65e91af708fe086b7b30f5b26ac"],["C:/Users/19029/hexo/public/tags/English/index.html","1598a326f422b980afb25718076d8c5d"],["C:/Users/19029/hexo/public/tags/KNN/index.html","d4db8a7e81e0a145257fcdb45dbacf67"],["C:/Users/19029/hexo/public/tags/git/index.html","a7624dbd2257d77cb71e79de9182eb9c"],["C:/Users/19029/hexo/public/tags/index.html","52834827f6fc4c8500241b1bf7d12571"],["C:/Users/19029/hexo/public/tags/假期/index.html","f22f68fc1791d627daa3fb9ca1b71aff"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","822cdc86f67e24a981ce25c7fad574d9"],["C:/Users/19029/hexo/public/tags/总结/index.html","e959e3adf10b2b4d5eb4c1534c99a0fd"],["C:/Users/19029/hexo/public/tags/感悟/index.html","73dce79aaba341d0085e7d8cbb21bdd9"],["C:/Users/19029/hexo/public/tags/时空/index.html","7af6f55a9c088ebf950a842ad63f1e52"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","edfe2a0153e7742f2eb69c007afced09"],["C:/Users/19029/hexo/public/tags/笔记/index.html","4ed39d6cdf237dd1060e2fae3eb9d0b4"],["C:/Users/19029/hexo/public/tags/线代/index.html","9a5565889f3fba9db8cb2cd351dc15cd"],["C:/Users/19029/hexo/public/tags/读书/index.html","0f84690c4405512887daa9a9fe5c02c0"],["C:/Users/19029/hexo/public/tags/随想/index.html","b39872624bd80b177d63ee8ac2fdaf84"]];
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







