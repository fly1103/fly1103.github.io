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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","44f1bacc4ab874797ef4050e4f4705ac"],["D:/hexo/public/2019/09/18/百年孤独/index.html","6603af2dbdf2cf023731775af2f9ea7e"],["D:/hexo/public/2019/09/18/鼠疫/index.html","aab130280a32cc87ca4353ae86a3cbdb"],["D:/hexo/public/2019/12/20/cloud/index.html","dfa9df10dfa8f756469ecde1724d579d"],["D:/hexo/public/2019/12/21/knn/index.html","0f649ce8420359b0ae601d80e7137ebf"],["D:/hexo/public/2019/12/23/finish/index.html","67ceaef9c5c57fae6cac66c1ea769c43"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","5120d1ec7909ced5eac1ee4a028ed200"],["D:/hexo/public/2020/02/28/Linear/index.html","daa7e410137da8cbf03fbf2074eece50"],["D:/hexo/public/2020/03/21/time/index.html","4f5938109468cfe458708d0afe77d263"],["D:/hexo/public/2020/05/23/1984/index.html","19454d5c53e19c3df7e1af2e26ff59dc"],["D:/hexo/public/2020/06/09/git笔记/index.html","f4414927d6e97e587844c14ff9dd584c"],["D:/hexo/public/2020/07/29/sheep/index.html","95b7416224a172b8bb081989fefa3cdc"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","7f0e844cea16e7631ede44dc1703a5bc"],["D:/hexo/public/2020/08/09/Haruki/index.html","084ddf90f3e782957306bdab78768c16"],["D:/hexo/public/2020/09/13/summarize/index.html","10026133a25009426c54335af181222c"],["D:/hexo/public/2020/10/19/Thorn/index.html","079cb308d3677c80a980ffd62ab0dbe5"],["D:/hexo/public/2020/10/28/huiyi/index.html","c3bb5ed571d68eeb6569aa8883ba2172"],["D:/hexo/public/2020/11/26/一点感悟/index.html","0ef707a54f5c318de7100156e6f648ad"],["D:/hexo/public/2021/01/02/crime/index.html","0855faf0c97c404c0a14812264a57039"],["D:/hexo/public/2021/03/08/mother/index.html","ff723d364a6cc48f41cba98fecb939f2"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","b2e3b36002af2eb5b287a3ba862abf95"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","d3c73afeff7764a80d7cbdd8fcdff6f2"],["D:/hexo/public/2021/03/31/Cholera/index.html","9aae3f9df6f492389ec372d505475473"],["D:/hexo/public/2021/03/31/镜中/index.html","370d95d2de84195d520edf92ca2d5031"],["D:/hexo/public/2021/04/03/最后的对话/index.html","e75160635a138c54c9f27a8053929c57"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","74111ef93d1ed69149359b02ba7df4f4"],["D:/hexo/public/about/index.html","bc8f1023d6768732cd758638e901a5ae"],["D:/hexo/public/archives/2019/09/index.html","70bb9e37aa337886f8ce2354c2e4fc91"],["D:/hexo/public/archives/2019/12/index.html","0a967203be031d3f322ba79b91b6fe25"],["D:/hexo/public/archives/2019/index.html","7f79d2bbbe3687e1a21a39f2d9fab9bd"],["D:/hexo/public/archives/2020/02/index.html","55a6e96d276e2d2345e189ab9303ae78"],["D:/hexo/public/archives/2020/03/index.html","15613bc3541301f9d8d57335d8d9c36c"],["D:/hexo/public/archives/2020/05/index.html","c15b09554539e17366dac9a981a6d20e"],["D:/hexo/public/archives/2020/06/index.html","52e7e8929ef73dca5e708589e0a1e102"],["D:/hexo/public/archives/2020/07/index.html","e711028d9a91bad5f745fe06d75ea9de"],["D:/hexo/public/archives/2020/08/index.html","fe6c7dbfcb4f5da9d82189150fa03b67"],["D:/hexo/public/archives/2020/09/index.html","2533579089cb12252e678d168a94fce0"],["D:/hexo/public/archives/2020/10/index.html","71c4610197630ea04945f31974851491"],["D:/hexo/public/archives/2020/11/index.html","f56fc90b45b2df84c2eaa76200a7f68a"],["D:/hexo/public/archives/2020/index.html","ebcb838cf932dd51393ac59a1f8c0272"],["D:/hexo/public/archives/2020/page/2/index.html","a9fb69f2b060336591489a479c7a0ab5"],["D:/hexo/public/archives/2021/01/index.html","1879e2ce8e6c7a0d30d2ca33b14f27ac"],["D:/hexo/public/archives/2021/03/index.html","3052658ba48b220d4fa147ba0c525750"],["D:/hexo/public/archives/2021/04/index.html","dd050b098a457ba2b010a4dac467ea82"],["D:/hexo/public/archives/2021/index.html","803b8b8b977adf0ee389c807100b14f1"],["D:/hexo/public/archives/index.html","337c9d0a5be9218f1d98fffd6e5d9c44"],["D:/hexo/public/archives/page/2/index.html","cac1800ebd2073a933b780d3b90b44e5"],["D:/hexo/public/archives/page/3/index.html","216413da6ae0bbe9e552d8dd19faa296"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","72a640fa3497ebc4459397d5bf721c58"],["D:/hexo/public/categories/index.html","64575a44c7f04c631be933989adc5575"],["D:/hexo/public/categories/写作/index.html","650d31b0702c969009fb9175b20b5fab"],["D:/hexo/public/categories/学习笔记/index.html","e6de1d76fcde91397d18c1e821e7a232"],["D:/hexo/public/categories/感想/index.html","ef40720e218359d46945382dccb8d535"],["D:/hexo/public/categories/数学/index.html","6287f0dba7d5bc0b66a3cb3a01a526f0"],["D:/hexo/public/categories/文章收藏/index.html","35482bb008a8d326275ee52dac480d6a"],["D:/hexo/public/categories/日记/index.html","cafd0f111a3c0a00b53b1a673fc1b056"],["D:/hexo/public/categories/机器学习/index.html","713f293883c777f139047b5c691931f0"],["D:/hexo/public/categories/诗歌收藏/index.html","1052f6491e1cafa04d800922460af6ce"],["D:/hexo/public/categories/读书笔记/index.html","ada0ad598805abe8cf5ed2f8193e6918"],["D:/hexo/public/comment/index.html","e1770735a206d35c30c11ef58c81f33b"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","dc9854990d20415fc43239acf95e620a"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","a6f583cc3590a95ccb0c5f87538f333a"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","30aa3a5bcea6cb6843d632aa2af0c320"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","b8cbdbee78da33273a6e4aa0ca3cc9b2"],["D:/hexo/public/music/index.html","565e89b884bbdeec9206cf971ff30ae6"],["D:/hexo/public/page/2/index.html","41f0856b2170c9c2cf376d03ec0ee11f"],["D:/hexo/public/page/3/index.html","2323949a97cf403ea0048390a07dd5dc"],["D:/hexo/public/tags/KNN/index.html","1420d0437b616a0c2c86e0798fd6d029"],["D:/hexo/public/tags/git/index.html","0a5ae9c4416d497d5ed076f854493bd0"],["D:/hexo/public/tags/index.html","ef5a958b2da825efcbfd194fcbd2df77"],["D:/hexo/public/tags/余华/index.html","c0a1522d2942d86c7aacbd2bbdc1cffc"],["D:/hexo/public/tags/博尔赫斯/index.html","c3b8f9a013c6b3a6e4314073dd9be755"],["D:/hexo/public/tags/回忆/index.html","6b35e44f80bfb1522a53c42485df70ee"],["D:/hexo/public/tags/建站-hexo/index.html","8090ca7c208235b8db5db18cffa1a659"],["D:/hexo/public/tags/总结/index.html","345e1236978bb3d12d4060a4f84ea4c9"],["D:/hexo/public/tags/感悟/index.html","327df30ca1b0a966c5a453a2a18323d7"],["D:/hexo/public/tags/时空/index.html","b893ebacada8c07cd3d9692be1b65100"],["D:/hexo/public/tags/林轩田/index.html","f4f888fd6ae9e3583d21b783ff486276"],["D:/hexo/public/tags/线代/index.html","32138a1b546fc9fda272d6ac74537e1c"],["D:/hexo/public/tags/考研/index.html","e7abab16bed45d953d228709bcfeb39f"],["D:/hexo/public/tags/聂鲁达/index.html","2d35445751e5bd474cefe67cc6af726d"],["D:/hexo/public/tags/诗歌/index.html","6e47f2e8222dad79969bd9e0b47e71c0"],["D:/hexo/public/tags/读书/index.html","e6322b3cfa77ec989d5a494c94500099"],["D:/hexo/public/tags/阎连科/index.html","4bdc1ec4645bc6f07108fc41d9ebe511"],["D:/hexo/public/tags/随想/index.html","fd571c24b8a7a7ae60606e8db7cc690f"],["D:/hexo/public/tags/马尔克斯/index.html","456e65827a83cfef31fa49db0ec6e049"]];
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







