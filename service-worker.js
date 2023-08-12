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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","32c502a417a34b1ac7e1160c03d61e05"],["D:/hexo/public/2019/09/18/百年孤独/index.html","13bb138624e1f6604780b8ebc8e3f5b1"],["D:/hexo/public/2019/09/18/鼠疫/index.html","d9606c00e43b7a72cc20c9e3b816abfe"],["D:/hexo/public/2019/12/20/cloud/index.html","2e7f35f9d3d22a1f28456ebfbda5992c"],["D:/hexo/public/2019/12/21/knn/index.html","1fddf4dee8a4e89a3b5e561624d68669"],["D:/hexo/public/2019/12/23/finish/index.html","9cd58cd9d6505534662833a351b3b8b7"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","767893c427f3c112854a78526ad7a967"],["D:/hexo/public/2020/02/28/Linear/index.html","722b2018f3e21d0d749f4d4144737b87"],["D:/hexo/public/2020/03/21/time/index.html","977ca41bc02190b83ea3bdf96628853b"],["D:/hexo/public/2020/05/23/1984/index.html","bd61ade024a9f92fed93e3356f79a7c7"],["D:/hexo/public/2020/06/09/git笔记/index.html","a6a124f3129194b2f47adb35cf5d0ce1"],["D:/hexo/public/2020/07/29/sheep/index.html","2f1f5189c670b56a5101296ace2aac61"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","5431e2759cadde104717f413de39a4d8"],["D:/hexo/public/2020/08/09/Haruki/index.html","b48ea0c75ea09c5354d16674ddeff1fc"],["D:/hexo/public/2020/09/13/summarize/index.html","304a9866339c73b7fbcdd3170ab70df9"],["D:/hexo/public/2020/10/19/Thorn/index.html","3c8781663a9e581d60b04c17f7b7c325"],["D:/hexo/public/2020/10/28/huiyi/index.html","0dcf521b347999546f17678cd36fc08d"],["D:/hexo/public/2020/11/26/一点感悟/index.html","d01becf7d6831e4d5f46d3d753d4f66f"],["D:/hexo/public/2021/01/02/crime/index.html","bb2394ace0718c0eacadbc9e9ac2b181"],["D:/hexo/public/2021/03/08/mother/index.html","a4dfba72901321ed4e10b9f67f02a4e5"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","5f9d9e9220efb039055d3e99a6fb1891"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","5361897496dbbcd71afc9b7e98d819ed"],["D:/hexo/public/2021/03/31/Cholera/index.html","e0956cc287eaca74fef4b66465cd8124"],["D:/hexo/public/2021/03/31/镜中/index.html","5936343f9cc156a14b18d58e016105b1"],["D:/hexo/public/2021/04/03/最后的对话/index.html","4ecdf7958a4bda1a897775ad7aa3742f"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","6a8e45f63e272972d44b90f626042eec"],["D:/hexo/public/2021/04/06/雪国/index.html","5ca9500df6a2ea7effdebc67adfc7bc0"],["D:/hexo/public/2021/04/09/骂观众/index.html","eab926ef3a2a99f475cc738d3677e1c0"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","6315976b733570cc7044f85811a9bde5"],["D:/hexo/public/2021/04/21/家/index.html","d3db3b031c85d2d891ae966f57ed2949"],["D:/hexo/public/2021/04/24/光与岸/index.html","96a13960cc6178e36c79efd4e8144348"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","de95159173f6681b6745f30cf328798b"],["D:/hexo/public/2021/05/03/五月伊始/index.html","81724d1965ff472b8b9e3c130a04b3ed"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","0f3ae3e2152a9fd50b7682c55dd3044c"],["D:/hexo/public/2021/05/31/迎接六月/index.html","370a4e6aa1d1a5d21fec36bd0cfe5e51"],["D:/hexo/public/2021/07/07/七月/index.html","7fda4a54d9fc6670e905b8dbb679eb7f"],["D:/hexo/public/2023/05/16/dunhuang/index.html","460da392e1d311d723f529b9987883e0"],["D:/hexo/public/2023/08/12/yeqi/index.html","c1e7ddc6b1d8467ed9f0881309e707f8"],["D:/hexo/public/about/index.html","04937e7ead0f9f6f96a88c35b6cf25bb"],["D:/hexo/public/archives/2019/09/index.html","682aee25a3daf8c402f9794d14c5eb7d"],["D:/hexo/public/archives/2019/12/index.html","48ecc62a86713b690aded5fd1944e94e"],["D:/hexo/public/archives/2019/index.html","c5fae9720f31798bb7cf90c15e3ab491"],["D:/hexo/public/archives/2020/02/index.html","7555a56d71ac289064a7c9d7a601c668"],["D:/hexo/public/archives/2020/03/index.html","77fb3c2ec3ca60bc8333c1faab57ae5e"],["D:/hexo/public/archives/2020/05/index.html","75a575f38a2fe66060c58e584ccf814f"],["D:/hexo/public/archives/2020/06/index.html","9611a89e7dcbc120542d01e3023efbf6"],["D:/hexo/public/archives/2020/07/index.html","29b5f96334d5e5fb9b32f548370e3aa0"],["D:/hexo/public/archives/2020/08/index.html","0a30afce01419e23793829b4189996ef"],["D:/hexo/public/archives/2020/09/index.html","42d6d42d5f910ee2c60511e3d0e660f4"],["D:/hexo/public/archives/2020/10/index.html","51adf34063df6e6aa1f6c4013f9ac5e8"],["D:/hexo/public/archives/2020/11/index.html","1fd077e77e84208e01567be6411c1428"],["D:/hexo/public/archives/2020/index.html","9104ca23bb710eb5043d112323bc9a63"],["D:/hexo/public/archives/2020/page/2/index.html","59b795eae652706f8d99bb3b60c99c03"],["D:/hexo/public/archives/2021/01/index.html","3ab21839659446425f6816b7fa0ba44e"],["D:/hexo/public/archives/2021/03/index.html","055cfa9ab150033b918d66bf9fbfe997"],["D:/hexo/public/archives/2021/04/index.html","7623c9c1f4a54a5a1a53cbe78216d860"],["D:/hexo/public/archives/2021/05/index.html","1567e0f76c0e293f0343c47ae06b9531"],["D:/hexo/public/archives/2021/07/index.html","b40af65c25d47539c6d933b6708e868f"],["D:/hexo/public/archives/2021/index.html","d6379a0088b6d9734a92233430a68b82"],["D:/hexo/public/archives/2021/page/2/index.html","fe563ffae3e236687ace32e5a5e8603d"],["D:/hexo/public/archives/2023/05/index.html","1c4f37e4be6ab634374c72a874a23e83"],["D:/hexo/public/archives/2023/08/index.html","2e3d91345dc953fd062d127fc55ad18f"],["D:/hexo/public/archives/2023/index.html","20a73c6f86fc7349bc938ea5a0ef10bf"],["D:/hexo/public/archives/index.html","02a6acf7e6ca832df26668a48bca82d6"],["D:/hexo/public/archives/page/2/index.html","526b269e9d27c81f86251d688be2a2d5"],["D:/hexo/public/archives/page/3/index.html","7a3fe8d930e09234e28a8b5696d383d3"],["D:/hexo/public/archives/page/4/index.html","e6e0c1ebddcf73911ada51c3a2c74520"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","4320b1d2bf20046a78296be4a76a1fe2"],["D:/hexo/public/categories/index.html","9e68004ad4e5b6288d903e6731541e29"],["D:/hexo/public/categories/写作/index.html","a88805888f54edf5e3646cb35d975227"],["D:/hexo/public/categories/学习笔记/index.html","175aafc113239310c5799cde6313ac76"],["D:/hexo/public/categories/感悟/index.html","55b06ff598cc13f363044ef82992be2a"],["D:/hexo/public/categories/感想/index.html","57e1c8141ec0997a1236087ca7b64629"],["D:/hexo/public/categories/数学/index.html","f3184cc83ad6c03cfbf4ffea186c0e38"],["D:/hexo/public/categories/文章收藏/index.html","af3d5b6ea34d49e5a6d7d1d4140e54a4"],["D:/hexo/public/categories/旅行/index.html","ceeb21e49d30f8437c14d62edca7cc46"],["D:/hexo/public/categories/日记/index.html","97da220733bde59ffcf217f6a6725942"],["D:/hexo/public/categories/机器学习/index.html","1e0fa81a51d938823e334ba203a1ca6d"],["D:/hexo/public/categories/诗歌收藏/index.html","a009c9149c3e37d417157f0a448e38b7"],["D:/hexo/public/categories/读书笔记/index.html","31ed9127b417f01900686984bbf3806f"],["D:/hexo/public/categories/读书笔记/page/2/index.html","43d0ab7b2f77c2ccf3e276db87713599"],["D:/hexo/public/comment/index.html","a0787841a0be55482fe9593216cde5b2"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","ef7514808a3e763d5690fa841bacd53c"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","23486f0e4ef0e53b937e3d5bcc1eee74"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","066a912a1744b7b1e3b03d1ff64ac079"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","3431d507db8effd52ec1b06932ce3492"],["D:/hexo/public/music/index.html","d9cd61bd419d84d87905eb0fcadde8f0"],["D:/hexo/public/page/2/index.html","234f93e474151dcbaa937a587dec8262"],["D:/hexo/public/page/3/index.html","136aa222ecf91142a51543f99c7f523d"],["D:/hexo/public/page/4/index.html","1814fcabfe0e93d8ae12d3547a4a0263"],["D:/hexo/public/tags/KNN/index.html","385d1982acc047e7551d499a1212aac2"],["D:/hexo/public/tags/git/index.html","2c3765c117619fab715f71eea2376f8f"],["D:/hexo/public/tags/index.html","00cb4e8153184db3c74ed8ce56c04510"],["D:/hexo/public/tags/余华/index.html","0d7cd4c16799a3528ace2ef396fae1c6"],["D:/hexo/public/tags/博尔赫斯/index.html","1193c613ccabd0a58368c9e17b976eb6"],["D:/hexo/public/tags/回忆/index.html","3f1195c94aceafa30ae590cd541477c3"],["D:/hexo/public/tags/孙绍振/index.html","73157adfe76f49019b4fd9a011c1522d"],["D:/hexo/public/tags/川端康成/index.html","6bea4092fff2287ee3c4a517007d25ca"],["D:/hexo/public/tags/巴金/index.html","0d8e01b55aaa49014ff3a431db036917"],["D:/hexo/public/tags/建站-hexo/index.html","21f57e8979057878a99dca561b148f46"],["D:/hexo/public/tags/总结/index.html","9e3bc71bc776c8bd0ac5a97dbc631054"],["D:/hexo/public/tags/感悟/index.html","e400aae8cafe49524445182e83509336"],["D:/hexo/public/tags/感想/index.html","075381cd2da35142b4e129c0a5056448"],["D:/hexo/public/tags/敦煌/index.html","198928c8134ac0e5d2c74895c9f68cb2"],["D:/hexo/public/tags/文学/index.html","7a8a8a9168310b0041f254f2c927ed9e"],["D:/hexo/public/tags/时空/index.html","5bb1c03346a8a90cbe84dbfd1e05ede7"],["D:/hexo/public/tags/林轩田/index.html","71b18b94bedf4828dbfa53b277e68407"],["D:/hexo/public/tags/线代/index.html","a115128469211e1a50f5a9e4d2bc74d4"],["D:/hexo/public/tags/考研/index.html","559dbf2e4471752ccebcbc82b2932cf7"],["D:/hexo/public/tags/聂鲁达/index.html","d4eb5d97999a3e703268ab13c41c9d12"],["D:/hexo/public/tags/西湖大学/index.html","72888cf1af17208bc18256b464c039c6"],["D:/hexo/public/tags/诗歌/index.html","b6b9458e937373c36465247465164a23"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","1b4a85f17b11f5d798811a4b2d85d938"],["D:/hexo/public/tags/读书/index.html","3c95b07b1f20175162bae46b8e700c44"],["D:/hexo/public/tags/钟文/index.html","144760a78ef0899c522200c69c88e6ec"],["D:/hexo/public/tags/阎连科/index.html","36bc55a0dc7de8a43d943bc507ff2fcf"],["D:/hexo/public/tags/随想/index.html","17129151a3721d793c7b57cee44a4565"],["D:/hexo/public/tags/马尔克斯/index.html","6b1955aedeac489181b8cc5700a202bc"]];
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







