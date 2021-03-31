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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","847053432611b4315f9771424df45fa9"],["D:/hexo/public/2019/09/18/百年孤独/index.html","b6adf0249ee4306b0c38dcca6f93db01"],["D:/hexo/public/2019/09/18/鼠疫/index.html","e4e5a20dba186a14f52ec9b8329b723e"],["D:/hexo/public/2019/12/20/cloud/index.html","a56fcd99770f52064e78de0ba7a136a7"],["D:/hexo/public/2019/12/21/knn/index.html","512ad56461f087d1280faa0e31279c70"],["D:/hexo/public/2019/12/23/finish/index.html","8e34cd36dda22e7a1486991d3823ff9b"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","c739e209c2baccdf335f9b6a2ab46b2d"],["D:/hexo/public/2020/02/28/Linear/index.html","ea4068ff01c86019345a4b7a96f02d5a"],["D:/hexo/public/2020/03/21/time/index.html","46cbd7e27c8e6cbc0cdf18a588c35106"],["D:/hexo/public/2020/05/23/1984/index.html","aa539e25a9382b2c1da3affeb75400b8"],["D:/hexo/public/2020/06/09/git笔记/index.html","919ea0f57068bdd037d514c6b27fc8b2"],["D:/hexo/public/2020/07/29/sheep/index.html","8317b286587bcd4bd180aaecd0faf852"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","9a620d97f645998333db84a6cd0a9fee"],["D:/hexo/public/2020/08/09/Haruki/index.html","da94428dfd015c6e64fa24ec5a09871f"],["D:/hexo/public/2020/09/13/summarize/index.html","924ae32680a99cfaeb7312ba621cfc0a"],["D:/hexo/public/2020/10/19/Thorn/index.html","db866f0d18cc3637c2f9d48d51ac6b16"],["D:/hexo/public/2020/10/28/huiyi/index.html","cd542f10764b44b46c266992e9c3fbfd"],["D:/hexo/public/2020/11/26/一点感悟/index.html","25600aa5b91d15a46d01cf84da3c69d0"],["D:/hexo/public/2021/01/02/crime/index.html","bafdc075f56f75e72a9d941e029374b6"],["D:/hexo/public/2021/03/08/mother/index.html","d535ace33b9f9b1f77334d97b74a5aaa"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","cbce9777a083fd2e3547c2ebba5904b5"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","153aced946b009be5c0c644c1900788e"],["D:/hexo/public/2021/03/31/Cholera/index.html","e399e50680e07aecc7139b4eeeafc673"],["D:/hexo/public/2021/03/31/镜中/index.html","ac480e265f10dff7c9558e8c00988742"],["D:/hexo/public/about/index.html","f459940f870420be15db54bff545e7e5"],["D:/hexo/public/archives/2019/09/index.html","8de1230777f1becdaccde515cca293ec"],["D:/hexo/public/archives/2019/12/index.html","2fefa5994445188d2ff36743612a2c00"],["D:/hexo/public/archives/2019/index.html","780288b6a60ab36d4371d23e80ae78e3"],["D:/hexo/public/archives/2020/02/index.html","4b6f417743410045cf2e61e4bc5cd93a"],["D:/hexo/public/archives/2020/03/index.html","c2e9c111c5b91f3132530ac8f79d2e59"],["D:/hexo/public/archives/2020/05/index.html","8b975110968d1098c514ff53a1601101"],["D:/hexo/public/archives/2020/06/index.html","6b20507a304778923c7263ae16e2fff3"],["D:/hexo/public/archives/2020/07/index.html","8e65c54a2a4928dc8c93ab0970482523"],["D:/hexo/public/archives/2020/08/index.html","defa80d197a57eac05cac3edd1382b70"],["D:/hexo/public/archives/2020/09/index.html","df1b80eaa759597486a39fe66cb3981a"],["D:/hexo/public/archives/2020/10/index.html","d0042990dac5c21f5fc7fb7d521c9fdc"],["D:/hexo/public/archives/2020/11/index.html","3fcfd9e16e06acac7b6167bce8eea3a5"],["D:/hexo/public/archives/2020/index.html","5b6da53c62c0babe8bccb071fc3affba"],["D:/hexo/public/archives/2020/page/2/index.html","4d418fa3aa7dffc61f6c7c87e924c8c1"],["D:/hexo/public/archives/2021/01/index.html","bc335454a291effcf65ade737e7e10c5"],["D:/hexo/public/archives/2021/03/index.html","8597acd92ad9c3b01e1cc3fd6b807ff7"],["D:/hexo/public/archives/2021/index.html","2455ce2653060b47f32e4c6cd2543b87"],["D:/hexo/public/archives/index.html","8b2c76d548c5aa5fba194743a024441d"],["D:/hexo/public/archives/page/2/index.html","ac4f3f9cf7295588caa8ba3874231401"],["D:/hexo/public/archives/page/3/index.html","d063a4b3b53c3ba2409edc2ea769d421"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","f5ed6c122afa0ed1a1429483e56378bb"],["D:/hexo/public/categories/index.html","d94143f999197d9e41f0ae046de2727d"],["D:/hexo/public/categories/写作/index.html","121bdd94dd3e53c86379d2fd1a65f0a8"],["D:/hexo/public/categories/学习笔记/index.html","9d2361cdfecc0a166bb6c8343248c1c6"],["D:/hexo/public/categories/感想/index.html","c79c48beffffbb96fd8de0464df0e6dc"],["D:/hexo/public/categories/数学/index.html","f71f33b6a32d44427aab752baac0562b"],["D:/hexo/public/categories/文章收藏/index.html","af5112565b3f93fc8f7c1f26609dec0b"],["D:/hexo/public/categories/机器学习/index.html","f517c3bbbce5d4beb37426b28ffaaee6"],["D:/hexo/public/categories/考研日记/index.html","5beefc686b393e918c7b3dae32a1f307"],["D:/hexo/public/categories/诗歌收藏/index.html","09c6e8e61a76cf6f51f4fbe4aaea37d2"],["D:/hexo/public/categories/读书笔记/index.html","a90de45d7dd54a7635443e2e9a49435e"],["D:/hexo/public/comment/index.html","6e08c3d9f3bc040a31925489076b3592"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","a193db415528dc70a84996b140115f17"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","972a25ab40b50b2340bb6605b06a60eb"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","eb2f356d08f0c5da76f258907f73cd4c"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","1434539cb1df5bf7fefb310e487ed69c"],["D:/hexo/public/music/index.html","2861acc5923b7113c2384536dd7c768b"],["D:/hexo/public/page/2/index.html","966debb493ce88a3893c3db52c0e5ec6"],["D:/hexo/public/page/3/index.html","65ff2b79b391921b1ec3c4fdf7a97d43"],["D:/hexo/public/tags/KNN/index.html","80ce9eb3de4df24cc7f8f769243e3cef"],["D:/hexo/public/tags/git/index.html","b52b7dd6897d901f27d8385764cc827a"],["D:/hexo/public/tags/index.html","c19d0b546380f0235a53e335f7217ab1"],["D:/hexo/public/tags/余华/index.html","c9fed45812a68be5ae2355d0476d94f7"],["D:/hexo/public/tags/回忆/index.html","8cc8dcf21cba48fea2df2d8195523964"],["D:/hexo/public/tags/建站-hexo/index.html","299c45b3502ea904d09e0d50caab3486"],["D:/hexo/public/tags/总结/index.html","197a14c17b6468b66390795ec6f49ebd"],["D:/hexo/public/tags/感悟/index.html","2bc9f1a3acfc7493878b61cae1c98aa9"],["D:/hexo/public/tags/时空/index.html","37aa968f07c31a5b8d71e901a83b47c2"],["D:/hexo/public/tags/林轩田/index.html","42601a9376b87fc0fdd1b35f3b82819b"],["D:/hexo/public/tags/线代/index.html","277c563025c2463b9d4efb9a1b52c6c4"],["D:/hexo/public/tags/考研/index.html","ccf18929b2dae263b42eaada012e8608"],["D:/hexo/public/tags/诗歌/index.html","bfeff59305d7613be86bea86f7bc9fa5"],["D:/hexo/public/tags/读书/index.html","b2870aacec4494f3059e404b371ee20e"],["D:/hexo/public/tags/阎连科/index.html","e543b3f44f49a6f16e9e4a6cb36a8d7a"],["D:/hexo/public/tags/随想/index.html","c23396102290bab4be40dd13a840fa1a"],["D:/hexo/public/tags/马尔克斯/index.html","b16cea116fafb1faec5878f75deaeb30"]];
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







