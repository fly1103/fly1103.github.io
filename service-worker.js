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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","3e3495ae4db460e9d2e56c8beaf6db06"],["D:/hexo/public/2019/09/18/百年孤独/index.html","a015ddfc10d9c1292941fc9c732d08bd"],["D:/hexo/public/2019/09/18/鼠疫/index.html","80b4b10b3fdff58023d1cc476b6170a9"],["D:/hexo/public/2019/12/20/cloud/index.html","b0a9b06a02388c0dd8cc045806fdb941"],["D:/hexo/public/2019/12/21/knn/index.html","65c59ffc8ec317b482f9b7465ca004f0"],["D:/hexo/public/2019/12/23/finish/index.html","cbbc33a97aef527919dd5085e46d4c08"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","9ae6f3c07dd8bddeb92e0066ad2dc6fe"],["D:/hexo/public/2020/02/28/Linear/index.html","d758d89caac937d4c96e89c5cf9b576b"],["D:/hexo/public/2020/03/21/time/index.html","1d0474fb33c3ea6737bb7ad5c7f4cfad"],["D:/hexo/public/2020/05/23/1984/index.html","c35d7ce08c570ace0e5646f554c66f73"],["D:/hexo/public/2020/06/09/git笔记/index.html","c97f929689c994e173a27dffb947c623"],["D:/hexo/public/2020/07/29/sheep/index.html","a3460ab4846b08e4290872e630822e96"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","9e2424fb3498a08de773618b71e54a43"],["D:/hexo/public/2020/08/09/Haruki/index.html","d491913525438a0f06024ab9d2fc00d9"],["D:/hexo/public/2020/09/13/summarize/index.html","d3e8c75b12359da2c86daca9efb78a0d"],["D:/hexo/public/2020/10/19/Thorn/index.html","c2662c78bf0681d69cf5770aba528211"],["D:/hexo/public/2020/10/28/huiyi/index.html","e7afbd2ae3581b3bab43b83a97a29de1"],["D:/hexo/public/2020/11/26/一点感悟/index.html","5f08e0dffa284aa660d7742a5ad0ea4a"],["D:/hexo/public/2021/01/02/crime/index.html","5e21b92a55367193ea7e4d53c39ea053"],["D:/hexo/public/2021/03/08/mother/index.html","90ad0cca86665dca2d5a047f9f019a26"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","b2dc0b1a9e4290663b9fda43367ebbe7"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","cfe828affe2b9479988549500f781823"],["D:/hexo/public/2021/03/31/Cholera/index.html","a174b734971aac948d9f2c67aefeb6e7"],["D:/hexo/public/2021/03/31/镜中/index.html","f13a2ccfdaabdc27c6696705f29ebd20"],["D:/hexo/public/2021/04/03/最后的对话/index.html","e7cbb0ddf155461f19ed3e9c50d9b358"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9f3e87cec9c4b9b0a6ede07a05a59be0"],["D:/hexo/public/2021/04/06/雪国/index.html","ff00d2fbda80ec7dbe9d5acc16cca618"],["D:/hexo/public/2021/04/09/骂观众/index.html","1ab4ea8f9f5004dff115a4e60418ded5"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","9b718ddbdb0f955cbd89cce7a8b7616c"],["D:/hexo/public/2021/04/21/家/index.html","10489f8def31bdfde6e7a4c0454c9650"],["D:/hexo/public/2021/04/24/光与岸/index.html","632907ba496a3137f1e3cbe75cf2789f"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","571935738946e27aa406a4935218a561"],["D:/hexo/public/2021/05/03/五月伊始/index.html","6626ac46a9df69445b046f9a6771f016"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c7207ed701ac8260fdf9f6d792b1e224"],["D:/hexo/public/2021/05/31/迎接六月/index.html","4e110ed101d77e08e39c574da06532ad"],["D:/hexo/public/2021/07/07/七月/index.html","5aee1d1af0f45c4b586a89acca811f35"],["D:/hexo/public/2023/05/16/dunhuang/index.html","5788d04b07bad367963f0d7982ab171c"],["D:/hexo/public/2023/07/29/yeqi/index.html","cc4a1efb8c454185120f5a3126e052f0"],["D:/hexo/public/2023/09/10/life/index.html","8b02db3cde014c3371ff57f6d4437846"],["D:/hexo/public/2023/10/15/关于青岛一点回忆/index.html","067636a72ba8408e9286561d361c78e8"],["D:/hexo/public/about/index.html","6acc772ae93ab0e5d16944ac22630bad"],["D:/hexo/public/archives/2019/09/index.html","7f2fec9955a112cf1b0d1686b294ad8b"],["D:/hexo/public/archives/2019/12/index.html","ca392cbc24a603193f62a2abf20d480b"],["D:/hexo/public/archives/2019/index.html","eb51a0cf0a9d7b9feae3099625f91bb5"],["D:/hexo/public/archives/2020/02/index.html","78d60ad1ddcccc839088356af8fc41c6"],["D:/hexo/public/archives/2020/03/index.html","5e26d8a8701bc4556e77d0bd84cfe32c"],["D:/hexo/public/archives/2020/05/index.html","e599a4defe0754a815229ef74c4d8364"],["D:/hexo/public/archives/2020/06/index.html","53b9e20a205b6694ee86ad1e42d0f26e"],["D:/hexo/public/archives/2020/07/index.html","9cc29451c58ef1d3871d9adcd4d21736"],["D:/hexo/public/archives/2020/08/index.html","05678bda1e3dde584083f6d4a4daa89f"],["D:/hexo/public/archives/2020/09/index.html","805d6c53a863a96b6b54ff2b391f916c"],["D:/hexo/public/archives/2020/10/index.html","42712733d6619b6f8473cbfd9cbbcdbf"],["D:/hexo/public/archives/2020/11/index.html","5c30c4d2d9fcaefba58f471a21dd173d"],["D:/hexo/public/archives/2020/index.html","ad6a71123f6254df9b73ab796be599a1"],["D:/hexo/public/archives/2020/page/2/index.html","81de7e371627cf9361af9b7130b4db8d"],["D:/hexo/public/archives/2021/01/index.html","6a19e088aafed0a7a19f9acfcf028818"],["D:/hexo/public/archives/2021/03/index.html","de7475df7df9930bdd800184aa3092d8"],["D:/hexo/public/archives/2021/04/index.html","1c1ee074572e30a68b8237337a8c2c9a"],["D:/hexo/public/archives/2021/05/index.html","2974089396c3c515afa150951e9d6e65"],["D:/hexo/public/archives/2021/07/index.html","a59f764e54d7b9518bf2f3e19d5f3732"],["D:/hexo/public/archives/2021/index.html","73427364475f42ed44886f1ab8ba531d"],["D:/hexo/public/archives/2021/page/2/index.html","5bb3b0924160a12b7464a8a7e14adf22"],["D:/hexo/public/archives/2023/05/index.html","610fb2a71ca93f730e627352b78ede1b"],["D:/hexo/public/archives/2023/07/index.html","a83c2cb41b8e3a06857ed41169ab5083"],["D:/hexo/public/archives/2023/09/index.html","deffa541dd1356c433d3795d6383f898"],["D:/hexo/public/archives/2023/10/index.html","7674d6be1acee459236de34691aa123b"],["D:/hexo/public/archives/2023/index.html","01417a5daf1d58ca9d81b998144983c6"],["D:/hexo/public/archives/index.html","8fc70f4fe54b094349b174a62f280092"],["D:/hexo/public/archives/page/2/index.html","9c109d819ba052b66596890b4e20ce71"],["D:/hexo/public/archives/page/3/index.html","df1908dcfc98111171b6a8139419d488"],["D:/hexo/public/archives/page/4/index.html","53ce4f9749740b9c1425b5d839967119"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","4c933c871068c1a1e02ac497dba5f852"],["D:/hexo/public/categories/index.html","0af7c6696c3e8a7e21360af6c497b9f2"],["D:/hexo/public/categories/写作/index.html","237df9aab63e527e595ce815e57c9b2a"],["D:/hexo/public/categories/学习笔记/index.html","4295c755dd9a1a36c16f6a77a605ffc2"],["D:/hexo/public/categories/感悟/index.html","148ee909427ba116b872d0fc5c02f7b0"],["D:/hexo/public/categories/感想/index.html","2f213970af2a803a1ff1e919bf39f945"],["D:/hexo/public/categories/感想/page/2/index.html","66ae94a8a18d8ca181d176ca348039fa"],["D:/hexo/public/categories/数学/index.html","1e812034a052f13585a960332ae464dd"],["D:/hexo/public/categories/文章收藏/index.html","59808bc5a68b1d18c5a72b7ae13a1a32"],["D:/hexo/public/categories/旅行/index.html","0f49972ec4107f0e3f2c8e8b7420c9a0"],["D:/hexo/public/categories/日记/index.html","cf426d7ae381c67bfc8c683e86325602"],["D:/hexo/public/categories/机器学习/index.html","31f5d6b4a690b1710d0081f612c80375"],["D:/hexo/public/categories/诗歌收藏/index.html","96fb7b05e19225f21961b4ebee872989"],["D:/hexo/public/categories/读书笔记/index.html","e3e736fd5e3790bf2c245b0e9bf99e6f"],["D:/hexo/public/categories/读书笔记/page/2/index.html","eacabe346f6c45505c1f6202c339b67a"],["D:/hexo/public/comment/index.html","fed425485f3101e50be6669dc0e9ed31"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","22e7ff76a1751532b5286b07e2051d94"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","29986c90fcc7912ef6d04dd85a4d97f0"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","d2091b9be0c9c34b6dfb67b56585d7f5"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","d6fb4c79fe0ac30a92a7ccd3d2090ce5"],["D:/hexo/public/music/index.html","d84d360150761c2b05f9c414c69584fb"],["D:/hexo/public/page/2/index.html","777d0d1de65ea2891b18153e4238ff90"],["D:/hexo/public/page/3/index.html","cbb4a6869800caaea97265d27febc9e5"],["D:/hexo/public/page/4/index.html","a37134f6ec0a71ceb11a3b65c8ab21e3"],["D:/hexo/public/tags/KNN/index.html","11d65e48f75015f1680e51e545921b32"],["D:/hexo/public/tags/git/index.html","98449e183240b436dc36dca9264aff9a"],["D:/hexo/public/tags/index.html","7d96f0e60185c8a3fe56bdddd7e264c9"],["D:/hexo/public/tags/余华/index.html","914f358cbe1bb04448e66b4a7f4905ba"],["D:/hexo/public/tags/北京/index.html","7674cf448703bac5f8be5349817b1835"],["D:/hexo/public/tags/博尔赫斯/index.html","e08ceaaed4299289cad347ee24464f46"],["D:/hexo/public/tags/回忆/index.html","f867f82777dcfccedcbbd1c93713fd75"],["D:/hexo/public/tags/孙绍振/index.html","c68fbfec79523fc0e4b800e54487838b"],["D:/hexo/public/tags/川端康成/index.html","f6996aafc1037a4bd95b8adf18bb7de1"],["D:/hexo/public/tags/巴金/index.html","caa28c8d3cc80bbc9c79e68798887e8e"],["D:/hexo/public/tags/建站-hexo/index.html","512f80e6f1f51223a832600531345a05"],["D:/hexo/public/tags/总结/index.html","a32aceb2783df73880d4ba693ea3e834"],["D:/hexo/public/tags/感悟/index.html","7360e64313acbab1955fa8d033812ca2"],["D:/hexo/public/tags/感想/index.html","597ae39061edcbd407653163736ecfb9"],["D:/hexo/public/tags/敦煌/index.html","c25ef0123ba325a8e5e959ee97ac808a"],["D:/hexo/public/tags/文学/index.html","2f9ef3a377beabf557265d4c0e8ffa33"],["D:/hexo/public/tags/时空/index.html","4e3e99a503d87f39a53f18fcbb9993f5"],["D:/hexo/public/tags/林轩田/index.html","0faa6b310cb49f22714a281689fae95b"],["D:/hexo/public/tags/生活/index.html","b03db03c422acc95a892010aafb247e4"],["D:/hexo/public/tags/线代/index.html","bfdcc6b5599c4860f91be72fbbf374d6"],["D:/hexo/public/tags/考研/index.html","dedd560a1b48f55b0bb18f6f981a36b2"],["D:/hexo/public/tags/聂鲁达/index.html","07fc66aa2a8bafb342226790a03f7b9f"],["D:/hexo/public/tags/西湖大学/index.html","6567a028e1f38ddb36a6c5146d59c9a4"],["D:/hexo/public/tags/诗歌/index.html","b15052532e7795fa546c86443720ca1d"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","ad099f6d0057fea6cb2fb902471c59e3"],["D:/hexo/public/tags/读书/index.html","8d387aee78179b22cf01438cd756b30a"],["D:/hexo/public/tags/钟文/index.html","4950a3a604827b24a65a85d57f4803ba"],["D:/hexo/public/tags/阎连科/index.html","0fc94c6bb1cf115c43e8f6daa6e70c82"],["D:/hexo/public/tags/随想/index.html","1ede61616807f8c88cfc1dc200f0c19b"],["D:/hexo/public/tags/青岛/index.html","7756fc3beb7defd515521d14d9f8fda6"],["D:/hexo/public/tags/马尔克斯/index.html","e5d38012411df30938130315240a3041"]];
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







