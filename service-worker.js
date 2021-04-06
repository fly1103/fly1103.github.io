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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","744a5ab361694811807e7e5a2e94fb72"],["D:/hexo/public/2019/09/18/百年孤独/index.html","03166ef72eac64a33473c9170ceabea9"],["D:/hexo/public/2019/09/18/鼠疫/index.html","7b79e5a553bcf10a43329b0aa1cd989c"],["D:/hexo/public/2019/12/20/cloud/index.html","8f1e66f77ec17404710d9410e81d1a33"],["D:/hexo/public/2019/12/21/knn/index.html","fd91e4f20a76d475e5c6cce3ea977f69"],["D:/hexo/public/2019/12/23/finish/index.html","6432c4b49066c0d75ef06dacddfc45a3"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","3148f803d118fa268e3f97744fc93a01"],["D:/hexo/public/2020/02/28/Linear/index.html","57868bcf16bf1a8a980450ceb51fe5aa"],["D:/hexo/public/2020/03/21/time/index.html","9669a478fec8cd85faeaca672eb63ddf"],["D:/hexo/public/2020/05/23/1984/index.html","575759ef390022bfb22b1963e5fa8e87"],["D:/hexo/public/2020/06/09/git笔记/index.html","e2f3976eab8b2aa7edb193820fe7d7e4"],["D:/hexo/public/2020/07/29/sheep/index.html","b0857ca13cb803b4fc225f35467eb709"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","c4153c6b18b8234020daf5d76e3ade3b"],["D:/hexo/public/2020/08/09/Haruki/index.html","82f56e947b9ed89c4286d3b351a8572c"],["D:/hexo/public/2020/09/13/summarize/index.html","0fbce8e9a417535be69486db6c10ab9f"],["D:/hexo/public/2020/10/19/Thorn/index.html","78a1ffe4fa0fed1447c9c8b969f962ad"],["D:/hexo/public/2020/10/28/huiyi/index.html","621162b69cbadb63c5e25a065c49827d"],["D:/hexo/public/2020/11/26/一点感悟/index.html","9df263fac40d4a26ffbc67df788aae7e"],["D:/hexo/public/2021/01/02/crime/index.html","90f1ce3168fc1dfa278ddfdfed20074c"],["D:/hexo/public/2021/03/08/mother/index.html","ab58bc02b53157556837c1a9a5baf422"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","fb1e136ef30979b8f3f87bad6cd45de4"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","25e6b37ce69ef9fc34db0da84c257fc8"],["D:/hexo/public/2021/03/31/Cholera/index.html","1262ab25f69744d060f68c2b0dc8df9c"],["D:/hexo/public/2021/03/31/镜中/index.html","d6db8b81b245b420ca17a0e3de8d6e49"],["D:/hexo/public/2021/04/03/最后的对话/index.html","fc03d5529d43107152f907d989182919"],["D:/hexo/public/about/index.html","b1f272c6faee641687ad21127d617236"],["D:/hexo/public/archives/2019/09/index.html","827189060177787c15b4def6f2e76c9f"],["D:/hexo/public/archives/2019/12/index.html","8fc88eb66bce276055e7c5d90fb8fe49"],["D:/hexo/public/archives/2019/index.html","c568c88d6a6680c3a179c2e3ddb6b2e7"],["D:/hexo/public/archives/2020/02/index.html","fb778f1f98359a879b5c183b6c730f57"],["D:/hexo/public/archives/2020/03/index.html","7d18c87bba7ec57224bfe81e1cf465d7"],["D:/hexo/public/archives/2020/05/index.html","b7b4c9b5b19a396dada417613e48ea77"],["D:/hexo/public/archives/2020/06/index.html","dfd9a10a9eda9781855e04e642568502"],["D:/hexo/public/archives/2020/07/index.html","135e7c50df5007724467229bb85de7d9"],["D:/hexo/public/archives/2020/08/index.html","21d7ba07018cb6d676dadf44340d4d77"],["D:/hexo/public/archives/2020/09/index.html","809a0eaa7333680d2c76705f8ddb9d1e"],["D:/hexo/public/archives/2020/10/index.html","7a43c329ef6f8fb223e0aca0b9e54f9d"],["D:/hexo/public/archives/2020/11/index.html","23b9aa173999c53b29cde50cb361f849"],["D:/hexo/public/archives/2020/index.html","2d330d7cc794e6c20319e026008ce155"],["D:/hexo/public/archives/2020/page/2/index.html","ae7cade0a0525df185bcb34f3ee56644"],["D:/hexo/public/archives/2021/01/index.html","8300d3a779e2b4ac7173ae381611d1cb"],["D:/hexo/public/archives/2021/03/index.html","05a616710c0d466130cc05f851a5f1f7"],["D:/hexo/public/archives/2021/04/index.html","b9874112c7bcb714116cd9cf77db2010"],["D:/hexo/public/archives/2021/index.html","7018bbda1b7dfab2487b574fd4555eb7"],["D:/hexo/public/archives/index.html","712fcb87f8694e950a8c5b4011492fbf"],["D:/hexo/public/archives/page/2/index.html","2662392f92310da14d7817370e725bd6"],["D:/hexo/public/archives/page/3/index.html","27f8097e447d18241e8054d807e5fa0b"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","da172ce617c48bc7f37e6eca58a3e22f"],["D:/hexo/public/categories/index.html","9e0d9e3bd3a6c434f5dbcebffb1dd762"],["D:/hexo/public/categories/写作/index.html","5aa6c3924431b1d6e7f633b4287c1adf"],["D:/hexo/public/categories/学习笔记/index.html","e40c476bf2f436f987f5321b8d371728"],["D:/hexo/public/categories/感想/index.html","4bce908fc6e4a0c9494d3290e7c6708d"],["D:/hexo/public/categories/数学/index.html","a4126186b16193cd87b71c660bfb3f98"],["D:/hexo/public/categories/文章收藏/index.html","7888c36430b979bede4798d2d7951768"],["D:/hexo/public/categories/日记/index.html","1861b11afd55587a5b47b64168700b4f"],["D:/hexo/public/categories/机器学习/index.html","595871ac579fa19af072e9e51416d649"],["D:/hexo/public/categories/诗歌收藏/index.html","9d1eed78e2e15f4895031adb5dce51d0"],["D:/hexo/public/categories/读书笔记/index.html","17c733eed208bd8a258890d0fb2ce34e"],["D:/hexo/public/comment/index.html","16bacd1d6d73d9aa1e33d712e113b9db"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","76e1166cc55b121bb1d73cb5e54b284a"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","014e964b18b367dc7ea255415fa10212"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","a45b979615563ac4fefe952e03e96e69"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","1c0bc9735695630c7d3e9ad28490e653"],["D:/hexo/public/music/index.html","a8216db120721ddd9e586bbd59cab0f1"],["D:/hexo/public/page/2/index.html","fe443e8c005eb3673544b9dc5f0f2b9a"],["D:/hexo/public/page/3/index.html","fd38dafc15f1094bf9bb09441bebfaae"],["D:/hexo/public/tags/KNN/index.html","f7794702f31a1dfa40b869ed00698784"],["D:/hexo/public/tags/git/index.html","4d6698ccd216d26d6219c088f48b036c"],["D:/hexo/public/tags/index.html","d7bf5bca239cb30c2601770e4cb4d745"],["D:/hexo/public/tags/余华/index.html","1275b3d1a72ae9340286bff548ebd3f4"],["D:/hexo/public/tags/博尔赫斯/index.html","3228b75f9245ba520994c846269dd0a6"],["D:/hexo/public/tags/回忆/index.html","57f920636d6e9379c766964f01dc89ac"],["D:/hexo/public/tags/建站-hexo/index.html","c913d6acc9766f6646aeabdd08f7da20"],["D:/hexo/public/tags/总结/index.html","dd9ba49efb8142a47cd4fda196c13b8d"],["D:/hexo/public/tags/感悟/index.html","65be4906ba6981c4bed168643c12839d"],["D:/hexo/public/tags/时空/index.html","e522c43c797b5e453de0442b1f2acf67"],["D:/hexo/public/tags/林轩田/index.html","d40e40aa4223b7e844db45ee4ff02120"],["D:/hexo/public/tags/线代/index.html","d593656463283bd9c1bd48fee3f4493e"],["D:/hexo/public/tags/考研/index.html","8696a8442597f8a304f396fbdbe0da88"],["D:/hexo/public/tags/诗歌/index.html","f0ce0686863a1f15d33cbbee2dd38ec0"],["D:/hexo/public/tags/读书/index.html","4830ef7b6c299a845bf66486eeeb2d53"],["D:/hexo/public/tags/阎连科/index.html","4b9c63c5d26a19d9208e213fcdac6f2a"],["D:/hexo/public/tags/随想/index.html","13ef609ac8f57eecbc75f0ab4762bed6"],["D:/hexo/public/tags/马尔克斯/index.html","ee3de0e72013ac0bad9c5e871980173d"]];
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







