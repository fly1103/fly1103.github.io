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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","d03623b0fba3fcb6dbfe247e4934f530"],["D:/hexo/public/2019/09/18/百年孤独/index.html","d7aa6077f301b447301f1eed895f668e"],["D:/hexo/public/2019/09/18/鼠疫/index.html","5f46fe1a562ec0715f3e49f01e99fff9"],["D:/hexo/public/2019/12/20/cloud/index.html","9752fa89e556d538a80d5477e818030c"],["D:/hexo/public/2019/12/21/knn/index.html","2cacbd4fbf06ab24f3a9d00970166968"],["D:/hexo/public/2019/12/23/finish/index.html","e28a9a83a4b090f800b260b386a4627c"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","8f9f14d11ac5db77889f7569eda7af7b"],["D:/hexo/public/2020/02/28/Linear/index.html","c39484f9774883dd7afbbf5721540360"],["D:/hexo/public/2020/03/21/time/index.html","47b52af5b93ea03be3f1c2e99f6debd9"],["D:/hexo/public/2020/05/23/1984/index.html","fd8d4b5edc0211c12d4261be1dfd6674"],["D:/hexo/public/2020/06/09/git笔记/index.html","f900bd489c805623b854491235bf06cf"],["D:/hexo/public/2020/07/29/sheep/index.html","7878afff1044cfdc6753e872499f369a"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","68ab575b8d4a2f23a286dacb73e37016"],["D:/hexo/public/2020/08/09/Haruki/index.html","21f6dc115d724ea2af166f315a71d1b4"],["D:/hexo/public/2020/09/13/summarize/index.html","eca2cb9acee50d4d72bbd99a2906fefc"],["D:/hexo/public/2020/10/28/huiyi/index.html","4b13a3f7fec901dc618f6e9c7206ba9e"],["D:/hexo/public/2020/11/26/一点感悟/index.html","a98748632dc1bcd469c089722fc411ea"],["D:/hexo/public/2021/01/02/crime/index.html","a5e99a236cf43d6615cf762010d0e9f2"],["D:/hexo/public/2021/03/08/mother/index.html","602ad0dc49ffe14cf4a6ccebe8edf112"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","c5688a1cf4f628f0363783c4e1fb7ce2"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","63c399d33aee9fbfdb09edc81dc07352"],["D:/hexo/public/2021/03/31/Cholera/index.html","593ca7a31b6168c620417f20b9d14fe1"],["D:/hexo/public/2021/03/31/镜中/index.html","ed3b725ae7968e4d5e0b84433bde604e"],["D:/hexo/public/2021/04/03/最后的对话/index.html","4db53fca6021a7b0f0a9c5a5302dfb0b"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","008883706fb2a0c4c5ccd3b1c9a7a8de"],["D:/hexo/public/2021/04/06/雪国/index.html","a6dffe2721e39c3229cbaa58310583df"],["D:/hexo/public/2021/04/09/骂观众/index.html","ab138d1475258dc345d70585335f43ed"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","9a318f623ffef8dc8522ed507c1cc7ef"],["D:/hexo/public/2021/04/21/家/index.html","279cf5543638f229848012101d3c2ff2"],["D:/hexo/public/about/index.html","0844eea4481d198ec622df1f34f246d0"],["D:/hexo/public/archives/2019/09/index.html","461e6c4a79ce09c692eb411e3e0308c7"],["D:/hexo/public/archives/2019/12/index.html","cdd0db332452ed541b4827cea9cdfd94"],["D:/hexo/public/archives/2019/index.html","5ebf9653449ee3d26c979d099a6b2507"],["D:/hexo/public/archives/2020/02/index.html","c0e2ac1fcceae2f898f089948016f74f"],["D:/hexo/public/archives/2020/03/index.html","4c0c6f1a2fd7fa27c08092c465cd6dbd"],["D:/hexo/public/archives/2020/05/index.html","6e784216e132f222c3be209b68ee3dd1"],["D:/hexo/public/archives/2020/06/index.html","41d26a98501d1aa810c061c1323d82f1"],["D:/hexo/public/archives/2020/07/index.html","b8850b97892822d423a38e108de71d99"],["D:/hexo/public/archives/2020/08/index.html","0e837d9634ed957480627a19d1b31680"],["D:/hexo/public/archives/2020/09/index.html","74f9887162b4512d12fa46eb55425928"],["D:/hexo/public/archives/2020/10/index.html","947095769cf7d7cdf69a2e5b673a6442"],["D:/hexo/public/archives/2020/11/index.html","f9fcb70a0d9e9bbdda3569e84b9c8b9b"],["D:/hexo/public/archives/2020/index.html","f4485178037bc9c055e7c793d6e3df2c"],["D:/hexo/public/archives/2020/page/2/index.html","e301ff88efcc5272534c5d67288808c4"],["D:/hexo/public/archives/2021/01/index.html","1394b87219564b83ab31184c55d0f9b0"],["D:/hexo/public/archives/2021/03/index.html","bff92fdd32e16de45b6db0ce734ecf27"],["D:/hexo/public/archives/2021/04/index.html","269c8e49340ef18daf863244714bca97"],["D:/hexo/public/archives/2021/index.html","66447f0ec7e80a0ceced49521966fc70"],["D:/hexo/public/archives/2021/page/2/index.html","2621b5565af5c4e0ab119c6c33741513"],["D:/hexo/public/archives/index.html","b2c82b789357ac0077fc6655112dba97"],["D:/hexo/public/archives/page/2/index.html","a5b1767734a02a2ce4a6e4e4d6afd322"],["D:/hexo/public/archives/page/3/index.html","440a99180bce4ad12464bf19df49aeec"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","5f48503c6b6c9dfc293fc48156f5cafa"],["D:/hexo/public/categories/index.html","4f9668e32f2cc64d5acc1f804db22954"],["D:/hexo/public/categories/写作/index.html","862e036022202b3109182be4067ccdae"],["D:/hexo/public/categories/学习笔记/index.html","6daba26619fceb63960a6d2a123d82dd"],["D:/hexo/public/categories/感想/index.html","1dfe8bf3ca6dfaf33258a7c97cb3a51d"],["D:/hexo/public/categories/数学/index.html","c8c9cf4faac63bb29a636f18d6e1c621"],["D:/hexo/public/categories/文章收藏/index.html","33555ed9f5c8799b58fcbaee2ac31b71"],["D:/hexo/public/categories/日记/index.html","b4558e152e4099780363f3df4dfa78b0"],["D:/hexo/public/categories/机器学习/index.html","67378c6ecb204e5c63954efd7b3d531b"],["D:/hexo/public/categories/诗歌收藏/index.html","e03ed013a412ba0abe0c03de620a5aa2"],["D:/hexo/public/categories/读书笔记/index.html","2baca4cb7db4071b73412e97fad5e6da"],["D:/hexo/public/categories/读书笔记/page/2/index.html","2409a08af4ac14e3bb5342b771b3894e"],["D:/hexo/public/comment/index.html","663646751a1aa43f1fb5b23a1ca09c67"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","f5b1939b50468863855f9a88e32fd511"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","6c7e26495b99434705446463bcb9414b"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","29bd9ac77a5b862866430acc30c3498f"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","c74fa339e873ba6a4bd0211a2ef5e161"],["D:/hexo/public/music/index.html","3f332c724241ed24ae6ef028221e7ba1"],["D:/hexo/public/page/2/index.html","bb842616b4535cfd0cbbd3a3f864fdab"],["D:/hexo/public/page/3/index.html","7f67d205fb37548afb688188ca56f9c3"],["D:/hexo/public/tags/KNN/index.html","898560f0e474b3025e0f2df56e1a1913"],["D:/hexo/public/tags/git/index.html","09a7fb6777e39d4cfb067d14d363b8dc"],["D:/hexo/public/tags/index.html","3a02e94e5aa0d293c306a6d1eea1f298"],["D:/hexo/public/tags/余华/index.html","1ca0756a076fe978f581d6e59f1cb5a9"],["D:/hexo/public/tags/博尔赫斯/index.html","78d4e632376f4905c6134d6c640b5c19"],["D:/hexo/public/tags/回忆/index.html","652657645e1b0e5b67ab6b3b07905f45"],["D:/hexo/public/tags/川端康成/index.html","551dcd4552f926a773e1ef2cd3a8fd6a"],["D:/hexo/public/tags/巴金/index.html","918e9e6031c4af535e1f40d484d70459"],["D:/hexo/public/tags/建站-hexo/index.html","5e147cf8f86e55173cb1cf172f7c006a"],["D:/hexo/public/tags/总结/index.html","dd0bef2eb0d14a1d5dca421feebdcc36"],["D:/hexo/public/tags/感悟/index.html","a5b9175bab66cfc16f885ce116891e16"],["D:/hexo/public/tags/文学/index.html","46d107b3174a0af07055225fdc056f89"],["D:/hexo/public/tags/时空/index.html","1d7512ebac9bcab5511f9d556c35bbfd"],["D:/hexo/public/tags/林轩田/index.html","5b90ad2e81cc36463e4882053c68bd24"],["D:/hexo/public/tags/线代/index.html","3fa41773c1ff3318827ac71c9585065c"],["D:/hexo/public/tags/考研/index.html","78d43bcb41ba68eac92f140c62d1533e"],["D:/hexo/public/tags/聂鲁达/index.html","c5b048fc1d329831449bb45932c1c4b5"],["D:/hexo/public/tags/诗歌/index.html","fac706ad168b2d1d56a959d177660fe4"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","b169c504245c4f6f29c369417a7bd86a"],["D:/hexo/public/tags/读书/index.html","15280d31c25a9b971e5b0cf00473c215"],["D:/hexo/public/tags/阎连科/index.html","7685ddfed606ae85589c21c5c917d1a9"],["D:/hexo/public/tags/随想/index.html","483e377fd54ee2e0cf88b80795b0c108"],["D:/hexo/public/tags/马尔克斯/index.html","439728ece7810ee0e119125f90826660"]];
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







