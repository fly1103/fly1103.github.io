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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","3e3495ae4db460e9d2e56c8beaf6db06"],["D:/hexo/public/2019/09/18/百年孤独/index.html","a015ddfc10d9c1292941fc9c732d08bd"],["D:/hexo/public/2019/09/18/鼠疫/index.html","80b4b10b3fdff58023d1cc476b6170a9"],["D:/hexo/public/2019/12/20/cloud/index.html","b0a9b06a02388c0dd8cc045806fdb941"],["D:/hexo/public/2019/12/21/knn/index.html","65c59ffc8ec317b482f9b7465ca004f0"],["D:/hexo/public/2019/12/23/finish/index.html","cbbc33a97aef527919dd5085e46d4c08"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","9ae6f3c07dd8bddeb92e0066ad2dc6fe"],["D:/hexo/public/2020/02/28/Linear/index.html","d758d89caac937d4c96e89c5cf9b576b"],["D:/hexo/public/2020/03/21/time/index.html","1d0474fb33c3ea6737bb7ad5c7f4cfad"],["D:/hexo/public/2020/05/23/1984/index.html","c35d7ce08c570ace0e5646f554c66f73"],["D:/hexo/public/2020/06/09/git笔记/index.html","c97f929689c994e173a27dffb947c623"],["D:/hexo/public/2020/07/29/sheep/index.html","a3460ab4846b08e4290872e630822e96"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","9e2424fb3498a08de773618b71e54a43"],["D:/hexo/public/2020/08/09/Haruki/index.html","61f750fa6dbab35d30d73552f2aa10fa"],["D:/hexo/public/2020/09/13/summarize/index.html","ae713cc58fceaf577c990756424c573f"],["D:/hexo/public/2020/10/19/Thorn/index.html","86fd82882762809f27e1528e23b9fdc7"],["D:/hexo/public/2020/10/28/huiyi/index.html","e7afbd2ae3581b3bab43b83a97a29de1"],["D:/hexo/public/2020/11/26/一点感悟/index.html","5f08e0dffa284aa660d7742a5ad0ea4a"],["D:/hexo/public/2021/01/02/crime/index.html","5e21b92a55367193ea7e4d53c39ea053"],["D:/hexo/public/2021/03/08/mother/index.html","90ad0cca86665dca2d5a047f9f019a26"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","b2dc0b1a9e4290663b9fda43367ebbe7"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","cfe828affe2b9479988549500f781823"],["D:/hexo/public/2021/03/31/Cholera/index.html","a174b734971aac948d9f2c67aefeb6e7"],["D:/hexo/public/2021/03/31/镜中/index.html","f13a2ccfdaabdc27c6696705f29ebd20"],["D:/hexo/public/2021/04/03/最后的对话/index.html","e7cbb0ddf155461f19ed3e9c50d9b358"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9f3e87cec9c4b9b0a6ede07a05a59be0"],["D:/hexo/public/2021/04/06/雪国/index.html","ff00d2fbda80ec7dbe9d5acc16cca618"],["D:/hexo/public/2021/04/09/骂观众/index.html","1ab4ea8f9f5004dff115a4e60418ded5"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","9b718ddbdb0f955cbd89cce7a8b7616c"],["D:/hexo/public/2021/04/21/家/index.html","10489f8def31bdfde6e7a4c0454c9650"],["D:/hexo/public/2021/04/24/光与岸/index.html","632907ba496a3137f1e3cbe75cf2789f"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","e86ae499d266059e1b5bb4d1e0c14f4f"],["D:/hexo/public/2021/05/03/五月伊始/index.html","6626ac46a9df69445b046f9a6771f016"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c7207ed701ac8260fdf9f6d792b1e224"],["D:/hexo/public/2021/05/31/迎接六月/index.html","4e110ed101d77e08e39c574da06532ad"],["D:/hexo/public/2021/07/07/七月/index.html","5aee1d1af0f45c4b586a89acca811f35"],["D:/hexo/public/2023/05/16/dunhuang/index.html","8bc89d9f1ff992b37e4ccdff3f1e3f69"],["D:/hexo/public/2023/07/29/yeqi/index.html","0e732b3869f91c2dd7427532d1509a54"],["D:/hexo/public/2023/09/10/life/index.html","a65d0ac51c378168f65c38a8ca76da1e"],["D:/hexo/public/2023/10/15/关于青岛一点回忆/index.html","42e6bc1c990b61be12e5ad95b7666b83"],["D:/hexo/public/about/index.html","e71556447f60fefbdc90b2f6c0a24c04"],["D:/hexo/public/archives/2019/09/index.html","f9cbc6bd09dfd61eb7a4ea5e39afd1a6"],["D:/hexo/public/archives/2019/12/index.html","b142cfe28568b9f5f2511c3db83a7a04"],["D:/hexo/public/archives/2019/index.html","26f446d247843ac67777da3aaf9c1182"],["D:/hexo/public/archives/2020/02/index.html","f5fd1d139a23c287e0b4c0576fa24aaf"],["D:/hexo/public/archives/2020/03/index.html","1fee9625391088cbdb485e9de87e98d3"],["D:/hexo/public/archives/2020/05/index.html","0a88fa49691836e7227bffb645cbee65"],["D:/hexo/public/archives/2020/06/index.html","fc2137d705ccb6051ae4d3dfc13e8a43"],["D:/hexo/public/archives/2020/07/index.html","09252093430c1a6ef152d080ba7373f1"],["D:/hexo/public/archives/2020/08/index.html","2369b25aea619406fda8acc205118e17"],["D:/hexo/public/archives/2020/09/index.html","ad31da74be7b6edf508c52ebfcb272c5"],["D:/hexo/public/archives/2020/10/index.html","73766393de1b2eb1e4e70f5337e6a6fe"],["D:/hexo/public/archives/2020/11/index.html","5ced196638eb57ed111ec929056230cf"],["D:/hexo/public/archives/2020/index.html","87a8cd4d29de7242cb95a9866e09b8c5"],["D:/hexo/public/archives/2020/page/2/index.html","5980676185b93bf0104230aed9784ac1"],["D:/hexo/public/archives/2021/01/index.html","224c26963dec658e1d5c85198335b712"],["D:/hexo/public/archives/2021/03/index.html","cd08920be6e4f7214facb4d9166520c0"],["D:/hexo/public/archives/2021/04/index.html","42afc21e735c66833af01a7e106a2482"],["D:/hexo/public/archives/2021/05/index.html","81b645dee03fdd566bf68bae8413d91f"],["D:/hexo/public/archives/2021/07/index.html","dbbd27a67a89caf68d0ec456bc2b2ae2"],["D:/hexo/public/archives/2021/index.html","f64f916309ceb7cd5f6134c008c52545"],["D:/hexo/public/archives/2021/page/2/index.html","c64079e5442d2e218d7f850e716943e5"],["D:/hexo/public/archives/2023/05/index.html","1b7d2ce7c3e58841092b7d2ad8968445"],["D:/hexo/public/archives/2023/07/index.html","dfddd47b450cddf77ab513b1b9ca971e"],["D:/hexo/public/archives/2023/09/index.html","5a4da69a1a1f7de1b564106935cc8820"],["D:/hexo/public/archives/2023/10/index.html","9e9cfb4eeb9150da9154bd6ac6e29896"],["D:/hexo/public/archives/2023/index.html","689ad00d81135afead38a9bb0e083e0d"],["D:/hexo/public/archives/index.html","424e9d6f05e14d890ad8d72a9001a288"],["D:/hexo/public/archives/page/2/index.html","65bc25822f7f816c92bb637e8036b978"],["D:/hexo/public/archives/page/3/index.html","d6c35a0b0a8ab854775ccd8c607b2c11"],["D:/hexo/public/archives/page/4/index.html","f0be3aa6d108594405056cbdc2231ef1"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","171a6f6815bd8791f762724218e9ccdd"],["D:/hexo/public/categories/index.html","64f170bcc265089e9025ad90ebb5424c"],["D:/hexo/public/categories/写作/index.html","80f26a5950a0c31235dfd113a59aea29"],["D:/hexo/public/categories/学习笔记/index.html","868deb11e62c73b7eefde07dea6c3d6f"],["D:/hexo/public/categories/感悟/index.html","11e42afc2cd991f255b4f071b17c47c6"],["D:/hexo/public/categories/感想/index.html","b19d8ed975375d51d421c44b7481d695"],["D:/hexo/public/categories/感想/page/2/index.html","2eada100336a964647a7262182f58872"],["D:/hexo/public/categories/数学/index.html","d89e2fe9528fcecccefef6e672f5d4ad"],["D:/hexo/public/categories/文章收藏/index.html","c8678e8f7f546c71ca3b804de074190d"],["D:/hexo/public/categories/旅行/index.html","1c1bee23098d50416e2c8feaf4a0107e"],["D:/hexo/public/categories/日记/index.html","695ef285b8fcc5f60f18e5a10adaa5d1"],["D:/hexo/public/categories/机器学习/index.html","cffdaac13e261423d431662fae4f03a4"],["D:/hexo/public/categories/诗歌收藏/index.html","19ad0c411099917e7fcc9439fd7f66d5"],["D:/hexo/public/categories/读书笔记/index.html","9411045d1d73c3451e50b97b8e0d6a87"],["D:/hexo/public/categories/读书笔记/page/2/index.html","b54ba659cf2d36e1553ed1c36d70b1eb"],["D:/hexo/public/comment/index.html","dbb4ffb7b4c91648b301c6b826e89df9"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","81d71dbb0d764edaf7ae563fe52e660c"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","75b4b80929712cebc237bbe1f9980edd"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","122837de7c86a4cc82679faa8bbdcb10"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","8baa8c9b6d97bf7de00f9f2b4586c6c8"],["D:/hexo/public/music/index.html","525e6a3653c0affad1bee34d5ea1421d"],["D:/hexo/public/page/2/index.html","217482db4cbecd42e5d06d46b8032362"],["D:/hexo/public/page/3/index.html","190bc1cd31788840241c29ebd482aa74"],["D:/hexo/public/page/4/index.html","9f0fc91f401248159f6b2c7fce4cc363"],["D:/hexo/public/tags/KNN/index.html","60cffb36c9d755eb07fac707a30adbe2"],["D:/hexo/public/tags/git/index.html","dd6ba8f7c304f6b7c0a7ef708c11e9e3"],["D:/hexo/public/tags/index.html","4d008f855f689b6bd9e726c8837135df"],["D:/hexo/public/tags/余华/index.html","46d544c49282160c0267b5bbf884f434"],["D:/hexo/public/tags/北京/index.html","a47e94997355fb93aa2cb3c1be57d4f1"],["D:/hexo/public/tags/博尔赫斯/index.html","78935be84269e2ed855cfec8074515c8"],["D:/hexo/public/tags/回忆/index.html","21915c98789e041161b7fc3c9835a521"],["D:/hexo/public/tags/孙绍振/index.html","62079bf033e390d5bd0a295383cb8bb3"],["D:/hexo/public/tags/川端康成/index.html","540dc5560fddb1e53435b0e5583af1c2"],["D:/hexo/public/tags/巴金/index.html","e14293dc6d04c8531308dbc22a626506"],["D:/hexo/public/tags/建站-hexo/index.html","7c6576bfeaf2d09b0cae383ecfd06b4a"],["D:/hexo/public/tags/总结/index.html","c3088c102341f6fea8fe82e1bd27deb3"],["D:/hexo/public/tags/感悟/index.html","d30ee567e85245906c9e2f068bfe7d4f"],["D:/hexo/public/tags/感想/index.html","bf2a150f34e811ed818828b674f92aeb"],["D:/hexo/public/tags/敦煌/index.html","068163149a38c535e8636ead1c40c4bb"],["D:/hexo/public/tags/文学/index.html","397103ad81769fed25fb283adb7d3d44"],["D:/hexo/public/tags/时空/index.html","b4fc9c0257a6a8ca7d596bd5f092f5d5"],["D:/hexo/public/tags/林轩田/index.html","f057503563fa5be2b5aca37e8f08ccb9"],["D:/hexo/public/tags/生活/index.html","bbe779c598a6d80ea8654c308da33d3e"],["D:/hexo/public/tags/线代/index.html","dde8fbdcb9d7d4db69ba5fbdeb00a765"],["D:/hexo/public/tags/考研/index.html","39cbe9b298d4b643840aed749dcf0a9f"],["D:/hexo/public/tags/聂鲁达/index.html","f077b7203194e510f2dd4de0321eccf2"],["D:/hexo/public/tags/西湖大学/index.html","62096ad17608540325e2eb08ddab0626"],["D:/hexo/public/tags/诗歌/index.html","725b8573ca5d1bedd0302dab8ce4ab03"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","4091e3787c3438d178807c1972948eb5"],["D:/hexo/public/tags/读书/index.html","63d8b0d6e0af550cf87b3e5b6e43fb59"],["D:/hexo/public/tags/钟文/index.html","5ae51d146d5085e89f49604142ad938d"],["D:/hexo/public/tags/阎连科/index.html","a07aa5e147784140477a865e7eedea4c"],["D:/hexo/public/tags/随想/index.html","0a3ff54d7d653bd72af543afd115eb74"],["D:/hexo/public/tags/青岛/index.html","f5ed04f44398cec1d539174c1af4bb64"],["D:/hexo/public/tags/马尔克斯/index.html","71e546a5a513d4996655fda3ae645956"]];
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







