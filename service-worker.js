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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","b6556a1995d753ff8e89abd683d92fa1"],["D:/hexo/public/2019/09/18/百年孤独/index.html","3b515099a92acb74f786db982619a468"],["D:/hexo/public/2019/09/18/鼠疫/index.html","52b91a5be16682d4a4b4443ae3509936"],["D:/hexo/public/2019/12/20/cloud/index.html","4d297fca3c8b46c03d73b7dfc90f3737"],["D:/hexo/public/2019/12/21/knn/index.html","b5f9a5fe39d50d55e5c980689d45d704"],["D:/hexo/public/2019/12/23/finish/index.html","a6a3c922819738d749b436115a4e1a66"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","15977b42f18752651ee8b42d0a4a2e32"],["D:/hexo/public/2020/02/28/Linear/index.html","c3688a1e5715a3de658126088c907136"],["D:/hexo/public/2020/03/21/time/index.html","1202ff3740cca4c16f85c89218765cb5"],["D:/hexo/public/2020/05/23/1984/index.html","00b4654b591ba747a20c836095d9fe35"],["D:/hexo/public/2020/06/09/git笔记/index.html","9a06ac8c90ad81d7f54c2628ffe8a120"],["D:/hexo/public/2020/07/29/sheep/index.html","d2da07f3a8dce8d81405d9273d58c22b"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","c4dc996756ce8ede9ca8cdc02586b022"],["D:/hexo/public/2020/08/09/Haruki/index.html","c316574ea9787972a9295db1bbb41176"],["D:/hexo/public/2020/09/13/summarize/index.html","763d545464c793680877e2fb34d7844a"],["D:/hexo/public/2020/10/19/Thorn/index.html","fd8363ef4317067430c9729c5b08d2c0"],["D:/hexo/public/2020/10/28/huiyi/index.html","c76380868e08ba25a282d1599db36f20"],["D:/hexo/public/2020/11/26/一点感悟/index.html","1fe32a4541d196b65596d107a520daef"],["D:/hexo/public/2021/01/02/crime/index.html","7a3c234227ab61af3b69eebf341847a7"],["D:/hexo/public/2021/03/08/mother/index.html","7185850356c40f09273331d4fff6d254"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","cefd7a361fcb1bd3876308368cc16312"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","c9d24795cbea01bc7590c63de2fe61c0"],["D:/hexo/public/2021/03/31/Cholera/index.html","67fec548c8563c181be6f20e983a4473"],["D:/hexo/public/2021/03/31/镜中/index.html","13d119ac474b4d1d127f08f2a3285c23"],["D:/hexo/public/2021/04/03/最后的对话/index.html","f3aee1a3102e82789dd7c700830d9246"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","202115566a9fb2247d32ee627ddef056"],["D:/hexo/public/2021/04/06/雪国/index.html","dd4f80dc11dff37189f96e127750c0d4"],["D:/hexo/public/2021/04/09/骂观众/index.html","b6883fe6f029092e432bf82e07af33fc"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","6766a58bb5af7c6089990ef04d60bd4a"],["D:/hexo/public/2021/04/21/家/index.html","5d7317c73318e602925d17b6197b3255"],["D:/hexo/public/about/index.html","2c790ea00161fb8d5f7c12895fe3a469"],["D:/hexo/public/archives/2019/09/index.html","36185a9375939090462112fc7049e866"],["D:/hexo/public/archives/2019/12/index.html","9ca88fa585b4ce5224dfbf2a64562681"],["D:/hexo/public/archives/2019/index.html","27cc11aa0ed23d569a4d6f14380389b9"],["D:/hexo/public/archives/2020/02/index.html","a10045ec25b5a2c6cf7b1b17a6988a7b"],["D:/hexo/public/archives/2020/03/index.html","fba8f843dcadb599505e53fa555cbdf0"],["D:/hexo/public/archives/2020/05/index.html","8d8a0324d4423adbbb5e6494c8a4e2e5"],["D:/hexo/public/archives/2020/06/index.html","5b7efc93cec93ec200c9be671256a9d0"],["D:/hexo/public/archives/2020/07/index.html","e763fca3fefdc415aebf1d64e43c2e0c"],["D:/hexo/public/archives/2020/08/index.html","ada695ff134303c293ae01cf9ccafdbd"],["D:/hexo/public/archives/2020/09/index.html","73d6a0688b13d70d73b1653cb6bab243"],["D:/hexo/public/archives/2020/10/index.html","4db7659e323d53cccc93034c418ef5f8"],["D:/hexo/public/archives/2020/11/index.html","77846abe0c2e62f8a90be62712f6c3c2"],["D:/hexo/public/archives/2020/index.html","a8103c0c1481afb8319cd0b3140fd1c0"],["D:/hexo/public/archives/2020/page/2/index.html","5a3181b6766f71687576f7e044759fd7"],["D:/hexo/public/archives/2021/01/index.html","7d5daecdaee00c0da60e49d0bdb6f2fb"],["D:/hexo/public/archives/2021/03/index.html","ac99fd861c9d6eac0c2d633f9b372fd3"],["D:/hexo/public/archives/2021/04/index.html","f58d40e975669c2c4bef809ba209ee13"],["D:/hexo/public/archives/2021/index.html","a0b2408e7e64e7cbe91acc53e565dd77"],["D:/hexo/public/archives/2021/page/2/index.html","a9655e33910c93cd5487731d5b91e607"],["D:/hexo/public/archives/index.html","75a9e25d72c7e127842b6da175e439c1"],["D:/hexo/public/archives/page/2/index.html","1917f680b602952ecd1b78ed6d082a85"],["D:/hexo/public/archives/page/3/index.html","0fc35914b7166a027b4248ec67ba5480"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","9d435ad1b8adc21b84b258ebe4ca8901"],["D:/hexo/public/categories/index.html","08f74f5f3f2073d4b23d611ac9e83b82"],["D:/hexo/public/categories/写作/index.html","61bc69fd61c7c2b1f4305add68024d4c"],["D:/hexo/public/categories/学习笔记/index.html","2a50e91a0c1d9ee5a94b4162280a5313"],["D:/hexo/public/categories/感想/index.html","9a6165b7ae03008bbe33bc4c358827ca"],["D:/hexo/public/categories/数学/index.html","89f4368ed89bd7082ceaf12acfbf8f73"],["D:/hexo/public/categories/文章收藏/index.html","96cc28d1c4171789020246dcef7bf91e"],["D:/hexo/public/categories/日记/index.html","63045fef1725f5f438ecf4532545bf30"],["D:/hexo/public/categories/机器学习/index.html","a2b41e849f96e3ddef38148bb3b7e595"],["D:/hexo/public/categories/诗歌收藏/index.html","5c7746004486b77700e840089e731a84"],["D:/hexo/public/categories/读书笔记/index.html","f3246f967d1419b4e32357d03b51b899"],["D:/hexo/public/categories/读书笔记/page/2/index.html","de84b57f0bd92f34288e3d11632b2858"],["D:/hexo/public/comment/index.html","fe9530158b1ba0f24d858e613bf921af"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","3aecea8a881d16f651749c0d46637d98"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","33708185ff22a187a87d87cd57b34e51"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","a7ba2df058d27abd2b61256ee9302e8a"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","ca409d89aa1e22d2984731eda6e9b827"],["D:/hexo/public/music/index.html","f70bf4440ae598dbd7c99078914f38f3"],["D:/hexo/public/page/2/index.html","6a1d3cb4e87d338a9b98b68d5a22cee0"],["D:/hexo/public/page/3/index.html","d63114356ec3dad63cbe2dc691c75ea7"],["D:/hexo/public/tags/KNN/index.html","d2f32ad7978f0b1aa3c539107d767baf"],["D:/hexo/public/tags/git/index.html","bf77dfcba20ddbe55e5cebdb1bfe4438"],["D:/hexo/public/tags/index.html","f6ebb65774cc71b70392c97ca29a0e84"],["D:/hexo/public/tags/余华/index.html","a3ea3860bcf9e274f02f5e108bf99412"],["D:/hexo/public/tags/博尔赫斯/index.html","1db79067c1e4ff19ffb03b4de7f01962"],["D:/hexo/public/tags/回忆/index.html","511d79cc179495fca7713f32987e6f03"],["D:/hexo/public/tags/川端康成/index.html","cae553749e4cb15e2033577c4889b7bf"],["D:/hexo/public/tags/巴金/index.html","838116a8da279adebd78100d2cb254c2"],["D:/hexo/public/tags/建站-hexo/index.html","319d0e7b7bd62fd5d5d911805bdecab7"],["D:/hexo/public/tags/总结/index.html","11432bf3cb897c4f09bd3c3e4b1ef86c"],["D:/hexo/public/tags/感悟/index.html","057e52cb12df4b86f647e2acac15c0c8"],["D:/hexo/public/tags/文学/index.html","cc1fb93f0ca91319cfca1a70852661ab"],["D:/hexo/public/tags/时空/index.html","dbb93b3f37ec880c1ffffbdbd822627e"],["D:/hexo/public/tags/林轩田/index.html","b4f0503eded2a2d4cd1178923462a14e"],["D:/hexo/public/tags/线代/index.html","e691725e845e4edb21e9a4487ebf9966"],["D:/hexo/public/tags/考研/index.html","68c09cfbacb7b918ffbd0308e4566b85"],["D:/hexo/public/tags/聂鲁达/index.html","9b999f17aa9d96b0d4c569555a2868f9"],["D:/hexo/public/tags/诗歌/index.html","a1ea7fdee81879e4058ee45311b66a1d"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","9fec65d42fdf7aa0781a0e2fca949c6a"],["D:/hexo/public/tags/读书/index.html","9e4829fd140b5f4c49ef0297f85ec046"],["D:/hexo/public/tags/阎连科/index.html","452174c4d4a03fd9f04883bb3e204a7f"],["D:/hexo/public/tags/随想/index.html","01d71e91c3bf97a45e3352835cf1501b"],["D:/hexo/public/tags/马尔克斯/index.html","76e952d9fd6c4a5ab1a78da28a89c6e3"]];
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







