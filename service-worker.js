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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","1b85565c509383cc0ec7d8c23bf8d100"],["D:/hexo/public/2019/09/18/百年孤独/index.html","01f0e26c516d69517cdb473a4659b5ce"],["D:/hexo/public/2019/09/18/鼠疫/index.html","ef5f36fb29fe9d41d61792c68f4a3101"],["D:/hexo/public/2019/12/20/cloud/index.html","4769c6a122d13d59374177eb9d721b21"],["D:/hexo/public/2019/12/21/knn/index.html","94112f5088cc3093de763c539b0eaacb"],["D:/hexo/public/2019/12/23/finish/index.html","f8767688399287d9b681968c8adfc10f"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","7e53e40a846b28472fd7efd1b7bbf596"],["D:/hexo/public/2020/02/28/Linear/index.html","c08d6136905590f482c8bf5c9b96ed82"],["D:/hexo/public/2020/03/21/time/index.html","868bb13bc44144224c0d8d105f07a4c0"],["D:/hexo/public/2020/05/23/1984/index.html","fc1e56c989a2190cab8cdb8f76cb289f"],["D:/hexo/public/2020/06/09/git笔记/index.html","a7521d088b7be475cbc940feeb3fb745"],["D:/hexo/public/2020/07/29/sheep/index.html","b0647431cedb07aabcf70561570e3a35"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","b79fb0a0a3bda09420c8cf1ee7f3d170"],["D:/hexo/public/2020/08/09/Haruki/index.html","c6febcc4881b96a0b3566471dc628c3a"],["D:/hexo/public/2020/09/13/summarize/index.html","70a97755e1e4c89e916fe9e5c5681686"],["D:/hexo/public/2020/10/19/Thorn/index.html","601db4a1ec60c8f47d5b4cacb001cb3f"],["D:/hexo/public/2020/10/28/huiyi/index.html","94be21584879d463aac727085a8a92bb"],["D:/hexo/public/2020/11/26/一点感悟/index.html","1b1c91b6e793d5ab8329df7c611292c5"],["D:/hexo/public/2021/01/02/crime/index.html","7d470ab8151e276793c72336ddb7028b"],["D:/hexo/public/2021/03/08/mother/index.html","3166bcce16c26803e42147548c3ee4bc"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","b56f779283e2c83503c24b05ce3029ed"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","6a2438f89537634e55f6e2622a77d9c6"],["D:/hexo/public/2021/03/31/Cholera/index.html","018b5da60483df912466c6be110a9e11"],["D:/hexo/public/2021/03/31/镜中/index.html","b713f585997fa420d7bc8e450a66633f"],["D:/hexo/public/2021/04/03/最后的对话/index.html","c8e5f0a6275b1a53ac342661fe4ef89a"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","0b5e2486abfba002e9ac2737912e4f51"],["D:/hexo/public/2021/04/06/雪国/index.html","1c3d9533d44366fdcfbb2e0e78138a2d"],["D:/hexo/public/2021/04/09/骂观众/index.html","6c27f531e68b0ec82ec6083adfc2d554"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","c380003d1cca196bf3e189279da97388"],["D:/hexo/public/2021/04/21/家/index.html","d659b92acca7f48678b9159d18b3dd60"],["D:/hexo/public/2021/04/24/光与岸/index.html","01304a072be2d77a6c982da0139e7163"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","2794e85d0722c11d5cef08d665a83b84"],["D:/hexo/public/2021/05/03/五月伊始/index.html","60ac65af4c0b4f28bb46d20a9f7e72b1"],["D:/hexo/public/about/index.html","caf1292008c54e37e975e8e7dc359d30"],["D:/hexo/public/archives/2019/09/index.html","ddea1c266ca2ff4d4b4512cf57498f7c"],["D:/hexo/public/archives/2019/12/index.html","5cd27d1fb6295e6bb77ca431ac42ab5b"],["D:/hexo/public/archives/2019/index.html","3d608482cbe8c81e38373ca6d9e84376"],["D:/hexo/public/archives/2020/02/index.html","7c6086659e96beb07e31941cbf0aac23"],["D:/hexo/public/archives/2020/03/index.html","f3eaee5ac6089103b060f1ae780ae8c9"],["D:/hexo/public/archives/2020/05/index.html","6a891021522b1e0ae7e0eccf72e25341"],["D:/hexo/public/archives/2020/06/index.html","c34a7b5dde69367e12bcc431c1f7d9c8"],["D:/hexo/public/archives/2020/07/index.html","7a4c0ac8a6e7a6cc93267be935895f0d"],["D:/hexo/public/archives/2020/08/index.html","ddbde8d6b63a7a155288487ef6ee2bdc"],["D:/hexo/public/archives/2020/09/index.html","da31cd9382a34190bb59c2382dfd4c01"],["D:/hexo/public/archives/2020/10/index.html","7194bb96d0e5451c28a0f2b074aded45"],["D:/hexo/public/archives/2020/11/index.html","43beb21ccc10703abb7ba0e89701d874"],["D:/hexo/public/archives/2020/index.html","0bcb8975956598384c177d308ca82be1"],["D:/hexo/public/archives/2020/page/2/index.html","5702def39029f3b43e88fbfe5d907a2b"],["D:/hexo/public/archives/2021/01/index.html","b6677c3afa6dc91605b58e40ec909b99"],["D:/hexo/public/archives/2021/03/index.html","c676a74035091b112bb60ba88e9d458b"],["D:/hexo/public/archives/2021/04/index.html","21e5604c2211d4c1a7223dbe5011582f"],["D:/hexo/public/archives/2021/05/index.html","4b18d76fcf6f630836808112de5f0753"],["D:/hexo/public/archives/2021/index.html","64f013af8a580bc19bcb417c06b0961b"],["D:/hexo/public/archives/2021/page/2/index.html","9df2ebf07069f9db916941975771098e"],["D:/hexo/public/archives/index.html","0485701ff6d2980996e1bb689fb9e4d7"],["D:/hexo/public/archives/page/2/index.html","01c1e56b15bb0b0610f036eaafed4363"],["D:/hexo/public/archives/page/3/index.html","7fca1e3f283d97d7c8feb0ff0d0ec482"],["D:/hexo/public/archives/page/4/index.html","e8c8d9caf63650f24045094aa5d18c97"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","3257098e2bf72054138fdf24ad0187b6"],["D:/hexo/public/categories/index.html","53aa01a73ac4a3dd4e720fdb080f4ce2"],["D:/hexo/public/categories/写作/index.html","af8d667eed1b0f1660f8f5a81801fc9e"],["D:/hexo/public/categories/学习笔记/index.html","7d1f027529215e9bced82d52fdf54d24"],["D:/hexo/public/categories/感悟/index.html","c0d82bb84b3e5e033f1668c704aef68e"],["D:/hexo/public/categories/感想/index.html","10f4b60cd7170b2af689b17fe0b79a3c"],["D:/hexo/public/categories/数学/index.html","e628f433b6265b0c2736aea3e14e0713"],["D:/hexo/public/categories/文章收藏/index.html","140af0294bba13767b7892e61746176b"],["D:/hexo/public/categories/日记/index.html","77637e5d533b3a0100f9d13f870fcf2b"],["D:/hexo/public/categories/机器学习/index.html","a6dadffe670fe321f20f44060c92d4b9"],["D:/hexo/public/categories/诗歌收藏/index.html","de05c95fba576c695aee4a6e244160bb"],["D:/hexo/public/categories/读书笔记/index.html","efb66f5c24143b0a1c6cbf28ddb47c7f"],["D:/hexo/public/categories/读书笔记/page/2/index.html","d06086be4f7dc465f87b00bcd2f8a729"],["D:/hexo/public/comment/index.html","97655f656a98a7f4f6c7c441052a3fd2"],["D:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","50ecf7a62c3ccad495f252edc08a0062"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","7fd4514b3e3a2c3033220fbaaf65b12d"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/hexo/public/link/index.html","c9bbf5323b6008be78e5820c6b663d5f"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","f2e54d2eeb1e3e7122f9c6b1b250ee83"],["D:/hexo/public/music/index.html","010e4d2eefe7e0516a2434237d41ccf0"],["D:/hexo/public/page/2/index.html","8c33e65298d8577a53e601c561c7e17d"],["D:/hexo/public/page/3/index.html","5e5c39126b042cf9e58054cd697b621d"],["D:/hexo/public/page/4/index.html","2ce7a89c541715752407fdb9d344319c"],["D:/hexo/public/tags/KNN/index.html","1d3f37b20f38e2c3ed67879499f935ba"],["D:/hexo/public/tags/git/index.html","8ce7171b2bd1026a24fa28667a75c6ca"],["D:/hexo/public/tags/index.html","21975106f4a99dfdb2432e00b4a5ecee"],["D:/hexo/public/tags/余华/index.html","89e5185670d9f6332376e1c236236f0c"],["D:/hexo/public/tags/博尔赫斯/index.html","b27f4b7cda22539b351417b67a9bc127"],["D:/hexo/public/tags/回忆/index.html","0a0bdc0f543f20af5fc51870145e139b"],["D:/hexo/public/tags/川端康成/index.html","37ffcf0e73fe883def5a403288bb7db6"],["D:/hexo/public/tags/巴金/index.html","ff7b38175b269f3ce8e6ddf6b1928486"],["D:/hexo/public/tags/建站-hexo/index.html","bec6724e65733b24eda9f7d74c92da40"],["D:/hexo/public/tags/总结/index.html","94565ddce50cfec65e5de0b75c7c6e6d"],["D:/hexo/public/tags/感悟/index.html","d3d93e114ae2a7dcb5932345cd99d412"],["D:/hexo/public/tags/文学/index.html","0025a4cf0f2235d2568f2bb5cb4e2707"],["D:/hexo/public/tags/时空/index.html","a9ad79278116284166d885d01c1368e5"],["D:/hexo/public/tags/林轩田/index.html","d88a00d338abb8c1b1187dc18caed798"],["D:/hexo/public/tags/线代/index.html","e6de6cb39be51bb7d20d245d9dd925c1"],["D:/hexo/public/tags/考研/index.html","3befa629f26e7e99b771507f02833db5"],["D:/hexo/public/tags/聂鲁达/index.html","b077bd64ae75d976c4b840db4d1f2720"],["D:/hexo/public/tags/西湖大学/index.html","d34390a7559981830f679bd9db4d85ef"],["D:/hexo/public/tags/诗歌/index.html","65e69bbe1e5d82b7f5825dcfa64d4ff1"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","6260af519ece41463fee1e8b8c69889f"],["D:/hexo/public/tags/读书/index.html","a2c4073de6ddcb4c64f0914b753a1916"],["D:/hexo/public/tags/钟文/index.html","c9f23ce6e835b4de0cd50dcde55d056f"],["D:/hexo/public/tags/阎连科/index.html","d8dd156ae03f5a47143ceb076bc5c107"],["D:/hexo/public/tags/随想/index.html","04c05abe709f174f675f86d6676b976e"],["D:/hexo/public/tags/马尔克斯/index.html","6b7979e4fc0a6a584665cdcf26405c79"]];
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







