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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","35d69f748f784834554493f493ad3e04"],["D:/hexo/public/2019/09/18/百年孤独/index.html","a9994148220c1f245eac43b7b1c436eb"],["D:/hexo/public/2019/09/18/鼠疫/index.html","df496c7383f97e6bbe070a441fb345b4"],["D:/hexo/public/2019/12/20/cloud/index.html","9bfc59de6835cc9a756be5a8dad59627"],["D:/hexo/public/2019/12/21/knn/index.html","4c35e5c03621fa1bee930fc40b2d9a01"],["D:/hexo/public/2019/12/23/finish/index.html","9e86615e563312dcaa93cdfe5b6b982b"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","4a41d598e59af94d55e0b0b97a9b0861"],["D:/hexo/public/2020/02/28/Linear/index.html","9aa8be036ed8b8100246a9af6a630523"],["D:/hexo/public/2020/03/21/time/index.html","b2b6843f69c9c691a9072905eeea0d4b"],["D:/hexo/public/2020/05/23/1984/index.html","2f0fba567c59566fad8cb79b2bf70065"],["D:/hexo/public/2020/06/09/git笔记/index.html","fc76e4f5e8a2b1a4eb8d11db57d531ce"],["D:/hexo/public/2020/07/29/sheep/index.html","beda811c226f37275a3a6ca7c861146f"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","684ae68f5ac470fe39855c7b24ee29d7"],["D:/hexo/public/2020/08/09/Haruki/index.html","04d0a4004a0e377bee649a5ea66f70ac"],["D:/hexo/public/2020/09/13/summarize/index.html","03642257d7a73fa5b8cba9c4181d80f7"],["D:/hexo/public/2020/10/19/Thorn/index.html","460bf1a7da9dcc592d4006eb19a003a5"],["D:/hexo/public/2020/10/28/huiyi/index.html","a1bef46a9b8c9ee27fd7f1561d92380e"],["D:/hexo/public/2020/11/26/一点感悟/index.html","fa5bcf904dafac4029b5afcca2580c0e"],["D:/hexo/public/2021/01/02/crime/index.html","7c23bb82aec537ecbff9259f003f41c7"],["D:/hexo/public/2021/03/08/mother/index.html","9e468423ba84ee8cb193992beea66ece"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","98d5993c6b46d82fc15397bda618f3b2"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","636d853e22eabb046620a2a3d74211e4"],["D:/hexo/public/2021/03/31/Cholera/index.html","e1d20b24a3740bfa2eefc48f0db8dc90"],["D:/hexo/public/2021/03/31/镜中/index.html","7866a354774db7dc085538c24f1af859"],["D:/hexo/public/2021/04/03/最后的对话/index.html","430d12c77a082099391badb0fa72f31a"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","f62e85c71bd934a43c5e478981728d26"],["D:/hexo/public/2021/04/06/雪国/index.html","24444b478fb95d7d0770e914ffb15a9a"],["D:/hexo/public/about/index.html","2f3e45baf98d480c00908aaec3e89cd6"],["D:/hexo/public/archives/2019/09/index.html","84b214e7332637abf957cab758678089"],["D:/hexo/public/archives/2019/12/index.html","2a8f9ed88356c514eec883dc56471bfd"],["D:/hexo/public/archives/2019/index.html","e0dddf2946edc38a52b572a3325b0c5d"],["D:/hexo/public/archives/2020/02/index.html","a321a59f6e1b6d291451c662a04e622a"],["D:/hexo/public/archives/2020/03/index.html","ac590fe6c5b367f99212ff736bfceb69"],["D:/hexo/public/archives/2020/05/index.html","b6d23cb6e8c3767e121d91b0b2de7d91"],["D:/hexo/public/archives/2020/06/index.html","3969545789b0b0d4ed86be27f1e1e5bf"],["D:/hexo/public/archives/2020/07/index.html","748c8504dcf6725baefcc29d82c1b0b9"],["D:/hexo/public/archives/2020/08/index.html","d5fb8302fc84c5b323a0b555ba23955e"],["D:/hexo/public/archives/2020/09/index.html","fc5bbf8cf45f27aea5aa4a0300d7a764"],["D:/hexo/public/archives/2020/10/index.html","3f3ff2c53cda2351d8753342d3ed80a7"],["D:/hexo/public/archives/2020/11/index.html","934bb605d0fe39656ba5af9a79daebf7"],["D:/hexo/public/archives/2020/index.html","12faaf16d1a9c8fba9974c772982afb3"],["D:/hexo/public/archives/2020/page/2/index.html","b751d3b2ed2c146a8982a4903555c2dd"],["D:/hexo/public/archives/2021/01/index.html","7dac7ea5e54f6cd2af42beff65b449a2"],["D:/hexo/public/archives/2021/03/index.html","0de3c742be0812a46b96de3edf637e11"],["D:/hexo/public/archives/2021/04/index.html","50e010c8cad483055c04df6e81cacf9a"],["D:/hexo/public/archives/2021/index.html","1ca6823cc04a91b1ef49ad46ad797843"],["D:/hexo/public/archives/index.html","30314f757d01e1c764e540dc26bccf41"],["D:/hexo/public/archives/page/2/index.html","503ce8960d4706db2c3a62cb6c66c343"],["D:/hexo/public/archives/page/3/index.html","d1cc3843d66dec6b0b5c4d881361b72e"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","c916ee8ab713a2b2479d7d2631081c0e"],["D:/hexo/public/categories/index.html","a09e78f4189d73c8ede5be289fb0cc33"],["D:/hexo/public/categories/写作/index.html","f7a9ef611600c4052c7f0c3a56328a79"],["D:/hexo/public/categories/学习笔记/index.html","14960be8cb5b7868080ad5491e42c64e"],["D:/hexo/public/categories/感想/index.html","16a75eabcf4de6d70943a829b3da3ff1"],["D:/hexo/public/categories/数学/index.html","a9db4387f3a7b9d7873294cfdccf2946"],["D:/hexo/public/categories/文章收藏/index.html","92e564d429de68ad8a31c958df619d12"],["D:/hexo/public/categories/日记/index.html","5af30a6db0e2ce0e3686f1df5f6c9cf0"],["D:/hexo/public/categories/机器学习/index.html","ad91945d2165ea75040fd1e04c88f26c"],["D:/hexo/public/categories/诗歌收藏/index.html","3871c8202304cb22572ab69318433d15"],["D:/hexo/public/categories/读书笔记/index.html","289f8ff1b51c358829df9a46927d3b38"],["D:/hexo/public/categories/读书笔记/page/2/index.html","cf17be211a63416dafba927f8a94e076"],["D:/hexo/public/comment/index.html","f741d55336ba12bcc80a16d550b3d8b0"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","9590fda3a539ed0d597d5bd0764bd8ff"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","dc936db57c254ef1f0a071afd932d7d0"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","30e15e330a596e26f358a6f779517ec4"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","458e3f66ec92ef58dfd0f084e6517d57"],["D:/hexo/public/music/index.html","91f027208e1a76d373f663e2646aa72c"],["D:/hexo/public/page/2/index.html","2b6c9685a2cbdd4846a90efee940bf0c"],["D:/hexo/public/page/3/index.html","1834e3c07de4a5def85bb6960915682e"],["D:/hexo/public/tags/KNN/index.html","b56e3d64fa9f80f344d00a2c5dc073ce"],["D:/hexo/public/tags/git/index.html","3823e8683a7c2bee4293e4bc44818e07"],["D:/hexo/public/tags/index.html","674de547643e8c6ee45414cd481f1ef9"],["D:/hexo/public/tags/余华/index.html","d73c051912e0ec0b5846e033dad2cdbb"],["D:/hexo/public/tags/博尔赫斯/index.html","b6810d282f2f4368e997a4861381bdac"],["D:/hexo/public/tags/回忆/index.html","ef30aa13396d5b5fbdcd3106c4a404d1"],["D:/hexo/public/tags/川端康成/index.html","e8ae290db3600dba4d8bc6b516861f09"],["D:/hexo/public/tags/建站-hexo/index.html","a830d01d8656c5cc67764440acc3ab4b"],["D:/hexo/public/tags/总结/index.html","038b67447e3824c590ddd581f73fd74e"],["D:/hexo/public/tags/感悟/index.html","c2be908e043e2fda5c9d09b7465ff3a6"],["D:/hexo/public/tags/时空/index.html","6141e41e602abb786dd381f0eeb0f5a1"],["D:/hexo/public/tags/林轩田/index.html","c54b699002db92339cb4bc4437b5481e"],["D:/hexo/public/tags/线代/index.html","79efe2841e2ffb168c1d053d1b0b13b0"],["D:/hexo/public/tags/考研/index.html","d2b0e4d27f2ad0930a5681d3cfe5f78f"],["D:/hexo/public/tags/聂鲁达/index.html","7c5c7167ddd5d91ed7591c3e50df4d9b"],["D:/hexo/public/tags/诗歌/index.html","6041b980459560c772b0c4adad553a5d"],["D:/hexo/public/tags/读书/index.html","0c0c2e8cdffe76e41c46dd56c39d9bc8"],["D:/hexo/public/tags/阎连科/index.html","74f063cdfdac42f7df93aa4a486fb9ba"],["D:/hexo/public/tags/随想/index.html","8079a1519c9ca0fdb34fce8eef55ddeb"],["D:/hexo/public/tags/马尔克斯/index.html","14847ebe39b04f6196fa22dddabce25a"]];
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







