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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","cc381de2f805d293a9e1738f3948a110"],["D:/hexo/public/2019/09/18/百年孤独/index.html","b1adc4b374f7e8a4ad817bf306633778"],["D:/hexo/public/2019/09/18/鼠疫/index.html","b1a6281c2b84420d3d51f6ee7b566510"],["D:/hexo/public/2019/12/20/cloud/index.html","ab2f5e2eba19958ba9f09ef9e7f7a586"],["D:/hexo/public/2019/12/21/knn/index.html","19f1ef3f78f848b66c7c4615c97ea3ca"],["D:/hexo/public/2019/12/23/finish/index.html","be7afeceda378fd2fd1018b7a2133845"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","6832334440c19dfa5f6ed66b6ea2aa85"],["D:/hexo/public/2020/02/28/Linear/index.html","e96e916a1b7e2bc9499c4da8e66a39ea"],["D:/hexo/public/2020/03/21/time/index.html","12cfb1ce6212e53e36cd3ba570995de3"],["D:/hexo/public/2020/05/23/1984/index.html","f2c09294d16e00b9d0fe82a424d8ecac"],["D:/hexo/public/2020/06/09/git笔记/index.html","87caef0e5b9898ee1c3eff442b2871e5"],["D:/hexo/public/2020/07/29/sheep/index.html","87cafd8dc243e910ff9abbf7e0c8f448"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","cc1c6e02ff96fc6c06167ecbe08f4557"],["D:/hexo/public/2020/08/09/Haruki/index.html","bf9254f17ac67ed3ff07429222a78560"],["D:/hexo/public/2020/09/13/summarize/index.html","470ba035ed7311360e6d4f5a23fe0ce7"],["D:/hexo/public/2020/10/19/Thorn/index.html","1283d8f723a1df2c1c615903b6ae6294"],["D:/hexo/public/2020/10/28/huiyi/index.html","1bfbf26b28493f9c08362b731392c934"],["D:/hexo/public/2020/11/26/一点感悟/index.html","3017f3f1f77e02a8a2b017a2e6f6f5b6"],["D:/hexo/public/2021/01/02/crime/index.html","5df9780b7cbc371601752690e70eabc0"],["D:/hexo/public/2021/03/08/mother/index.html","d9cbf9b14ac9c74c593d2edbe29de43b"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","f69c94ec9e1d422f26d00ee244fd67ea"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","f6506086dcf4eb406e012d3fcac25126"],["D:/hexo/public/2021/03/31/Cholera/index.html","8a6f5db842d23fe1e2594030412d64b6"],["D:/hexo/public/2021/03/31/镜中/index.html","b7c8f8dd608026d3ac61dd0a7a427fb7"],["D:/hexo/public/2021/04/03/最后的对话/index.html","1d86c9bde1b9025796aaa22939ec36f9"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9b254dc15d4ce5028cd26ba60d1c3c03"],["D:/hexo/public/2021/04/06/雪国/index.html","085bd5956cac21db7810967d637830e9"],["D:/hexo/public/2021/04/09/骂观众/index.html","11f057fa377aef8d3edfd43ca4eb9f94"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","731c60fee612af995c653b96f54d4844"],["D:/hexo/public/2021/04/21/家/index.html","072cc16eafaa071d576f7fe86fa37cbd"],["D:/hexo/public/2021/04/24/光与岸/index.html","a0954faeb7dc5d9539f9f3024c3e66aa"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","4bda2d18e3eace9d1452a61718b1ae97"],["D:/hexo/public/2021/05/03/五月伊始/index.html","6d2b6657ff0069254fc89e593940ef20"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","51e18f9788cb2c1ff187c26a50410bbe"],["D:/hexo/public/2021/05/31/迎接六月/index.html","491a8488c247795cb8e51a2f51290fae"],["D:/hexo/public/2021/07/07/七月/index.html","5798ac703258aadc1a5b841d8ad6d03d"],["D:/hexo/public/2023/05/16/dunhuang/index.html","1c7ef56ff565d0064618ef70ce4f4780"],["D:/hexo/public/about/index.html","228db9128eeaecddb8b73872746bf4ab"],["D:/hexo/public/archives/2019/09/index.html","6e936dc635ca356ccc66e4af45f83e4d"],["D:/hexo/public/archives/2019/12/index.html","4897dab40065f01536cb8016422cf7b3"],["D:/hexo/public/archives/2019/index.html","ddab16dcf60e1f4e84d2baf01d545f63"],["D:/hexo/public/archives/2020/02/index.html","6e5814878c463b1a74149fcbbcdfb1ac"],["D:/hexo/public/archives/2020/03/index.html","bc662faf24e9cb1f3e9d899466e4415f"],["D:/hexo/public/archives/2020/05/index.html","1a9ee01faa739327e634287b934853b3"],["D:/hexo/public/archives/2020/06/index.html","87fd1f02d27eae9afb4c55ef557940e2"],["D:/hexo/public/archives/2020/07/index.html","05a3384e0ee5323f08664fe866888f40"],["D:/hexo/public/archives/2020/08/index.html","afbfba12b4a02a7f7f70096a796f96e6"],["D:/hexo/public/archives/2020/09/index.html","1c2f196a17c217586c013c410573c0fd"],["D:/hexo/public/archives/2020/10/index.html","5881e0715e2a9f107b665b77a9abc8f9"],["D:/hexo/public/archives/2020/11/index.html","8d00ae9e8148ac7a8e9a9ff59f231b21"],["D:/hexo/public/archives/2020/index.html","f2964fc0e5701eba45ed14bffaedadff"],["D:/hexo/public/archives/2020/page/2/index.html","b616ee751f268c281f4389a9234881c2"],["D:/hexo/public/archives/2021/01/index.html","55962244bc0e24d6257e9c9e839476d7"],["D:/hexo/public/archives/2021/03/index.html","c02b9988e747f79decb802969604c69f"],["D:/hexo/public/archives/2021/04/index.html","dfb9ea5848e57d099dc1e5c2f6f3ac2b"],["D:/hexo/public/archives/2021/05/index.html","001d5162259c9c349742727c2c24a470"],["D:/hexo/public/archives/2021/07/index.html","7d75cc7456aaf8ce90de71a3c10768f2"],["D:/hexo/public/archives/2021/index.html","b96cce4630bef40974e9efa774af72a5"],["D:/hexo/public/archives/2021/page/2/index.html","0833f363c181a18179e43868eacf3db7"],["D:/hexo/public/archives/2023/05/index.html","9e4d6be2ad9bd0e5d52ae8b1270b1e1f"],["D:/hexo/public/archives/2023/index.html","5a9c5600e00ea834055e9137e84ea499"],["D:/hexo/public/archives/index.html","3be64c6ecc168ad87e1c5a1e44afaace"],["D:/hexo/public/archives/page/2/index.html","b24eeb086285444516ba74d4dfa7ca88"],["D:/hexo/public/archives/page/3/index.html","f935261ec3f7e9fa1a65b33c86025790"],["D:/hexo/public/archives/page/4/index.html","7264bef5c1224ebabb9e2b4ddd038d0d"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","4028c0657a9a3300f825ece579d96400"],["D:/hexo/public/categories/index.html","0b293b16176052b81cfc6061a2de5def"],["D:/hexo/public/categories/写作/index.html","bf1ade18ec4af8416f244e37447f1c0b"],["D:/hexo/public/categories/学习笔记/index.html","2b0b3429a5b7631ad9dc3d038a298366"],["D:/hexo/public/categories/感悟/index.html","4649cd0bce92ab5ddb73bca640c0bd4c"],["D:/hexo/public/categories/感想/index.html","fb05f1ca9e4287e192fc0549a7334816"],["D:/hexo/public/categories/数学/index.html","70d3bac64a9fbd690f91e050b4c265bc"],["D:/hexo/public/categories/文章收藏/index.html","b82c843200e63c91feb361fdd9f8b7a9"],["D:/hexo/public/categories/旅行/index.html","599d418eadbf8ddfed59d125ab808f67"],["D:/hexo/public/categories/日记/index.html","d8f27a7fd30dfc7ac90faa135cd498fe"],["D:/hexo/public/categories/机器学习/index.html","14c44b7c61165865f4bdac17a4c705c8"],["D:/hexo/public/categories/诗歌收藏/index.html","7e2a0c4e8113129d5501c034ba35dd2c"],["D:/hexo/public/categories/读书笔记/index.html","39ec3c24d80855e64d42cff8f87904a6"],["D:/hexo/public/categories/读书笔记/page/2/index.html","a67f1504f0a42bdf89e120176489ef67"],["D:/hexo/public/comment/index.html","3b3cf22ba68a8d5d761b822b4bfa7903"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","9ccd93b0e769acc96a2a53dc7893f0ec"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","6f4d503fa54e1fbd8a8610f5cd9586e8"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","05c057c3ca9ed156f76cd672bea24808"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","f08f8ff3f535a339e40677e90ed4a2ad"],["D:/hexo/public/music/index.html","93481d4d286bc379400bacf07038631d"],["D:/hexo/public/page/2/index.html","ef10c9e891e126f6a211735eb138f6d4"],["D:/hexo/public/page/3/index.html","cc49773347e6419ca51282d31ff859a0"],["D:/hexo/public/page/4/index.html","2684696cbf3e5f43826293924360ddab"],["D:/hexo/public/tags/KNN/index.html","9797c150a07f6c67d35cc659f5f662bf"],["D:/hexo/public/tags/git/index.html","d675aeaa7ac7121f23a31eae8cd44df9"],["D:/hexo/public/tags/index.html","981b46a2b83aebf1a4771c20788ccc09"],["D:/hexo/public/tags/余华/index.html","c54886faf249ca132bbb3afcdba6541e"],["D:/hexo/public/tags/博尔赫斯/index.html","5cbf7cdb4084b7deddd3624409a6510a"],["D:/hexo/public/tags/回忆/index.html","6ceebf5dc05f8b20cc9ad8d5f70b109a"],["D:/hexo/public/tags/孙绍振/index.html","2e1ea2fe78b7e57f34ef5c8a02a78b4b"],["D:/hexo/public/tags/川端康成/index.html","19c428573e39077b025f3ee6d3c8f084"],["D:/hexo/public/tags/巴金/index.html","4c5d56fc886dfa015ab31c330a7f9a9f"],["D:/hexo/public/tags/建站-hexo/index.html","a8d1c5435673eb2a6aaffcb7d58dd5f5"],["D:/hexo/public/tags/总结/index.html","74206163f01431e82ce7c96c472f9f63"],["D:/hexo/public/tags/感悟/index.html","aad92029b26968a6b7baf1f4092fc391"],["D:/hexo/public/tags/感想/index.html","1ebedc6a9a1f077c31d6bd5385445b33"],["D:/hexo/public/tags/敦煌/index.html","7150f3a0d377df6fcff9fb51443603e3"],["D:/hexo/public/tags/文学/index.html","a7f8a63d17f906466277f60c5dbda7b6"],["D:/hexo/public/tags/时空/index.html","f2d80b82297f91c52bfb9447dff293b7"],["D:/hexo/public/tags/林轩田/index.html","366c76c8c4a76348e8982a5a26d4577c"],["D:/hexo/public/tags/线代/index.html","429a179a39722c1a54166c5f2fcbd9a4"],["D:/hexo/public/tags/考研/index.html","1e3e9ee283e1c84ca89b5091b1cc9546"],["D:/hexo/public/tags/聂鲁达/index.html","ae243c4f0aba7413b5e2e41aa3645570"],["D:/hexo/public/tags/西湖大学/index.html","fb309c0aa992e5f8713b0f255cb24f95"],["D:/hexo/public/tags/诗歌/index.html","8171dd53445a06ef67937adb14ac325d"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","229ccd864be55fc0d4fa54e08e2d3d6a"],["D:/hexo/public/tags/读书/index.html","aaf788e5e1f4440c8abe1b40e33b20e2"],["D:/hexo/public/tags/钟文/index.html","ab9eabcdb6b0965d02eae1ce878cdfe1"],["D:/hexo/public/tags/阎连科/index.html","6011ba83103a4a6285c567c46095e1e1"],["D:/hexo/public/tags/随想/index.html","ce0afb20b46ca024186ec62f04b70fe3"],["D:/hexo/public/tags/马尔克斯/index.html","443ecb4b480b2745976993364c12d952"]];
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







