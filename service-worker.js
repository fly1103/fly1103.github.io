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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","a5cb80957c29a24158902580660a53f3"],["D:/hexo/public/2019/09/18/百年孤独/index.html","9c38e4dca5f54a85de0bb4dea78c12be"],["D:/hexo/public/2019/09/18/鼠疫/index.html","02a57d62346f586a2e3a2d60513b7fc3"],["D:/hexo/public/2019/12/20/cloud/index.html","b4424866d90e2090200073cf9a9645ec"],["D:/hexo/public/2019/12/21/knn/index.html","dbd02c33d9440532b4f82f4e22c636d8"],["D:/hexo/public/2019/12/23/finish/index.html","67646a6ec48a3e0b8d4b1762b58c7299"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","ca9dcdba047c0191fc6bc185dc042625"],["D:/hexo/public/2020/02/28/Linear/index.html","66ff604ac0da113c8b3725bab34673a2"],["D:/hexo/public/2020/03/21/time/index.html","76c21f929203f4ec88422d8a704185e0"],["D:/hexo/public/2020/05/23/1984/index.html","c54293c275e911922275ef67d6e09bb1"],["D:/hexo/public/2020/06/09/git笔记/index.html","1f41e9f2e499ab83236f5671eef1081f"],["D:/hexo/public/2020/07/29/sheep/index.html","ec700685d90abb0950f0be54e0034144"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","3eb9651f4b8ab15268c317c2e37c0714"],["D:/hexo/public/2020/08/09/Haruki/index.html","c77f31e8fb0361498590705c11d24d7f"],["D:/hexo/public/2020/09/13/summarize/index.html","0aef37c64908a4ce918f753cceaba0d8"],["D:/hexo/public/2020/10/19/Thorn/index.html","71422a4217d942a27ca27ea661eed1c5"],["D:/hexo/public/2020/10/28/huiyi/index.html","28e8ff6c2425a184afc3f169a98a2349"],["D:/hexo/public/2020/11/26/一点感悟/index.html","1f9696c0628cfeb057db7c8dbc07ecef"],["D:/hexo/public/2021/01/02/crime/index.html","4356986d4ca0593c6b22fe19a9faf3f0"],["D:/hexo/public/2021/03/08/mother/index.html","5d3500aa7d95a2eec6875ee744eed6af"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","e5a34a79f7b68c1cdbe6c13877df3334"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","4d536ee47f27254ce07082695bde382f"],["D:/hexo/public/2021/03/31/Cholera/index.html","e37d8d4cdc4292d7fa25f3cd8fd01339"],["D:/hexo/public/2021/03/31/镜中/index.html","476923211b51f9590875b996a800cf2f"],["D:/hexo/public/2021/04/03/最后的对话/index.html","9d70691eaf2e3f4ff3de36ed7120294d"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9a90f3f6dfed910ceec680bcb482b804"],["D:/hexo/public/2021/04/06/雪国/index.html","8da71ca25af9087ba8652b4fd30c93d0"],["D:/hexo/public/2021/04/09/骂观众/index.html","118ce6c7afc7820c1f6724981e088297"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","5b78539cea2d455e3676b4a8a3a45c62"],["D:/hexo/public/2021/04/21/家/index.html","c4dcef9409e4acdb59330fcd821e10f2"],["D:/hexo/public/2021/04/24/光与岸/index.html","d158591534e4b96eedf13d49438d165e"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","bb0f127b2b02c2f4bb0e0da98a3579ca"],["D:/hexo/public/2021/05/03/五月伊始/index.html","9d03a10f4b9201665e17b108985ca962"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c6799d0c820382b4d485cd9f50bb2957"],["D:/hexo/public/2021/05/31/迎接六月/index.html","53e92ec2dbf477df8a8304dd83b5ad5e"],["D:/hexo/public/about/index.html","4cdc257871270cd9ff7b458aac339877"],["D:/hexo/public/archives/2019/09/index.html","b7777208aa6ad8aac8f1903621f75489"],["D:/hexo/public/archives/2019/12/index.html","1359ecfdd27f456c69f2769cde9bddc5"],["D:/hexo/public/archives/2019/index.html","9629fc0d39727381ad1482c1f5f60275"],["D:/hexo/public/archives/2020/02/index.html","5e5ba3fdbbcc37c6c1e64e971a104e2c"],["D:/hexo/public/archives/2020/03/index.html","3d6d27e3e52af69b901480943f1badfe"],["D:/hexo/public/archives/2020/05/index.html","f4d96f8c1414fe4ec6013340dcefca6d"],["D:/hexo/public/archives/2020/06/index.html","4c97a668ed30cf8f4ea23a29d7aaf463"],["D:/hexo/public/archives/2020/07/index.html","06a904cb939031dd227562f99465880a"],["D:/hexo/public/archives/2020/08/index.html","04c0f2116321e6964103fec2c7b24b72"],["D:/hexo/public/archives/2020/09/index.html","80a30fc90c3353bd464cae4f9aede828"],["D:/hexo/public/archives/2020/10/index.html","b38dfcbcf883a0185d0ad187a9da8e24"],["D:/hexo/public/archives/2020/11/index.html","87983313216ba83af7ecbed8920ac24d"],["D:/hexo/public/archives/2020/index.html","b761c9834096c87a164748b0dd952d45"],["D:/hexo/public/archives/2020/page/2/index.html","13c39aec0f5f224bc3033a1048a5490e"],["D:/hexo/public/archives/2021/01/index.html","e15e949be6b5e04e122d840eb805cd85"],["D:/hexo/public/archives/2021/03/index.html","1dbe1b6a96aba07c31561614a8c4f6c3"],["D:/hexo/public/archives/2021/04/index.html","8d23919593f1a61cb616755d6b57243f"],["D:/hexo/public/archives/2021/05/index.html","24389ba3377dcd77c7ea285ba17f9155"],["D:/hexo/public/archives/2021/index.html","69cb47fcb12401a1fa28866228afc422"],["D:/hexo/public/archives/2021/page/2/index.html","b6820310cd5a9cc6ae106d55fb88d701"],["D:/hexo/public/archives/index.html","ca50a0c41e7120a168aaea99cd0803b7"],["D:/hexo/public/archives/page/2/index.html","f4d527836797ab0593ae6d23deb975fa"],["D:/hexo/public/archives/page/3/index.html","facb5650d14d94455cc953895d82fdef"],["D:/hexo/public/archives/page/4/index.html","c8a7265040e3f7d0fe138b1774ed71ec"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","561a6ef875900188ac5ee5fccfecf5d6"],["D:/hexo/public/categories/index.html","7b44f21a9d5b3c510fc52d147c667200"],["D:/hexo/public/categories/写作/index.html","833a45a982a513c52163acae17292f15"],["D:/hexo/public/categories/学习笔记/index.html","e1ef2fcc223ab7f5e00f0018adb789fe"],["D:/hexo/public/categories/感悟/index.html","dd7bc44cddf718d5e969ce39da3b5b61"],["D:/hexo/public/categories/感想/index.html","a8bf4e4ba5aaaf1cf7d3ad0513fc99e6"],["D:/hexo/public/categories/数学/index.html","8ffcbfecf1acd98db3cc78c51f76fc52"],["D:/hexo/public/categories/文章收藏/index.html","de1c728cb40e9868c3b8ecb7d500a894"],["D:/hexo/public/categories/日记/index.html","3594a37a102e9404cfdac9cced6f5b0e"],["D:/hexo/public/categories/机器学习/index.html","de0cc0b9ee38611f98b0eaa73b63b67d"],["D:/hexo/public/categories/诗歌收藏/index.html","73f95a5de86eb7f630bf6446c6b0506d"],["D:/hexo/public/categories/读书笔记/index.html","ef7aff4e21305e7d35fad40aa7ba141c"],["D:/hexo/public/categories/读书笔记/page/2/index.html","29124214918736e5caa9b4dc4a674a21"],["D:/hexo/public/comment/index.html","f613967ee5106704dfd99fa6de78e7ce"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","5641e07659001c84b6df73bebe02459f"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","69b3312b6b55da5cff0bbbf0e02e6283"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","cde3d6551be4aad6a403f110724db0b8"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","944e763c0f139c29e893ff81ff5c37e2"],["D:/hexo/public/music/index.html","b6c2a7ee1d788de7bea86962176efa9e"],["D:/hexo/public/page/2/index.html","4beeadcc9f04e2f9c3098b2dd8c6c7a5"],["D:/hexo/public/page/3/index.html","a961d8c03988e63d2b27958360eefc00"],["D:/hexo/public/page/4/index.html","7b2133a830957d5420e19635151b7fd6"],["D:/hexo/public/tags/KNN/index.html","3e8f90bf8b48a6d0890399f588b91629"],["D:/hexo/public/tags/git/index.html","0c7ed8d6a231a891f096ae34137f8aa7"],["D:/hexo/public/tags/index.html","cb0101d1335322f35e258175ba47f617"],["D:/hexo/public/tags/余华/index.html","8d993d65c60fb60cb42f3b0a5ce58070"],["D:/hexo/public/tags/博尔赫斯/index.html","5873d0e689c8893e6d1f5c118af688a8"],["D:/hexo/public/tags/回忆/index.html","5b0d912db91428e65d5af15680a6534c"],["D:/hexo/public/tags/孙绍振/index.html","fb56f8c56c9809c6d7c0a58812c64b5e"],["D:/hexo/public/tags/川端康成/index.html","45f91e3fb6dca32f700c151f5a31be72"],["D:/hexo/public/tags/巴金/index.html","ed1629551d468608608d9fea2cf092c3"],["D:/hexo/public/tags/建站-hexo/index.html","ee70548da29ece730c202813afe9bd44"],["D:/hexo/public/tags/总结/index.html","e61cda3f52612c7abe80eed1b10ea388"],["D:/hexo/public/tags/感悟/index.html","b8ea4f99aad35ad27c1c3862a089ef7c"],["D:/hexo/public/tags/文学/index.html","fbfb51c3ddd241cb27c0311fece853fd"],["D:/hexo/public/tags/时空/index.html","0fe26a99aa79ce4c70d7a9704307a3be"],["D:/hexo/public/tags/林轩田/index.html","20a2599c007edd4ce3c121147a45d2a2"],["D:/hexo/public/tags/线代/index.html","1a32987d374c02964b9acfdc10b944d0"],["D:/hexo/public/tags/考研/index.html","3012a8ad29560f65f9f40c98c1c6f250"],["D:/hexo/public/tags/聂鲁达/index.html","b210e0b198c9cb628e8297b118d812b6"],["D:/hexo/public/tags/西湖大学/index.html","2b60f8c9384a2c1d73826ef3cdc1044c"],["D:/hexo/public/tags/诗歌/index.html","60b21bf7fc821e4402615b44cef2aa51"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","35639d6e4d0ca02f5a814876a79f3376"],["D:/hexo/public/tags/读书/index.html","7fce21cb0936fb48a120e88b659f57f0"],["D:/hexo/public/tags/钟文/index.html","592238fad6d1e9267073969049e55507"],["D:/hexo/public/tags/阎连科/index.html","15129b114987d001b65bcb42939aff76"],["D:/hexo/public/tags/随想/index.html","7651fff2b5465c44038b7232f636bbc1"],["D:/hexo/public/tags/马尔克斯/index.html","021b10ad0e5e121c6da719154e585ddc"]];
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







