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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","24e0852834cf9e932613e69805afcbcd"],["D:/hexo/public/2019/09/18/百年孤独/index.html","049afd4105ca359cb93ca6bd1e36b685"],["D:/hexo/public/2019/09/18/鼠疫/index.html","438001ef4f64acb7f5ca85442910c35b"],["D:/hexo/public/2019/12/20/cloud/index.html","2609671d7ba3144cda8640ba10488af5"],["D:/hexo/public/2019/12/21/knn/index.html","efcf51fd9790bcbefad051c3f0e23cb5"],["D:/hexo/public/2019/12/23/finish/index.html","0b34555145121a3a8868707bf99c543b"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","553c6a7d566c17d9e8e75e7e5dadf77e"],["D:/hexo/public/2020/02/28/Linear/index.html","d08dc28ada8c43bd645e54daf97dab93"],["D:/hexo/public/2020/03/21/time/index.html","4ba9c7a3b528959381de5226ad8b5c45"],["D:/hexo/public/2020/05/23/1984/index.html","d5ceef9c887bb0ab07c0818647b63f3e"],["D:/hexo/public/2020/06/09/git笔记/index.html","b343fe56c43b8477332d5903d0b85893"],["D:/hexo/public/2020/07/29/sheep/index.html","7ee95e441f84038e75e4b0335f45a30e"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","c10352603cda0fe72eed7d8d1a1eea41"],["D:/hexo/public/2020/08/09/Haruki/index.html","40fe82f1ac81e4a99369dfef6d356cd6"],["D:/hexo/public/2020/09/13/summarize/index.html","5a9cc170f62cd16d209d9a7ba39992e2"],["D:/hexo/public/2020/10/19/Thorn/index.html","f1210daa568b750385df3a95b5a9dfca"],["D:/hexo/public/2020/10/28/huiyi/index.html","6d02b20e9de9c27e108baedd23e8d0b7"],["D:/hexo/public/2020/11/26/一点感悟/index.html","05e7497c47ad45d059394980362cbfb5"],["D:/hexo/public/2021/01/02/crime/index.html","3b05b29a7227fb531fec1605570d2d52"],["D:/hexo/public/2021/03/08/mother/index.html","a257fee30c0e37a0a5287dc212e719cf"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","c46cd1604a169b62cf2274e25b0e05e0"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","80b2bf99bc02b4434383dacc85f356b7"],["D:/hexo/public/2021/03/31/Cholera/index.html","304dc18b59776a2343e449d3fba5010d"],["D:/hexo/public/2021/03/31/镜中/index.html","8c07907a92728f0ff58211f6f1714aea"],["D:/hexo/public/2021/04/03/最后的对话/index.html","a37518f9c2ece50f72d68ad0e9da4c03"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","0e0ffbbd8d9ccb81e21d8de5447544dc"],["D:/hexo/public/2021/04/06/雪国/index.html","7daed51bf8b7fbee68d28b3ec402513d"],["D:/hexo/public/2021/04/09/骂观众/index.html","fc6e5fc207e859322c892b49877c45c3"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","fba35243588a6bb495f9346fe77cba96"],["D:/hexo/public/2021/04/21/家/index.html","f4afc721e4b4ec35a8fc48a039d6b183"],["D:/hexo/public/2021/04/24/光与岸/index.html","792213428a36468315f3373d42b74ca7"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","0e111b7da6baa8838d1cfb9f885ebdaa"],["D:/hexo/public/about/index.html","1e347f23cc56574cb2a62f195900624c"],["D:/hexo/public/archives/2019/09/index.html","fef7eaae889d4feea87ffeef38224c1c"],["D:/hexo/public/archives/2019/12/index.html","cf37ebaa2a95b391dceb0b54b9118bb0"],["D:/hexo/public/archives/2019/index.html","ad3edbb6fd26cba6717320ab4ffbd5a0"],["D:/hexo/public/archives/2020/02/index.html","ad6f4659db9bb58af9705a2cac8f9653"],["D:/hexo/public/archives/2020/03/index.html","c8f665f6cfe0e02a77904f40e83b05ff"],["D:/hexo/public/archives/2020/05/index.html","c0ccc5bae44f8a4d8359a6e05790105b"],["D:/hexo/public/archives/2020/06/index.html","049715731f31366ad491604382f4bfc3"],["D:/hexo/public/archives/2020/07/index.html","0f15dfa5d435b92912ef153544b2c9b0"],["D:/hexo/public/archives/2020/08/index.html","39ad574ba96d639c0d2c49a4b036bef9"],["D:/hexo/public/archives/2020/09/index.html","05a603cdfdb34c4a71ae44ac337f3387"],["D:/hexo/public/archives/2020/10/index.html","795363be551bc42a0788f03254f59971"],["D:/hexo/public/archives/2020/11/index.html","bab4d2b196f9c298c246d4479d7633bc"],["D:/hexo/public/archives/2020/index.html","ddbd2b2f15b106a33241c9c5afcdc397"],["D:/hexo/public/archives/2020/page/2/index.html","5466a229c427a904f2c6372e9dfffb34"],["D:/hexo/public/archives/2021/01/index.html","2b37ec7d9d4b775674b80ef2939d588a"],["D:/hexo/public/archives/2021/03/index.html","81be96a24757147450e01a89eba7584f"],["D:/hexo/public/archives/2021/04/index.html","b9a96ef5348c63759d57cc34891c1680"],["D:/hexo/public/archives/2021/index.html","9f6b3ea79db7603fcedf825550f5e77c"],["D:/hexo/public/archives/2021/page/2/index.html","949806584cc7879b28c4127b2bdad6b4"],["D:/hexo/public/archives/index.html","3248a4fb6852dc32afa3462b4b2661ad"],["D:/hexo/public/archives/page/2/index.html","8717bc2c73040ef9c3f0f411eaf6d593"],["D:/hexo/public/archives/page/3/index.html","990d5c8803a3851e96ed9b179ad754fd"],["D:/hexo/public/archives/page/4/index.html","d91b242b2221c96e4bf75a8172b56a23"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","024fcc34327f0e705f59cefa078e1a81"],["D:/hexo/public/categories/index.html","ade16b4b35905061fe92ae70efaad587"],["D:/hexo/public/categories/写作/index.html","a634ba8be73051a1bf612bd50d08593f"],["D:/hexo/public/categories/学习笔记/index.html","c89d1ecd9f8caafacb3ef5762db39a90"],["D:/hexo/public/categories/感悟/index.html","464025becc24e4e0fecc0902fca3034b"],["D:/hexo/public/categories/感想/index.html","0ac279f5fa1d9ff44847eca15c117fed"],["D:/hexo/public/categories/数学/index.html","6274e824646db103f8f80c1e392777a9"],["D:/hexo/public/categories/文章收藏/index.html","a46cb91bc4eea08e764462e18a6c85ff"],["D:/hexo/public/categories/日记/index.html","72d5e8b549310afe9d2278cfdd8a53a6"],["D:/hexo/public/categories/机器学习/index.html","5f333598b651d517fbd41c482e15542c"],["D:/hexo/public/categories/诗歌收藏/index.html","d113798747c08ef394dc395dbaeca54c"],["D:/hexo/public/categories/读书笔记/index.html","c46970de50c1bb0166e59bc1db140abc"],["D:/hexo/public/categories/读书笔记/page/2/index.html","2e70cf5eb27faacd845b091e325081c2"],["D:/hexo/public/comment/index.html","618c5afeb6e286ee61d10f7d2bf3c959"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","6e620c608bfd5a727d767b555b92d217"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","7eeaf753244ba219ac7d4f5fc223a42e"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","7a6d18078892f718ddd627e002690a1b"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","1e6c0beea2ce2c47fe7b03d562f4308b"],["D:/hexo/public/music/index.html","d502e03e4627095f24ea9c3556ae2525"],["D:/hexo/public/page/2/index.html","cee41ac0afe526138e8b067a81845ed9"],["D:/hexo/public/page/3/index.html","c193417cc2c1e8a9fff3ad2edf4f2cd4"],["D:/hexo/public/page/4/index.html","1a9d280d94c29b3f743aaa19fe6be70c"],["D:/hexo/public/tags/KNN/index.html","745548a4d48dcafd324bc089d0937ab5"],["D:/hexo/public/tags/git/index.html","1262afa61c0f545af84e9840cf097a75"],["D:/hexo/public/tags/index.html","0c835db0461d5b5ce1eabc0878a6da1b"],["D:/hexo/public/tags/余华/index.html","0bc32bf534b27f2a1980bc20119ddd38"],["D:/hexo/public/tags/博尔赫斯/index.html","343bab449c7254446b2dc33903f23437"],["D:/hexo/public/tags/回忆/index.html","547174568f50523bc2eae5e137efb06d"],["D:/hexo/public/tags/川端康成/index.html","11b7daf4c0bc00719c7052daecc0f12b"],["D:/hexo/public/tags/巴金/index.html","ba22d7328bc00de0a74b5bd27fc95aef"],["D:/hexo/public/tags/建站-hexo/index.html","184cb3c58988b476a72fee2a95c3baad"],["D:/hexo/public/tags/总结/index.html","bdd86a9a3353b5ed0d697e6241afa4e0"],["D:/hexo/public/tags/感悟/index.html","1b8dad1facccd16178587874d58c35ba"],["D:/hexo/public/tags/文学/index.html","ab50209f77cfbf44377111701bdbdcf5"],["D:/hexo/public/tags/时空/index.html","6d41db926e689cb7a3d07596a1617156"],["D:/hexo/public/tags/林轩田/index.html","66dfed9c3c16d9815d42976c00c55aac"],["D:/hexo/public/tags/线代/index.html","2117c69972286e554332619af8a13abe"],["D:/hexo/public/tags/考研/index.html","0a54089bd4812788ea4ff6bccaaf1791"],["D:/hexo/public/tags/聂鲁达/index.html","b37d11982434213c86d2aee1fc443c4f"],["D:/hexo/public/tags/西湖大学/index.html","e6c2409434cd025960b87af99c1345be"],["D:/hexo/public/tags/诗歌/index.html","22e9da2ef719a41692a9e62b14c438c9"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","1a1592730dfb20f2e0763c1dc572146e"],["D:/hexo/public/tags/读书/index.html","1cca73d60959a07fbba921c4ac272484"],["D:/hexo/public/tags/钟文/index.html","fc1f2921b8705815f7f6889babcf9eb4"],["D:/hexo/public/tags/阎连科/index.html","efc55cbfbd105579f36f1cde52e97c2b"],["D:/hexo/public/tags/随想/index.html","0d51b06fbeedd7c6a468b10165e5f2ba"],["D:/hexo/public/tags/马尔克斯/index.html","d6d0f1073a82eb72a238217fbe98bff5"]];
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







