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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","1465b6e30b213edceb65a24a38171e78"],["D:/hexo/public/2019/09/18/百年孤独/index.html","5ea238c19071f7ad99857405f1df1554"],["D:/hexo/public/2019/09/18/鼠疫/index.html","29281c0a009cf79552b9e4f341338cfd"],["D:/hexo/public/2019/12/20/cloud/index.html","da59b0b72ef3887a0e8ad1b94952c0f8"],["D:/hexo/public/2019/12/21/knn/index.html","0bd9d07210d4d56ac86a5a90083631ed"],["D:/hexo/public/2019/12/23/finish/index.html","ce41d8133fcc41d87eecc8751dff812d"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","5f1dfa72d258d8c54e2caf6b8d3d5b88"],["D:/hexo/public/2020/02/28/Linear/index.html","6cda9f90139e007c262536c575862cd2"],["D:/hexo/public/2020/03/21/time/index.html","2c7b8423c5c29a8349c3c0da155dc640"],["D:/hexo/public/2020/05/23/1984/index.html","50e5634f6c888e919a5e62e21911f60e"],["D:/hexo/public/2020/06/09/git笔记/index.html","b564cd32b86d8e82beb025ffbb7068e4"],["D:/hexo/public/2020/07/29/sheep/index.html","c37b17a65166bac194bd59746447c1fa"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","fce3888a17d516f2c244607e46c819e2"],["D:/hexo/public/2020/08/09/Haruki/index.html","45ced6b049e21d6ac74b33ec2ba438db"],["D:/hexo/public/2020/09/13/summarize/index.html","6ad7de4b3e4432008c92a2461b47d9ab"],["D:/hexo/public/2020/10/19/Thorn/index.html","28b443479a57cdbeeb47b81d1eb2af81"],["D:/hexo/public/2020/10/28/huiyi/index.html","4c81b5c5f4c0072c6c96366ba3e57623"],["D:/hexo/public/2020/11/26/一点感悟/index.html","875e59a85a736532d8202d8e7ace775e"],["D:/hexo/public/2021/01/02/crime/index.html","57ee2a937b529254cfd992966afc5fd9"],["D:/hexo/public/2021/03/08/mother/index.html","5965297096ae47a84ce8e15456358e26"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","1dceb9376fb680fc668c60cb8215f819"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","266fd524f18f21d1c97999d6a5dd3922"],["D:/hexo/public/2021/03/31/Cholera/index.html","907cc5595ed42c07477ceffb4b9ccdd1"],["D:/hexo/public/2021/03/31/镜中/index.html","e2a8a2c2fdb7aea0dd90afbfb4fb44bc"],["D:/hexo/public/2021/04/03/最后的对话/index.html","a221f61d92929da49903706d7437569b"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","c40f79c5a878fe1bf9cf0a16e4abc82d"],["D:/hexo/public/2021/04/06/雪国/index.html","6299d3cf1ffcb594926667875c5439a4"],["D:/hexo/public/2021/04/09/骂观众/index.html","15d60b77fa4a568abd8120ecfcd7af93"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","95c346e1ca44f6735e641468e10dd9a8"],["D:/hexo/public/2021/04/21/家/index.html","653e024b393b8d6a4cfa8e34174fb8b2"],["D:/hexo/public/2021/04/24/光与岸/index.html","6da479368b55c43dbe7bb47e7a4b1a30"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","656b181ef62ffbbf7b4d6500fd2f468e"],["D:/hexo/public/2021/05/03/五月伊始/index.html","e711ce15dcedbac2152696b1c9aedf25"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c4a2fb755025ec232880b0468104789d"],["D:/hexo/public/2021/05/31/迎接六月/index.html","c200a5f2f7207e5ae6b0da3379e1f355"],["D:/hexo/public/2021/07/07/七月/index.html","fb6a5245cee23423880fa3f13bbe0168"],["D:/hexo/public/2023/05/16/dunhuang/index.html","d2d1d5f3c84d0965c7a742dfe503e543"],["D:/hexo/public/2023/07/29/yeqi/index.html","90fd389bd6bb48a0732e74e2bae52fa6"],["D:/hexo/public/2023/09/10/life/index.html","966cd6ec9c7b1ff9d4248717f4e7e94e"],["D:/hexo/public/2023/10/15/qingdao/index.html","3066bcb35e89500c7d481b5714ff7e7c"],["D:/hexo/public/2023/12/14/11yue/index.html","3c39de05ec240a7d85428bcebb7e4d5c"],["D:/hexo/public/about/index.html","7cfab60753d47691773fa687b0073f25"],["D:/hexo/public/archives/2019/09/index.html","80f7d8d5ff617109c0f538400b8045c3"],["D:/hexo/public/archives/2019/12/index.html","eb23658c3d922b18cce36bc68a6a980d"],["D:/hexo/public/archives/2019/index.html","c05e5a23e82f4158f80e074984c788f7"],["D:/hexo/public/archives/2020/02/index.html","7672c297846c20997c844fc36a2403c4"],["D:/hexo/public/archives/2020/03/index.html","e0baeefbb657e70b2cff496a60d5f70a"],["D:/hexo/public/archives/2020/05/index.html","ac9a31e463630565ef2f0f88ad9870ff"],["D:/hexo/public/archives/2020/06/index.html","bb405d9bae4322625e49e870a1d12214"],["D:/hexo/public/archives/2020/07/index.html","9b895b2493e26bb2b2c73383b43a51c5"],["D:/hexo/public/archives/2020/08/index.html","6519de5cdcb7e783eba1e731d2b86583"],["D:/hexo/public/archives/2020/09/index.html","1af7a87656ea315da93c0ce910f5c6d3"],["D:/hexo/public/archives/2020/10/index.html","6cffcb4bd0e69963f38777cb80d564c8"],["D:/hexo/public/archives/2020/11/index.html","1ffcd50737fa0a596e16fef3bf5044f4"],["D:/hexo/public/archives/2020/index.html","26829e02a1986eade71eaa820e6c5f23"],["D:/hexo/public/archives/2020/page/2/index.html","97cc194ac91db8a2df80a68c64e07088"],["D:/hexo/public/archives/2021/01/index.html","557f523cf065d4607c9c9ef339d6560a"],["D:/hexo/public/archives/2021/03/index.html","3c1024444898413dbbbfa1dd808eea7a"],["D:/hexo/public/archives/2021/04/index.html","ef19dcc5cb63d4311325b988e26bb4a4"],["D:/hexo/public/archives/2021/05/index.html","5620fb234c2020cf4e7e20630c198551"],["D:/hexo/public/archives/2021/07/index.html","f59df84502f4b7defe6910b9679a4e17"],["D:/hexo/public/archives/2021/index.html","ce7bad1a595c2c81e86d0075ce6a5e21"],["D:/hexo/public/archives/2021/page/2/index.html","a967d63cc59253e6b58dda043e7f41fd"],["D:/hexo/public/archives/2023/05/index.html","66b808ec98db9f4a11d5a9e56f39c312"],["D:/hexo/public/archives/2023/07/index.html","6943e0826ed592931fbcaf6c44fd6034"],["D:/hexo/public/archives/2023/09/index.html","d21e60db0133654efb37848f65a858fc"],["D:/hexo/public/archives/2023/10/index.html","346e0902d3d71cfb367bcef1b40558bc"],["D:/hexo/public/archives/2023/12/index.html","c3b873fa54b2e07535a23f354be37482"],["D:/hexo/public/archives/2023/index.html","63934c10d0a75a5e9437b8b7823c3a19"],["D:/hexo/public/archives/index.html","140ed22b5498a5ead855bbe47b409075"],["D:/hexo/public/archives/page/2/index.html","86447b2eded472f34c1667449b2813a1"],["D:/hexo/public/archives/page/3/index.html","93b44a6e23f577e76b193e0d91ad5b27"],["D:/hexo/public/archives/page/4/index.html","97c120f6e8a5ee24b136625b55f60204"],["D:/hexo/public/archives/page/5/index.html","8769c1121eaf9415c137eb97f953fe32"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","4457ad518be30aa878157bd25f34150a"],["D:/hexo/public/categories/index.html","1650724e03c9d6627554c6eb8de17521"],["D:/hexo/public/categories/写作/index.html","509f21b8bba567153e068e8babb4b532"],["D:/hexo/public/categories/学习笔记/index.html","609ee2c3c417686e0573ab3e0f66731b"],["D:/hexo/public/categories/感悟/index.html","6dc1b5955f7dcec5c0ec41d11892c162"],["D:/hexo/public/categories/感想/index.html","e1e4468e7f612d0ad9e8601042969b6c"],["D:/hexo/public/categories/感想/page/2/index.html","d702b0bb350646b130bc15c3f4178b45"],["D:/hexo/public/categories/数学/index.html","67cd25768fe505be24f960fa76c66471"],["D:/hexo/public/categories/文章收藏/index.html","36e30b24193acac519a7169888c7071f"],["D:/hexo/public/categories/旅行/index.html","443623d8c5b4664f4553ccdce19fb7fc"],["D:/hexo/public/categories/日记/index.html","807e9935473d1389c4dfda448b5f938d"],["D:/hexo/public/categories/机器学习/index.html","17e59c8044b9fbbee187376ef2cb6a99"],["D:/hexo/public/categories/诗歌收藏/index.html","78d4b5f5b38c14dc8695de80c041ddfd"],["D:/hexo/public/categories/读书笔记/index.html","7a8907e14cc541bab2539067b116da3d"],["D:/hexo/public/categories/读书笔记/page/2/index.html","83667ca516a0f3ad5cba3e12d9b83b89"],["D:/hexo/public/comment/index.html","909f0736bd37ec2e3a7ed4d6c7c5a1ff"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","2b7f4d3f5b2227ff0c41777b0ac6d62b"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","7f002b66546814148e405a6a0f9c5e1f"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","f65120b524fc7f0adfd76d91fa0fe355"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","8eca9edd96a8de631955f13373e17d5a"],["D:/hexo/public/music/index.html","50e255d5d8b3394d36a3a2a2efb14187"],["D:/hexo/public/page/2/index.html","eebd5d336368b87a97888fd9b24a68d9"],["D:/hexo/public/page/3/index.html","4559ca4960f596e160e498a53d929def"],["D:/hexo/public/page/4/index.html","f8bd1f1bd3641dd63c0faeb9efeefb2d"],["D:/hexo/public/page/5/index.html","297ef182c29a9860b4c12c75e8fe2acb"],["D:/hexo/public/tags/KNN/index.html","e629c70f9300c9219c65a6d3305248b6"],["D:/hexo/public/tags/git/index.html","db8bbaba93dfd02ee9eca24070a5d914"],["D:/hexo/public/tags/index.html","820480f23a66ea32a630e80716230039"],["D:/hexo/public/tags/余华/index.html","2193c7c84a74207afda774b5415cd449"],["D:/hexo/public/tags/北京/index.html","b9ee67d9837b606e97a57441a64451c3"],["D:/hexo/public/tags/博尔赫斯/index.html","1073b63947d78b06a136065d02c2abff"],["D:/hexo/public/tags/回忆/index.html","2dec7480220db4f357f586dd7f07312d"],["D:/hexo/public/tags/孙绍振/index.html","6896f163fec771a564d156ed717d3775"],["D:/hexo/public/tags/川端康成/index.html","3567f64ee6ff571a262074550a81cdb1"],["D:/hexo/public/tags/巴金/index.html","1fe18e86a5236ced30133b149da0baad"],["D:/hexo/public/tags/建站-hexo/index.html","637656e698993bead2e44a1cf6618bb1"],["D:/hexo/public/tags/总结/index.html","033eec921bfc4c34495aa2e563625e05"],["D:/hexo/public/tags/感悟/index.html","0dbf7a785402c8acab8a58bca76aa795"],["D:/hexo/public/tags/感想/index.html","7ce2681860d69ecda0d681783a848937"],["D:/hexo/public/tags/敦煌/index.html","a9dea51b6b8aa2f56f3ec5fd1b35dda6"],["D:/hexo/public/tags/文学/index.html","adff4dc75818eea47f0a0a60f4e939be"],["D:/hexo/public/tags/时空/index.html","4523d7466573793491e997e875024369"],["D:/hexo/public/tags/林轩田/index.html","e68638d3524648694cb2082879f4b2eb"],["D:/hexo/public/tags/生活/index.html","ae9f724293c3195cbb715398445e19d7"],["D:/hexo/public/tags/线代/index.html","e143c5ef94b7b7c05ada3ca310b7742b"],["D:/hexo/public/tags/考研/index.html","f050ba63734ccb2ec986ec936fcaace6"],["D:/hexo/public/tags/聂鲁达/index.html","2dcbfa2265e659edad645834362c3e7a"],["D:/hexo/public/tags/西湖大学/index.html","10f1a5b1ece746f55771f85033a9a0b5"],["D:/hexo/public/tags/诗歌/index.html","092155ffe35b7eec80e760f0a11093d0"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","403074e9f7b4eb05d9073a746a5ca79f"],["D:/hexo/public/tags/读书/index.html","a042456cf4b8257348b8910534859cb2"],["D:/hexo/public/tags/钟文/index.html","67e4ef349d6cd6f43138c4a97aed87f2"],["D:/hexo/public/tags/阎连科/index.html","5f9bc1c6b39c3603e68a9c55641f2906"],["D:/hexo/public/tags/随想/index.html","49d3de90b1045a357a3ae0b4cefbb508"],["D:/hexo/public/tags/青岛/index.html","0e0d12d99b52d037b479abc051301142"],["D:/hexo/public/tags/马尔克斯/index.html","72a493631fa37afbbde9135bf7985080"]];
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







