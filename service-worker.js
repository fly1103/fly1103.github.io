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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","9bd1396b2e6f9ee3c43edb5ad2263f6d"],["D:/hexo/public/2019/09/18/百年孤独/index.html","d701664c1fc4f204568a11fb06c2cc95"],["D:/hexo/public/2019/09/18/鼠疫/index.html","f558bed5d2c0a70878f7b35d29568d23"],["D:/hexo/public/2019/12/20/cloud/index.html","34753e39b4f93d61554b4d9ae2643645"],["D:/hexo/public/2019/12/21/knn/index.html","06b4516104481a0ebbcfbf8fb43729c0"],["D:/hexo/public/2019/12/23/finish/index.html","bc830d90267a32b8154ce70d78919fa2"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","2e11a6facb46b321da0da7fcd29511e0"],["D:/hexo/public/2020/02/28/Linear/index.html","836191c0784986e8d814176879b0e2ad"],["D:/hexo/public/2020/03/21/time/index.html","ce66610f6d3320b4022478336bfb9b23"],["D:/hexo/public/2020/05/23/1984/index.html","2c0922ea1627aaa7f40750b1c35cc2a8"],["D:/hexo/public/2020/06/09/git笔记/index.html","26f917822f4d4b659e3d0023f353e5b4"],["D:/hexo/public/2020/07/29/sheep/index.html","244cf4d555544975abb3826e10d3e967"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","ce147054679a7c8905189a89815c050d"],["D:/hexo/public/2020/08/09/Haruki/index.html","83633724e85b3d9d88fe0ca7f0479a31"],["D:/hexo/public/2020/09/13/summarize/index.html","587ae3f62567ec935e7eac9219d5c4d5"],["D:/hexo/public/2020/10/19/Thorn/index.html","8327776e5092b20fd2e0fe3baf487b3f"],["D:/hexo/public/2020/10/28/huiyi/index.html","fef30136dfe61555cd8211884ba63561"],["D:/hexo/public/2020/11/26/一点感悟/index.html","c83eea5efb7370f562172dcbfec56406"],["D:/hexo/public/2021/01/02/crime/index.html","a24e2dc80fd939fe5008a47fad6268df"],["D:/hexo/public/2021/03/08/mother/index.html","6e381252fb8f02c3e8005d4911afee44"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","7c65ca5a384a29fb7eba8c9e1f34a36f"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","eac4e83922066078270f49ad4181bacb"],["D:/hexo/public/2021/03/31/Cholera/index.html","ef1ececa1ab0b8ae187f40df5f63368f"],["D:/hexo/public/about/index.html","08095774571966072026e937c70e9b2a"],["D:/hexo/public/archives/2019/09/index.html","92708da46dbd044ebf2d641b723b6024"],["D:/hexo/public/archives/2019/12/index.html","21859bbb1e56eaa616dd630d6f27e091"],["D:/hexo/public/archives/2019/index.html","3598282d7d110023c5867e4ad6f9c145"],["D:/hexo/public/archives/2020/02/index.html","39c4320adc355e7286080c2d2c04d7b3"],["D:/hexo/public/archives/2020/03/index.html","1ac0bbddc66263eeaaa499333599cdb4"],["D:/hexo/public/archives/2020/05/index.html","d1bb58763c70e2f48f0a8b8b9873f143"],["D:/hexo/public/archives/2020/06/index.html","99d67c7108f1f3a0fa248204e351a133"],["D:/hexo/public/archives/2020/07/index.html","a313dd84659ba52ca5faf09c4d12c951"],["D:/hexo/public/archives/2020/08/index.html","1f34f7151521ccb8e16a35e580a71848"],["D:/hexo/public/archives/2020/09/index.html","2a23349d52e4159a6a59d4b49c151a7b"],["D:/hexo/public/archives/2020/10/index.html","eab2a1cf9ced0445c5a8b881dbf2f701"],["D:/hexo/public/archives/2020/11/index.html","79d081386a9297e7271a94e5b2c74789"],["D:/hexo/public/archives/2020/index.html","523aee6d2b5d698277faa57224c931af"],["D:/hexo/public/archives/2020/page/2/index.html","4b7c5dced425e18c160b22185bd56820"],["D:/hexo/public/archives/2021/01/index.html","ea79f46b29f95858055b2e327284c013"],["D:/hexo/public/archives/2021/03/index.html","4d7dec64319029517948cc9a087d2313"],["D:/hexo/public/archives/2021/index.html","cbb7e34220ec8d2d23f9a5a65594fc97"],["D:/hexo/public/archives/index.html","07b43217bb0d60f3c391b49ba65dbabf"],["D:/hexo/public/archives/page/2/index.html","9f1ae6db2cbdb46aec559c597b11618d"],["D:/hexo/public/archives/page/3/index.html","ad23993c1836f6983d2504e2655fefb3"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","c1fad6664233695b5e22722984074e34"],["D:/hexo/public/categories/index.html","4f9c9fb85533748a4a595eeef25376e8"],["D:/hexo/public/categories/写作/index.html","e74b93c93e476115583144c9808e58b2"],["D:/hexo/public/categories/学习笔记/index.html","da3706aca685fea22d4c0e7d21ab1279"],["D:/hexo/public/categories/感想/index.html","2907b82142f83f913411edfd882b27dd"],["D:/hexo/public/categories/数学/index.html","c1d027e56ed52dbbce8c44964bfc006d"],["D:/hexo/public/categories/文章收藏/index.html","1303591f589a03844842db665b6a564d"],["D:/hexo/public/categories/机器学习/index.html","138f7300b08b40639b1ca4fd9bb5bac9"],["D:/hexo/public/categories/考研日记/index.html","352296c6856c498c5a675f2c640844a6"],["D:/hexo/public/categories/读书笔记/index.html","7eae07e87b07d07302f72de5df9c5015"],["D:/hexo/public/comment/index.html","62bc7e5cef57403f80568dc24a29aaea"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","38f20d297a6f564e3a8cd59b33797843"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","9be40ebdad42e34fe8dd4357e97b9436"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","0a6f40168f17414de111dcb9abad3869"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","00ca8ac24ceffd37a3d93536253ea217"],["D:/hexo/public/music/index.html","210de66b8106138f69ac45c7ba18b05b"],["D:/hexo/public/page/2/index.html","60e1fb18927ed0e567f91a720413f003"],["D:/hexo/public/page/3/index.html","2587bc89de60de6fa38ecee0b1ab3967"],["D:/hexo/public/tags/KNN/index.html","713e71f4f5beaecd835362dfcee3f2ff"],["D:/hexo/public/tags/git/index.html","f9cc5768aed9170359afd11bea7fffa6"],["D:/hexo/public/tags/index.html","5f2e7adb5da71a78b2311659578db828"],["D:/hexo/public/tags/余华/index.html","fbf7974b1648d3027d5d9925bcda6768"],["D:/hexo/public/tags/回忆/index.html","4779af511363c5241ce964f58ab802b4"],["D:/hexo/public/tags/建站-hexo/index.html","5ef4b8b05bf57a5cbbbd7242ea6dffb9"],["D:/hexo/public/tags/总结/index.html","61a93c933caecd75c6596440c8f15bc1"],["D:/hexo/public/tags/感悟/index.html","edabfd29d9d06326d60ca5ca023d6d10"],["D:/hexo/public/tags/时空/index.html","756fdf641040ada406270407442efc7d"],["D:/hexo/public/tags/林轩田/index.html","77846576a4f30e6367bc2fc139a43950"],["D:/hexo/public/tags/线代/index.html","cca3a926ce07a9ddf102a70a38488fd0"],["D:/hexo/public/tags/考研/index.html","7575765a2a956fb415b14651f61cb206"],["D:/hexo/public/tags/读书/index.html","06596bca364bd25486f1161c4f445df3"],["D:/hexo/public/tags/阎连科/index.html","8f0a15f6c8a7050f2a4ea36ebfc4de21"],["D:/hexo/public/tags/随想/index.html","877ef54299ba18e79828d2eef16e6ac1"],["D:/hexo/public/tags/马尔克斯/index.html","3ad241aa8e574abebe173493a0b93a06"]];
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







