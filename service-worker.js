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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","e5135cd284b8012427f89d9dc1450d6a"],["D:/hexo/public/2019/09/18/百年孤独/index.html","4566da8f95e6eb39cd852f985e2be402"],["D:/hexo/public/2019/09/18/鼠疫/index.html","41d41734dbec78d2156373676ed79774"],["D:/hexo/public/2019/12/20/cloud/index.html","3c9fa917270af6a9a74d6a1b37c3a959"],["D:/hexo/public/2019/12/21/knn/index.html","056fb35328bd44fd22dd044b219194b4"],["D:/hexo/public/2019/12/23/finish/index.html","44dc90fe53af561f3c319bc50bd0e435"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","ee2c30a47eabae0adfbe22bac33d384f"],["D:/hexo/public/2020/02/28/Linear/index.html","64362f8f6eb0da23aac8fd1e221acb71"],["D:/hexo/public/2020/03/21/time/index.html","0c9c16c944313d59efb603a80b538f0b"],["D:/hexo/public/2020/05/23/1984/index.html","8f47d267858548ff92c93fa2753a916b"],["D:/hexo/public/2020/06/09/git笔记/index.html","5595487ca44c1af9f55c127c1376c836"],["D:/hexo/public/2020/07/29/sheep/index.html","f6a8feee3401500a7a938450fa095eb3"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","97689ad302e7deb3784e18ddda9204e9"],["D:/hexo/public/2020/08/09/Haruki/index.html","1da2b3ed9ea421ef6a19495b32a66cf6"],["D:/hexo/public/2020/09/13/summarize/index.html","a839fc02f8f91887d6252294870dadac"],["D:/hexo/public/2020/10/19/Thorn/index.html","a9ff4a3f04bde3040f2f97315676b167"],["D:/hexo/public/2020/10/28/huiyi/index.html","28696c8209173a183db31585dcf961e9"],["D:/hexo/public/2020/11/26/一点感悟/index.html","6bd34ac23cd8f5db15179d1784d76baa"],["D:/hexo/public/2021/01/02/crime/index.html","4d506dbd584feb9719f42973cb50533f"],["D:/hexo/public/2021/03/08/mother/index.html","96f9c2f37961d6083df48d2872108a3b"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","ff32948cc897aecbdc09b8921d956e70"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","5c40b629ced79e43357f0e857b7173f5"],["D:/hexo/public/2021/03/31/Cholera/index.html","8199adffc1c655f05ac0f9fe0ed15a14"],["D:/hexo/public/2021/03/31/镜中/index.html","e03872fa418078b42e7afc6b71d6f414"],["D:/hexo/public/2021/04/03/最后的对话/index.html","4b29767ee2819ee53156c44002b3941c"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","b076fc4f0ad6d4435a11a5074a7b3bd1"],["D:/hexo/public/2021/04/06/雪国/index.html","8aa5472d623fd04e49317fbcd69b761d"],["D:/hexo/public/2021/04/09/骂观众/index.html","bc8dc2a409f4e05a15c66a9a403feb91"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","760cc62c3c6491ff74532b240886b0b6"],["D:/hexo/public/2021/04/21/家/index.html","db22126e41aecd3bb962f3606f618ee0"],["D:/hexo/public/2021/04/24/光与岸/index.html","f5fb875fe3c870acba58b5afe4be1979"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","a6f969e2037eefc61337142d92224059"],["D:/hexo/public/2021/05/03/五月伊始/index.html","f1347e4b1dfcf976d17822e000d30de0"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","db0a8138d7ef9543cc73dbccf98e4a96"],["D:/hexo/public/2021/05/31/迎接六月/index.html","6287c1daa30888eca0e24ec9e50bbc03"],["D:/hexo/public/2021/07/07/七月/index.html","cf07793956129ea8cae3d7b9e8260751"],["D:/hexo/public/about/index.html","4752e0097baa64f03d5c18aaa3823d78"],["D:/hexo/public/archives/2019/09/index.html","dc681258837ab5efaec5e4974b43581e"],["D:/hexo/public/archives/2019/12/index.html","5792cbd41f28127ca20bd9f8d2d4ed81"],["D:/hexo/public/archives/2019/index.html","f3303a1670d0d92d75d53caf5423ad0f"],["D:/hexo/public/archives/2020/02/index.html","337a39c39c56b77f7706672c90ff0525"],["D:/hexo/public/archives/2020/03/index.html","c6866572912d308c5a52d17086ffd21d"],["D:/hexo/public/archives/2020/05/index.html","936ed36448c258ab8c3646e821832b83"],["D:/hexo/public/archives/2020/06/index.html","8e2ef948f8d786b45feb3aed27c329dc"],["D:/hexo/public/archives/2020/07/index.html","f7a7f92b595fc75f555dcd1409e414d7"],["D:/hexo/public/archives/2020/08/index.html","51dedf436939b349b2a4a47bb7b048c7"],["D:/hexo/public/archives/2020/09/index.html","dca41dae5cb872e55813bd2d951a2da7"],["D:/hexo/public/archives/2020/10/index.html","97674c667ade2fd97f6411df9fe8e44a"],["D:/hexo/public/archives/2020/11/index.html","641003ae8ef916f3da4b2fa829b4d714"],["D:/hexo/public/archives/2020/index.html","f2fae90c0969095134f938b5d226832b"],["D:/hexo/public/archives/2020/page/2/index.html","8a1d58b68349f7f5e39f3a04b0e0782c"],["D:/hexo/public/archives/2021/01/index.html","23296fa72bac168d076574ab69d0a15d"],["D:/hexo/public/archives/2021/03/index.html","f76a1d80b662418e14f4f3a26859df7d"],["D:/hexo/public/archives/2021/04/index.html","c2d71db8c7d2b49f6431757603d40ad8"],["D:/hexo/public/archives/2021/05/index.html","73f218fc46c23f2fc0972105c62c945c"],["D:/hexo/public/archives/2021/07/index.html","5f26b61b59d5e06fa3b60752005bc383"],["D:/hexo/public/archives/2021/index.html","0927751a54136e510d0ed4e363d49c67"],["D:/hexo/public/archives/2021/page/2/index.html","40933b85498498b4927a841928422c41"],["D:/hexo/public/archives/index.html","f9fde15cb6d66a1db6fa11d1c0de5bab"],["D:/hexo/public/archives/page/2/index.html","bf9a345cd108977ba98b0a15f5dff073"],["D:/hexo/public/archives/page/3/index.html","9b8a590a34cf1841d3d88205d53cd88d"],["D:/hexo/public/archives/page/4/index.html","ed865a115c02027c38aabbbb18adb707"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","3c232d5b35c7661ab4c4d72859a58f6f"],["D:/hexo/public/categories/index.html","85cda78b57a230a09fc8601c19198098"],["D:/hexo/public/categories/写作/index.html","4f9ce1a040be8d8ce79cc7adb08467e8"],["D:/hexo/public/categories/学习笔记/index.html","46c2409316e57f9672ebf2718391ae89"],["D:/hexo/public/categories/感悟/index.html","9f17e8489b90c92791f0a6d981405493"],["D:/hexo/public/categories/感想/index.html","d0024d42ea4c2963610921bfc102ff2a"],["D:/hexo/public/categories/数学/index.html","0d0c18ab48caf81a7eb619c9929318c3"],["D:/hexo/public/categories/文章收藏/index.html","777cb7b804f97250cc27ae968d35eb88"],["D:/hexo/public/categories/日记/index.html","6472fddd40d56b2725e9d05df60b0313"],["D:/hexo/public/categories/机器学习/index.html","0352a38f47a786674f023eefdb2c81f3"],["D:/hexo/public/categories/诗歌收藏/index.html","7988b1c1319a6cbc53fc60f286ddd298"],["D:/hexo/public/categories/读书笔记/index.html","7cd76f6a555842d07033700540cdfe24"],["D:/hexo/public/categories/读书笔记/page/2/index.html","eae39f44ef20bcc7d97050b657a31ce4"],["D:/hexo/public/comment/index.html","68d858487545ba36110a09b157d02ee6"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","566da1e5478c41d02756fe8598567191"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","15f145503e51d8f466c05a7936918551"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","d8324833f7a6a1d9fc6497bac843e932"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","5580f9be3a3a0b909f75f6d3faa870d2"],["D:/hexo/public/music/index.html","698accfd3fa33d9a2d0c658156018503"],["D:/hexo/public/page/2/index.html","35eaa65a6e2602044e48e283c993dc11"],["D:/hexo/public/page/3/index.html","7dbf50af1b0efcff0fad53e27fa2dfc8"],["D:/hexo/public/page/4/index.html","34f6511a8bd1b182a8d761b23b6c080d"],["D:/hexo/public/tags/KNN/index.html","d796b5438f30f1f2afca37a6d00669f0"],["D:/hexo/public/tags/git/index.html","7eab22854971998a247ef31bf2a35085"],["D:/hexo/public/tags/index.html","e7dfa9e2685a7dc8755c69d4285bef52"],["D:/hexo/public/tags/余华/index.html","424de85487ec72d8e6e87ee341dd5418"],["D:/hexo/public/tags/博尔赫斯/index.html","d8979ae42a10dd971fddc01f8be0bb7b"],["D:/hexo/public/tags/回忆/index.html","691c9b889ef42ff4520566bc8d83cbd2"],["D:/hexo/public/tags/孙绍振/index.html","4207587e8f083d002c2161af1d98ca2f"],["D:/hexo/public/tags/川端康成/index.html","dd1c4f73e3bff22a4ae7b233ed6814df"],["D:/hexo/public/tags/巴金/index.html","164435ac8923448f9f63a5ca384af2b6"],["D:/hexo/public/tags/建站-hexo/index.html","c94a505220924287d6de945188526557"],["D:/hexo/public/tags/总结/index.html","73d766168a0dd87b36705a0ede037087"],["D:/hexo/public/tags/感悟/index.html","00646e175d96fbf6fa4bef42ac5325ec"],["D:/hexo/public/tags/感想/index.html","15ba698487dd2fb3a8e714931b37c8a9"],["D:/hexo/public/tags/文学/index.html","ce26723e8ab499d04240862fdadcdb3b"],["D:/hexo/public/tags/时空/index.html","e2706add3b20c7ab59e00858f748738d"],["D:/hexo/public/tags/林轩田/index.html","f7bb41c062ae6b5ddf85d664d2f2052d"],["D:/hexo/public/tags/线代/index.html","131d3539f4ad128967fffe5e1fa74501"],["D:/hexo/public/tags/考研/index.html","0a6f962d5a157df9137349d7cc232988"],["D:/hexo/public/tags/聂鲁达/index.html","d82fd3db0fdcaa89db977bb1f47b8f93"],["D:/hexo/public/tags/西湖大学/index.html","555811bf10f8dd4cb7e203c789ff088b"],["D:/hexo/public/tags/诗歌/index.html","85927796e105ef17dd421e1e3e4e2d6f"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","2520b20cd0d3abfbce49b923381e8973"],["D:/hexo/public/tags/读书/index.html","f9d77dcba88d31b86fffff1721fb9b58"],["D:/hexo/public/tags/钟文/index.html","4b07a24ddc6525630fcc68fc9617d6a0"],["D:/hexo/public/tags/阎连科/index.html","3bc027eeeb6e43c91b182bdc64eab4d1"],["D:/hexo/public/tags/随想/index.html","6a34ae1e1277ae11c829647fda8dc2c4"],["D:/hexo/public/tags/马尔克斯/index.html","551c517b0d380d0035c206abe3744a98"]];
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







