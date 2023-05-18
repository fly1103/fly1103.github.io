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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","31a39315e4f31b9266bddf4079bcae11"],["D:/hexo/public/2019/09/18/百年孤独/index.html","29eecb2453905b5f25b9052bfddd652f"],["D:/hexo/public/2019/09/18/鼠疫/index.html","fb0a144312a8a59f84e0952a41985082"],["D:/hexo/public/2019/12/20/cloud/index.html","ca4edc0bdcce2505496898e5c6b8ca14"],["D:/hexo/public/2019/12/21/knn/index.html","edc589776afbae1a45e77d6a4a3245a6"],["D:/hexo/public/2019/12/23/finish/index.html","559d5d5181a5967777e7f647a1e28f3f"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","63f43b445e8fbbdc9d13f70fe122ae85"],["D:/hexo/public/2020/02/28/Linear/index.html","e80363321748df3f557f1270b1aeb811"],["D:/hexo/public/2020/03/21/time/index.html","aade469b0d9c6015c8aaa7f9097557bc"],["D:/hexo/public/2020/05/23/1984/index.html","fd5d31a607195b377c34c719aab1bb86"],["D:/hexo/public/2020/06/09/git笔记/index.html","9c70310998aa62b8ece4015e9dffd3d0"],["D:/hexo/public/2020/07/29/sheep/index.html","45798f56ef36f395d761b1a0b6fd75f8"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","8c1fcb1457cbcf5a95e81d058618765c"],["D:/hexo/public/2020/08/09/Haruki/index.html","68b4a73c2df680c4437dccd5eedd829d"],["D:/hexo/public/2020/09/13/summarize/index.html","54b61ed851c2bc3d2f097a309b479832"],["D:/hexo/public/2020/10/19/Thorn/index.html","6d1b2af99f53bcf23beaf6da76997aa0"],["D:/hexo/public/2020/10/28/huiyi/index.html","cb5e372d152708a6c9eea016321f51b6"],["D:/hexo/public/2020/11/26/一点感悟/index.html","f259452a719145885087857de3ec5697"],["D:/hexo/public/2021/01/02/crime/index.html","001c8fb80e2a3e437dec7a6e4edd3f19"],["D:/hexo/public/2021/03/08/mother/index.html","a72ff8d80a9708c76069c9184deca7aa"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","71a617876dce2e6ee45f6995e7c6d163"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","9e78fe6a87938fc692fa2d4d8ad654c7"],["D:/hexo/public/2021/03/31/Cholera/index.html","cd46a284c51fb393e7ebae1577d1d7a9"],["D:/hexo/public/2021/03/31/镜中/index.html","21b2dcd5e1c083e95554c0b86b961832"],["D:/hexo/public/2021/04/03/最后的对话/index.html","b58f2fa7116173e436206d476f03a841"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","a029ae18f369511a7da0dcbea9228023"],["D:/hexo/public/2021/04/06/雪国/index.html","aa3a7fd94b944bd2a24a918a40588512"],["D:/hexo/public/2021/04/09/骂观众/index.html","6b0f1edc3e7d1c9a2f35825bea5d89f5"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","ecf752408f0f09cbf79106698b371909"],["D:/hexo/public/2021/04/21/家/index.html","85794cc18a2e5d9e662116b8b37c5c76"],["D:/hexo/public/2021/04/24/光与岸/index.html","208da7fe77d6a02250f5cb601f424644"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","2fb4faadf659c6d9580f1fb1c985fb40"],["D:/hexo/public/2021/05/03/五月伊始/index.html","eaebfbfa43b086f1bf017b507db652e2"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","3acc57d8f568c22addee883c727d235c"],["D:/hexo/public/2021/05/31/迎接六月/index.html","6b833e8e096561f046c83319b0aa2b77"],["D:/hexo/public/2021/07/07/七月/index.html","09b3fbcc9e45875fe5218907cb45b808"],["D:/hexo/public/2023/05/18/dunhuang/index.html","dccd818bcf4209d2e1824b4dac760a29"],["D:/hexo/public/2023/05/18/tupian/index.html","f16df08b6bc47edfe81fcd6a269f21d8"],["D:/hexo/public/2023/05/18/tupian/路上1.jpg","89471b6746b755e5ff1f8991fbe3ab84"],["D:/hexo/public/2023/05/18/tupian/路上3.jpg","5f6815cd6cf7b1bedae3146967696808"],["D:/hexo/public/about/index.html","ea9514fba7168a6c77d70635ae7815cf"],["D:/hexo/public/archives/2019/09/index.html","6a7e161d63febd9195e7db893a082b5c"],["D:/hexo/public/archives/2019/12/index.html","f4815c6affb7491445e76b00907a9c8c"],["D:/hexo/public/archives/2019/index.html","d571bf6927553077e6527130a956012d"],["D:/hexo/public/archives/2020/02/index.html","ce3e4d47083b6d98d7e06860ff7e2d18"],["D:/hexo/public/archives/2020/03/index.html","25589f0266a82b2d4cc5c6921645008f"],["D:/hexo/public/archives/2020/05/index.html","6f75e4669167690a33d2114329d45114"],["D:/hexo/public/archives/2020/06/index.html","db0d706d9a0ac499e0f48d6334bc868f"],["D:/hexo/public/archives/2020/07/index.html","84245c2ad2fe554c3ad07ca24cf69656"],["D:/hexo/public/archives/2020/08/index.html","adffb3d9adc1d130717205653534f70c"],["D:/hexo/public/archives/2020/09/index.html","cc1cb1d49b80251f93ba81354e2717fc"],["D:/hexo/public/archives/2020/10/index.html","b808e8700fe91c54c1b721c4837ca3b1"],["D:/hexo/public/archives/2020/11/index.html","1af12f63be4082bc84e81cf6e9b68999"],["D:/hexo/public/archives/2020/index.html","b9288245023190bf2688afc35cb331d8"],["D:/hexo/public/archives/2020/page/2/index.html","83fcbc0544b41cab1cf7015004b67bd2"],["D:/hexo/public/archives/2021/01/index.html","7da84d922a065421110dbac06bc88a44"],["D:/hexo/public/archives/2021/03/index.html","b6f80dee7dd64454970dd8290bf891f8"],["D:/hexo/public/archives/2021/04/index.html","236aee4e7f2f448ba987fe1acfd0d59f"],["D:/hexo/public/archives/2021/05/index.html","3206bc9c84b987357ac46aaa63d4fe4e"],["D:/hexo/public/archives/2021/07/index.html","78f04f45b104a58bcef15857aaa11635"],["D:/hexo/public/archives/2021/index.html","9cf5710b17b412e55cc541a2d5d25a5a"],["D:/hexo/public/archives/2021/page/2/index.html","c83087e677ce1407988a74e40055ee58"],["D:/hexo/public/archives/2023/05/index.html","3ec1263a3dec917a5b2629385c9d8c50"],["D:/hexo/public/archives/2023/index.html","e4d10da7aea80de2f2d1359727d1289a"],["D:/hexo/public/archives/index.html","6ba815ce00a4f562734cdaa1708da43a"],["D:/hexo/public/archives/page/2/index.html","e24c04bbec7f25972b4e209688c7a008"],["D:/hexo/public/archives/page/3/index.html","6e559ec5bf4ef48a5c3e074db9b3a54c"],["D:/hexo/public/archives/page/4/index.html","5faa33a1c224e3f811bbdaad3d42ea07"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","8d00ce1b5d8e3cd9984fd73a83d47cda"],["D:/hexo/public/categories/index.html","d92779ad21295432e1eb90bf0b0f615f"],["D:/hexo/public/categories/写作/index.html","36dbfc9adf1a1e550e3e6591c800b330"],["D:/hexo/public/categories/学习笔记/index.html","0f747a2806457ceb51195f631dc323f8"],["D:/hexo/public/categories/感悟/index.html","d3dfcb91c258d1967b2327ed0d661472"],["D:/hexo/public/categories/感想/index.html","0f9152c5b2ade3801bd86bea5d09f848"],["D:/hexo/public/categories/数学/index.html","b8571046d628b90335adcb40876e794d"],["D:/hexo/public/categories/文章收藏/index.html","5a3f438958e3dfb564efd7ad8c231b88"],["D:/hexo/public/categories/日记/index.html","4eb0b90eaae9425ab6d92c35d303f7f4"],["D:/hexo/public/categories/机器学习/index.html","5036cb70246d06ec48f7e3c798890521"],["D:/hexo/public/categories/诗歌收藏/index.html","37247e80e7cf2cd1701d0610ccb8f613"],["D:/hexo/public/categories/读书笔记/index.html","8a696be9ac81f772d36d1572bbf11529"],["D:/hexo/public/categories/读书笔记/page/2/index.html","3e6b0dd61f5eb2d9419372cf9578cca4"],["D:/hexo/public/comment/index.html","ef70e8fbd87ccd4c9a94243c43cd2655"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","cc86ea1c532b9a21e312454367705f5d"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","72b3c1d4db7578e95dfb8cd15e2afd80"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","10cbb2c2d3d8140cabcf8fe52add2230"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","ce5361e1a6df15ae9cb9b31cdd8aa533"],["D:/hexo/public/music/index.html","ea24f3d04a7ceed524d2e3b42e6ea00e"],["D:/hexo/public/page/2/index.html","3e3396661bcc6e80c8c01e901a870c04"],["D:/hexo/public/page/3/index.html","417ba87106d3e02adeb3c6f95c5b7144"],["D:/hexo/public/page/4/index.html","eca7858bc89b9af04525b64a93c299e5"],["D:/hexo/public/tags/KNN/index.html","f3e569c6f0b9cb9515923ad75598549e"],["D:/hexo/public/tags/git/index.html","d8da2f645e147fc8b0caaf6bfcb89e3b"],["D:/hexo/public/tags/index.html","53d5927ee073a4d39ed565bb18c12484"],["D:/hexo/public/tags/余华/index.html","43e3d16d4680c41f0301ad322397f5c0"],["D:/hexo/public/tags/博尔赫斯/index.html","21bb7f3d65be903be2873303c3df4a60"],["D:/hexo/public/tags/回忆/index.html","c1bcfafb11d06ead649352a371ea7b73"],["D:/hexo/public/tags/孙绍振/index.html","de6f3a77ae5ed322b1d425f82e0ce8ad"],["D:/hexo/public/tags/川端康成/index.html","6fd3f0233cb64dad6c862f13eb747698"],["D:/hexo/public/tags/巴金/index.html","43076a9d35c6fafe77868e693580da97"],["D:/hexo/public/tags/建站-hexo/index.html","96a141ae351fe27bac50cd36ba4d03b1"],["D:/hexo/public/tags/总结/index.html","66e2ee5a343773b7045187489ae73cb1"],["D:/hexo/public/tags/感悟/index.html","c53e54092a40d76e54ed31eba0189557"],["D:/hexo/public/tags/感想/index.html","240940cd4748b51c53e62b6f5c0652af"],["D:/hexo/public/tags/文学/index.html","fdaac234f291d037604b57a95394b84d"],["D:/hexo/public/tags/时空/index.html","727fc713fa12658cf6525f58ffea1608"],["D:/hexo/public/tags/林轩田/index.html","482e91b23b3c88981852099877472607"],["D:/hexo/public/tags/线代/index.html","dcc0f47693a6a67185eda97cca10c7a9"],["D:/hexo/public/tags/考研/index.html","28b97a78793b81b2333863d7d4cbdd6d"],["D:/hexo/public/tags/聂鲁达/index.html","6d88a05836c5065e55e466aeed11f3ba"],["D:/hexo/public/tags/西湖大学/index.html","2a38ed108b4218abb1a799810a6cdf39"],["D:/hexo/public/tags/诗歌/index.html","a2035453a66a312ead053daea08b01e9"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","3aba489b87f2c27f2be1f53d4165df87"],["D:/hexo/public/tags/读书/index.html","365057d25305a9a419cdf4ff181668f1"],["D:/hexo/public/tags/钟文/index.html","3ecb264517a7ae384d348c1029738709"],["D:/hexo/public/tags/阎连科/index.html","824a7bbc283cc0a2f0047363e0ac00cb"],["D:/hexo/public/tags/随想/index.html","4f7e4e557bac4134b200566e95f90378"],["D:/hexo/public/tags/马尔克斯/index.html","c81076d67ded7a57d97b360deddae91b"]];
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







