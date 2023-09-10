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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","23dd0493dbce4cf72f6c23aa6fd904b2"],["D:/hexo/public/2019/09/18/百年孤独/index.html","7a31fb4e6982f637069c739aeb78d6d0"],["D:/hexo/public/2019/09/18/鼠疫/index.html","c95cbc0b4d17f32a48165a239b68cbf1"],["D:/hexo/public/2019/12/20/cloud/index.html","9d59e7e3324a6967599cbe2411cda5aa"],["D:/hexo/public/2019/12/21/knn/index.html","77260a62a2cb9c5c07ddea365eed8d8e"],["D:/hexo/public/2019/12/23/finish/index.html","656e447d504815cbf93b9f07a1c395fe"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","de6a508d5cb066ed8fe5b1d6afa3c9d1"],["D:/hexo/public/2020/02/28/Linear/index.html","fc7570def65f124132746a9b6a05e10a"],["D:/hexo/public/2020/03/21/time/index.html","3504b828e556731fd685a311be3c60b1"],["D:/hexo/public/2020/05/23/1984/index.html","3f6b24c4f5e4d7678e7473ad65ed897d"],["D:/hexo/public/2020/06/09/git笔记/index.html","b3fd488b0f9d045479bcbc10d9d7b44a"],["D:/hexo/public/2020/07/29/sheep/index.html","c396fb83e056ef94bd79f6dd0b421ee6"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","ecf6a880a7c8b6db82677988e2b97e75"],["D:/hexo/public/2020/08/09/Haruki/index.html","a10d34ea89f7ed6e8ec8c95a59ce3cef"],["D:/hexo/public/2020/09/13/summarize/index.html","6ca9d9438b3b7e9d9a256566604c571f"],["D:/hexo/public/2020/10/19/Thorn/index.html","d2528a53491825246e32f9ce1bff5e44"],["D:/hexo/public/2020/10/28/huiyi/index.html","3f62a208b13d8c87b37b70f634944856"],["D:/hexo/public/2020/11/26/一点感悟/index.html","a88c8f23725fa6b3976408d5ce34aa0e"],["D:/hexo/public/2021/01/02/crime/index.html","f483b7f0e13b889d76d45edc45c5038f"],["D:/hexo/public/2021/03/08/mother/index.html","272916d40da50739a098e86c577463bc"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","949ca43459a1fe315b9ac8027d67aa67"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","86143d9d3e78087d0a99292824c5087e"],["D:/hexo/public/2021/03/31/Cholera/index.html","bdf036b3055a2efdff8138f6eaa4324f"],["D:/hexo/public/2021/03/31/镜中/index.html","f1c2cbf0d69c6632d697f86f3daf7f3d"],["D:/hexo/public/2021/04/03/最后的对话/index.html","74d292caa8c2620a1a1498ee258ce9e5"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","fb06c2f8349287784d410fbd4e1bb74e"],["D:/hexo/public/2021/04/06/雪国/index.html","5ab0c169eeff978f8fe9948833a51414"],["D:/hexo/public/2021/04/09/骂观众/index.html","00fdefbf5ece3992769dcea57ac1f9b1"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","34c33f861a980ace61f0fa76b03c2ab6"],["D:/hexo/public/2021/04/21/家/index.html","52a7d1fe8b1347f38ee7646a916a792c"],["D:/hexo/public/2021/04/24/光与岸/index.html","1d6267b8ba31ca961fbc99d4c845f0cf"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","885a4fcd0f961627bbc5cc96f6560797"],["D:/hexo/public/2021/05/03/五月伊始/index.html","128951b40ccdb0c49458d948fc62303e"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","5a76eee68df270f860111869d5571cec"],["D:/hexo/public/2021/05/31/迎接六月/index.html","1a68b0256364bf196c83c63e72ce8c75"],["D:/hexo/public/2021/07/07/七月/index.html","b95081a79b6eefef4f57450177e53703"],["D:/hexo/public/2023/05/16/dunhuang/index.html","d5c1c719febbb79df9e63e4447b56c44"],["D:/hexo/public/2023/07/29/yeqi/index.html","10f17513ba24ae86bd2720ec5efc690e"],["D:/hexo/public/2023/09/10/life/index.html","d9919ab64259fd0fc0652439fed1c10b"],["D:/hexo/public/about/index.html","8af8df5238e94270fe49b0f330c0e0e3"],["D:/hexo/public/archives/2019/09/index.html","1d4978c483780c09cb03a6eabd159cee"],["D:/hexo/public/archives/2019/12/index.html","262c9910c29c7f58692075d8ab67e156"],["D:/hexo/public/archives/2019/index.html","d1d681c33e95bc82dab1c7913779bf78"],["D:/hexo/public/archives/2020/02/index.html","b166e1b0f111c8820d7415a9f3f04ba8"],["D:/hexo/public/archives/2020/03/index.html","5b99bb24dd5713a42fc1fcda9a8f92cd"],["D:/hexo/public/archives/2020/05/index.html","73986d9dc89a7820518a6b3614c41bb0"],["D:/hexo/public/archives/2020/06/index.html","ca5422eedfa4c72263ea8b457f6df461"],["D:/hexo/public/archives/2020/07/index.html","6fe04026460b457139bc525444ab990a"],["D:/hexo/public/archives/2020/08/index.html","a1df6ec6104c0e228921cdde19bfa78f"],["D:/hexo/public/archives/2020/09/index.html","7e1738b8d42e38f32f25f3093de42f0c"],["D:/hexo/public/archives/2020/10/index.html","5dcf3c53ca320e64c91c40b3766a364d"],["D:/hexo/public/archives/2020/11/index.html","075802f0ed3c347163001feee2fd2ce8"],["D:/hexo/public/archives/2020/index.html","71745f9ee73b0309b4d6d6738a1a9086"],["D:/hexo/public/archives/2020/page/2/index.html","bf3300a769342cdf9e396245244968d9"],["D:/hexo/public/archives/2021/01/index.html","5356d2a8de089ba2540291920f5f2d33"],["D:/hexo/public/archives/2021/03/index.html","9bf9699460c5ec40d3d1c6276c33a86c"],["D:/hexo/public/archives/2021/04/index.html","a730808a7ac41bedeb48ac562b080c28"],["D:/hexo/public/archives/2021/05/index.html","1fc3b284850eeb03574835305055882a"],["D:/hexo/public/archives/2021/07/index.html","0d4a9869e7f8bee83bff72f152a6b01a"],["D:/hexo/public/archives/2021/index.html","19212028063cc0b16677c5b9cc7cbb4f"],["D:/hexo/public/archives/2021/page/2/index.html","2d5b5682339cf879f7568fcf9716f5f6"],["D:/hexo/public/archives/2023/05/index.html","e59d4d9ba39229528aa8fd61c2681095"],["D:/hexo/public/archives/2023/07/index.html","f065f98ec386cf340f6a5224c4c92507"],["D:/hexo/public/archives/2023/09/index.html","1ba0b0a3f7b024e17bfa881bc2dbe996"],["D:/hexo/public/archives/2023/index.html","2edfad267feffdfb1843dc6985f6ec44"],["D:/hexo/public/archives/index.html","04295fc6fc5f75c279b8b4ee3eb0f1ed"],["D:/hexo/public/archives/page/2/index.html","6b4acc859878e94a01c218cce6ec9c48"],["D:/hexo/public/archives/page/3/index.html","37de6abebb2c70518cde71951d28d428"],["D:/hexo/public/archives/page/4/index.html","6af7088254181e5ac23b827a24db9a59"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","4310959671bf247160764384b1a1e296"],["D:/hexo/public/categories/index.html","e78979ec6fc8da7d3ada57b080950325"],["D:/hexo/public/categories/写作/index.html","fc703395b5a3a5c42a4adb0e0cd116cb"],["D:/hexo/public/categories/学习笔记/index.html","50aed9107779fab0c9401692a7d89e4b"],["D:/hexo/public/categories/感悟/index.html","3a78dc8bd2e682bba0931df8468c5501"],["D:/hexo/public/categories/感想/index.html","d8812d1fdb730c93a575a6c6bb8fcaaf"],["D:/hexo/public/categories/数学/index.html","c942502da1813488cfe8e6985ba1d29d"],["D:/hexo/public/categories/文章收藏/index.html","114a0cb9cec9c1da2bb0503bde5fc039"],["D:/hexo/public/categories/旅行/index.html","bef410b30e52ede70a12377408d885c4"],["D:/hexo/public/categories/日记/index.html","9b4894496f2d6be6e7c62ed8326e0895"],["D:/hexo/public/categories/机器学习/index.html","d78c4ee972ad0ffd9d1f15025650a070"],["D:/hexo/public/categories/诗歌收藏/index.html","cea3cf08e6ad0e4d42213ff95c7a3e23"],["D:/hexo/public/categories/读书笔记/index.html","94181a8662f1ac12ae1fa24d00931607"],["D:/hexo/public/categories/读书笔记/page/2/index.html","6293aa579c17e0c76f30b97b19edbbbe"],["D:/hexo/public/comment/index.html","c42aa221eef4a15a663a1fe7450de02a"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","248cff5d42de0407cbb48243c787f55b"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","0af78f9b94fd9768483bc8d2f8853865"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","0a2af40bbd259e6434a0b3e2ad18f028"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","fb1eaba01009d4481a3d0d603b24e81f"],["D:/hexo/public/music/index.html","9e9aa49f5ff97fe7afafbc69efde301d"],["D:/hexo/public/page/2/index.html","e91b18b2181a3dfddd98db0fa00c851b"],["D:/hexo/public/page/3/index.html","b3c72346de12c65ece1ed4645d2c31d6"],["D:/hexo/public/page/4/index.html","aafb7c2d5c95651ed3869f9b607f428d"],["D:/hexo/public/tags/KNN/index.html","cffb0dfd696d493fba4195a679e8890e"],["D:/hexo/public/tags/git/index.html","72435d87ae3e348a25b99e3c7cbe9493"],["D:/hexo/public/tags/index.html","30defe236e9cc33e35c461106689c512"],["D:/hexo/public/tags/余华/index.html","b042fe787ba6faa48da51b8d15368a83"],["D:/hexo/public/tags/北京/index.html","f0ea5a61409a0e605a1ccec88899e009"],["D:/hexo/public/tags/博尔赫斯/index.html","ede42c170baece5e914784897b5a23ce"],["D:/hexo/public/tags/回忆/index.html","5e4c1f49d785bd72ef40b0e29be14219"],["D:/hexo/public/tags/孙绍振/index.html","9273333c9a0412726acf25cc7b128e24"],["D:/hexo/public/tags/川端康成/index.html","f4084991caec6ffeee9d5e127693fd3f"],["D:/hexo/public/tags/巴金/index.html","81dc6c51403d1ed4cabc73bd5bacdd83"],["D:/hexo/public/tags/建站-hexo/index.html","b2e6b2d438a8caf7edb12bb4698d6fd4"],["D:/hexo/public/tags/总结/index.html","e20dae8662602e3ed24937a2078aec08"],["D:/hexo/public/tags/感悟/index.html","0fab657c9b3203a10b2eba24e5a90274"],["D:/hexo/public/tags/感想/index.html","7d9d8db0042338b134b8ace8a4fcb0ae"],["D:/hexo/public/tags/敦煌/index.html","bd4b3d4756a4f6f4ef27babb05fd8d71"],["D:/hexo/public/tags/文学/index.html","68e527597d61276443b3db98523e98c0"],["D:/hexo/public/tags/时空/index.html","f067e410dfadb154cc9ce32697fcd09c"],["D:/hexo/public/tags/林轩田/index.html","620385d2cfcf431b1543cc296cdcd27d"],["D:/hexo/public/tags/生活/index.html","34c6dbfeb7194b2ec93eb6fde1345171"],["D:/hexo/public/tags/线代/index.html","04a969ca401b5b645ac09bf892b8ce9d"],["D:/hexo/public/tags/考研/index.html","79f8ea6f4d4e2905b81026e0f835880f"],["D:/hexo/public/tags/聂鲁达/index.html","4fdaf669e346a6529d42a39bf50e2543"],["D:/hexo/public/tags/西湖大学/index.html","bff89d82456cfd42465cb2c857a2b32a"],["D:/hexo/public/tags/诗歌/index.html","7babec5bbc3dc695127ef14ecc62f449"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","9f91f81969ddd96f09efafea828b7e49"],["D:/hexo/public/tags/读书/index.html","91b6e4c2c8e3dac6d17ec44072d5b5b5"],["D:/hexo/public/tags/钟文/index.html","47e755aff2067c3ecff1710b58122858"],["D:/hexo/public/tags/阎连科/index.html","51154c35021f86a6d193330e021d305d"],["D:/hexo/public/tags/随想/index.html","dd9296f0007778746b499d17d5d619b7"],["D:/hexo/public/tags/马尔克斯/index.html","bcce83b0cea8a1720e4e3673e18c37dd"]];
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







