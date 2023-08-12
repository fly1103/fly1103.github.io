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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","f93b86a9fd0e58c6eb56209777199297"],["D:/hexo/public/2019/09/18/百年孤独/index.html","d456c4e60e95253ccb001c53fd23867a"],["D:/hexo/public/2019/09/18/鼠疫/index.html","5e7ce0d0479dcca18a50df8ba897ccb9"],["D:/hexo/public/2019/12/20/cloud/index.html","7f26136135614648e41a4ee3a2a56cbb"],["D:/hexo/public/2019/12/21/knn/index.html","7982985d26c68ff52f780df26c050092"],["D:/hexo/public/2019/12/23/finish/index.html","6301309998745b2639b95031d23dda7d"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","ef605e7b309acf6ae3eb787ccc3d47c4"],["D:/hexo/public/2020/02/28/Linear/index.html","1cae66588e9b0e95b86a40b8f7e41138"],["D:/hexo/public/2020/03/21/time/index.html","d267757cf68890667fd3732da2545bfc"],["D:/hexo/public/2020/05/23/1984/index.html","b8f07a9da93fb73495230a8b1502c2d4"],["D:/hexo/public/2020/06/09/git笔记/index.html","fc2dd729e3c25e5460a9df9d6e951467"],["D:/hexo/public/2020/07/29/sheep/index.html","6c7d1012e146d01f6f2670e949cb51ba"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","cd540b61252c48e2192927e7cc27fb3e"],["D:/hexo/public/2020/08/09/Haruki/index.html","9b75a3e82cfb82103ccf70474c92100d"],["D:/hexo/public/2020/09/13/summarize/index.html","e84770533e3fe7aa461f09fed737f7ab"],["D:/hexo/public/2020/10/19/Thorn/index.html","f7e9ec82f9afb7ec0be17a6255f473b5"],["D:/hexo/public/2020/10/28/huiyi/index.html","59cb7c23176798a27cc28eb9a323e555"],["D:/hexo/public/2020/11/26/一点感悟/index.html","137385f334c5a235960cd7f7e7f9e37e"],["D:/hexo/public/2021/01/02/crime/index.html","afda47b409eac593ee17d65757066460"],["D:/hexo/public/2021/03/08/mother/index.html","99f53eca0232a465d43024597e34f782"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","436b9dbc83c4ba55f039e7722668b454"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","a0a0489231be3072844590de93cdde98"],["D:/hexo/public/2021/03/31/Cholera/index.html","f9fe6d6fd52907881baf7f45554f86c3"],["D:/hexo/public/2021/03/31/镜中/index.html","ac24aee51a85d72f865aff0de961a492"],["D:/hexo/public/2021/04/03/最后的对话/index.html","ce93f37c23bbc127afd10bb040002170"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","e2a58d9ccaaa2c092855b13b8456a2b8"],["D:/hexo/public/2021/04/06/雪国/index.html","20bfab5a4c7def99c7445c232c370163"],["D:/hexo/public/2021/04/09/骂观众/index.html","9c4c73244d877791542f5a6448563fbd"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","26f0bf8918e190030f1c020cb2bc59a0"],["D:/hexo/public/2021/04/21/家/index.html","167e8fdae0e35e6629cb908e2f4fc712"],["D:/hexo/public/2021/04/24/光与岸/index.html","6da71d26391914c4d0e746bb9495f6ba"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","7809e38f454cec6a4d64de534737037c"],["D:/hexo/public/2021/05/03/五月伊始/index.html","bbb4db7ee458e4df05ae12abb3858d92"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","70378a2421f8c48d07ef946e7e761ffc"],["D:/hexo/public/2021/05/31/迎接六月/index.html","6e518dde890082030a574fbfd6980916"],["D:/hexo/public/2021/07/07/七月/index.html","67135b7701227167d715e957144043cd"],["D:/hexo/public/2023/05/16/dunhuang/index.html","cb4e885b732b52afc15e8617af30950c"],["D:/hexo/public/2023/07/29/yeqi/index.html","77d71862db9833a4ac4f2bd368ad4dbe"],["D:/hexo/public/about/index.html","b47fa250bc9eb7e6d170168572fc9a28"],["D:/hexo/public/archives/2019/09/index.html","d9eecf8a9f670e7be01313ccc45f3321"],["D:/hexo/public/archives/2019/12/index.html","4ec8879e14202394627bd81c7f391436"],["D:/hexo/public/archives/2019/index.html","f258dfe4d633803661a77d533aac17c0"],["D:/hexo/public/archives/2020/02/index.html","fb35dd6184c1f18f590d1406856b23dc"],["D:/hexo/public/archives/2020/03/index.html","8a51970f41681b984938e5df9aaf7703"],["D:/hexo/public/archives/2020/05/index.html","27ab1d8ee19f6d4d1f0e81614a742280"],["D:/hexo/public/archives/2020/06/index.html","0b82581eee3f61311c7623d50ad75f55"],["D:/hexo/public/archives/2020/07/index.html","edc2952ffc4006fd371f400120450813"],["D:/hexo/public/archives/2020/08/index.html","262dd3dd3ae0c562792fa19b53ba30a9"],["D:/hexo/public/archives/2020/09/index.html","9be2f2c6dd7aef83c790e2b7944f847a"],["D:/hexo/public/archives/2020/10/index.html","7f57f5b26ec595c9255131311e24ed92"],["D:/hexo/public/archives/2020/11/index.html","1f57862fef39b5fc010d0b217c9c1fb4"],["D:/hexo/public/archives/2020/index.html","40a8f384b1765c9ee3ea8cd047d6d1a7"],["D:/hexo/public/archives/2020/page/2/index.html","c4ace47b6b5b15be48c7f694eec09ad4"],["D:/hexo/public/archives/2021/01/index.html","1c50b6b84d48c2a01bb195177ad1d797"],["D:/hexo/public/archives/2021/03/index.html","5dd743945c85d6ddfca46eb5f46ef3c9"],["D:/hexo/public/archives/2021/04/index.html","63c96eabb0ffd4fd93b59c0d61589b91"],["D:/hexo/public/archives/2021/05/index.html","5f387e0d3c60df5b82795601f72d25ed"],["D:/hexo/public/archives/2021/07/index.html","bef2fa65f047280981b2176cf4132db8"],["D:/hexo/public/archives/2021/index.html","ff0c343159ca7d1b25f9eceab54ddb28"],["D:/hexo/public/archives/2021/page/2/index.html","7b6bea0688db1bee8337ac5095f10d40"],["D:/hexo/public/archives/2023/05/index.html","5696f091866fe2e9a8459ebdfd54fbeb"],["D:/hexo/public/archives/2023/07/index.html","de51c1d11bf54bca641174b823c9fcfc"],["D:/hexo/public/archives/2023/index.html","b77e30410f262f6a1036b9d31916ecbf"],["D:/hexo/public/archives/index.html","7853f0cdcf351a9f8701d6c1b7a01537"],["D:/hexo/public/archives/page/2/index.html","c2c7682de8ecf333706eeab774c3d8b3"],["D:/hexo/public/archives/page/3/index.html","7dfa4f89e1044b7da39324f7d82904dc"],["D:/hexo/public/archives/page/4/index.html","0ebb1d996ed6da31b17f370cecd27ad5"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","5790ee79c1c2d0fe92fc96514ad3f263"],["D:/hexo/public/categories/index.html","71d2afbb9054e2630b9361c049fe72d4"],["D:/hexo/public/categories/写作/index.html","e60612a059dd133736c6b8a324faef46"],["D:/hexo/public/categories/学习笔记/index.html","7c99367b7290e0d64b3a4e7abd9c2317"],["D:/hexo/public/categories/感悟/index.html","f8609c81df2c8f359859b3714aa62c7e"],["D:/hexo/public/categories/感想/index.html","7bfbc94034d64cfbdb6b5002ed22d354"],["D:/hexo/public/categories/数学/index.html","2abd165b76052d0672538bb4f451b1b5"],["D:/hexo/public/categories/文章收藏/index.html","5f0eb53885512051171d540c195919e8"],["D:/hexo/public/categories/旅行/index.html","5767eb19a534ade3722425c95d683093"],["D:/hexo/public/categories/日记/index.html","d51e868763b14c7a8730bb657857ad47"],["D:/hexo/public/categories/机器学习/index.html","87a0dea15770036daf82663212293270"],["D:/hexo/public/categories/诗歌收藏/index.html","6a3057bdb46b49702f9531f956cd90dd"],["D:/hexo/public/categories/读书笔记/index.html","a5b018c37bb462f1c04046e2d827ac77"],["D:/hexo/public/categories/读书笔记/page/2/index.html","b98d2cd91fa7ae1652de58a10b9071f8"],["D:/hexo/public/comment/index.html","d3b723085923892aa3b382b73d830b1c"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","2f058d91143dc4809f9797cf8789603d"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","0533464d071b51550d6961ebf9cc7e55"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","6f5ce48c39a1a9c904155b962ba07d77"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","a62fb11cdfee613b35798a816529353f"],["D:/hexo/public/music/index.html","12eb02f8278607631da81a0290f4bdf7"],["D:/hexo/public/page/2/index.html","3db16494de8abe8d274e9c6878a54b0c"],["D:/hexo/public/page/3/index.html","4b3a2a105e933d75b5a6fb285e469c57"],["D:/hexo/public/page/4/index.html","aabd0bacbba205c5541531fb8038a5a3"],["D:/hexo/public/tags/KNN/index.html","0396b6720b894a2ab8a94c7c44ffd996"],["D:/hexo/public/tags/git/index.html","6a0da6e0b8de6cb8c1c07ad7e1b18ca0"],["D:/hexo/public/tags/index.html","63b212208b9b90748d5ff4eab2ce6aeb"],["D:/hexo/public/tags/余华/index.html","770a4fa72dee12426e684e144811666a"],["D:/hexo/public/tags/北京/index.html","6d1806fb4c18b44a1f9e94b3fd5bddfb"],["D:/hexo/public/tags/博尔赫斯/index.html","aa8638883c6a4460c71c54a4fbaf5a76"],["D:/hexo/public/tags/回忆/index.html","2e84eeda8a9100efc3d58b76062cd4c1"],["D:/hexo/public/tags/孙绍振/index.html","691bd2729b18f3b0b07d39d279c780d3"],["D:/hexo/public/tags/川端康成/index.html","1b517d7757178e1a0c6f0ffa12bb9ebf"],["D:/hexo/public/tags/巴金/index.html","1fc19d0c29c841ad87cf9da51ff2b1df"],["D:/hexo/public/tags/建站-hexo/index.html","261c0e8e3ec9067525f8fe1f7463ff5b"],["D:/hexo/public/tags/总结/index.html","8b705ea12d5ed4cfc8ee04867a49fde1"],["D:/hexo/public/tags/感悟/index.html","5721981adecfcbe3877459f8f66bddc4"],["D:/hexo/public/tags/感想/index.html","d0f049a58b98c803d3e817ae201be3b1"],["D:/hexo/public/tags/敦煌/index.html","d6b785e6f52b8250968c7ca94979dfb5"],["D:/hexo/public/tags/文学/index.html","37675398846fcdf5c3e29c3cc3be33dd"],["D:/hexo/public/tags/时空/index.html","9a5a4683e3982af05b54f73071e1a873"],["D:/hexo/public/tags/林轩田/index.html","82f42da9a0b12634d69e3839cd84c1fd"],["D:/hexo/public/tags/线代/index.html","3db21fd7786fd93c645e862ae0e066fc"],["D:/hexo/public/tags/考研/index.html","e9db4497d3e2d99fff05f4d43ad063c5"],["D:/hexo/public/tags/聂鲁达/index.html","5ee5aaf03d8b2cce92d9a8874794307e"],["D:/hexo/public/tags/西湖大学/index.html","319dee335438a8dd32125648655911bf"],["D:/hexo/public/tags/诗歌/index.html","ac4a15801dc10bbb8716a1c8eef08d53"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","68d783611b825d0a8c24f9988067eebd"],["D:/hexo/public/tags/读书/index.html","43bfbcc3158c0619b13f5d704ab4fbd7"],["D:/hexo/public/tags/钟文/index.html","7cb3f27b47326b71f65d70c3c7de83df"],["D:/hexo/public/tags/阎连科/index.html","ad6b8b80ef5454dca34a2f8e4b17c7a3"],["D:/hexo/public/tags/随想/index.html","be42b362a5ecfe958427583e44717d92"],["D:/hexo/public/tags/马尔克斯/index.html","46860b1386f9291279f45cdafb775f19"]];
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







