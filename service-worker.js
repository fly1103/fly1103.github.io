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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","201db2bdc410245ef7b1cb736b992c63"],["D:/hexo/public/2019/09/18/百年孤独/index.html","8cbe34c4bf3d01475b9cb2917985570d"],["D:/hexo/public/2019/09/18/鼠疫/index.html","b3d3c9d11e08ecb7c399c1e28ee64638"],["D:/hexo/public/2019/12/20/cloud/index.html","9c8ac4ed9a9fef3ba40605c1da486ff8"],["D:/hexo/public/2019/12/21/knn/index.html","512ad56461f087d1280faa0e31279c70"],["D:/hexo/public/2019/12/23/finish/index.html","8e34cd36dda22e7a1486991d3823ff9b"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","c739e209c2baccdf335f9b6a2ab46b2d"],["D:/hexo/public/2020/02/28/Linear/index.html","ea4068ff01c86019345a4b7a96f02d5a"],["D:/hexo/public/2020/03/21/time/index.html","46cbd7e27c8e6cbc0cdf18a588c35106"],["D:/hexo/public/2020/05/23/1984/index.html","0621e6192149e6f149abbef7bc7d52fb"],["D:/hexo/public/2020/06/09/git笔记/index.html","919ea0f57068bdd037d514c6b27fc8b2"],["D:/hexo/public/2020/07/29/sheep/index.html","b5e2abf0689b66efa5c59818e058069b"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","471235fc2f866cc93af7f1a5bd14c274"],["D:/hexo/public/2020/08/09/Haruki/index.html","b3e3220e98f853b1ff37892ff596de8a"],["D:/hexo/public/2020/09/13/summarize/index.html","4f18d64e865c0e9d96c756838a7c5fda"],["D:/hexo/public/2020/10/19/Thorn/index.html","4d2b0d1e59228b84cb456e5ee34efcad"],["D:/hexo/public/2020/10/28/huiyi/index.html","cd542f10764b44b46c266992e9c3fbfd"],["D:/hexo/public/2020/11/26/一点感悟/index.html","25600aa5b91d15a46d01cf84da3c69d0"],["D:/hexo/public/2021/01/02/crime/index.html","a479e4015cadf5cf113aeb731834d962"],["D:/hexo/public/2021/03/08/mother/index.html","d535ace33b9f9b1f77334d97b74a5aaa"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","cbce9777a083fd2e3547c2ebba5904b5"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","153aced946b009be5c0c644c1900788e"],["D:/hexo/public/2021/03/31/Cholera/index.html","713336cd1a71d3e219cf7b0f01e52b4a"],["D:/hexo/public/2021/03/31/镜中/index.html","ba1cddce0bc19f8ba478165f77f9a352"],["D:/hexo/public/about/index.html","706f58cc740d3ab0b02ad652a4081947"],["D:/hexo/public/archives/2019/09/index.html","2c26b7460079d8eab34d9d8f22d1fe3d"],["D:/hexo/public/archives/2019/12/index.html","bb9ee457147f258cf44faaa897f484f9"],["D:/hexo/public/archives/2019/index.html","0f908983f5b418f0a5c399386aea3ea7"],["D:/hexo/public/archives/2020/02/index.html","6bb8baf55f7cc180a64d7d63f9369aab"],["D:/hexo/public/archives/2020/03/index.html","7fb8a7c5eb86fc38e24316e996365659"],["D:/hexo/public/archives/2020/05/index.html","c137b8eecd6cde7e6fda63781cfffc9f"],["D:/hexo/public/archives/2020/06/index.html","5654ac0378e1b74ed450766052576847"],["D:/hexo/public/archives/2020/07/index.html","acadd94ee7e49e5b894d419317969452"],["D:/hexo/public/archives/2020/08/index.html","925f86d78dfb0057060c4ccbc0155dc3"],["D:/hexo/public/archives/2020/09/index.html","496ea4c89ed687cc4ec7903a5f35fd14"],["D:/hexo/public/archives/2020/10/index.html","bcc50456f65a7ae27ae35e004e1a45b6"],["D:/hexo/public/archives/2020/11/index.html","26edb5d7549fb97ac2ac6c75f916eb31"],["D:/hexo/public/archives/2020/index.html","928a01ea6a30459108a404c23e2d2b94"],["D:/hexo/public/archives/2020/page/2/index.html","b7cd0f5cd5338950658abc2567ba4a4a"],["D:/hexo/public/archives/2021/01/index.html","ebbba282fca165a2a6c04d2ad9d3fd3e"],["D:/hexo/public/archives/2021/03/index.html","fe26ebe5ffcdca4ceb91768b75135d97"],["D:/hexo/public/archives/2021/index.html","0d1511ae453fddfe74010c82e01bf946"],["D:/hexo/public/archives/index.html","4c8f5d4da98e8f0c25f8c3c27ca80833"],["D:/hexo/public/archives/page/2/index.html","4f89dffdcc1624ffd4825e386b409cc2"],["D:/hexo/public/archives/page/3/index.html","ae94efe17c802929108f52659c2e1cf1"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","dc22f5cf101eac07dc2525cde854f310"],["D:/hexo/public/categories/index.html","d44eae1e6fabfa53a8b682b44d461bd8"],["D:/hexo/public/categories/写作/index.html","40ae5174596cc721886647352f08e21f"],["D:/hexo/public/categories/学习笔记/index.html","2d90ee3f4386ee197dd53e239c6ef25d"],["D:/hexo/public/categories/感想/index.html","fc7f2ed13e65e962c01c1b23c68713b9"],["D:/hexo/public/categories/数学/index.html","d9d6ff68fa48fb7ed0fe9a739ebf35c1"],["D:/hexo/public/categories/文章收藏/index.html","3d4c1456bd3a43680a650eb46b7a26eb"],["D:/hexo/public/categories/机器学习/index.html","0c27bd46d6dd53c4d5c46cdf3c84bdea"],["D:/hexo/public/categories/考研日记/index.html","fcbdfd2e27e7b37f63b0bf395ee63abd"],["D:/hexo/public/categories/诗歌收藏/index.html","d5759a2672b22a7577481844a9bc8ed6"],["D:/hexo/public/categories/读书笔记/index.html","3f3bd9aced36265b2d220d4bc7b2b461"],["D:/hexo/public/comment/index.html","f4aadbb77f192f8334c5f695871e1ad3"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","8870d27f69ebbbd9180652775edfa994"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","6e7b6ffb23f9701cfcadaa50e0226feb"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","161f3e588d4b5ed3db6ec19aae176cb1"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","f63f9e0ffd0fc751129377ee503b9787"],["D:/hexo/public/music/index.html","7d8c45091d25ae4d7119d90f3623dad7"],["D:/hexo/public/page/2/index.html","7c78c79435b44075375e0730945b160f"],["D:/hexo/public/page/3/index.html","680301b6827566c3feefca75d826314c"],["D:/hexo/public/tags/KNN/index.html","49e7c96b04f15d48e8f5e83ea44b2421"],["D:/hexo/public/tags/git/index.html","83f4a696e3fe08fdb112722dcb1290c6"],["D:/hexo/public/tags/index.html","c4761fbab0abde24152d05394cd9c334"],["D:/hexo/public/tags/余华/index.html","ed1352aaf4162c6bdba27996def447df"],["D:/hexo/public/tags/回忆/index.html","d9702a45cd389e3f8c702bc09e39f803"],["D:/hexo/public/tags/建站-hexo/index.html","b3bb446db935ade45b3d91db704aa6c9"],["D:/hexo/public/tags/总结/index.html","5f7fec1b8dd48deec5a462573273bb46"],["D:/hexo/public/tags/感悟/index.html","2ba82fddb73f02340a8db0025f4e93d0"],["D:/hexo/public/tags/时空/index.html","1ff115539a16a8affb37662d1565f908"],["D:/hexo/public/tags/林轩田/index.html","27bb0dfe08d5bf6558a737141d2ecd08"],["D:/hexo/public/tags/线代/index.html","50866924d294755d01489c8d36896191"],["D:/hexo/public/tags/考研/index.html","32c89f08fc3e9e9959b3081d235208c1"],["D:/hexo/public/tags/诗歌/index.html","d38b0e50fbe88a5fa37e6502f5b76cf8"],["D:/hexo/public/tags/读书/index.html","864ba162369cfd27e14ae42a51156387"],["D:/hexo/public/tags/阎连科/index.html","c3440b6f7645cd2202179769ca3241a1"],["D:/hexo/public/tags/随想/index.html","a2492fd30d2fd99158d95a4793c995a3"],["D:/hexo/public/tags/马尔克斯/index.html","f9e97f7cc540972cc21e59015a66d919"]];
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







