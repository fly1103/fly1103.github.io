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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","f93b86a9fd0e58c6eb56209777199297"],["D:/hexo/public/2019/09/18/百年孤独/index.html","d456c4e60e95253ccb001c53fd23867a"],["D:/hexo/public/2019/09/18/鼠疫/index.html","5e7ce0d0479dcca18a50df8ba897ccb9"],["D:/hexo/public/2019/12/20/cloud/index.html","7f26136135614648e41a4ee3a2a56cbb"],["D:/hexo/public/2019/12/21/knn/index.html","7982985d26c68ff52f780df26c050092"],["D:/hexo/public/2019/12/23/finish/index.html","6301309998745b2639b95031d23dda7d"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","ef605e7b309acf6ae3eb787ccc3d47c4"],["D:/hexo/public/2020/02/28/Linear/index.html","1cae66588e9b0e95b86a40b8f7e41138"],["D:/hexo/public/2020/03/21/time/index.html","d267757cf68890667fd3732da2545bfc"],["D:/hexo/public/2020/05/23/1984/index.html","b8f07a9da93fb73495230a8b1502c2d4"],["D:/hexo/public/2020/06/09/git笔记/index.html","fc2dd729e3c25e5460a9df9d6e951467"],["D:/hexo/public/2020/07/29/sheep/index.html","6c7d1012e146d01f6f2670e949cb51ba"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","cd540b61252c48e2192927e7cc27fb3e"],["D:/hexo/public/2020/08/09/Haruki/index.html","9b75a3e82cfb82103ccf70474c92100d"],["D:/hexo/public/2020/09/13/summarize/index.html","e84770533e3fe7aa461f09fed737f7ab"],["D:/hexo/public/2020/10/19/Thorn/index.html","f7e9ec82f9afb7ec0be17a6255f473b5"],["D:/hexo/public/2020/10/28/huiyi/index.html","59cb7c23176798a27cc28eb9a323e555"],["D:/hexo/public/2020/11/26/一点感悟/index.html","137385f334c5a235960cd7f7e7f9e37e"],["D:/hexo/public/2021/01/02/crime/index.html","afda47b409eac593ee17d65757066460"],["D:/hexo/public/2021/03/08/mother/index.html","99f53eca0232a465d43024597e34f782"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","436b9dbc83c4ba55f039e7722668b454"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","a0a0489231be3072844590de93cdde98"],["D:/hexo/public/2021/03/31/Cholera/index.html","f9fe6d6fd52907881baf7f45554f86c3"],["D:/hexo/public/2021/03/31/镜中/index.html","ac24aee51a85d72f865aff0de961a492"],["D:/hexo/public/2021/04/03/最后的对话/index.html","ce93f37c23bbc127afd10bb040002170"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","e2a58d9ccaaa2c092855b13b8456a2b8"],["D:/hexo/public/2021/04/06/雪国/index.html","20bfab5a4c7def99c7445c232c370163"],["D:/hexo/public/2021/04/09/骂观众/index.html","9c4c73244d877791542f5a6448563fbd"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","26f0bf8918e190030f1c020cb2bc59a0"],["D:/hexo/public/2021/04/21/家/index.html","167e8fdae0e35e6629cb908e2f4fc712"],["D:/hexo/public/2021/04/24/光与岸/index.html","6da71d26391914c4d0e746bb9495f6ba"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","7809e38f454cec6a4d64de534737037c"],["D:/hexo/public/2021/05/03/五月伊始/index.html","bbb4db7ee458e4df05ae12abb3858d92"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","70378a2421f8c48d07ef946e7e761ffc"],["D:/hexo/public/2021/05/31/迎接六月/index.html","6e518dde890082030a574fbfd6980916"],["D:/hexo/public/2021/07/07/七月/index.html","67135b7701227167d715e957144043cd"],["D:/hexo/public/2023/05/16/dunhuang/index.html","ab9a0bfc784bbfe1c8e93308b1f0fd54"],["D:/hexo/public/2023/07/29/yeqi/index.html","40cc7b8cd65d2064620c18997d88af1f"],["D:/hexo/public/about/index.html","6b9b89160dc18829d589fa7023704e4c"],["D:/hexo/public/archives/2019/09/index.html","28ffc738253bb3fa38d5c2740f7b4e96"],["D:/hexo/public/archives/2019/12/index.html","5949d394f5ce5a6c811860d91cd94c28"],["D:/hexo/public/archives/2019/index.html","d31266a32a9ce46bb19d611a8576d198"],["D:/hexo/public/archives/2020/02/index.html","0ce6fd35082ac27698d3d74dd8c702cd"],["D:/hexo/public/archives/2020/03/index.html","6afef81e7fa4e73b82f07618e5a6eb96"],["D:/hexo/public/archives/2020/05/index.html","71871358568dd52cd6827f316d921cae"],["D:/hexo/public/archives/2020/06/index.html","3948a3c9ee9d343941469af59ee762bc"],["D:/hexo/public/archives/2020/07/index.html","e90e94b203e53f2dd4eb37c88ae828ec"],["D:/hexo/public/archives/2020/08/index.html","3fb3b2e832ceaf7f16afc7eab112fa62"],["D:/hexo/public/archives/2020/09/index.html","d92f6b1fdb4503221e44108385d664a0"],["D:/hexo/public/archives/2020/10/index.html","d2955fac3fe963afc23b689830187f01"],["D:/hexo/public/archives/2020/11/index.html","cb8eff3862584a327de88f774b8c2dbc"],["D:/hexo/public/archives/2020/index.html","8a61d28df6e8184fcb7f7f80ff7910c2"],["D:/hexo/public/archives/2020/page/2/index.html","02e3ec6f2daa4c3b80a003140ee5ae83"],["D:/hexo/public/archives/2021/01/index.html","f0336990d00dffa76e96559b9d2736c8"],["D:/hexo/public/archives/2021/03/index.html","33d80d884523640082cb3ca7cc4949f4"],["D:/hexo/public/archives/2021/04/index.html","76f19880c604e6346d9720528bb64f6e"],["D:/hexo/public/archives/2021/05/index.html","d4be1bb780f800242fc5c31df886807a"],["D:/hexo/public/archives/2021/07/index.html","a8d3bf8626e984707c9c85f47984061f"],["D:/hexo/public/archives/2021/index.html","faa679a0d4631263bf6e9a9ae65ec9a9"],["D:/hexo/public/archives/2021/page/2/index.html","4427698dc278a2cd9934a560f6f4654c"],["D:/hexo/public/archives/2023/05/index.html","bcd7bde59e64b732776ea785c0ce8eaa"],["D:/hexo/public/archives/2023/07/index.html","74b871bb5d20f9c5daaa261a12d4a64d"],["D:/hexo/public/archives/2023/index.html","28d1f60739c90c8425a123f927dda42e"],["D:/hexo/public/archives/index.html","0aee8ac38a0ab6b5e4a572aadd79cef0"],["D:/hexo/public/archives/page/2/index.html","28c4fd4237b9e43a62f78c7d0c34bddb"],["D:/hexo/public/archives/page/3/index.html","62cb8ca07b58346af51f7f90907518a3"],["D:/hexo/public/archives/page/4/index.html","17963f131e862e6ec90c6eb2c3fba3f9"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","1252e8a737134649819deb9782bc9c68"],["D:/hexo/public/categories/index.html","10f8dc1fe46bd788abdf94213c577272"],["D:/hexo/public/categories/写作/index.html","5f7aa6d46760e9172387f956db881f30"],["D:/hexo/public/categories/学习笔记/index.html","a95b1dc49d64cb90324277f846933654"],["D:/hexo/public/categories/感悟/index.html","d6320eb4a0082f6bedd89f17b0f2a696"],["D:/hexo/public/categories/感想/index.html","8a93b9afdb24439ba81f1a5c2d38487e"],["D:/hexo/public/categories/数学/index.html","7aa1a3d05aa51ba94e7459578a4ef903"],["D:/hexo/public/categories/文章收藏/index.html","bef5e0f99baa78edbf399a715d3e0428"],["D:/hexo/public/categories/旅行/index.html","a0020000084ca58d1af79f59290a9271"],["D:/hexo/public/categories/日记/index.html","8038290dc4aa97797515f1ec2df862db"],["D:/hexo/public/categories/机器学习/index.html","42ff64592a8b62ffdb39b4c7ccf1bca7"],["D:/hexo/public/categories/诗歌收藏/index.html","665290207777717d5e53ea6b78c28b94"],["D:/hexo/public/categories/读书笔记/index.html","632bf179d5d9777b1fe22b085eb8ae8c"],["D:/hexo/public/categories/读书笔记/page/2/index.html","ff27c98cb42a0378918112127f2704bd"],["D:/hexo/public/comment/index.html","1249f5d035ae0712d24524ea5e049136"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","7355f66bb0b52d7181c88831a301881d"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","d2f9e558c469ca186a82a9726af37cdb"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","62fe26dd2f245815cdf274703f51c6a9"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","19eb8d32c63daf0da85c578d27aa6b19"],["D:/hexo/public/music/index.html","b57ead402c465c86e0d8188b6ba42053"],["D:/hexo/public/page/2/index.html","8929f4d901e48e0c6e739277876389b1"],["D:/hexo/public/page/3/index.html","29be0c6b7f9cf026f558a28fd9b61731"],["D:/hexo/public/page/4/index.html","e744545612a2ae168e4be4d0a1d2c5f9"],["D:/hexo/public/tags/KNN/index.html","ce19833411749a4a988438d0abfc615f"],["D:/hexo/public/tags/git/index.html","c6bbfb994f2f455cf01b4e2de00bdbff"],["D:/hexo/public/tags/index.html","64b729c2321b57af11f0ba526c87ac16"],["D:/hexo/public/tags/余华/index.html","c4437f4b608c7d867b8c222db63307d2"],["D:/hexo/public/tags/北京/index.html","18f3fcc73e944666c1826d847f49190e"],["D:/hexo/public/tags/博尔赫斯/index.html","6438c538aa76d1c8a1b0c03080f58ce0"],["D:/hexo/public/tags/回忆/index.html","fc8369560a9071483fcc5fc103590e3c"],["D:/hexo/public/tags/孙绍振/index.html","5879b43fca7e31011c31401135aed220"],["D:/hexo/public/tags/川端康成/index.html","4003a7eb0f7987a58140841b5c30f5be"],["D:/hexo/public/tags/巴金/index.html","56d2792c221441dcd02bf3656c740d5e"],["D:/hexo/public/tags/建站-hexo/index.html","c0bc6418192d84df27a8cfd3a64a9331"],["D:/hexo/public/tags/总结/index.html","a36535757553389aa44779cffc5b032c"],["D:/hexo/public/tags/感悟/index.html","f3237ac26a6720dc8e6b0440d8f0b12c"],["D:/hexo/public/tags/感想/index.html","06860868f3de243a7a011bf5913ab93a"],["D:/hexo/public/tags/敦煌/index.html","b1d5c1f25b87e34a65de9315094d0d36"],["D:/hexo/public/tags/文学/index.html","f1ed068b70e0044d9de7d46edfaa7fcd"],["D:/hexo/public/tags/时空/index.html","8e358beb196f8908c019d5f7dbb89b81"],["D:/hexo/public/tags/林轩田/index.html","49dc524e7ea52104557011568d369c44"],["D:/hexo/public/tags/线代/index.html","1413304470031cca0224e360f1efcfe4"],["D:/hexo/public/tags/考研/index.html","de1d61bab8b5b4417e8d0ac5b84b9b2e"],["D:/hexo/public/tags/聂鲁达/index.html","1eb28f0fc9211279cc9cb5d6f942aae5"],["D:/hexo/public/tags/西湖大学/index.html","decdb8e5a3480db86ddd1272f0708fa9"],["D:/hexo/public/tags/诗歌/index.html","cd124975f2d17124b5c415581261e547"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","a2d334b4c4f2c8bc56e476c829f6be7b"],["D:/hexo/public/tags/读书/index.html","2c2b24fc842b83d61270650eca9c387e"],["D:/hexo/public/tags/钟文/index.html","a6b719c99f46a48ee2e4f002ee330601"],["D:/hexo/public/tags/阎连科/index.html","c1cd0d28d05c4846f7a7d925668a2dd5"],["D:/hexo/public/tags/随想/index.html","71f47fe4b93456a9596ec35fa2b74245"],["D:/hexo/public/tags/马尔克斯/index.html","a9428fff2e21629ea9c874203af0bf4b"]];
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







