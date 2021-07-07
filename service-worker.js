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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","082a71c0006786c869c1e7d2c374a758"],["D:/hexo/public/2019/09/18/百年孤独/index.html","f8b59f9a6012eab2bf05ea6ae9b9a27b"],["D:/hexo/public/2019/09/18/鼠疫/index.html","a3e5923adabd5a607b5e3cd7fb12d80a"],["D:/hexo/public/2019/12/20/cloud/index.html","c1eeb9cf309cdac8bd0ae3af13b041ca"],["D:/hexo/public/2019/12/21/knn/index.html","d4b29742944c42a328589b4549d35c2e"],["D:/hexo/public/2019/12/23/finish/index.html","5b8b1438e884ec4ca0fbbe93e7436387"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","a9549eaf58e6f64206ba639bcb714536"],["D:/hexo/public/2020/02/28/Linear/index.html","2a00beea935221c2d3ece34f0a6806c9"],["D:/hexo/public/2020/03/21/time/index.html","9850043d2fc55dba39ca9247343df3d3"],["D:/hexo/public/2020/05/23/1984/index.html","ba3604d197043c026e9a6fb68e079dc4"],["D:/hexo/public/2020/06/09/git笔记/index.html","e0443da8037789abe19b3e7da0c1f062"],["D:/hexo/public/2020/07/29/sheep/index.html","cd997ebb79c46bade1fca70ec853df3b"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","4dd062fe6b33d57ab5fff077e60682ce"],["D:/hexo/public/2020/08/09/Haruki/index.html","ad7b071ba3d77bd53a1202019a2c32f9"],["D:/hexo/public/2020/09/13/summarize/index.html","65aadf6a78f227b184e943f5a13b52ff"],["D:/hexo/public/2020/10/19/Thorn/index.html","3f8ad955631833eab6ce1353eaa5dfca"],["D:/hexo/public/2020/10/28/huiyi/index.html","5ccdd424f7ea71766b0d0adddea95277"],["D:/hexo/public/2020/11/26/一点感悟/index.html","03addb2e4cedd038441290f14399e6ba"],["D:/hexo/public/2021/01/02/crime/index.html","1ce428fa382868dcaca3271c416faf62"],["D:/hexo/public/2021/03/08/mother/index.html","2b27bf9778dbbfaaa4d8ecff605c4bfd"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","1fa3e452080a962a4da9e20b6a9fd549"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","3e897b2ef2d31e5d6b2cd27fea679b07"],["D:/hexo/public/2021/03/31/Cholera/index.html","ba3941e3db5a66a18ec4f64d28bbedca"],["D:/hexo/public/2021/03/31/镜中/index.html","0af098b0cf4ecc457cd5faa8a3046f9f"],["D:/hexo/public/2021/04/03/最后的对话/index.html","cb59cd4fcbaff901563f52a8c38db487"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","acd33a2658041e6d39434730fa521121"],["D:/hexo/public/2021/04/06/雪国/index.html","d9805af4f2ddd7cb345ec74052c8c3e2"],["D:/hexo/public/2021/04/09/骂观众/index.html","81532515902fa316dd2d39f3db07bf58"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","64f40de38a1492fdfc15d616028ca476"],["D:/hexo/public/2021/04/21/家/index.html","f0045b902ec37877ca3d7606cad9138e"],["D:/hexo/public/2021/04/24/光与岸/index.html","3494f467799e280eebffc86c5d814af1"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","dc81be355356593440f3bc9241269478"],["D:/hexo/public/2021/05/03/五月伊始/index.html","49ec7b440fc3f541be9f3dc536f4c096"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","106fb17654a57e38b875e70a49daecdb"],["D:/hexo/public/2021/05/31/迎接六月/index.html","9bfcc54b41ebac4e8246464a75e9db0f"],["D:/hexo/public/about/index.html","c2529fe3cd47777db0e0a1e62d5beab1"],["D:/hexo/public/archives/2019/09/index.html","deab96adaeda9e88f1c60c14b739c0e0"],["D:/hexo/public/archives/2019/12/index.html","5cf6a09d024a5326a6d7aa899de21d13"],["D:/hexo/public/archives/2019/index.html","26325a6cbc4d52c76e3b74cd1e9ee47e"],["D:/hexo/public/archives/2020/02/index.html","162e5fe8f401fca30fd197044b98df6b"],["D:/hexo/public/archives/2020/03/index.html","3826151cbd78288f98c025aedcdc95e9"],["D:/hexo/public/archives/2020/05/index.html","13c312fc905755f3c3ff20dc85d0454b"],["D:/hexo/public/archives/2020/06/index.html","695f0cfc52dacbc7155470834677a680"],["D:/hexo/public/archives/2020/07/index.html","c3e7dbba61ad059d706d06f8c66aa42a"],["D:/hexo/public/archives/2020/08/index.html","1d9a6899e39e46a712b46074cc27117b"],["D:/hexo/public/archives/2020/09/index.html","a03c7d6e4e44cd9f5f891628661fc915"],["D:/hexo/public/archives/2020/10/index.html","ff90ed5bc05030c9bf4b34785f8b4498"],["D:/hexo/public/archives/2020/11/index.html","69a0f238e2af69339aae7f8de8ef44a2"],["D:/hexo/public/archives/2020/index.html","bb590650756f0bbe35e2738ea9e577a7"],["D:/hexo/public/archives/2020/page/2/index.html","baf4a8595a74dff17ec5e4917bece7d8"],["D:/hexo/public/archives/2021/01/index.html","4240420b6b74cd5e005e905e0950aba6"],["D:/hexo/public/archives/2021/03/index.html","e67e76810697329318a7170473f1c332"],["D:/hexo/public/archives/2021/04/index.html","9899fcccb7fbb529089c20463fe67bcb"],["D:/hexo/public/archives/2021/05/index.html","375d3a82e5ee45fc966917923d812de0"],["D:/hexo/public/archives/2021/index.html","5743bcd77ba67dc442507dd044cf37e0"],["D:/hexo/public/archives/2021/page/2/index.html","d65a735c79654893950a052b97f8fb51"],["D:/hexo/public/archives/index.html","a1479dbb164d38ddd76b4633272e2cd7"],["D:/hexo/public/archives/page/2/index.html","803975360ca53df5dc78d94bd028a96c"],["D:/hexo/public/archives/page/3/index.html","e37c9e6ba4d068d79e5804c9d536fbfc"],["D:/hexo/public/archives/page/4/index.html","b5bdb76d2956e2112d1737e45f09f31e"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","4ab5717a691638e1113ec3076f0e6d2c"],["D:/hexo/public/categories/index.html","08b0a1b64c0f8874a34387fcb1ff16a4"],["D:/hexo/public/categories/写作/index.html","6548ba6fa1671a617f86a1d7726e3c3c"],["D:/hexo/public/categories/学习笔记/index.html","eda66625eec43afde0592abb95489e54"],["D:/hexo/public/categories/感悟/index.html","3f8f103a4de85551b2db637d9321954a"],["D:/hexo/public/categories/感想/index.html","738e175a0b1649bd6d430e851b9d9aea"],["D:/hexo/public/categories/数学/index.html","94725bb04c6c87d36ffdbe4ee7218d57"],["D:/hexo/public/categories/文章收藏/index.html","e7668abdc660bf1019fe9ff5c636533d"],["D:/hexo/public/categories/日记/index.html","6a99f1805021e896c25f443cdaf90b23"],["D:/hexo/public/categories/机器学习/index.html","984da5eae308f34ead11e01d2b99df1e"],["D:/hexo/public/categories/诗歌收藏/index.html","fd68c25fea6348b787447bed1ed9f2d2"],["D:/hexo/public/categories/读书笔记/index.html","8c63a87bd3a33babb05414b392a52fa3"],["D:/hexo/public/categories/读书笔记/page/2/index.html","02a911e71628bbbd244c95c55ffd71ad"],["D:/hexo/public/comment/index.html","1eac117377090d8c718df4b74b70a197"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","fa7fb97f868de027d03aef57da984c4f"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","a021e42668b13db11fc5d7dbbd33ac7a"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","0e5b251d427771e24223f0f7d51103bf"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","5ef9eebf1e32565fe282404b94ad7b18"],["D:/hexo/public/music/index.html","9063d02a56e2b8fc92a8b4fd20ace587"],["D:/hexo/public/page/2/index.html","5b7c93e9868b8554491b733a466e4e8d"],["D:/hexo/public/page/3/index.html","232786b0dbd49c03434c921d86204adf"],["D:/hexo/public/page/4/index.html","445d9eb76d11a5bcdafb6d9b063433bf"],["D:/hexo/public/tags/KNN/index.html","85d4f757d1f6a650973b32f423916eee"],["D:/hexo/public/tags/git/index.html","84b3d14efc7046a749f48c9c81864e35"],["D:/hexo/public/tags/index.html","aaf25ffb749ec34b176a06fe36c086f0"],["D:/hexo/public/tags/余华/index.html","6089b62511f07d38a5f5f25d927e2d37"],["D:/hexo/public/tags/博尔赫斯/index.html","c72f7a2e7a20f11bb8c507b32abc53c4"],["D:/hexo/public/tags/回忆/index.html","92f89c97d091e21cb2328de4ef13dce9"],["D:/hexo/public/tags/孙绍振/index.html","32aadb804429484b886f549aa2fbe92b"],["D:/hexo/public/tags/川端康成/index.html","36b23170c535ed6565731acc722e8565"],["D:/hexo/public/tags/巴金/index.html","83e7833447457b458851f6abd0c98461"],["D:/hexo/public/tags/建站-hexo/index.html","09f32696c3fcfa2be451958ebe7c91b5"],["D:/hexo/public/tags/总结/index.html","6e40200f6866b1490ff51a079cb85658"],["D:/hexo/public/tags/感悟/index.html","eb751e8d7a40703cce515afab139e972"],["D:/hexo/public/tags/文学/index.html","e6098d0b7834540e258cee4c42d4e08b"],["D:/hexo/public/tags/时空/index.html","2bd7cb79c140d24bbc9034af5a0edb20"],["D:/hexo/public/tags/林轩田/index.html","ea7a12e658cbdb7f04cd2789be95c096"],["D:/hexo/public/tags/线代/index.html","3f0584560004c72b1eceda7d69cf84a6"],["D:/hexo/public/tags/考研/index.html","8520e9c7f21c5e85b01b5806ed004ec0"],["D:/hexo/public/tags/聂鲁达/index.html","46a2d95da47fd94355c2b54c3c040209"],["D:/hexo/public/tags/西湖大学/index.html","4f23a731273cde5a0134e397f28e6062"],["D:/hexo/public/tags/诗歌/index.html","ad14743c355791b32d93802e490fe8a8"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","1d8b8d11c16117edf794def3b95ffaa0"],["D:/hexo/public/tags/读书/index.html","8f0d7ca0c14545d7acdf0eaffb896d97"],["D:/hexo/public/tags/钟文/index.html","ac94fbf5b1b0311a5a34df0355385a6f"],["D:/hexo/public/tags/阎连科/index.html","cfa94b580f8911b3d81f5093051c7275"],["D:/hexo/public/tags/随想/index.html","9ebf4afdbc446972f6fe0ecb358bb509"],["D:/hexo/public/tags/马尔克斯/index.html","cde6612e32286f156f700088ed1440fb"]];
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







