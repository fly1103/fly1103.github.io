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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","19dd3e6f4640c44b8f3e6d8a004e7a80"],["D:/hexo/public/2019/09/18/百年孤独/index.html","c9223d8a32a4dfe9bc6ec9e3f2ff03e0"],["D:/hexo/public/2019/09/18/鼠疫/index.html","1d3bc8e2a96d8cffebb7cb98a1e425ab"],["D:/hexo/public/2019/12/20/cloud/index.html","9c8ac4ed9a9fef3ba40605c1da486ff8"],["D:/hexo/public/2019/12/21/knn/index.html","512ad56461f087d1280faa0e31279c70"],["D:/hexo/public/2019/12/23/finish/index.html","8e34cd36dda22e7a1486991d3823ff9b"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","c739e209c2baccdf335f9b6a2ab46b2d"],["D:/hexo/public/2020/02/28/Linear/index.html","ea4068ff01c86019345a4b7a96f02d5a"],["D:/hexo/public/2020/03/21/time/index.html","46cbd7e27c8e6cbc0cdf18a588c35106"],["D:/hexo/public/2020/05/23/1984/index.html","2b6c649640e26170dbaf64fd2e0028ca"],["D:/hexo/public/2020/06/09/git笔记/index.html","919ea0f57068bdd037d514c6b27fc8b2"],["D:/hexo/public/2020/07/29/sheep/index.html","7ed4e4af43ff4bfa7ad738b9421c1b99"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","48210c990db095dd7516f82368e439b0"],["D:/hexo/public/2020/08/09/Haruki/index.html","f013422320fa5753fcac9e9e9b982701"],["D:/hexo/public/2020/09/13/summarize/index.html","3e1d42d1825022301387a8ac34ed008e"],["D:/hexo/public/2020/10/19/Thorn/index.html","a7e6d23aad93782aa8ad049a5757f0af"],["D:/hexo/public/2020/10/28/huiyi/index.html","f1a2b364a1e6b16e1056ff42566527c7"],["D:/hexo/public/2020/11/26/一点感悟/index.html","461093f4deff9e3968bae14bbfddb841"],["D:/hexo/public/2021/01/02/crime/index.html","2e2ac39a4e5102069654f4b0aaa32737"],["D:/hexo/public/2021/03/08/mother/index.html","100325c15ec06c37415be5732fb158f2"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","1c8fe54c0718ddb181a3517ad256de55"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","fbd70d089b170b3a8d1dc437940b4cb3"],["D:/hexo/public/2021/03/31/Cholera/index.html","21a4eca4f701694e2419e10ce6a59a81"],["D:/hexo/public/2021/03/31/镜中/index.html","422fb32e211b4fbd243e48e1d9e9ebe0"],["D:/hexo/public/about/index.html","650f2b4722dabf6de1d568469e14ed38"],["D:/hexo/public/archives/2019/09/index.html","fa7328f0e64d903c27e70b5403ee362d"],["D:/hexo/public/archives/2019/12/index.html","165f603c72a02fb81e4ad41845d8f717"],["D:/hexo/public/archives/2019/index.html","6a812d370fd15ea548c32b1e7a156915"],["D:/hexo/public/archives/2020/02/index.html","dadc355bc841b0b056242fcd60714018"],["D:/hexo/public/archives/2020/03/index.html","ec1168d5486c267dd3b6b1bdc03183bf"],["D:/hexo/public/archives/2020/05/index.html","ebf12b3e73c8d7b6e2f4decf72072d2e"],["D:/hexo/public/archives/2020/06/index.html","8e59ccd2c5b5a2c3cc234b1849462c76"],["D:/hexo/public/archives/2020/07/index.html","631f38d64a7e2b8cb05ef3bc9108d6b2"],["D:/hexo/public/archives/2020/08/index.html","59336b9c3dd68c02ae10829086c3a4ec"],["D:/hexo/public/archives/2020/09/index.html","830f6a5e4280086a6a0a841734f26bb8"],["D:/hexo/public/archives/2020/10/index.html","c8ab844ea750f3c9a0fbc2952c60a6dc"],["D:/hexo/public/archives/2020/11/index.html","34232bf72b344aa40c1e9580a68feb8e"],["D:/hexo/public/archives/2020/index.html","5351b08a4eecf8fabcccf73925fb75e4"],["D:/hexo/public/archives/2020/page/2/index.html","e7a0cef1ad4f1addcd9ce58f1e8d0e84"],["D:/hexo/public/archives/2021/01/index.html","b34345597b97385305b36aa839fd1de2"],["D:/hexo/public/archives/2021/03/index.html","2e480917e80ee57e833400512c21cde2"],["D:/hexo/public/archives/2021/index.html","6b648c2bae16604a35f9cf55be750da4"],["D:/hexo/public/archives/index.html","c0ef47fe1c1e8842c427b82234bcd42a"],["D:/hexo/public/archives/page/2/index.html","6c612a7b3b254b2bc1493e4a0cbc5102"],["D:/hexo/public/archives/page/3/index.html","3e4835205cb7c2ffdeb2b0f98abbbc68"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","db01f169510eb93a65018cb3a78e225f"],["D:/hexo/public/categories/index.html","6974ed96071c7b4fd260dac9e680ba99"],["D:/hexo/public/categories/写作/index.html","4e3879115d6e084f63bcd7fb25dbd0bc"],["D:/hexo/public/categories/学习笔记/index.html","e540a8893f7a95dd4d29e696b8c0225f"],["D:/hexo/public/categories/感想/index.html","5ad2c38a890132dbd94ae35a4f12227c"],["D:/hexo/public/categories/数学/index.html","9b869805a1a8e9d425a57f3dc4a15b6e"],["D:/hexo/public/categories/文章收藏/index.html","d66c20c20cbb1d9855f3bf2bb50456a0"],["D:/hexo/public/categories/机器学习/index.html","bb27957c53d9aec0a6e886f60ac9f5f9"],["D:/hexo/public/categories/考研日记/index.html","bd1e6deecd8943d0f256cc16e5bc1988"],["D:/hexo/public/categories/诗歌收藏/index.html","c4af2426ca9c2f70a1522d9f5af3ca5b"],["D:/hexo/public/categories/读书笔记/index.html","ec6f5357a3b08174cc8f807f8e03e40b"],["D:/hexo/public/comment/index.html","8ba51b51f50ec1690532fd6f56168f4c"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","4536941dbce3ce9646ba756c0943e8c0"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","a45646652071df548e0886d32c0012f2"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","1c07dc46ab68cbbe4bcfe8cf3bb0329f"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","15984afe6f763c1910da5d233062d656"],["D:/hexo/public/music/index.html","1bd96c06719b83e122df6dda5d21b0c5"],["D:/hexo/public/page/2/index.html","aae46e9c668ca61089f28c9111da6a39"],["D:/hexo/public/page/3/index.html","674bfb368a4ed88dda83b1eeedf895ac"],["D:/hexo/public/tags/KNN/index.html","dcba3c3bd313270c473f3aff0a416bba"],["D:/hexo/public/tags/git/index.html","21f5692d4cd9c75e598409123157eb30"],["D:/hexo/public/tags/index.html","04e080cc927aa827c35d9174d4c6c1bd"],["D:/hexo/public/tags/余华/index.html","c5f138e9a76994fce130683fe6b3f3fe"],["D:/hexo/public/tags/回忆/index.html","7e5a4aa59a65842dfee560d37c331f4a"],["D:/hexo/public/tags/建站-hexo/index.html","93855aeb8bf2b9672d53386f46edcf80"],["D:/hexo/public/tags/总结/index.html","5912fa044fc6937ef877a7b9d41e1ccb"],["D:/hexo/public/tags/感悟/index.html","e6c94d1d6f1beef2721383289dacce04"],["D:/hexo/public/tags/时空/index.html","c01588c8fd1f01fc355ac51f07aa1d2a"],["D:/hexo/public/tags/林轩田/index.html","6a97a57a6a73bb90b3728b6b4803e260"],["D:/hexo/public/tags/线代/index.html","5ffea18dc84d97a623874d98abfaf1a5"],["D:/hexo/public/tags/考研/index.html","689d881295e4731308955290ebb75564"],["D:/hexo/public/tags/诗歌/index.html","a98c53c29c284e12c0592a62d375e593"],["D:/hexo/public/tags/读书/index.html","0db400aaa2aedf837523fd334c137866"],["D:/hexo/public/tags/阎连科/index.html","d06306a46030de7011ced645630b390e"],["D:/hexo/public/tags/随想/index.html","2f0b437c8dbbd490654e265a4192be99"],["D:/hexo/public/tags/马尔克斯/index.html","6e1bd196fe33b95044489cd76613e181"]];
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







