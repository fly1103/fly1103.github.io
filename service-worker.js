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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","b3b3bc00fe318afffee5952b1ec64364"],["D:/hexo/public/2019/09/18/百年孤独/index.html","5de804b86b8a2db73f914da399284a15"],["D:/hexo/public/2019/09/18/鼠疫/index.html","9859815bff7a146eea78ce860e7079a5"],["D:/hexo/public/2019/12/20/cloud/index.html","a38e6eecb2b316ac8498054419bfebff"],["D:/hexo/public/2019/12/21/knn/index.html","4ec1fe5d7eeb1428ab62f1fd3c20bee2"],["D:/hexo/public/2019/12/23/finish/index.html","fffb1ae246f5ec2e98d9495a64e08ccc"],["D:/hexo/public/2020/02/24/单词本/index.html","087da3cf95dc391544f88a133a2e918f"],["D:/hexo/public/2020/02/24/英语听力/index.html","c2e1746a41777b4d71f87cea0f8ac89a"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","12d83045c12fe5e6868a724a49a5da96"],["D:/hexo/public/2020/02/28/Linear/index.html","044fcba9793d7dba2489bfcaaa79020a"],["D:/hexo/public/2020/03/21/time/index.html","96302459b63d50ef1359420fc4248726"],["D:/hexo/public/2020/05/23/1984/index.html","62171332b8eb3745e1706a90cc4cbb8c"],["D:/hexo/public/2020/06/09/git笔记/index.html","bab51e025a4916254df6464235b91322"],["D:/hexo/public/2020/07/29/sheep/index.html","213e2e760d0ce6dfa836525d38691e04"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","407a8cdcf8563a873b8a88d8ae0ed0bc"],["D:/hexo/public/2020/08/09/Haruki/index.html","57ebd6e727eba53075d21d26d54d3a83"],["D:/hexo/public/2020/09/13/summarize/index.html","c94639313f32cca44e31c814dd65faca"],["D:/hexo/public/2020/10/19/Thorn/index.html","c2bb908e84e07740819e90dde156d440"],["D:/hexo/public/2020/10/28/huiyi/index.html","8d7c0ef43733da7fca706dca6e2096ab"],["D:/hexo/public/2020/11/04/birthday/index.html","e9b304ff54e96743bcbad92e3e8e0746"],["D:/hexo/public/about/index.html","c497bc8f938bee1aa64606861febdb96"],["D:/hexo/public/archives/2019/09/index.html","2725b4d741c9f4d22bf63e5ba2fe92c5"],["D:/hexo/public/archives/2019/12/index.html","cf646c49dd633bf8d3d131956e8d816b"],["D:/hexo/public/archives/2019/index.html","9b3db68c34bbdd691ad01c12b19bf7d3"],["D:/hexo/public/archives/2020/02/index.html","294a4f814cf41f5b2095055942d6c8ac"],["D:/hexo/public/archives/2020/03/index.html","269508fe8514354707afd4719c597ecf"],["D:/hexo/public/archives/2020/05/index.html","4b0ae3a16e76a5d5a225bd4bb01601cc"],["D:/hexo/public/archives/2020/06/index.html","0408e788d8e2b8007f2f17f4706d609b"],["D:/hexo/public/archives/2020/07/index.html","1c61fe0fbd55264aedbfc9ce1fc423c8"],["D:/hexo/public/archives/2020/08/index.html","243af4bbef1f96627495a33af21d76fa"],["D:/hexo/public/archives/2020/09/index.html","6b5ca3a82afbe20b6a20b80d7adf8c07"],["D:/hexo/public/archives/2020/10/index.html","b4fe1ef31fcc5cc40846f62da805b560"],["D:/hexo/public/archives/2020/11/index.html","da75dbd4f84073ced344ec8879fc2142"],["D:/hexo/public/archives/2020/index.html","34e68c65d72f31cff39dc324b1093b70"],["D:/hexo/public/archives/2020/page/2/index.html","5937caaf95a6c834aec7363c81adf432"],["D:/hexo/public/archives/index.html","1f44fbf457205d6e086e425372972df8"],["D:/hexo/public/archives/page/2/index.html","89f4328a570130dc58afca8fd086e68b"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","33b83772058cd5367cf200c5d824da3a"],["D:/hexo/public/categories/index.html","cec787dc93d7b3b9f4f9301874f4f075"],["D:/hexo/public/categories/写作/index.html","fec17e111dbcf18d24de615f26eec162"],["D:/hexo/public/categories/外语学习/index.html","68de627ba985ddcc3765fc9e231675ee"],["D:/hexo/public/categories/学习笔记/index.html","67d03da50edf24cb5de3dd7642c1f123"],["D:/hexo/public/categories/感想/index.html","6f7be072f30a384e38a5a6ebd353b68d"],["D:/hexo/public/categories/数学/index.html","d8b7e822b5617d91c5d2647f0b95bb2f"],["D:/hexo/public/categories/机器学习/index.html","6916cd43ecd6c267ab89eec4174a262d"],["D:/hexo/public/categories/读书笔记/index.html","6399c81243a91300071a4f3a8ae81125"],["D:/hexo/public/comment/index.html","50547fa1243f176f7e853f6103a1d845"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","4e990553293523d8fb62ce2c04c35598"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","b583b41fa0c8f8af464f5df073990778"],["D:/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","d5df9ad60f84200afcddb95eee9c9d11"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","79b520305fb651db12e805249ad68049"],["D:/hexo/public/music/index.html","f29dfd9c97c7e5342960d5991e80e730"],["D:/hexo/public/page/2/index.html","7d07d02ee08ccda20c10541e95bf328c"],["D:/hexo/public/tags/English/index.html","5652407d4e19c038369f15259d78d0cb"],["D:/hexo/public/tags/KNN/index.html","4dd14142e8a7cb6fbe43b81fd3d4d9ff"],["D:/hexo/public/tags/git/index.html","932aee52f86a929fb5998341f5118098"],["D:/hexo/public/tags/index.html","446ef04a2984c251bfea432b64cca968"],["D:/hexo/public/tags/回忆/index.html","2303a2319749ece0fbc6c13a68158fea"],["D:/hexo/public/tags/建站-hexo/index.html","79fd18b944856589a5fea9d0fec256eb"],["D:/hexo/public/tags/总结/index.html","11e2d96bd1467449e25cd6658196639b"],["D:/hexo/public/tags/感悟/index.html","c838b56a896583d80ef97df6b70e6d3f"],["D:/hexo/public/tags/感想/index.html","b260df98fa8f0c65578f39700f4016ba"],["D:/hexo/public/tags/时空/index.html","ae6d76614bbf3f302c5abff8139948a5"],["D:/hexo/public/tags/林轩田/index.html","1472f71e39d99cb1b5eef20ea7695ca7"],["D:/hexo/public/tags/线代/index.html","30dcedcb5fcd9b03d7bae3791a415fc5"],["D:/hexo/public/tags/读书/index.html","6592fd7506ae3e7df1c5fe181b2ac628"],["D:/hexo/public/tags/随想/index.html","8a0df8cf06c687cbe70c756b017bb5fb"]];
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







