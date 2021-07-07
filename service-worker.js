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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","a94702241d7115f2659ec90ff0ca848b"],["D:/hexo/public/2019/09/18/百年孤独/index.html","3185d6f936c2c2604922d5bd019ae8f2"],["D:/hexo/public/2019/09/18/鼠疫/index.html","2cc5ff86862f31b370804c2f8b5758f4"],["D:/hexo/public/2019/12/20/cloud/index.html","f1d4fa15386b1fa8e901f1cbc5d707a6"],["D:/hexo/public/2019/12/21/knn/index.html","bbddd9fe7a52f662f0b38088bcead73b"],["D:/hexo/public/2019/12/23/finish/index.html","8f0b1070ae5625ee6cbb9ef79a224d09"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","f20dde28e1898ac9695f6523f2d1bdae"],["D:/hexo/public/2020/02/28/Linear/index.html","1f7a12a23851add79ca833cd8c2137eb"],["D:/hexo/public/2020/03/21/time/index.html","d7c87e124793ef1e219e05142ebd747a"],["D:/hexo/public/2020/05/23/1984/index.html","f6e16c650a3dd54346c4ce6801a4db83"],["D:/hexo/public/2020/06/09/git笔记/index.html","93203ec2bd6977904d8d66b865d4f42a"],["D:/hexo/public/2020/07/29/sheep/index.html","68f13beba18991b8c84d90ccc1827de7"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","f14a78d9ede48a6e12310e7984424f18"],["D:/hexo/public/2020/08/09/Haruki/index.html","0ffe44bface23ae9ced9b6b3e8d4ee9c"],["D:/hexo/public/2020/09/13/summarize/index.html","34f22445910a57371e1d053dc8cdc4fe"],["D:/hexo/public/2020/10/19/Thorn/index.html","75d6bb3d351537098b930bf9a4994b8d"],["D:/hexo/public/2020/10/28/huiyi/index.html","3024673659339887abc5ec4e19991d7a"],["D:/hexo/public/2020/11/26/一点感悟/index.html","825e999b4296cc821cf1ad1cbff02266"],["D:/hexo/public/2021/01/02/crime/index.html","e52d7928232940a84e7382b64fc32b85"],["D:/hexo/public/2021/03/08/mother/index.html","bf3dac7410657b49cdd1f0933c64d742"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","49f56fed6fe7aa532fc32ae98f0018bd"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","f416a9542993b5e3e3abbc8be315681e"],["D:/hexo/public/2021/03/31/Cholera/index.html","c1faa31beee05cbee0df310e7096f8c5"],["D:/hexo/public/2021/03/31/镜中/index.html","7d78b69a7c281682a1ef492b9d40984f"],["D:/hexo/public/2021/04/03/最后的对话/index.html","afca954f0b8a24ebcc1051b853d510fa"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","96d9b028449194f259667b262f6d93b9"],["D:/hexo/public/2021/04/06/雪国/index.html","b84c082dd41a60ba0ad72bf350bd821a"],["D:/hexo/public/2021/04/09/骂观众/index.html","ab9ddf0f681d58b06e93a5cd73af5efc"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","7729900c97712f43c4153f0ce1166341"],["D:/hexo/public/2021/04/21/家/index.html","740e58b79252f22f27a8ab4635af1241"],["D:/hexo/public/2021/04/24/光与岸/index.html","c56cf062074c6af715abb137071896a4"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","0346a0d07f0b93ddb7bce85ce887cc21"],["D:/hexo/public/2021/05/03/五月伊始/index.html","8eff5cff9134656a468d6dc5d5d33eef"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","a9d1df93c9d6b114859e7b26862f7071"],["D:/hexo/public/2021/05/31/迎接六月/index.html","89bcd54babb5a5bbb764b05707182e4b"],["D:/hexo/public/about/index.html","510fabe3cafa8d063bdcee570fd4d5a5"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","3a5bca0134f5d67a7244f115147f3794"],["D:/hexo/public/categories/index.html","0a1208381a478a2bf4137c9b06f301a4"],["D:/hexo/public/comment/index.html","5e484b4b1cafffc674341f085c412e96"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","c0112635778b2188cc8f5ce65e034ccb"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","c299aa4f1b3d42511a1b4b344c19332e"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","7b5a0ce3ea5b41847e16c5c471414af6"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","223a51785ff7d35b5f45e79ee30a2b14"],["D:/hexo/public/music/index.html","6c61fc89a0f36a41001fbff5e5f50a27"],["D:/hexo/public/page/2/index.html","44319fd00b05e8c2cc2bf824a126a71b"],["D:/hexo/public/page/3/index.html","2017451da30e5915b1568d0dc01de6e3"],["D:/hexo/public/page/4/index.html","21c13dc5c8c1070115aeeb1718eb3e33"],["D:/hexo/public/tags/index.html","9ffec76ceb218bf29c46930fdf78cbf1"],["D:/hexo/public/分类/写作/index.html","24266527f781be22fa4592e11e913507"],["D:/hexo/public/分类/学习笔记/index.html","01490ffeb4935c61b8ad745ab75238f4"],["D:/hexo/public/分类/感悟/index.html","04d0a1d10eb707cf6fcd8ece3acb5ba2"],["D:/hexo/public/分类/感想/index.html","16bc969e95c40eeae54d74eb9c7afc0f"],["D:/hexo/public/分类/数学/index.html","afbe84fd041ff7cd93b8ce69df68986d"],["D:/hexo/public/分类/文章收藏/index.html","7c66d5adbc268e34281548ac8c824505"],["D:/hexo/public/分类/日记/index.html","b3e95e01da781b7bf71a9e58ea776b46"],["D:/hexo/public/分类/机器学习/index.html","8a2f6aecfec30c20ee4eaf363b3f4e81"],["D:/hexo/public/分类/诗歌收藏/index.html","cfd6f60ec0ede124ab6ae408543fc5c3"],["D:/hexo/public/分类/读书笔记/index.html","9a3ed4d4ef7471c165d5414660517286"],["D:/hexo/public/分类/读书笔记/page/2/index.html","6f9bc72c667c83e57f2d74db3b970182"],["D:/hexo/public/文章/2019/09/index.html","b16f69114c6492bbcf1d46ada47f74d9"],["D:/hexo/public/文章/2019/12/index.html","ed43efe79163c0695016ac8d355d0f24"],["D:/hexo/public/文章/2019/index.html","c3ece44a097730415cfaf82d72fecefa"],["D:/hexo/public/文章/2020/02/index.html","c8e0627796214fa18fa87114907dab7f"],["D:/hexo/public/文章/2020/03/index.html","cb7d228353565bfb2f1586fb4099b58f"],["D:/hexo/public/文章/2020/05/index.html","46dd2758c1e68aee14be6efea72bfe98"],["D:/hexo/public/文章/2020/06/index.html","cf5a9cf97224a36159ef7cfcb6aa12b8"],["D:/hexo/public/文章/2020/07/index.html","d4c5592497bebdea17ac70a504212d1c"],["D:/hexo/public/文章/2020/08/index.html","80632e7c266d01f3d48041e1c13aaeb5"],["D:/hexo/public/文章/2020/09/index.html","558382787ed97547f9e8362c475bb136"],["D:/hexo/public/文章/2020/10/index.html","5c0e1dc3a56b68013b67e286c6212475"],["D:/hexo/public/文章/2020/11/index.html","eade01e75238ccc9ae275a1525f80f87"],["D:/hexo/public/文章/2020/index.html","14dd2ef0c03338e15ee651e95d9a04c4"],["D:/hexo/public/文章/2020/page/2/index.html","21d7270c867c07005060d929b3d19c41"],["D:/hexo/public/文章/2021/01/index.html","131ccce29ac4b0cffe6c64d716959947"],["D:/hexo/public/文章/2021/03/index.html","81c6c70baafecc1d8226f80b21bcc958"],["D:/hexo/public/文章/2021/04/index.html","28f27db80ec076b8869bd54a0e32873b"],["D:/hexo/public/文章/2021/05/index.html","717fc948d729b296584da7dbbdc972c9"],["D:/hexo/public/文章/2021/index.html","8853d4718b37249afa400597605b78be"],["D:/hexo/public/文章/2021/page/2/index.html","bf30c1cd9c0fb74c17eef328665629f7"],["D:/hexo/public/文章/index.html","c3c5a4a11ca5889404baa307f90a1d31"],["D:/hexo/public/文章/page/2/index.html","25c88016cc6425aba24d45d32d6962e4"],["D:/hexo/public/文章/page/3/index.html","91970807a6de8c7cfa1c6d3156338950"],["D:/hexo/public/文章/page/4/index.html","5636a18f04b46c395ab921ac247afafb"],["D:/hexo/public/标签/KNN/index.html","0370682db6f8321e4defba9babb99e0c"],["D:/hexo/public/标签/git/index.html","98c1088177b91fa28d3b3d19014724ca"],["D:/hexo/public/标签/余华/index.html","218aefab0c75ec5c5c27a79bc800ae96"],["D:/hexo/public/标签/博尔赫斯/index.html","e6d02248dbdafd5b7392d7d881b9f014"],["D:/hexo/public/标签/回忆/index.html","2aaecfe296b0d87957e5964b3831f996"],["D:/hexo/public/标签/孙绍振/index.html","a56dcfc31017bc7da9d9e985eb35589c"],["D:/hexo/public/标签/川端康成/index.html","cbe6422c49df60f082f8b94169109d3e"],["D:/hexo/public/标签/巴金/index.html","4b0d7c3a7724917f2a944b7dc1d013f8"],["D:/hexo/public/标签/建站-hexo/index.html","0580e2b317564b184af6dc83af4cc9d0"],["D:/hexo/public/标签/总结/index.html","e285b7728114f79bfad15fde6b62eb0a"],["D:/hexo/public/标签/感悟/index.html","57766522a18d13a33e7193b0ce3001cf"],["D:/hexo/public/标签/文学/index.html","db383dae97ca87a13189805a796b6ebe"],["D:/hexo/public/标签/时空/index.html","7e0aee662bc3f58dcd2fbda932df6244"],["D:/hexo/public/标签/林轩田/index.html","25c16ea393452ed8ca2ee390d2ed4083"],["D:/hexo/public/标签/线代/index.html","d4d6624621110958e6c8471dfa891118"],["D:/hexo/public/标签/考研/index.html","97967c5f2be62700946593d0bf566636"],["D:/hexo/public/标签/聂鲁达/index.html","0b6cf83dc4e35686705e0ef53b67e442"],["D:/hexo/public/标签/西湖大学/index.html","22e42289116d3c8e2c3ac1d8755063f3"],["D:/hexo/public/标签/诗歌/index.html","0867813f135f51de42c273696daca49e"],["D:/hexo/public/标签/诺贝尔文学奖/index.html","bd0fef437e51219bc98ae218d7f17ebb"],["D:/hexo/public/标签/读书/index.html","4e1cee8c1218778b1dc24289288baa0e"],["D:/hexo/public/标签/钟文/index.html","b1c191a83f73b0f2d88358b4595a0552"],["D:/hexo/public/标签/阎连科/index.html","71d0c6c156b1f1a7fd03f834e5ba04d4"],["D:/hexo/public/标签/随想/index.html","f5dbe1a8d65e226973d853f0683b8fa2"],["D:/hexo/public/标签/马尔克斯/index.html","3328818275132bb2734eb83365b7ba50"]];
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







