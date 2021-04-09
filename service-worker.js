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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","aa519d399b2d9bc0931de3f790f1f2c3"],["D:/hexo/public/2019/09/18/百年孤独/index.html","ae724128dda600df8fc02ad62a2e42ed"],["D:/hexo/public/2019/09/18/鼠疫/index.html","fd3b2fa11bf0cd33ddfb254950642e02"],["D:/hexo/public/2019/12/20/cloud/index.html","63b2354b2c52a991768409222c9a3bb8"],["D:/hexo/public/2019/12/21/knn/index.html","cb9cb13c8812c34bce64c640ead47953"],["D:/hexo/public/2019/12/23/finish/index.html","93e85d3ace2cbabd953d9fe1b25707c4"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","d538ca56f6d3c91cc9ef7697753b2033"],["D:/hexo/public/2020/02/28/Linear/index.html","821c7652f36de1272f41327c97057eb9"],["D:/hexo/public/2020/03/21/time/index.html","9b37e8d7373f3df5181d7363fc277aa6"],["D:/hexo/public/2020/05/23/1984/index.html","8b4aeb1a909d8e53b0278943c52d4d8a"],["D:/hexo/public/2020/06/09/git笔记/index.html","75434a8511bfe6e34a56e2f0ab01ae34"],["D:/hexo/public/2020/07/29/sheep/index.html","5c569fa8233d08e3c251ed1569d87d3e"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","90fe776b537f8ab22b8e01e5ec9ccfc4"],["D:/hexo/public/2020/08/09/Haruki/index.html","b4aa325d4efd6c31a7570f8db8d9f0d6"],["D:/hexo/public/2020/09/13/summarize/index.html","910588cf919cced833c02bd46abf6485"],["D:/hexo/public/2020/10/19/Thorn/index.html","60701921ab4b9de923824259914957ce"],["D:/hexo/public/2020/10/28/huiyi/index.html","cb8da99b6bd0b3270ea0576aba9b3479"],["D:/hexo/public/2020/11/26/一点感悟/index.html","69d5cafea1c38924d0d7398e82f3be9d"],["D:/hexo/public/2021/01/02/crime/index.html","d66889acd04cd8b9e2a93bb77e42a04a"],["D:/hexo/public/2021/03/08/mother/index.html","9b684c0a5ca05738b9b0f820262bf415"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","a1880dc4993beec17fb5fd379f61cbf5"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","70a4c3bd06473150d28fc120537184aa"],["D:/hexo/public/2021/03/31/Cholera/index.html","bdd4f0e3ea34c2f071445f4a366054e8"],["D:/hexo/public/2021/03/31/镜中/index.html","2ebf7e8fdeb6a939bcf1f19425d55fbe"],["D:/hexo/public/2021/04/03/最后的对话/index.html","0d4b8db0c9d20b59856c7f0f5479b540"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","12725a06a2c80df833d7c38f8aa442d7"],["D:/hexo/public/2021/04/06/雪国/index.html","cfb2e002107c15f3f463ba539639871f"],["D:/hexo/public/2021/04/09/骂观众/index.html","5bc14f6dd7a3a96511c81b05819c96b6"],["D:/hexo/public/about/index.html","c7d4da2a2ddc06b4ee0991e59bae201a"],["D:/hexo/public/archives/2019/09/index.html","d2ff41de8131295ab0edb0dba0d6f9ab"],["D:/hexo/public/archives/2019/12/index.html","759b95e81cf858602fdb9de8d8a809ef"],["D:/hexo/public/archives/2019/index.html","51994ae4a5c18e552eb26500c0f9fa32"],["D:/hexo/public/archives/2020/02/index.html","1dcaff407fdbd25d8635303be7ba49a2"],["D:/hexo/public/archives/2020/03/index.html","82d61069f5e4aa61ec10c6220fb32b61"],["D:/hexo/public/archives/2020/05/index.html","d6987b5f516bf8089cb8860e40ec5373"],["D:/hexo/public/archives/2020/06/index.html","b2f05e44b59b13619867ab40a0767840"],["D:/hexo/public/archives/2020/07/index.html","e6022cec77722c881a53d9c5330997ea"],["D:/hexo/public/archives/2020/08/index.html","f3472d401666576d8f04b3947fac1fae"],["D:/hexo/public/archives/2020/09/index.html","1fe92a19dc48c1488e344c6a0dcfd0ea"],["D:/hexo/public/archives/2020/10/index.html","32fa6a9e927a7f4ecb83035c8bb0d380"],["D:/hexo/public/archives/2020/11/index.html","7b56a3bb5798a8aa3c06e8be9918930c"],["D:/hexo/public/archives/2020/index.html","a9340087ef92850a5adbb804ae5667ea"],["D:/hexo/public/archives/2020/page/2/index.html","c0e13dd1721674adb5ea3b8dd9947d07"],["D:/hexo/public/archives/2021/01/index.html","734470c6ec3a7a1f863fbbbe51104ca1"],["D:/hexo/public/archives/2021/03/index.html","d03ccb2cae75e1229d226d343106b7b0"],["D:/hexo/public/archives/2021/04/index.html","20bdf26058f37e95a6d191213a48b954"],["D:/hexo/public/archives/2021/index.html","89c7ad3d4798c3cf087192912817046b"],["D:/hexo/public/archives/index.html","b62dde9d34df3e01c6b59cfa1edd4116"],["D:/hexo/public/archives/page/2/index.html","2dc525c2b5bbbb21211e56d33565c9d9"],["D:/hexo/public/archives/page/3/index.html","76eb62ba3814284a86ec8fb2af67d82e"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","93709570249322862bacc1d4ba22c848"],["D:/hexo/public/categories/index.html","a1017bbd414f6aace182d4d63911700c"],["D:/hexo/public/categories/写作/index.html","14d2619eb771a3dd82e8f402e602586b"],["D:/hexo/public/categories/学习笔记/index.html","01de2222384da4ef8e4cb6fe57a13f3e"],["D:/hexo/public/categories/感想/index.html","2f55230b1b496511fa6663c58e247ec0"],["D:/hexo/public/categories/数学/index.html","f973b018f1aefd226610e2b34f8b2056"],["D:/hexo/public/categories/文章收藏/index.html","2f4adae8436eaf5c781fb3661398808e"],["D:/hexo/public/categories/日记/index.html","0923e8ecbc5d7f4c89a41ead7a229b3c"],["D:/hexo/public/categories/机器学习/index.html","40041dfd2f6e9e87a3036f59bb6e32a5"],["D:/hexo/public/categories/诗歌收藏/index.html","538482b4e451b1ef5a897dc369e91747"],["D:/hexo/public/categories/读书笔记/index.html","c33aadc636d5157fb63b3a7ccb105514"],["D:/hexo/public/categories/读书笔记/page/2/index.html","340c2c138ea0fe2be08906e12d20a2c2"],["D:/hexo/public/comment/index.html","801b56fd561ba443709c04b3005128a0"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","f92f1383b8fc81acaad51adff6189659"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","d918fad2242bdc27eba1ecfbefaa2687"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","8e44a739eebaa307cd9ab4407ec29d40"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","69c7dbdc873a474d5f537416fa31e235"],["D:/hexo/public/music/index.html","30dee104c6470840cd097faaf460685f"],["D:/hexo/public/page/2/index.html","16e7860867957ad70dd114358d943fd2"],["D:/hexo/public/page/3/index.html","092ddc7cac8d2a175dc94b7cb4cbc355"],["D:/hexo/public/tags/KNN/index.html","c1b4288c6b3d298696effca89e16a1fd"],["D:/hexo/public/tags/git/index.html","7f0e9cac6ae8e9e1bb689e76d47489a5"],["D:/hexo/public/tags/index.html","e6c6cb7ea998201a971101dbb53649eb"],["D:/hexo/public/tags/余华/index.html","5b83b312c772a5c95901c72592e37cde"],["D:/hexo/public/tags/博尔赫斯/index.html","832486d9fe73e5ca1aff16f0ff01e174"],["D:/hexo/public/tags/回忆/index.html","1cbe5d8d49ff20d5f7f1ed2fb379a07b"],["D:/hexo/public/tags/川端康成/index.html","955370a7acf8acd39bf45340dc07c26a"],["D:/hexo/public/tags/建站-hexo/index.html","6796aabea06cf63cd7135045b32bc77c"],["D:/hexo/public/tags/总结/index.html","3f5d4d8f1755240566b58f4c972e9951"],["D:/hexo/public/tags/感悟/index.html","48b70eaac0e01c0c5cf0f246c773e7c8"],["D:/hexo/public/tags/时空/index.html","12f6f1518d3fbb810ba20293e7d09d59"],["D:/hexo/public/tags/林轩田/index.html","f494ae985f938d6063d0deb9c9a804fe"],["D:/hexo/public/tags/线代/index.html","1a701e1675ef564d4d63bd92af14ab17"],["D:/hexo/public/tags/考研/index.html","a3a4001740a8f5e5ed31ba345b495920"],["D:/hexo/public/tags/聂鲁达/index.html","8a9fdb38350b628b90def646c453a345"],["D:/hexo/public/tags/诗歌/index.html","7657c6c8e0f8310d8451a67a86ee04ed"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","e9d81c00614892f8cb010f963b2f15ff"],["D:/hexo/public/tags/读书/index.html","f1157b8df2dff506e054abfd3d3fa9d9"],["D:/hexo/public/tags/阎连科/index.html","0669d37895216f4371fd6612d4523edc"],["D:/hexo/public/tags/随想/index.html","3a4f1fa94d303e1c70443d66b5d54423"],["D:/hexo/public/tags/马尔克斯/index.html","aaf5af2ca3818ab7c734394484609f36"]];
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







