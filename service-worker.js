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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","cc381de2f805d293a9e1738f3948a110"],["D:/hexo/public/2019/09/18/百年孤独/index.html","b1adc4b374f7e8a4ad817bf306633778"],["D:/hexo/public/2019/09/18/鼠疫/index.html","b1a6281c2b84420d3d51f6ee7b566510"],["D:/hexo/public/2019/12/20/cloud/index.html","ab2f5e2eba19958ba9f09ef9e7f7a586"],["D:/hexo/public/2019/12/21/knn/index.html","19f1ef3f78f848b66c7c4615c97ea3ca"],["D:/hexo/public/2019/12/23/finish/index.html","be7afeceda378fd2fd1018b7a2133845"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","6832334440c19dfa5f6ed66b6ea2aa85"],["D:/hexo/public/2020/02/28/Linear/index.html","e96e916a1b7e2bc9499c4da8e66a39ea"],["D:/hexo/public/2020/03/21/time/index.html","12cfb1ce6212e53e36cd3ba570995de3"],["D:/hexo/public/2020/05/23/1984/index.html","f2c09294d16e00b9d0fe82a424d8ecac"],["D:/hexo/public/2020/06/09/git笔记/index.html","87caef0e5b9898ee1c3eff442b2871e5"],["D:/hexo/public/2020/07/29/sheep/index.html","87cafd8dc243e910ff9abbf7e0c8f448"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","cc1c6e02ff96fc6c06167ecbe08f4557"],["D:/hexo/public/2020/08/09/Haruki/index.html","41904993d0adf2e7c67cb56408af7c3d"],["D:/hexo/public/2020/09/13/summarize/index.html","ffc8b34a567b17156a820d365322fc47"],["D:/hexo/public/2020/10/19/Thorn/index.html","7640c16d7ec2ceff4e1f4f8bd953aee6"],["D:/hexo/public/2020/10/28/huiyi/index.html","1bfbf26b28493f9c08362b731392c934"],["D:/hexo/public/2020/11/26/一点感悟/index.html","3017f3f1f77e02a8a2b017a2e6f6f5b6"],["D:/hexo/public/2021/01/02/crime/index.html","5df9780b7cbc371601752690e70eabc0"],["D:/hexo/public/2021/03/08/mother/index.html","d9cbf9b14ac9c74c593d2edbe29de43b"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","f69c94ec9e1d422f26d00ee244fd67ea"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","f6506086dcf4eb406e012d3fcac25126"],["D:/hexo/public/2021/03/31/Cholera/index.html","8a6f5db842d23fe1e2594030412d64b6"],["D:/hexo/public/2021/03/31/镜中/index.html","b7c8f8dd608026d3ac61dd0a7a427fb7"],["D:/hexo/public/2021/04/03/最后的对话/index.html","1d86c9bde1b9025796aaa22939ec36f9"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9b254dc15d4ce5028cd26ba60d1c3c03"],["D:/hexo/public/2021/04/06/雪国/index.html","085bd5956cac21db7810967d637830e9"],["D:/hexo/public/2021/04/09/骂观众/index.html","11f057fa377aef8d3edfd43ca4eb9f94"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","731c60fee612af995c653b96f54d4844"],["D:/hexo/public/2021/04/21/家/index.html","072cc16eafaa071d576f7fe86fa37cbd"],["D:/hexo/public/2021/04/24/光与岸/index.html","a0954faeb7dc5d9539f9f3024c3e66aa"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","f2607aaea2370dc97304578b3902ca68"],["D:/hexo/public/2021/05/03/五月伊始/index.html","6d2b6657ff0069254fc89e593940ef20"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","51e18f9788cb2c1ff187c26a50410bbe"],["D:/hexo/public/2021/05/31/迎接六月/index.html","491a8488c247795cb8e51a2f51290fae"],["D:/hexo/public/2021/07/07/七月/index.html","54fbcfa0747ac9e44deef9a2f7e0b83f"],["D:/hexo/public/2023/05/16/dunhuang/index.html","90c2733e6963b67145b5e79b04763f58"],["D:/hexo/public/about/index.html","5b99e3819e29cadea52785d8a5446a3b"],["D:/hexo/public/archives/2019/09/index.html","2cbe9c8e12ab6fc539dc919aee9aa77c"],["D:/hexo/public/archives/2019/12/index.html","34b0ae91f12664096eae8a1b01fc22d3"],["D:/hexo/public/archives/2019/index.html","6c23b488a0156209ac5935c096f1fc69"],["D:/hexo/public/archives/2020/02/index.html","fffe69bf19e5a7eddcdf31a983c2834b"],["D:/hexo/public/archives/2020/03/index.html","2832cfdf86e9f30d3a74ee4c2eeec32f"],["D:/hexo/public/archives/2020/05/index.html","cf5702938cea2497277cbd742ccd96b6"],["D:/hexo/public/archives/2020/06/index.html","9d191f9d4c876605f20fae909a525f43"],["D:/hexo/public/archives/2020/07/index.html","bb18a3629a62ffebf3c14bbfa38da0f2"],["D:/hexo/public/archives/2020/08/index.html","489420851adde33117ddc45b613a55bf"],["D:/hexo/public/archives/2020/09/index.html","3f73e3b435114cb39c82c5c6dc98a011"],["D:/hexo/public/archives/2020/10/index.html","c26389d4cbac8fd94ca5ac4272cbb5f9"],["D:/hexo/public/archives/2020/11/index.html","0fb2d88640c1bd48d815e863fbe2c509"],["D:/hexo/public/archives/2020/index.html","849131005f83d65510360c35a4e9074c"],["D:/hexo/public/archives/2020/page/2/index.html","2065af9007c575e35ec60fd49683c313"],["D:/hexo/public/archives/2021/01/index.html","3e88a679ec837de429e205f8bd36ec96"],["D:/hexo/public/archives/2021/03/index.html","2022c1bc214a589750cb65393ed77dc1"],["D:/hexo/public/archives/2021/04/index.html","19e7d09869d9de12e8d5ee5ad69869e1"],["D:/hexo/public/archives/2021/05/index.html","c86d3e0f41036be8266ebdf41f176508"],["D:/hexo/public/archives/2021/07/index.html","91f5e844ef0547e91096ef075c2090e3"],["D:/hexo/public/archives/2021/index.html","dac2c6c7d73ef480b72a84f4759de507"],["D:/hexo/public/archives/2021/page/2/index.html","684258e1de89760fbef886e70f3a056a"],["D:/hexo/public/archives/2023/05/index.html","5cf13de294c196fed6c02bf2fca590d1"],["D:/hexo/public/archives/2023/index.html","2fb17b51b176e4b5db7dbfce7bd73ba0"],["D:/hexo/public/archives/index.html","39370d713b0b5378c0d51a14b2caca1a"],["D:/hexo/public/archives/page/2/index.html","3fff96f24e659189849991590cf7bcd4"],["D:/hexo/public/archives/page/3/index.html","c17c947a2b882401bd7ea7e54826180f"],["D:/hexo/public/archives/page/4/index.html","5e96d5bb7d8a5372e1da96e0b722ba89"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","ef347bfc4ba4646b221597cf0d57b1a3"],["D:/hexo/public/categories/index.html","4d21c205f52373c8abcfb61dd1b2fa19"],["D:/hexo/public/categories/写作/index.html","fbfd3dfbda2312095e3336300f29d1e5"],["D:/hexo/public/categories/学习笔记/index.html","7d910d6b9d9cc4690f7ef648177178f0"],["D:/hexo/public/categories/感悟/index.html","a4e48945d18bc7fea236403ec03b3076"],["D:/hexo/public/categories/感想/index.html","26d8d35ee81f97a301a00d8720da54a8"],["D:/hexo/public/categories/数学/index.html","d96d93c4e9b0ffe058cb52177212a1e6"],["D:/hexo/public/categories/文章收藏/index.html","73f08da67aebd36ae0dbb84989a94450"],["D:/hexo/public/categories/旅行/index.html","c286f7599297678ff7a154433447fef6"],["D:/hexo/public/categories/日记/index.html","378f85f6ed7bc6dbf5d3803279f90cb0"],["D:/hexo/public/categories/机器学习/index.html","fdba673714ea1c2819e18dbaf12dda5f"],["D:/hexo/public/categories/诗歌收藏/index.html","f4f812659f476881649f7b4913ff3896"],["D:/hexo/public/categories/读书笔记/index.html","e1624a56d11665d09f55316ac06ad110"],["D:/hexo/public/categories/读书笔记/page/2/index.html","93bae6e63e824f4768fc7c8396607e55"],["D:/hexo/public/comment/index.html","152492f3d0d4f5abcd172cbc96a86777"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","4b1c96f0d8d77d166cbf2100cbe04f93"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","9d5a59ac3fb8bed4834ba91d5af51a4b"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","9849227601910000821a0b9adf4cbee4"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","438819709bfb8dcc147d5fccc3c473f8"],["D:/hexo/public/music/index.html","73af7184534f3380d1446c00e8bc06b1"],["D:/hexo/public/page/2/index.html","15979aba29949ee173d6914ba90d7bf9"],["D:/hexo/public/page/3/index.html","af9f79871b59d10d59aa939dbec47240"],["D:/hexo/public/page/4/index.html","3ec6283a0da07e6ba13992253464c8b0"],["D:/hexo/public/tags/KNN/index.html","3e44fdcec16518021857dba9730f0b7f"],["D:/hexo/public/tags/git/index.html","a13fd250229a01d5f074528d05d16e82"],["D:/hexo/public/tags/index.html","51d7581e124b40331ee6242ddfe3b531"],["D:/hexo/public/tags/余华/index.html","4285184a184cee958ae22a7403f5a921"],["D:/hexo/public/tags/博尔赫斯/index.html","bb04624b9d4e7ec2c07c66ad854010b4"],["D:/hexo/public/tags/回忆/index.html","a527348584ac9908430ec29d291924e4"],["D:/hexo/public/tags/孙绍振/index.html","bafaf811d52dd58365ca917d5f340138"],["D:/hexo/public/tags/川端康成/index.html","a173c7d8808a13b7b7bf412314ecbafa"],["D:/hexo/public/tags/巴金/index.html","4a8506fbb76fa5c22739f256ac85ad2a"],["D:/hexo/public/tags/建站-hexo/index.html","9d1444b9708754a0bc14017df6cd7133"],["D:/hexo/public/tags/总结/index.html","8497c2685a2265b7a52900292b0d3375"],["D:/hexo/public/tags/感悟/index.html","3a5a5beffd57f078261d8e24dc3f499a"],["D:/hexo/public/tags/感想/index.html","ff9473ed6544f1cab95873ec39649418"],["D:/hexo/public/tags/敦煌/index.html","f35cfcf5e66a98645b82ecb12b23ce5b"],["D:/hexo/public/tags/文学/index.html","13fe485993934e73646e2880d45b45c3"],["D:/hexo/public/tags/时空/index.html","57428720768206e0f94749783ef6ff0e"],["D:/hexo/public/tags/林轩田/index.html","4debf1e4b258196d66ccdc747d8b58d8"],["D:/hexo/public/tags/线代/index.html","811559c064d2b0b6f20807aa5370d6b4"],["D:/hexo/public/tags/考研/index.html","ede69d847dd771f6d5acee92b70708bc"],["D:/hexo/public/tags/聂鲁达/index.html","4c6e02922864d7c508b9e68c53374a63"],["D:/hexo/public/tags/西湖大学/index.html","063195e1414bf976ba8bb9eaa89f2c96"],["D:/hexo/public/tags/诗歌/index.html","5b4ecbf681b3e104936213c4d70fa1ab"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","b6969999c2fac32750e4ca07dda24170"],["D:/hexo/public/tags/读书/index.html","fbd215463dfba90ec40cd06e3d7b5b62"],["D:/hexo/public/tags/钟文/index.html","25ee4be9e0d11414c6d94e1a248d29c8"],["D:/hexo/public/tags/阎连科/index.html","c115a8df618c2c9b47bd681545849f37"],["D:/hexo/public/tags/随想/index.html","9b1e87c2164046d44f5f8f9628767012"],["D:/hexo/public/tags/马尔克斯/index.html","3002964a731a083b4a909a073ee16bd5"]];
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







