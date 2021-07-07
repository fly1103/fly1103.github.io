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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","eb5736807a1b002c94835855e9f11216"],["D:/hexo/public/2019/09/18/百年孤独/index.html","d3055416f163c855358499d66e2faa71"],["D:/hexo/public/2019/09/18/鼠疫/index.html","a1e13c3bc9810c870ebddf8b21f985ba"],["D:/hexo/public/2019/12/20/cloud/index.html","b3688dcace73dc41cbe9b61225e78761"],["D:/hexo/public/2019/12/21/knn/index.html","b070a11d69ff3ce283d288cd21ed9e1d"],["D:/hexo/public/2019/12/23/finish/index.html","b4eab8d4e47d30f9054e56a7f617ae04"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","65e1980acc94a7f9a97f0af655d5d7a6"],["D:/hexo/public/2020/02/28/Linear/index.html","1b4bea53a54b0a454752a6c30ec6b4e7"],["D:/hexo/public/2020/03/21/time/index.html","4a30bc63780906d2d922e70479727a85"],["D:/hexo/public/2020/05/23/1984/index.html","effc3503d412aff86802d28e1c43470c"],["D:/hexo/public/2020/06/09/git笔记/index.html","f251d5ae3a522ce2ae62bee6e104f951"],["D:/hexo/public/2020/07/29/sheep/index.html","3fb7ca04ec62b37359722dc7ae430536"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","c6fb9b9704526bd6d8d3a6076dbae5b8"],["D:/hexo/public/2020/08/09/Haruki/index.html","dab881203a02dd1d05c03aea6519a485"],["D:/hexo/public/2020/09/13/summarize/index.html","e98bf953d0d6bbd173974df52e7548b4"],["D:/hexo/public/2020/10/19/Thorn/index.html","2f5680da2300eded6a7ac626fd3632bc"],["D:/hexo/public/2020/10/28/huiyi/index.html","b756dab9e685ad4a3e356768f9937c01"],["D:/hexo/public/2020/11/26/一点感悟/index.html","d396061e175204086e0220ca8b2cef1c"],["D:/hexo/public/2021/01/02/crime/index.html","80613b030e09e77b4f331b88334a4374"],["D:/hexo/public/2021/03/08/mother/index.html","251ba3bf53bbc90e33deae5db940c983"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","a937f42144a3ca261d7c247357b05650"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","ee25bfba3dd06a2c6a4701e4e6b05af9"],["D:/hexo/public/2021/03/31/Cholera/index.html","1a32f21a1948ae3b919c1c20ae65d026"],["D:/hexo/public/2021/03/31/镜中/index.html","7875c669d7955c39f72385ba96ec1a7a"],["D:/hexo/public/2021/04/03/最后的对话/index.html","4eb0cf2c198d6bb70797d9fdd7a06c10"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","4e95ed8f59593017e6a7f02c374294a7"],["D:/hexo/public/2021/04/06/雪国/index.html","6f266532503f813c89bc927e2d96deb9"],["D:/hexo/public/2021/04/09/骂观众/index.html","0bbc78b24a4f585becaf61a89ac15b47"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","f321f65e06af4a1c2b55403d112ba1ba"],["D:/hexo/public/2021/04/21/家/index.html","774e8d78c1c250c6f9de7f0dcef0f0ef"],["D:/hexo/public/2021/04/24/光与岸/index.html","f3e777fd17d87f372bc4cdcdfafb3efc"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","6b5c64b0b210307f56fd0336018cb26a"],["D:/hexo/public/2021/05/03/五月伊始/index.html","0acab4a13ed4ed744142219bdfb94cda"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","4c638ae217ae81e7471f1aeff2b2e238"],["D:/hexo/public/2021/05/31/迎接六月/index.html","7b4bd5333db691600f7339e1d88b20af"],["D:/hexo/public/2021/07/07/七月/index.html","ac8bee6a1f8595beedf6a887a399e9d5"],["D:/hexo/public/about/index.html","2eef03d320638828673a22d7ed02e56c"],["D:/hexo/public/archives/2019/09/index.html","2500153d42a28d8dbf759fa40ddda9dd"],["D:/hexo/public/archives/2019/12/index.html","fddd723802a4bc58ccea134c7bb5c9aa"],["D:/hexo/public/archives/2019/index.html","5813069c4da221d8134d2c7e14c9cbb3"],["D:/hexo/public/archives/2020/02/index.html","696e2002b5c3c4240abb9be71be025d6"],["D:/hexo/public/archives/2020/03/index.html","48f8a377c010a51a52d8de0ee627c92c"],["D:/hexo/public/archives/2020/05/index.html","642ec2f1d1b174392eb28b50153d0582"],["D:/hexo/public/archives/2020/06/index.html","d2986a507f491e8d39c818dd20b34acd"],["D:/hexo/public/archives/2020/07/index.html","6f05680019926d6028826ce57fb1fe89"],["D:/hexo/public/archives/2020/08/index.html","3a5c69863a4406b808f253e645b7c584"],["D:/hexo/public/archives/2020/09/index.html","bbed45795f34393c09095f50418a8ab3"],["D:/hexo/public/archives/2020/10/index.html","72f1a0411969935f329203d6f7efa802"],["D:/hexo/public/archives/2020/11/index.html","08b660cc9331990da81efd674870102d"],["D:/hexo/public/archives/2020/index.html","fc4cecc3436c3d1aec03a42cc0554b10"],["D:/hexo/public/archives/2020/page/2/index.html","4a7fabf0fa51070d8ee633db8528b016"],["D:/hexo/public/archives/2021/01/index.html","5458d36d564dc1901b251b47aa661fca"],["D:/hexo/public/archives/2021/03/index.html","4a179283b37d20369f0b498a1b2068c2"],["D:/hexo/public/archives/2021/04/index.html","c1be6a130613ac7428af0ac002764900"],["D:/hexo/public/archives/2021/05/index.html","3a9b695f79361881bef7306227d34aa3"],["D:/hexo/public/archives/2021/07/index.html","8539ed8cce28650ab258f7070fff85b9"],["D:/hexo/public/archives/2021/index.html","541871f304f2f53792721e14809545e6"],["D:/hexo/public/archives/2021/page/2/index.html","d15db2ead00c9eece57b00b0ea483a10"],["D:/hexo/public/archives/index.html","b574c43a1b1847b1f19dfd28db62afce"],["D:/hexo/public/archives/page/2/index.html","0e91ac1aa0e03b554047eee213d496c3"],["D:/hexo/public/archives/page/3/index.html","0781416885e0a0eabe3f9adcfbe4493f"],["D:/hexo/public/archives/page/4/index.html","e999371c2f41a6162556c6ae9c648c54"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","b7f7c04de7803a6b55a4a5f758003e23"],["D:/hexo/public/categories/index.html","5f9992d032ea0e56a74c26ec85ce702e"],["D:/hexo/public/categories/写作/index.html","669813f9652b8491bcccc3a3162e1da1"],["D:/hexo/public/categories/学习笔记/index.html","28540c0ce509340e8f9323bc67f6af36"],["D:/hexo/public/categories/感悟/index.html","8b69b4ffd79921ef67484bd5ade51d5b"],["D:/hexo/public/categories/感想/index.html","2672a46c838c28faa1117df9f4224db5"],["D:/hexo/public/categories/数学/index.html","565a2612cafdaa103f124dca0773cda7"],["D:/hexo/public/categories/文章收藏/index.html","db3d89f0f8687d7bf74ad9442e091670"],["D:/hexo/public/categories/日记/index.html","d19b91bea708ea99c278eb2cd3034958"],["D:/hexo/public/categories/机器学习/index.html","75c357031a59112c2323899afe242df5"],["D:/hexo/public/categories/诗歌收藏/index.html","913b077f145db1f92ace010d26096632"],["D:/hexo/public/categories/读书笔记/index.html","3212db3854441e817155a5328ca21230"],["D:/hexo/public/categories/读书笔记/page/2/index.html","5651080af7f37c8f80aed572b5340520"],["D:/hexo/public/comment/index.html","3c0969adbbc5f48c80ad5e74e8df0e69"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","310e2b1666dca0d1b4aedaa8159d5510"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","482ab36dc8c1fba096f03aae9ab935b8"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","d5a3c9443e423bc9fa7204d7a43cd420"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","f609b8c1f667882045fc1f9b39f72288"],["D:/hexo/public/music/index.html","6c17bcd55d45466506c007d4e912db8b"],["D:/hexo/public/page/2/index.html","2477f017a7c97f6ab5cd52e887798935"],["D:/hexo/public/page/3/index.html","0203976d8a565a47b972c6933eb6e5a0"],["D:/hexo/public/page/4/index.html","c3c6e5e13879c41702c4e425babfe924"],["D:/hexo/public/tags/KNN/index.html","16e51bb4ad47d339be6bccaf06c8d5ef"],["D:/hexo/public/tags/git/index.html","e02ea5bacf540fec464771f7dadb0ab3"],["D:/hexo/public/tags/index.html","894005326e0fe4716b24e4d59ec395c7"],["D:/hexo/public/tags/余华/index.html","b2cae81964e672b9f4b268560dcb1bc1"],["D:/hexo/public/tags/博尔赫斯/index.html","dc2c1da1416c20bff33419d264ab07ee"],["D:/hexo/public/tags/回忆/index.html","29e4b72773483c774935e58f67343fba"],["D:/hexo/public/tags/孙绍振/index.html","470381cdb846cc24aa1bfba028c4e6c1"],["D:/hexo/public/tags/川端康成/index.html","c4a9e1cf645a59b762c312d397527873"],["D:/hexo/public/tags/巴金/index.html","136f66780a24d4b70b9a7de827b245da"],["D:/hexo/public/tags/建站-hexo/index.html","2a535f5758a0c69c20180909731800df"],["D:/hexo/public/tags/总结/index.html","b10768e07e92de4942849e2548819adb"],["D:/hexo/public/tags/感悟/index.html","c3ffb20353503d76202f2c52dc66e55c"],["D:/hexo/public/tags/感想/index.html","422822f94ee2c96a61fb11ba22056b60"],["D:/hexo/public/tags/文学/index.html","440b97a4c9fc9bc743690b280a4834ce"],["D:/hexo/public/tags/时空/index.html","4de17eb0ea440e9357a50d427252422b"],["D:/hexo/public/tags/林轩田/index.html","4f9b3e4f6df1ab88f361ca5dd7fea3b1"],["D:/hexo/public/tags/线代/index.html","dc773f630b231f16deb44398d4df09d8"],["D:/hexo/public/tags/考研/index.html","37536890fb9c53d177e7d2526a1fe49b"],["D:/hexo/public/tags/聂鲁达/index.html","c66bebbd1898b235ae302b1ea9356529"],["D:/hexo/public/tags/西湖大学/index.html","6f89c5d9b317d0eb714e9b18788dbc70"],["D:/hexo/public/tags/诗歌/index.html","454e73d6b2d48c75506af2fb3a61798b"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","1482853a7b1355342da1c0c3e98c8c9d"],["D:/hexo/public/tags/读书/index.html","d280df2f1945d6b2c3895fbeb4404528"],["D:/hexo/public/tags/钟文/index.html","8b3b2e461db3f77b04fc79c2823d85d3"],["D:/hexo/public/tags/阎连科/index.html","fd6719219cd7788af4a996d42de0bc14"],["D:/hexo/public/tags/随想/index.html","e1e9b7ad6747666d2596ea1e12c0e694"],["D:/hexo/public/tags/马尔克斯/index.html","c8e7794202287645d4c8458a7e1d86b0"]];
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







