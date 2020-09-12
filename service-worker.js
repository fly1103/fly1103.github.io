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

var precacheConfig = [["C:/Users/19029/hexo/public/2019/09/18/围城/index.html","7f3b96da0b66d366da24521bf6e34f64"],["C:/Users/19029/hexo/public/2019/09/18/百年孤独/index.html","aa1207e1e31b776905b9586154f02ba4"],["C:/Users/19029/hexo/public/2019/09/18/鼠疫/index.html","fc67d62aa39e9b75bb9dbab4f1ad9281"],["C:/Users/19029/hexo/public/2019/12/20/cloud/index.html","ecd6a4123f91c27f184bec0219bc3156"],["C:/Users/19029/hexo/public/2019/12/21/knn/index.html","862ab7d3e5300440b4d9923a91bc1169"],["C:/Users/19029/hexo/public/2019/12/23/finish/index.html","207afd06a9e1ab036880ebddcf30e935"],["C:/Users/19029/hexo/public/2020/02/24/单词本/index.html","5e36cdb2235f3b20638f5ac1f25afe67"],["C:/Users/19029/hexo/public/2020/02/24/英语听力/index.html","27f22fb4e87e01bc6a2fe4e1dd6d9461"],["C:/Users/19029/hexo/public/2020/02/27/机器学习基石/index.html","28d35c988294af5f94903c9b97438eeb"],["C:/Users/19029/hexo/public/2020/02/28/Linear/index.html","2f35344870881ed6ee993d7ec151753f"],["C:/Users/19029/hexo/public/2020/03/21/time/index.html","6e9449ecdddfe2b810ab2e0db7b58db7"],["C:/Users/19029/hexo/public/2020/05/10/数字电路/index.html","0d3035fe5da7f69c16e945f23997e555"],["C:/Users/19029/hexo/public/2020/05/23/1984/index.html","e106b063a81cd68e30765289dd3a0d92"],["C:/Users/19029/hexo/public/2020/06/09/git笔记/index.html","80cca266dc2ce9a63315906f3262569f"],["C:/Users/19029/hexo/public/2020/07/08/假期伊始/index.html","422d500987e93c116e123973d67a4eed"],["C:/Users/19029/hexo/public/2020/07/29/sheep/index.html","209bc74753a615307ba74518557c03ce"],["C:/Users/19029/hexo/public/2020/08/07/Mockingbird/index.html","43633223e4eda5c75f1d4c1f7aa5663b"],["C:/Users/19029/hexo/public/2020/08/09/Haruki/index.html","4b17d8d9d9d0cdecb90c14d357653479"],["C:/Users/19029/hexo/public/2020/08/19/picture/index.html","9bd94f87a4f5e417bfd3ad3e00b8466b"],["C:/Users/19029/hexo/public/2020/09/13/fansi/index.html","4ce7ceaf568826d548eba4e701bd0919"],["C:/Users/19029/hexo/public/2020/09/13/summarize/index.html","be3fe47c13e478d1f712355da88ec4b0"],["C:/Users/19029/hexo/public/about/index.html","3075d408b8b99f58374d493875cce750"],["C:/Users/19029/hexo/public/archives/2019/09/index.html","b2a59771ad03be1b4e9adaa48fbcb280"],["C:/Users/19029/hexo/public/archives/2019/12/index.html","3f5a39f0647d6cf97775f36d1eb4e8c5"],["C:/Users/19029/hexo/public/archives/2019/index.html","dca8bb30ccdafc5eb4c100c284546a23"],["C:/Users/19029/hexo/public/archives/2020/02/index.html","44848397017cae050e060b2b08ac48fe"],["C:/Users/19029/hexo/public/archives/2020/03/index.html","0f90643c4be87b21e5c7e33508872470"],["C:/Users/19029/hexo/public/archives/2020/05/index.html","7f71523acdf9b19d2ee36e5cde905bc0"],["C:/Users/19029/hexo/public/archives/2020/06/index.html","05e5bae34564a0e99ce1d05c5f34d830"],["C:/Users/19029/hexo/public/archives/2020/07/index.html","96bb46d12c7bfaa5421be01fc289ad62"],["C:/Users/19029/hexo/public/archives/2020/08/index.html","be7e705c11cdd133d3340b798538b45d"],["C:/Users/19029/hexo/public/archives/2020/09/index.html","19918a33afebc4945a790df5e0fff621"],["C:/Users/19029/hexo/public/archives/2020/index.html","c64a4c41e9c89ef36aa900a2a5c1b740"],["C:/Users/19029/hexo/public/archives/2020/page/2/index.html","558ef3a9dfacb3ca9f208794bb24b40b"],["C:/Users/19029/hexo/public/archives/index.html","7c74c34c1a89bb2401926faac64086c1"],["C:/Users/19029/hexo/public/archives/page/2/index.html","39b6820bd6f8828e395c7b9dc7bb00d9"],["C:/Users/19029/hexo/public/archives/page/3/index.html","55ffe443d581faaadd27be0264294712"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["C:/Users/19029/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["C:/Users/19029/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/19029/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/Users/19029/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/19029/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/Users/19029/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/19029/hexo/public/books/index.html","a4b20ad07dea690b0504b114cfdab261"],["C:/Users/19029/hexo/public/categories/index.html","8853c2a1c5ac026ea18d6bc899c54fa3"],["C:/Users/19029/hexo/public/categories/写作/index.html","cdde287737833697e3a1a804c1af23d7"],["C:/Users/19029/hexo/public/categories/外语学习/index.html","891ed10677793eee084648b13aba5527"],["C:/Users/19029/hexo/public/categories/学习笔记/index.html","ca860d70530d4aa787f2a83daa8123d7"],["C:/Users/19029/hexo/public/categories/感想/index.html","d4e0f7a80016c0e2fe316066fb9d9550"],["C:/Users/19029/hexo/public/categories/数学/index.html","3441b3e1e16e18b0ccb9ca3997edcf6c"],["C:/Users/19029/hexo/public/categories/机器学习/index.html","8550c0a62665c942f0c98007f9285b4c"],["C:/Users/19029/hexo/public/categories/读书笔记/index.html","31670044fc1d23368c67a5d7e24dc364"],["C:/Users/19029/hexo/public/comment/index.html","111ec756552d9f31c49ac2870f816596"],["C:/Users/19029/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["C:/Users/19029/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["C:/Users/19029/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/19029/hexo/public/dplayer/index.html","eec9fcaf27554458d1c3733c7669a2da"],["C:/Users/19029/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/Users/19029/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/19029/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["C:/Users/19029/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Users/19029/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/19029/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/19029/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/19029/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Users/19029/hexo/public/index.html","72d3621fb47c953e2fce40d1f937262e"],["C:/Users/19029/hexo/public/js/main.js","9cbf6c306ece928a6939be02f1b09df1"],["C:/Users/19029/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Users/19029/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Users/19029/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["C:/Users/19029/hexo/public/link/index.html","5bba6bb3992e61609599842890a3349a"],["C:/Users/19029/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["C:/Users/19029/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["C:/Users/19029/hexo/public/movies/index.html","50a3e5801462b2553f7e1aa63f12b013"],["C:/Users/19029/hexo/public/music/index.html","5b12f528ceff94b96cdfe0595f6b2f3e"],["C:/Users/19029/hexo/public/page/2/index.html","9545d4ab85e83e8f81c3088c04c5c04a"],["C:/Users/19029/hexo/public/page/3/index.html","008e2cf5bc27b2d20df2a08b2ebb9096"],["C:/Users/19029/hexo/public/tags/English/index.html","5623f1b54036107a7ebd3f15b32d4ed7"],["C:/Users/19029/hexo/public/tags/KNN/index.html","ec3e493b5d50bff158aa5676ef5de4e0"],["C:/Users/19029/hexo/public/tags/git/index.html","54456512cc4e34749e2dfc1dbe9850ee"],["C:/Users/19029/hexo/public/tags/index.html","ed0b781b99233b830e38060c9783abf5"],["C:/Users/19029/hexo/public/tags/假期/index.html","04840335219e834330b6f69012891e49"],["C:/Users/19029/hexo/public/tags/建站-hexo/index.html","a53bddfa4cff4ad481dfdc0a621924fc"],["C:/Users/19029/hexo/public/tags/总结/index.html","c7e7425a6c8c521526048fa0d77b205a"],["C:/Users/19029/hexo/public/tags/感悟/index.html","985f1862583f5d576cd5a00da1501dd1"],["C:/Users/19029/hexo/public/tags/感想/index.html","958ecf33be46f537915be66539c274a0"],["C:/Users/19029/hexo/public/tags/时空/index.html","8be2b6896540391d3ffa2834306cfccd"],["C:/Users/19029/hexo/public/tags/林轩田/index.html","698e1a7f408a95a66abe799fba5ff7e2"],["C:/Users/19029/hexo/public/tags/笔记/index.html","d23fab6963ff6302f032e8cf485551ea"],["C:/Users/19029/hexo/public/tags/线代/index.html","e88c06c429d106e5725d2b8d56a87988"],["C:/Users/19029/hexo/public/tags/读书/index.html","9d84dabf519aaf554c0648394c43e6c2"],["C:/Users/19029/hexo/public/tags/随想/index.html","cbca52264f4486c68a5fdd16079a7053"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







