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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","cf32dc60fbd3f2056a783b0de5e0adf1"],["D:/hexo/public/2019/09/18/百年孤独/index.html","2ba0c3f0764219d36039d4d165ebbdaf"],["D:/hexo/public/2019/09/18/鼠疫/index.html","d41ba17ed9d9896a2923f792897730b1"],["D:/hexo/public/2019/12/20/cloud/index.html","c68b31a0c433a2a8e56ee1551e1a0443"],["D:/hexo/public/2019/12/21/knn/index.html","d082231f07eb9097c3a944fcf1b0db51"],["D:/hexo/public/2019/12/23/finish/index.html","5705838bff8dc9d4beaa5794e23d7bfa"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","20fdc4ebc016387550a0b5fff70f37df"],["D:/hexo/public/2020/02/28/Linear/index.html","34455c974d87cace8cedf1c5a35ea003"],["D:/hexo/public/2020/03/21/time/index.html","d20ffa362f706014e4cf57d68d463159"],["D:/hexo/public/2020/05/23/1984/index.html","77f1505c192154af9004d008e8a740d1"],["D:/hexo/public/2020/06/09/git笔记/index.html","e330b5d783f509f27828c0bcc2878380"],["D:/hexo/public/2020/07/29/sheep/index.html","6ae4c00e10b582ec7a83fe7707f649f5"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","5bfc2c2b51c2444186058a9593c946f9"],["D:/hexo/public/2020/08/09/Haruki/index.html","ab1a92457e61aa4864eedcdc20b5635b"],["D:/hexo/public/2020/09/13/summarize/index.html","e63d5a487544c1086d6ce4c4b9f4bd2d"],["D:/hexo/public/2020/10/19/Thorn/index.html","56e919530f816181c55b1f718c8026a3"],["D:/hexo/public/2020/10/28/huiyi/index.html","088ae25ec5df586d9665dcb041eae2dd"],["D:/hexo/public/2020/11/26/一点感悟/index.html","ec9ff79fc9e2d9a130930f576bb3e968"],["D:/hexo/public/2021/01/02/crime/index.html","a000868079864e20a152984ef23e4176"],["D:/hexo/public/2021/03/08/mother/index.html","5824c95cc383b91ceb7221819b41d9af"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","116a12994373737b132935d6772b02cd"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","15b1ef8688e8e9658272d294175e2283"],["D:/hexo/public/2021/03/31/Cholera/index.html","129f0f3421b10d8948bffc40420b27a0"],["D:/hexo/public/2021/03/31/镜中/index.html","da694d7f4ac97fae74f3fac058b16ecb"],["D:/hexo/public/2021/04/03/最后的对话/index.html","3c51fd7602559c2ce355c50b8d13250a"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","06d766d1cfa5cab63c7aec555468ed7c"],["D:/hexo/public/2021/04/06/雪国/index.html","c5a4028ef72bbd80f0ff192ce3673471"],["D:/hexo/public/2021/04/09/骂观众/index.html","a7b368293570aa70a6f967a29c21f10c"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","4ebc9a7ac96b9c7ef84f1bc2487289e4"],["D:/hexo/public/2021/04/21/家/index.html","25622c19d86923a2691b0b6ba758792e"],["D:/hexo/public/2021/04/24/光与岸/index.html","8324c59d319993fb609c8e66751301c4"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","42d4db7e896548bea92639e681d8a02b"],["D:/hexo/public/2021/05/03/五月伊始/index.html","c51f0e1bdd35c8049b4e9ea4472d987c"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","92e6ccebaf0eec0cfd31e1e164d4b15f"],["D:/hexo/public/2021/05/31/迎接六月/index.html","040aaa1747403f7c44a4cbf714783af2"],["D:/hexo/public/2021/07/07/七月/index.html","a6bfc872cc6c19ea946cade23539a79e"],["D:/hexo/public/2023/05/18/dunhuang/index.html","1c989b9ea260bfeb0c937fc20e66801a"],["D:/hexo/public/about/index.html","cbfba516afd115de96ad3d068c2c3988"],["D:/hexo/public/archives/2019/09/index.html","ff556731bdb0af6593d1cc15c06300ae"],["D:/hexo/public/archives/2019/12/index.html","c1dae65cb5d3d0e7b826590d07b6725e"],["D:/hexo/public/archives/2019/index.html","9e8f9bad677f8fee857c4d5bd9a18c11"],["D:/hexo/public/archives/2020/02/index.html","a44f757c9938fa1c9be918577e71f6c1"],["D:/hexo/public/archives/2020/03/index.html","a82d219f5b8646c7fe4985bb61170ee1"],["D:/hexo/public/archives/2020/05/index.html","2f050b70b275dc0da4bf3c02d8f62ae6"],["D:/hexo/public/archives/2020/06/index.html","2f2a6f05c6f650315151f8baefe46fa5"],["D:/hexo/public/archives/2020/07/index.html","3e9550507eba18a41a09f9cd76967ada"],["D:/hexo/public/archives/2020/08/index.html","bfc862b9fbbf3781f54b1eaf1a19b2b9"],["D:/hexo/public/archives/2020/09/index.html","2af4f4b75426f3092c07b7d552a1902b"],["D:/hexo/public/archives/2020/10/index.html","dd433c93013255c956d5c73985c5342b"],["D:/hexo/public/archives/2020/11/index.html","3bdfe722fe628b21591e1e133af19eb4"],["D:/hexo/public/archives/2020/index.html","c2bd46998009cd8e28398c0ee86ca62e"],["D:/hexo/public/archives/2020/page/2/index.html","7448603883d0796e26a00512b1e48813"],["D:/hexo/public/archives/2021/01/index.html","1f1f73605d94a7eeff8d93a7149a9697"],["D:/hexo/public/archives/2021/03/index.html","56ae6437f727232e1318ce68ff8986ab"],["D:/hexo/public/archives/2021/04/index.html","8a281ad0f2ecd6a6b4614028eb858508"],["D:/hexo/public/archives/2021/05/index.html","664728192d9eb32039a29e8a4efbc8e2"],["D:/hexo/public/archives/2021/07/index.html","c2646498e6d62c7c5f08cb14f4db52cc"],["D:/hexo/public/archives/2021/index.html","6a27936c042f3a437021f70fecf88053"],["D:/hexo/public/archives/2021/page/2/index.html","272bcb86cef363887d314a370e211778"],["D:/hexo/public/archives/2023/05/index.html","b0511da96a290aca181cf14469e33f18"],["D:/hexo/public/archives/2023/index.html","54f13f0e91e8a78f59ee1f147bde4078"],["D:/hexo/public/archives/index.html","063a6116d8a183e946ab9369f9994b2e"],["D:/hexo/public/archives/page/2/index.html","ace8f4febb9a001670bedc1cb21d25fb"],["D:/hexo/public/archives/page/3/index.html","a13c951956acd82c790d2b09936f685a"],["D:/hexo/public/archives/page/4/index.html","576fc0acd11ef6e60466ec32ccfc903c"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","d66d403d307f89969df786afe2c5ab7a"],["D:/hexo/public/categories/index.html","233f0a71e3c79fe823c1c01655bdc0a6"],["D:/hexo/public/categories/写作/index.html","d14da23f82615599e841022ed0f70051"],["D:/hexo/public/categories/学习笔记/index.html","176ee4d7620cde2df30e2dac53b40579"],["D:/hexo/public/categories/感悟/index.html","941d6162125e5851c1f067f5ac5af5f9"],["D:/hexo/public/categories/感想/index.html","f86592374116f8c9543e26455fc198fb"],["D:/hexo/public/categories/数学/index.html","b667275e1bd34be91e27be657ba6fd7f"],["D:/hexo/public/categories/文章收藏/index.html","dc9a98afd81039f629602d64ec06e065"],["D:/hexo/public/categories/日记/index.html","8a2e70885f1930aaa06f4cb7f9088d0e"],["D:/hexo/public/categories/机器学习/index.html","bc5be73ea76b2141dc77167e0c815fdb"],["D:/hexo/public/categories/诗歌收藏/index.html","c13feda03e006b59ba4475b80a3445a4"],["D:/hexo/public/categories/读书笔记/index.html","1f84c337184f45d71038042b71c0ab54"],["D:/hexo/public/categories/读书笔记/page/2/index.html","635d4b7d0a1ac6048c02b045ee35ca5a"],["D:/hexo/public/comment/index.html","471f2678e7321721db86b0e4ba163809"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","d73df9c01a27c546de0daf268e7c9122"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","8ec2ed13322b40a419fefe7437600c3b"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","8ff06cffeeea36476a2feaa439de7089"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","17b1dd44ae2f0954e15f12b3781082f0"],["D:/hexo/public/music/index.html","b5c5efc9baf8f12c9f57755d2ba21180"],["D:/hexo/public/page/2/index.html","cf0bdb4dff0a0b9ad4b9d3f3ff82bfd8"],["D:/hexo/public/page/3/index.html","f39dce2c0b02a35a17c1d8699737377a"],["D:/hexo/public/page/4/index.html","94668aff2e54b4a40a7edbad26a8b37b"],["D:/hexo/public/tags/KNN/index.html","0a00ca48d800b72088e7a080d620359d"],["D:/hexo/public/tags/git/index.html","1c0f29cd5753c3656d348168270e0321"],["D:/hexo/public/tags/index.html","ab1bc6da410a8b6d03d212f1e7c93a4f"],["D:/hexo/public/tags/余华/index.html","26a3a69d4db42fb8af691cf948d6a2c7"],["D:/hexo/public/tags/博尔赫斯/index.html","d90840a3184127e83504bd43ce541d63"],["D:/hexo/public/tags/回忆/index.html","da6b696b0a1b1b3c4e09562739c237ed"],["D:/hexo/public/tags/孙绍振/index.html","041b177292d6bf93fb64b498480fd438"],["D:/hexo/public/tags/川端康成/index.html","fd9303628fd727848d7a3831613dbd97"],["D:/hexo/public/tags/巴金/index.html","262a50cac70cb6a3b3a039c06e749a6b"],["D:/hexo/public/tags/建站-hexo/index.html","a096a22782be0767186a9d7741f0a82e"],["D:/hexo/public/tags/总结/index.html","44ab75092fc6d316fff7b063b123b8b6"],["D:/hexo/public/tags/感悟/index.html","5fc01b6ea68f78363bb86aabc5cd8743"],["D:/hexo/public/tags/感想/index.html","950b7711694bcdd0c8882d012abe6661"],["D:/hexo/public/tags/文学/index.html","e12aa0b4cfdace12ebfb3d9ffeb79172"],["D:/hexo/public/tags/时空/index.html","d3e416ca082dd84e1c785b2b1717702d"],["D:/hexo/public/tags/林轩田/index.html","9141ae96ec9e6609b1c14fce42bdedd4"],["D:/hexo/public/tags/线代/index.html","85f2744b1b16317ecbf539b38901b096"],["D:/hexo/public/tags/考研/index.html","c8c68a3bbf9017f7ea1cc9165df9daee"],["D:/hexo/public/tags/聂鲁达/index.html","0efa5f87b4b13fbcae4a6d5c2d1151c7"],["D:/hexo/public/tags/西湖大学/index.html","bbd9bba11dd27c5c5b92186d41d92016"],["D:/hexo/public/tags/诗歌/index.html","fdabfd8e2b50c034353afc3fe11b15ae"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","880bcd9bcdd6171420d102a394e04c5d"],["D:/hexo/public/tags/读书/index.html","5345a786d28385526b30853f16ca54c8"],["D:/hexo/public/tags/钟文/index.html","31d3e9f1150919e54a84ee4322392de2"],["D:/hexo/public/tags/阎连科/index.html","fc7e94c8453e45749b913d249ad41e19"],["D:/hexo/public/tags/随想/index.html","4543a67ad9bee90d2de3d553c7c95561"],["D:/hexo/public/tags/马尔克斯/index.html","723d9b19ec5c3e08299f044a54aa20e4"]];
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







