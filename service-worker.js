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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","3e3495ae4db460e9d2e56c8beaf6db06"],["D:/hexo/public/2019/09/18/百年孤独/index.html","a015ddfc10d9c1292941fc9c732d08bd"],["D:/hexo/public/2019/09/18/鼠疫/index.html","80b4b10b3fdff58023d1cc476b6170a9"],["D:/hexo/public/2019/12/20/cloud/index.html","b0a9b06a02388c0dd8cc045806fdb941"],["D:/hexo/public/2019/12/21/knn/index.html","65c59ffc8ec317b482f9b7465ca004f0"],["D:/hexo/public/2019/12/23/finish/index.html","cbbc33a97aef527919dd5085e46d4c08"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","9ae6f3c07dd8bddeb92e0066ad2dc6fe"],["D:/hexo/public/2020/02/28/Linear/index.html","d758d89caac937d4c96e89c5cf9b576b"],["D:/hexo/public/2020/03/21/time/index.html","1d0474fb33c3ea6737bb7ad5c7f4cfad"],["D:/hexo/public/2020/05/23/1984/index.html","c35d7ce08c570ace0e5646f554c66f73"],["D:/hexo/public/2020/06/09/git笔记/index.html","c97f929689c994e173a27dffb947c623"],["D:/hexo/public/2020/07/29/sheep/index.html","a3460ab4846b08e4290872e630822e96"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","9e2424fb3498a08de773618b71e54a43"],["D:/hexo/public/2020/08/09/Haruki/index.html","e0467bc20bb689e00a1bb68d66ee4083"],["D:/hexo/public/2020/09/13/summarize/index.html","ac7d7d9f8734e786fdd6e1794e5d7028"],["D:/hexo/public/2020/10/19/Thorn/index.html","0da03348cfe367766c09b169f79c129b"],["D:/hexo/public/2020/10/28/huiyi/index.html","e7afbd2ae3581b3bab43b83a97a29de1"],["D:/hexo/public/2020/11/26/一点感悟/index.html","5f08e0dffa284aa660d7742a5ad0ea4a"],["D:/hexo/public/2021/01/02/crime/index.html","5e21b92a55367193ea7e4d53c39ea053"],["D:/hexo/public/2021/03/08/mother/index.html","90ad0cca86665dca2d5a047f9f019a26"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","b2dc0b1a9e4290663b9fda43367ebbe7"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","cfe828affe2b9479988549500f781823"],["D:/hexo/public/2021/03/31/Cholera/index.html","a174b734971aac948d9f2c67aefeb6e7"],["D:/hexo/public/2021/03/31/镜中/index.html","f13a2ccfdaabdc27c6696705f29ebd20"],["D:/hexo/public/2021/04/03/最后的对话/index.html","e7cbb0ddf155461f19ed3e9c50d9b358"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9f3e87cec9c4b9b0a6ede07a05a59be0"],["D:/hexo/public/2021/04/06/雪国/index.html","ff00d2fbda80ec7dbe9d5acc16cca618"],["D:/hexo/public/2021/04/09/骂观众/index.html","1ab4ea8f9f5004dff115a4e60418ded5"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","9b718ddbdb0f955cbd89cce7a8b7616c"],["D:/hexo/public/2021/04/21/家/index.html","10489f8def31bdfde6e7a4c0454c9650"],["D:/hexo/public/2021/04/24/光与岸/index.html","632907ba496a3137f1e3cbe75cf2789f"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","e708e55b2ed800334c5b33be38215fb3"],["D:/hexo/public/2021/05/03/五月伊始/index.html","6626ac46a9df69445b046f9a6771f016"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c7207ed701ac8260fdf9f6d792b1e224"],["D:/hexo/public/2021/05/31/迎接六月/index.html","4e110ed101d77e08e39c574da06532ad"],["D:/hexo/public/2021/07/07/七月/index.html","5aee1d1af0f45c4b586a89acca811f35"],["D:/hexo/public/2023/05/16/dunhuang/index.html","64a43d565d170c8e723205556606f355"],["D:/hexo/public/2023/07/29/yeqi/index.html","a53edf4ca4742104d98c2f3ac7f9805b"],["D:/hexo/public/2023/09/10/life/index.html","bf8f56df0ad0b9b4d3780483852bc5e7"],["D:/hexo/public/2023/10/15/qingdao/index.html","9ac9b32cc833f877c5485bd3aca107bd"],["D:/hexo/public/about/index.html","0fb444830e41e1a94f547b1e8f7d74ac"],["D:/hexo/public/archives/2019/09/index.html","a76f4bfbbede9464dc6adbf84946b6e0"],["D:/hexo/public/archives/2019/12/index.html","e03ca34e9b767d68fe2f1eac7f0491e4"],["D:/hexo/public/archives/2019/index.html","486c4a770a0b63d8df323f921da92879"],["D:/hexo/public/archives/2020/02/index.html","4c4c26be8b8898989fd5064f79f172d7"],["D:/hexo/public/archives/2020/03/index.html","eadbe1ffa14827964bc8201f629a97f5"],["D:/hexo/public/archives/2020/05/index.html","7a0b7c0521a75e9530bb333fb9412bdf"],["D:/hexo/public/archives/2020/06/index.html","25de474b7749f3eb6ab57319546f0e10"],["D:/hexo/public/archives/2020/07/index.html","8a4724e3d4d78d7ced0053ea8cd1629a"],["D:/hexo/public/archives/2020/08/index.html","20ed4e8867412dccffc4166e0c9fe2c2"],["D:/hexo/public/archives/2020/09/index.html","7da51e00985e2b78e02ec6e3b54a09ad"],["D:/hexo/public/archives/2020/10/index.html","4849a480a84d8f0259aef7d2055294d5"],["D:/hexo/public/archives/2020/11/index.html","3b641f1b773ba7ac6474b6a1695eef48"],["D:/hexo/public/archives/2020/index.html","a98d361725bd9449fba1269b33d2e9ff"],["D:/hexo/public/archives/2020/page/2/index.html","f6f2229d05e84dc33ec312f8021a6ded"],["D:/hexo/public/archives/2021/01/index.html","7a057041e95cd4612c687697f0ed31d8"],["D:/hexo/public/archives/2021/03/index.html","4d7e9adce1891313e8cd41b6012530d6"],["D:/hexo/public/archives/2021/04/index.html","b408ecc23622c9464f424a750ce9517b"],["D:/hexo/public/archives/2021/05/index.html","9e4c94159fb3511ac6f85944a4e1755e"],["D:/hexo/public/archives/2021/07/index.html","d03d9f9596c3c3f43703d6fa4ea695a3"],["D:/hexo/public/archives/2021/index.html","5cc2b41d97b3cf6e1f7f562822da9f3c"],["D:/hexo/public/archives/2021/page/2/index.html","3492f16dd21678728e6330e8293f0064"],["D:/hexo/public/archives/2023/05/index.html","384de3644bb8652b988142c39769481b"],["D:/hexo/public/archives/2023/07/index.html","be792a16b90123fa940309f6a176862a"],["D:/hexo/public/archives/2023/09/index.html","c0eec44bea83cd3d405e49a3d1b93296"],["D:/hexo/public/archives/2023/10/index.html","4feba3442689354a14eb0d02d8607c50"],["D:/hexo/public/archives/2023/index.html","c652270294bd0319b1fadc7e5cd6c3f6"],["D:/hexo/public/archives/index.html","e35abf258477b7e571644634126eb1bb"],["D:/hexo/public/archives/page/2/index.html","f990ca9fbf99c8b83c75af9543b97038"],["D:/hexo/public/archives/page/3/index.html","025d9469edc1c46c8b337f7f9a8030e2"],["D:/hexo/public/archives/page/4/index.html","11bed3d68c61d75c9968919c276f6913"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","d9311b94cecb6ed2b48fa158c3ec82ac"],["D:/hexo/public/categories/index.html","2b40cc07759238b28327bba05703d480"],["D:/hexo/public/categories/写作/index.html","f182af22585f97f3be31cd475d0b0bcd"],["D:/hexo/public/categories/学习笔记/index.html","d8cf229c80b175c1fcd2667ca7fd84bc"],["D:/hexo/public/categories/感悟/index.html","1f7881eddd208f314da1cf7b03de5926"],["D:/hexo/public/categories/感想/index.html","19809ec930b9dd04bbb30b23fc9dc8bb"],["D:/hexo/public/categories/感想/page/2/index.html","61a4f4684f84d257fe0a5e9801a6e9a3"],["D:/hexo/public/categories/数学/index.html","3db568cdb0e88c59b00149783de2ec01"],["D:/hexo/public/categories/文章收藏/index.html","e4552f997b776ea2e67acee3b4877543"],["D:/hexo/public/categories/旅行/index.html","b13ec29645c9b3c12662a2dd1323ad44"],["D:/hexo/public/categories/日记/index.html","17cb8c7310e15448ddca8def37c66ef1"],["D:/hexo/public/categories/机器学习/index.html","aad3fff43df93288358db0d7ad6562d2"],["D:/hexo/public/categories/诗歌收藏/index.html","d24b218428ec95ecab95b47253f3086f"],["D:/hexo/public/categories/读书笔记/index.html","ff987cc9e5523f7e0bd49c709da85161"],["D:/hexo/public/categories/读书笔记/page/2/index.html","78f3bca31f52919a9bb9bc852ddb57e1"],["D:/hexo/public/comment/index.html","fc4052a547c3a6988a64b8c254e7c5c4"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","70ef5852f6e6dcabda91538181b69589"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","50a90fa3865235bacaaa04fc5da13ec0"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","1667d5a11e32a02a5617f4c05840f2d2"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","c5c4bfbb2c33b30d69b3cb7d1d50394a"],["D:/hexo/public/music/index.html","94e8557c9c456a4da285df6c4dff1215"],["D:/hexo/public/page/2/index.html","fc876502d2a17d6e7912b1615f2797ae"],["D:/hexo/public/page/3/index.html","6889c077487721691c451d09a57d712c"],["D:/hexo/public/page/4/index.html","8ab09981320c32161c34bfc4961eb5bd"],["D:/hexo/public/tags/KNN/index.html","4c01294689c46e93ec9606876eb28b90"],["D:/hexo/public/tags/git/index.html","9cbb24c3a43138bd0f56e61f819dce5c"],["D:/hexo/public/tags/index.html","e445938db79ae996922c3575b91ae5c0"],["D:/hexo/public/tags/余华/index.html","b1589c4b6660cb9f94b3ea6942671a28"],["D:/hexo/public/tags/北京/index.html","81ee61e665961bb05c488c7d915a0da0"],["D:/hexo/public/tags/博尔赫斯/index.html","a6e271cd8792d688bd3866eeba5fbf2c"],["D:/hexo/public/tags/回忆/index.html","ab9e37bb16a59710fc838959fb643854"],["D:/hexo/public/tags/孙绍振/index.html","e1eb21500b0445fb625127f618fe8b12"],["D:/hexo/public/tags/川端康成/index.html","64ed0a1e04f5d4829f6cb7bae275b4d7"],["D:/hexo/public/tags/巴金/index.html","c1080b5895dd1a6232d12b1de19b12b3"],["D:/hexo/public/tags/建站-hexo/index.html","fc0c5e221409000180a9be560fd23b0b"],["D:/hexo/public/tags/总结/index.html","846d0a315f621bdeee0335e7109f64f9"],["D:/hexo/public/tags/感悟/index.html","af39f5abf56d3bfe1a928473f57c5a66"],["D:/hexo/public/tags/感想/index.html","a6ba948c2f932c26e13a0a17302bbefb"],["D:/hexo/public/tags/敦煌/index.html","4f6897847646e5292abf26ccf936b44e"],["D:/hexo/public/tags/文学/index.html","5ce225427962252cd400883fc0e06b53"],["D:/hexo/public/tags/时空/index.html","7c9451cbfb3a5b6e5c836ad1ab2414fb"],["D:/hexo/public/tags/林轩田/index.html","05d49cb027619148990423868643b6a2"],["D:/hexo/public/tags/生活/index.html","71f16b0fd7ce3a56f8d49b8deb7a24c8"],["D:/hexo/public/tags/线代/index.html","6009e9379016852d5eabc1cac5cd0daa"],["D:/hexo/public/tags/考研/index.html","3628898bd9586be9b0eaac07953be3f6"],["D:/hexo/public/tags/聂鲁达/index.html","04ded94929446b92b29aa84bb3d2a754"],["D:/hexo/public/tags/西湖大学/index.html","4a1626b79336175f574b7ec60ac95d65"],["D:/hexo/public/tags/诗歌/index.html","32890afcdf1205df9c765a6f4c073c33"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","24ade74c2c490b976567d88120f09d95"],["D:/hexo/public/tags/读书/index.html","fc696b25cda2ffa5ddc47d2f75c8eeef"],["D:/hexo/public/tags/钟文/index.html","deb521cca3d9889e65ec99fa0be75f96"],["D:/hexo/public/tags/阎连科/index.html","3d793f6316f9c09e00c0c44ae49436ce"],["D:/hexo/public/tags/随想/index.html","17f68b656178e7ebcc3da752b7e9bf11"],["D:/hexo/public/tags/青岛/index.html","b2b4777ec39fdc8ecfa33b95569b6449"],["D:/hexo/public/tags/马尔克斯/index.html","05e8c44661234700d47e69f8d671522e"]];
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







