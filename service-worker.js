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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","3e3495ae4db460e9d2e56c8beaf6db06"],["D:/hexo/public/2019/09/18/百年孤独/index.html","a015ddfc10d9c1292941fc9c732d08bd"],["D:/hexo/public/2019/09/18/鼠疫/index.html","80b4b10b3fdff58023d1cc476b6170a9"],["D:/hexo/public/2019/12/20/cloud/index.html","b0a9b06a02388c0dd8cc045806fdb941"],["D:/hexo/public/2019/12/21/knn/index.html","65c59ffc8ec317b482f9b7465ca004f0"],["D:/hexo/public/2019/12/23/finish/index.html","cbbc33a97aef527919dd5085e46d4c08"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","9ae6f3c07dd8bddeb92e0066ad2dc6fe"],["D:/hexo/public/2020/02/28/Linear/index.html","d758d89caac937d4c96e89c5cf9b576b"],["D:/hexo/public/2020/03/21/time/index.html","1d0474fb33c3ea6737bb7ad5c7f4cfad"],["D:/hexo/public/2020/05/23/1984/index.html","c35d7ce08c570ace0e5646f554c66f73"],["D:/hexo/public/2020/06/09/git笔记/index.html","c97f929689c994e173a27dffb947c623"],["D:/hexo/public/2020/07/29/sheep/index.html","a3460ab4846b08e4290872e630822e96"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","9e2424fb3498a08de773618b71e54a43"],["D:/hexo/public/2020/08/09/Haruki/index.html","96829f9671bf30b2612c37b301372007"],["D:/hexo/public/2020/09/13/summarize/index.html","d064914101487b7fa0a2e42c783a9cac"],["D:/hexo/public/2020/10/19/Thorn/index.html","b732bbb5f397c517cc34c4891d3b7021"],["D:/hexo/public/2020/10/28/huiyi/index.html","e7afbd2ae3581b3bab43b83a97a29de1"],["D:/hexo/public/2020/11/26/一点感悟/index.html","5f08e0dffa284aa660d7742a5ad0ea4a"],["D:/hexo/public/2021/01/02/crime/index.html","5e21b92a55367193ea7e4d53c39ea053"],["D:/hexo/public/2021/03/08/mother/index.html","90ad0cca86665dca2d5a047f9f019a26"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","b2dc0b1a9e4290663b9fda43367ebbe7"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","cfe828affe2b9479988549500f781823"],["D:/hexo/public/2021/03/31/Cholera/index.html","a174b734971aac948d9f2c67aefeb6e7"],["D:/hexo/public/2021/03/31/镜中/index.html","f13a2ccfdaabdc27c6696705f29ebd20"],["D:/hexo/public/2021/04/03/最后的对话/index.html","e7cbb0ddf155461f19ed3e9c50d9b358"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9f3e87cec9c4b9b0a6ede07a05a59be0"],["D:/hexo/public/2021/04/06/雪国/index.html","ff00d2fbda80ec7dbe9d5acc16cca618"],["D:/hexo/public/2021/04/09/骂观众/index.html","1ab4ea8f9f5004dff115a4e60418ded5"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","9b718ddbdb0f955cbd89cce7a8b7616c"],["D:/hexo/public/2021/04/21/家/index.html","10489f8def31bdfde6e7a4c0454c9650"],["D:/hexo/public/2021/04/24/光与岸/index.html","632907ba496a3137f1e3cbe75cf2789f"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","32d6c393daf66a651e8513a133cae2c2"],["D:/hexo/public/2021/05/03/五月伊始/index.html","6626ac46a9df69445b046f9a6771f016"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c7207ed701ac8260fdf9f6d792b1e224"],["D:/hexo/public/2021/05/31/迎接六月/index.html","4e110ed101d77e08e39c574da06532ad"],["D:/hexo/public/2021/07/07/七月/index.html","5aee1d1af0f45c4b586a89acca811f35"],["D:/hexo/public/2023/05/16/dunhuang/index.html","88f7d32182bcd9a69b287400734ca724"],["D:/hexo/public/2023/07/29/yeqi/index.html","fc1258c11e2f3a27e5120e53f2a304c1"],["D:/hexo/public/2023/09/10/life/index.html","65fc685d80fb69a9e8b2f29e3a413205"],["D:/hexo/public/2023/10/15/关于青岛一点回忆/index.html","afe7e84a3f8d982e03d66bb8841e62bd"],["D:/hexo/public/about/index.html","e89f0060c7aea4bb48bd8e5fcb5ffdb0"],["D:/hexo/public/archives/2019/09/index.html","c2428fe8f8d77de6e4705157b1883d1b"],["D:/hexo/public/archives/2019/12/index.html","a23a274f072d47241a2b68cba1d262a2"],["D:/hexo/public/archives/2019/index.html","336d43e2c38b4666c196e88ae4c0c7f3"],["D:/hexo/public/archives/2020/02/index.html","5d30e73a70084dc46c75a2fe5a541d25"],["D:/hexo/public/archives/2020/03/index.html","4594745788e90640cd0043543d1990fe"],["D:/hexo/public/archives/2020/05/index.html","a0f41f4585d90ca1717f1ad613b0d9bd"],["D:/hexo/public/archives/2020/06/index.html","68e192c6b19ef17746ab0eee5ab3c5e0"],["D:/hexo/public/archives/2020/07/index.html","2c2433b7a064d95c4d1b592f4329a307"],["D:/hexo/public/archives/2020/08/index.html","b499203b3735015cd2da82c0b7741f8c"],["D:/hexo/public/archives/2020/09/index.html","bcc7e9d2430bc89cc7cbfa8b67f5ece9"],["D:/hexo/public/archives/2020/10/index.html","b99a120a99f665dc08dd550bbba8de5d"],["D:/hexo/public/archives/2020/11/index.html","c6e4b52f32b0b9be799a57a6dcfdc3f1"],["D:/hexo/public/archives/2020/index.html","8700c31d39b32df318e224fd32df7495"],["D:/hexo/public/archives/2020/page/2/index.html","a22986827e15003558089db82df78de5"],["D:/hexo/public/archives/2021/01/index.html","00469f3b7636c709c59e31aa2f7da617"],["D:/hexo/public/archives/2021/03/index.html","d75f849bba84b5b726720bc4283fa642"],["D:/hexo/public/archives/2021/04/index.html","bcfb9f6ef7f7a9e59c8d4efd4635da75"],["D:/hexo/public/archives/2021/05/index.html","f08e20b5e70bb34b5974cf34aa6a8503"],["D:/hexo/public/archives/2021/07/index.html","f5d368573e5dcd8a50858c787aa8f47a"],["D:/hexo/public/archives/2021/index.html","b7e22554ef6705e7a837b7c2a8f1f483"],["D:/hexo/public/archives/2021/page/2/index.html","54f65ffee407417c6697f35c865571bd"],["D:/hexo/public/archives/2023/05/index.html","d24fd58fb52cc23e829c03d386cd3218"],["D:/hexo/public/archives/2023/07/index.html","09ce89426ae3731d769983cb94c79955"],["D:/hexo/public/archives/2023/09/index.html","96569182d5639462d00d14a0eed743f8"],["D:/hexo/public/archives/2023/10/index.html","684d28163989e622aa79e7b7eb7ff746"],["D:/hexo/public/archives/2023/index.html","fa04600e2fe2e0018e8b37d517f1d685"],["D:/hexo/public/archives/index.html","6dfcd02c388930fe436d10bdbc52507c"],["D:/hexo/public/archives/page/2/index.html","031dc3d1215b9dd242f8b8c80f6fc20d"],["D:/hexo/public/archives/page/3/index.html","00154109d7f29060a198b8dc0c596299"],["D:/hexo/public/archives/page/4/index.html","86102519282f7cc093886fcc15bc2f52"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","966a70f98a201075ef17ed35dbbef6d4"],["D:/hexo/public/categories/index.html","1f161d8b63e885c97a2fdc0fb3373b72"],["D:/hexo/public/categories/写作/index.html","a86a1d5d726613167866332494475281"],["D:/hexo/public/categories/学习笔记/index.html","8cf8037168eedc7f2d2f4a4108802f10"],["D:/hexo/public/categories/感悟/index.html","b97f27e058c94d8717e36a323f3b080c"],["D:/hexo/public/categories/感想/index.html","d83a66a3f9a149f51b617e33f2d8893e"],["D:/hexo/public/categories/感想/page/2/index.html","5025da399c6b7ea813a3581fe4d21cad"],["D:/hexo/public/categories/数学/index.html","7f9b44ea6b962b68b454c7132c42a214"],["D:/hexo/public/categories/文章收藏/index.html","478fb8441e3a6670aa4398ca79715cf9"],["D:/hexo/public/categories/旅行/index.html","6adc1633358b1f83d97821b5de42c8fc"],["D:/hexo/public/categories/日记/index.html","57b1b8b1b835d25bfa804a93c46c09d1"],["D:/hexo/public/categories/机器学习/index.html","47b207395fadae3c9e24e5014417a9e0"],["D:/hexo/public/categories/诗歌收藏/index.html","301de8108e0afd68e495b1c5b961f4ee"],["D:/hexo/public/categories/读书笔记/index.html","c3a33bfbf9134acdaa885f5d741ffe3c"],["D:/hexo/public/categories/读书笔记/page/2/index.html","2d21fa8f5c610c4941e73753d49d9799"],["D:/hexo/public/comment/index.html","31ed0ac309c3514301a37402692543bc"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","db013d6b8666d3e1012e9e573f139d8b"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","9673ff24acc11108e807a909619ccbc9"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","fbcf930b72052aa2823c88402ab1ea8b"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","988d4fa3176b34fb2beb41f325382faf"],["D:/hexo/public/music/index.html","6b53cf3fc93ef6de34861e3d5f00d20c"],["D:/hexo/public/page/2/index.html","e11925b3d8f155b7c4a50d698b476813"],["D:/hexo/public/page/3/index.html","763a6d5da4545626922aa650f0b28849"],["D:/hexo/public/page/4/index.html","a47cdf664a4ef3f144447698817a1327"],["D:/hexo/public/tags/KNN/index.html","f27417a4ff849e707ebb9de5c068076a"],["D:/hexo/public/tags/git/index.html","4bb374483f0ae7df73f1dcaa1cda53f9"],["D:/hexo/public/tags/index.html","f3a23b3d2f38323f42780f4b5f4384bb"],["D:/hexo/public/tags/余华/index.html","53ca14f63068887a04726cab3733fecf"],["D:/hexo/public/tags/北京/index.html","c8c10889240a6dbaa0545231007b9010"],["D:/hexo/public/tags/博尔赫斯/index.html","c90151572122466d533c262357370728"],["D:/hexo/public/tags/回忆/index.html","1f004d22c6532e48e7bd0755590a8ba7"],["D:/hexo/public/tags/孙绍振/index.html","d5ab18b9907bbe9185d9c2b4893d61ec"],["D:/hexo/public/tags/川端康成/index.html","1b98c6741cbb907bca33ceaa9f4e03ea"],["D:/hexo/public/tags/巴金/index.html","1e7748dcdd1da1c279a5672adc862102"],["D:/hexo/public/tags/建站-hexo/index.html","17ad53509e7e8b589ae34a7f5b266aa8"],["D:/hexo/public/tags/总结/index.html","f1f1badd38289d4086801c6117b3c6d7"],["D:/hexo/public/tags/感悟/index.html","4c5e8a6a0fd7d61a9acce941822b332b"],["D:/hexo/public/tags/感想/index.html","13312778a88bb88908e0a88b712a6ee7"],["D:/hexo/public/tags/敦煌/index.html","c204876d0924d8382d6f6ce4697a3995"],["D:/hexo/public/tags/文学/index.html","d0ca89fa2fbde467b2bb750a4cfac1da"],["D:/hexo/public/tags/时空/index.html","77e75df9353b618d5d8bd669b7273afb"],["D:/hexo/public/tags/林轩田/index.html","52a414e23030fd61b48ebbb67a6d97fb"],["D:/hexo/public/tags/生活/index.html","21f05531bdcf6138517fd63f2ced44be"],["D:/hexo/public/tags/线代/index.html","71abc3d10f66f2c10099254e0ca557be"],["D:/hexo/public/tags/考研/index.html","61996b7b5c0fb9a1ff809b09f6b5b4f6"],["D:/hexo/public/tags/聂鲁达/index.html","339b982096546753bd4b6d3cc91db2cc"],["D:/hexo/public/tags/西湖大学/index.html","62f16d528714839d874cc605bea119ec"],["D:/hexo/public/tags/诗歌/index.html","a076c93922c3a691dc2997e143b70b0b"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","ca241eaf03c8469ad6003c22265dfc28"],["D:/hexo/public/tags/读书/index.html","e5401e10d61278630e26b7ab64873c32"],["D:/hexo/public/tags/钟文/index.html","fb8cd58bfb4aa23770893c0ce3a03a55"],["D:/hexo/public/tags/阎连科/index.html","f65c5b6fc15dcc5dcc5ac2e8ffc3a087"],["D:/hexo/public/tags/随想/index.html","14cd86861b8771f77754bca9a000ef52"],["D:/hexo/public/tags/青岛/index.html","2f63af612f0588292cb8ec67685639b6"],["D:/hexo/public/tags/马尔克斯/index.html","97f67bfbef6013d3c8487c496ab9b18b"]];
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







