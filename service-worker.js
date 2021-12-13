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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","a9707c57265cf4ac9b799c651db94b4e"],["D:/hexo/public/2019/09/18/百年孤独/index.html","18244c2ca0ab7db90717dce8fe6c9e23"],["D:/hexo/public/2019/09/18/鼠疫/index.html","ecf790d8c20cd56ea953e0c7b80c7940"],["D:/hexo/public/2019/12/20/cloud/index.html","ac2ba775ad33aa0269761549298c9c0a"],["D:/hexo/public/2019/12/21/knn/index.html","79eb26bfd236ea29f094e4e1b29caf4d"],["D:/hexo/public/2019/12/23/finish/index.html","53950b6871ee7084e36b4d738b011f29"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","9e99a115c6ea4b5cf45c721a8ca19165"],["D:/hexo/public/2020/02/28/Linear/index.html","74e5a33f9976f199bf4a827d260bba75"],["D:/hexo/public/2020/03/21/time/index.html","79a946309569948c9a164d943e669774"],["D:/hexo/public/2020/05/23/1984/index.html","01f6488307896863c107e22d64377f57"],["D:/hexo/public/2020/06/09/git笔记/index.html","7905de6e0ef80826ad28cb38941065d1"],["D:/hexo/public/2020/07/29/sheep/index.html","eb14d15a94f12d9082c445780af93f43"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","b11d838ebbf3beae4ca28f91628d8284"],["D:/hexo/public/2020/08/09/Haruki/index.html","815744b7626ca9a396e6e0b0942ce59d"],["D:/hexo/public/2020/09/13/summarize/index.html","6e776e231d669ff31acdf122f2419ab1"],["D:/hexo/public/2020/10/19/Thorn/index.html","3c0e95cf4088158b232113902a82651f"],["D:/hexo/public/2020/10/28/huiyi/index.html","bf2ccad3b292cf437add80ebe2f96a89"],["D:/hexo/public/2020/11/26/一点感悟/index.html","ecd5bada6b6333492f5bbbde0574c101"],["D:/hexo/public/2021/01/02/crime/index.html","278fdb103b7d780b22583c6edfa530b0"],["D:/hexo/public/2021/03/08/mother/index.html","49ede582e08be2ed40d3bd925f81ce47"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","da63eb55a6cf0884b4f890a720469052"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","bdb02ff6a438651c2f32875ab897c0d4"],["D:/hexo/public/2021/03/31/Cholera/index.html","8f9ccc6b3a3762abb93a145a55d8e01b"],["D:/hexo/public/2021/03/31/镜中/index.html","ddc609ae392ca2c579fdb11949a5f149"],["D:/hexo/public/2021/04/03/最后的对话/index.html","b044bc1ef3d199fe998b0419850450c6"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","0ee0dfa8be7e67264a6005fa054a8db5"],["D:/hexo/public/2021/04/06/雪国/index.html","38840018b32e7318af5b1a5947150fbb"],["D:/hexo/public/2021/04/09/骂观众/index.html","5f0bc015bd711cd95174051fdf921b49"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","984b3be5df0249ee7fcfaaaa7900dcd7"],["D:/hexo/public/2021/04/21/家/index.html","20dc9eede59a74abeb8a63af1e5b4b5b"],["D:/hexo/public/2021/04/24/光与岸/index.html","906303c7da70b7d411be1debec16d940"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","9e980bb362213f38fe388e8c37e98d8e"],["D:/hexo/public/2021/05/03/五月伊始/index.html","5175899d41fa56a6c0d1edabcf72a367"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c4136046737d8ebc063f49abbb244762"],["D:/hexo/public/2021/05/31/迎接六月/index.html","b2ff890f64c24d79f88aa1f67122ee26"],["D:/hexo/public/2021/07/07/七月/index.html","89b63013dee4bcb02b3a96e6c31c3cab"],["D:/hexo/public/2021/11/12/随笔11-12/index.html","3d425bd36cdbd70fe19c12755cc2578a"],["D:/hexo/public/about/index.html","10a12c3988e8fe574f26cb1f6a3c8cc0"],["D:/hexo/public/archives/2019/09/index.html","3a94f7a915c9dcc8d2745bc9fb64cdc3"],["D:/hexo/public/archives/2019/12/index.html","2dab57ff9a35070d8b3c48667897107f"],["D:/hexo/public/archives/2019/index.html","1e9cfd124c3a06ab84dc3e2c39e4be34"],["D:/hexo/public/archives/2020/02/index.html","c8da0318b714ee324d5efc286e31bc23"],["D:/hexo/public/archives/2020/03/index.html","64ae69fdfa3a478ec90dccb0d8bb879f"],["D:/hexo/public/archives/2020/05/index.html","e35f69cac209ceb02d2b9bcec3f61788"],["D:/hexo/public/archives/2020/06/index.html","c1f3f43c7d77c312109e1d645d887731"],["D:/hexo/public/archives/2020/07/index.html","36051db83b0e271109575e0c2ab9882f"],["D:/hexo/public/archives/2020/08/index.html","88243fda135c65c530c35c5c8688ad41"],["D:/hexo/public/archives/2020/09/index.html","321ce67af11c695c7550996f56c4eba3"],["D:/hexo/public/archives/2020/10/index.html","dff66c499e9456578c25c214188ca250"],["D:/hexo/public/archives/2020/11/index.html","5ffe0db3a030350ad67a577a3d149616"],["D:/hexo/public/archives/2020/index.html","0b8d5fb62195c3c41610214ec304d679"],["D:/hexo/public/archives/2020/page/2/index.html","ab2abf4bd458e5bd20e9bd0b40135f6e"],["D:/hexo/public/archives/2021/01/index.html","c0729bf0a89c8a2f6f82f3ea39c8aca9"],["D:/hexo/public/archives/2021/03/index.html","196b2c265e90a92927230524f291e454"],["D:/hexo/public/archives/2021/04/index.html","753845e5a63ce36351686eabc12e56d9"],["D:/hexo/public/archives/2021/05/index.html","f9b4ff7d15c5bfd79754c4c1ad03e77b"],["D:/hexo/public/archives/2021/07/index.html","7953392242a8e8a83bd6e25294dd738b"],["D:/hexo/public/archives/2021/11/index.html","1e3f14104d282b0cd642eea8b43e1b8e"],["D:/hexo/public/archives/2021/index.html","b9a8f488c09d0d1c8ac4e5cc3761628d"],["D:/hexo/public/archives/2021/page/2/index.html","b05109bca68d1d2b306fc541453a5a1f"],["D:/hexo/public/archives/index.html","7d33164977354f5ef974ed9c830bb6ab"],["D:/hexo/public/archives/page/2/index.html","e2555e9685bdd03265625aa323c13c45"],["D:/hexo/public/archives/page/3/index.html","4cedd054c7b2756ea8a0965410f86ed0"],["D:/hexo/public/archives/page/4/index.html","3702b129ebe91dcbf58e1c7740881818"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","c00c274f8c2a9bc5073d6f3d7a28fcec"],["D:/hexo/public/categories/index.html","ca539161b201af3f1e4d89766c49a037"],["D:/hexo/public/categories/写作/index.html","3e28c43e2069112a7973214842a9e7f8"],["D:/hexo/public/categories/学习笔记/index.html","f11816802609ff7108c749eaca262289"],["D:/hexo/public/categories/感悟/index.html","7140037bdce8710d237f1909265f12bc"],["D:/hexo/public/categories/感想/index.html","79d357890e119ed3c47f76a2901a1ce6"],["D:/hexo/public/categories/数学/index.html","5819ec58444a251bb1b3c91659f3aa2f"],["D:/hexo/public/categories/文章收藏/index.html","5f7194503ee011cc1e18451a3b464a83"],["D:/hexo/public/categories/日记/index.html","73365ba7c066cbbe8809030c6af2115f"],["D:/hexo/public/categories/机器学习/index.html","da2a81aff3c5c389248f990ce1eabd69"],["D:/hexo/public/categories/诗歌收藏/index.html","843d787b9a77068265b50dcac947b845"],["D:/hexo/public/categories/读书笔记/index.html","a51821b3096a734d3388c4984d54bdbf"],["D:/hexo/public/categories/读书笔记/page/2/index.html","188b535d92801d3e297f556453fe1d8a"],["D:/hexo/public/comment/index.html","0696f714192140d5dcb26e884b08f06a"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","8304c54d7cb452bb63cd7c1b6e3e1c50"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","f5fa116d4f6e0b1668ffa3b411f6e665"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","79d1dab2e2ee4a0ec9fee6b9b7ba9769"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","24d4a1a7ef746585e743a6f1d8c58fa6"],["D:/hexo/public/music/index.html","273f67b9fae92bb88fd06cf107b43ec0"],["D:/hexo/public/page/2/index.html","fcd1dd56d27ba8541276a3da5fdde1b0"],["D:/hexo/public/page/3/index.html","ae45e87da7c3279f5b00244d8e155fa1"],["D:/hexo/public/page/4/index.html","3079110568c578e17caed390b65d40d1"],["D:/hexo/public/tags/KNN/index.html","4daf59c125c5abd9dffed765acd2a650"],["D:/hexo/public/tags/git/index.html","53e5f4fa53788e04a68e5ba92151bc19"],["D:/hexo/public/tags/index.html","e73224ee8a734f29c8c4c079b1266492"],["D:/hexo/public/tags/余华/index.html","d089e337869a4c5e067c6faa8fb4d5eb"],["D:/hexo/public/tags/博尔赫斯/index.html","6943d5fa74df2dad79191dd2eac4089c"],["D:/hexo/public/tags/回忆/index.html","4cf714ad831b26cf51caaf73aac5ea7e"],["D:/hexo/public/tags/孙绍振/index.html","1457af9f374c6d61dec15e67b05c4dc4"],["D:/hexo/public/tags/川端康成/index.html","5d0c0de275c9716aced2662160d85477"],["D:/hexo/public/tags/巴金/index.html","ae269e9182034104b9c2a86e5a3860ef"],["D:/hexo/public/tags/建站-hexo/index.html","4866ec922f407e3dafdb3dc9179397b8"],["D:/hexo/public/tags/总结/index.html","399e8c2a88fcd753ee1b0c9431203ef3"],["D:/hexo/public/tags/感悟/index.html","8532fc3a1dc4d705e12265f79ee5c8e0"],["D:/hexo/public/tags/感想/index.html","429198bec01992b8fbb9f6ebf6ff4491"],["D:/hexo/public/tags/文学/index.html","a65838309680ba4e0a80d42ba953085c"],["D:/hexo/public/tags/时空/index.html","5ddcefe033e8c3adaf9561ffe7fabcd4"],["D:/hexo/public/tags/林轩田/index.html","5d42cf303c2605f47e391d0d953a30e5"],["D:/hexo/public/tags/线代/index.html","ee97d6c1471e99d6f833d1dda4fd130b"],["D:/hexo/public/tags/考研/index.html","38c3b1105fc515189adefdfa858f3487"],["D:/hexo/public/tags/聂鲁达/index.html","b734d9fc28beefa5aa7334a564a8c31b"],["D:/hexo/public/tags/西湖大学/index.html","45ce1e1723e0cd9e94210c71a086d0fa"],["D:/hexo/public/tags/诗歌/index.html","22f6a7847c4103e92af0e95bc31c6686"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","ed3ee433bd66f3c9e73aa78894bbf309"],["D:/hexo/public/tags/读书/index.html","4021b455104fe8770c07bbd9a0b66ff5"],["D:/hexo/public/tags/钟文/index.html","d808a9c818f565b42a21509c70454664"],["D:/hexo/public/tags/阎连科/index.html","92194358c65050d416991b457bbfc79b"],["D:/hexo/public/tags/随想/index.html","96b3225c5d7e1c126f4e0f6d5a0e38e9"],["D:/hexo/public/tags/随笔/index.html","d07d05a91a66fcd666e7418601a71dd1"],["D:/hexo/public/tags/马尔克斯/index.html","832085424a0c04524eee84a71d75dd65"]];
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







