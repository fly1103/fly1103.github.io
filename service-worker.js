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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","1465b6e30b213edceb65a24a38171e78"],["D:/hexo/public/2019/09/18/百年孤独/index.html","5ea238c19071f7ad99857405f1df1554"],["D:/hexo/public/2019/09/18/鼠疫/index.html","29281c0a009cf79552b9e4f341338cfd"],["D:/hexo/public/2019/12/20/cloud/index.html","da59b0b72ef3887a0e8ad1b94952c0f8"],["D:/hexo/public/2019/12/21/knn/index.html","0bd9d07210d4d56ac86a5a90083631ed"],["D:/hexo/public/2019/12/23/finish/index.html","ce41d8133fcc41d87eecc8751dff812d"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","5f1dfa72d258d8c54e2caf6b8d3d5b88"],["D:/hexo/public/2020/02/28/Linear/index.html","6cda9f90139e007c262536c575862cd2"],["D:/hexo/public/2020/03/21/time/index.html","2c7b8423c5c29a8349c3c0da155dc640"],["D:/hexo/public/2020/05/23/1984/index.html","50e5634f6c888e919a5e62e21911f60e"],["D:/hexo/public/2020/06/09/git笔记/index.html","b564cd32b86d8e82beb025ffbb7068e4"],["D:/hexo/public/2020/07/29/sheep/index.html","c37b17a65166bac194bd59746447c1fa"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","fce3888a17d516f2c244607e46c819e2"],["D:/hexo/public/2020/08/09/Haruki/index.html","5ddfca5d56fe3b39fa6aedded251298e"],["D:/hexo/public/2020/09/13/summarize/index.html","c0c9d2a0290e7e06dcba1f930f8f4ee9"],["D:/hexo/public/2020/10/19/Thorn/index.html","7472c55c49d1c4f61e2dd0f1e416ef5d"],["D:/hexo/public/2020/10/28/huiyi/index.html","4c81b5c5f4c0072c6c96366ba3e57623"],["D:/hexo/public/2020/11/26/一点感悟/index.html","875e59a85a736532d8202d8e7ace775e"],["D:/hexo/public/2021/01/02/crime/index.html","57ee2a937b529254cfd992966afc5fd9"],["D:/hexo/public/2021/03/08/mother/index.html","5965297096ae47a84ce8e15456358e26"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","1dceb9376fb680fc668c60cb8215f819"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","266fd524f18f21d1c97999d6a5dd3922"],["D:/hexo/public/2021/03/31/Cholera/index.html","907cc5595ed42c07477ceffb4b9ccdd1"],["D:/hexo/public/2021/03/31/镜中/index.html","e2a8a2c2fdb7aea0dd90afbfb4fb44bc"],["D:/hexo/public/2021/04/03/最后的对话/index.html","a221f61d92929da49903706d7437569b"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","c40f79c5a878fe1bf9cf0a16e4abc82d"],["D:/hexo/public/2021/04/06/雪国/index.html","6299d3cf1ffcb594926667875c5439a4"],["D:/hexo/public/2021/04/09/骂观众/index.html","15d60b77fa4a568abd8120ecfcd7af93"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","95c346e1ca44f6735e641468e10dd9a8"],["D:/hexo/public/2021/04/21/家/index.html","653e024b393b8d6a4cfa8e34174fb8b2"],["D:/hexo/public/2021/04/24/光与岸/index.html","6da479368b55c43dbe7bb47e7a4b1a30"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","05aebb610b780135c1d2c1cc1438d85b"],["D:/hexo/public/2021/05/03/五月伊始/index.html","e711ce15dcedbac2152696b1c9aedf25"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c4a2fb755025ec232880b0468104789d"],["D:/hexo/public/2021/05/31/迎接六月/index.html","c200a5f2f7207e5ae6b0da3379e1f355"],["D:/hexo/public/2021/07/07/七月/index.html","fb6a5245cee23423880fa3f13bbe0168"],["D:/hexo/public/2023/05/16/dunhuang/index.html","d589d4d4a1a2ea5e3c6cd75093bfe2d9"],["D:/hexo/public/2023/07/29/yeqi/index.html","3618054c09d2d01a39dbc58e158e1fb6"],["D:/hexo/public/2023/09/10/life/index.html","bc9f3a3acef9cd8f1cb8062d94ff69b4"],["D:/hexo/public/2023/10/15/qingdao/index.html","925e02aadd4e2c26aa303f0cef78d395"],["D:/hexo/public/2023/12/14/11yue/index.html","1ffea91f72c599275e2a69e717df04da"],["D:/hexo/public/about/index.html","1621312507512a5fa434bf1be6bcde01"],["D:/hexo/public/archives/2019/09/index.html","039ac90e8b3c3ba2bd0912d6f78c622f"],["D:/hexo/public/archives/2019/12/index.html","f0a0ff8416da49325abd22f563d39498"],["D:/hexo/public/archives/2019/index.html","885fae0e14dc7709a7c8f60daa533733"],["D:/hexo/public/archives/2020/02/index.html","f616739e34aa9a59c7a3e075cec04c08"],["D:/hexo/public/archives/2020/03/index.html","86c982c2637ced64680f38a66e0e4405"],["D:/hexo/public/archives/2020/05/index.html","b08fcd0dfbefcad9be6eebd7a41d2100"],["D:/hexo/public/archives/2020/06/index.html","9ae6157b7bfce5264b0ade19c7bcb06b"],["D:/hexo/public/archives/2020/07/index.html","31fbc437a5e7aa29ad265da0f741361a"],["D:/hexo/public/archives/2020/08/index.html","345ecce35f4cefea1053569da2942f2d"],["D:/hexo/public/archives/2020/09/index.html","d44252e72b76da8a3054e18f9de1e444"],["D:/hexo/public/archives/2020/10/index.html","cc115ae7c65b80d8ad1388444248476d"],["D:/hexo/public/archives/2020/11/index.html","0ce656d5e2320f8b8e9d78b8df6cc159"],["D:/hexo/public/archives/2020/index.html","8d5bfa4c70236b7b009f1f89db1fa2d5"],["D:/hexo/public/archives/2020/page/2/index.html","8a2c04a725570b5e3082e54d3a70ad7a"],["D:/hexo/public/archives/2021/01/index.html","b142241858100c0ff4270acfaf236d95"],["D:/hexo/public/archives/2021/03/index.html","d0caa1cee7024225eefea429c4436947"],["D:/hexo/public/archives/2021/04/index.html","71aea15d42a63a1f18d8f72377e15f04"],["D:/hexo/public/archives/2021/05/index.html","dd2e958a42426d27ec9f18cf78038bb2"],["D:/hexo/public/archives/2021/07/index.html","41380e3855db8acd070c8a6cfaef324b"],["D:/hexo/public/archives/2021/index.html","944e4a8cccc2ec465d3dfd815c160715"],["D:/hexo/public/archives/2021/page/2/index.html","9b1e11234689145ec9e0c26b4fe5e7f1"],["D:/hexo/public/archives/2023/05/index.html","59b14231e921e9dc6886e982c3f19db9"],["D:/hexo/public/archives/2023/07/index.html","531a792b073214bf36d7ad9d0c89b772"],["D:/hexo/public/archives/2023/09/index.html","d0b12259af48a6d21de01ab3a21217ec"],["D:/hexo/public/archives/2023/10/index.html","a01eb81cabcf82a33d674208beea0aaf"],["D:/hexo/public/archives/2023/12/index.html","399a6c83c24e6219a3b3b95c6e9fa373"],["D:/hexo/public/archives/2023/index.html","bff20cc135ddb81c5b04463d70f46633"],["D:/hexo/public/archives/index.html","68f6dc1c1f60cf7536ac242d57c372c3"],["D:/hexo/public/archives/page/2/index.html","ccf64cb5e4f84f90907b42fd85f6b6d3"],["D:/hexo/public/archives/page/3/index.html","f4b6e3be21c2068ca75d7ac9088f4ff7"],["D:/hexo/public/archives/page/4/index.html","ee2c90594471009a1aef5d130a4efa06"],["D:/hexo/public/archives/page/5/index.html","991b8e61c79c001db4615452985cce63"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","8e07c9c49b6301e96c6aa87207552b33"],["D:/hexo/public/categories/index.html","b75a4fa371e6c05e2551cb137f82e201"],["D:/hexo/public/categories/写作/index.html","95ecf1af316c48e020fd5fd13cb85ccd"],["D:/hexo/public/categories/学习笔记/index.html","89f6bee92672d3edc0ed98a96ac1baaf"],["D:/hexo/public/categories/感悟/index.html","fac385ecb6e1a2234fd9f60daa796c1b"],["D:/hexo/public/categories/感想/index.html","4bad51fa02d554342563d3386ba18e35"],["D:/hexo/public/categories/感想/page/2/index.html","d60c73beb3fabf1e1ddc786a026e5b03"],["D:/hexo/public/categories/数学/index.html","ff1f015a38b31a651da5412f742cfc17"],["D:/hexo/public/categories/文章收藏/index.html","565495dfc217f8734f83260c150e0e58"],["D:/hexo/public/categories/旅行/index.html","35d80297f213d1fa9455add8e2613a08"],["D:/hexo/public/categories/日记/index.html","b1d3f7d87314b446a9d1bd01260e75c7"],["D:/hexo/public/categories/机器学习/index.html","a892ff71963d976ba787954e93e265ae"],["D:/hexo/public/categories/诗歌收藏/index.html","f05aef232d3f3a275a4b463493294cc2"],["D:/hexo/public/categories/读书笔记/index.html","00d4b5f40840dbbca23649a52d197e58"],["D:/hexo/public/categories/读书笔记/page/2/index.html","fc348065fc024616f49f6ab192f8d6c4"],["D:/hexo/public/comment/index.html","c2d148331ff263984e6df809dfd2999c"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","9e9d76483abb0dd9635912752f0e48b4"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","bcd3ce099d209feb706494f5a655e93c"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","f3937a061ec24b1089bdfcee7f86f969"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","dbf76291fd693fd8eac4f6690913fd17"],["D:/hexo/public/music/index.html","3b649ec9cdda8b5ecc9133040c8ad924"],["D:/hexo/public/page/2/index.html","8a7d7b93332673825ae83a2ff6b4e730"],["D:/hexo/public/page/3/index.html","e4f93042f29f8670d983bdc80b356acb"],["D:/hexo/public/page/4/index.html","6f72cd1a404a939603705ea3634e50f3"],["D:/hexo/public/page/5/index.html","9f765a58e0240aa54eeb6d2a5dd316ad"],["D:/hexo/public/tags/KNN/index.html","69424b7a0ac341658084b90418ecdeed"],["D:/hexo/public/tags/git/index.html","044bfc3bf11aeb94a2dd356f345b7216"],["D:/hexo/public/tags/index.html","88721d01d543734676097a0e57c08f95"],["D:/hexo/public/tags/余华/index.html","71681a791e997e8155b2ae07b09f0b1d"],["D:/hexo/public/tags/北京/index.html","d69badac095958260b75bb46d6088287"],["D:/hexo/public/tags/博尔赫斯/index.html","935e55ce5475239d60ceabafeac608c9"],["D:/hexo/public/tags/回忆/index.html","6e36e65a5748ab7808d997ed0c68b2f8"],["D:/hexo/public/tags/孙绍振/index.html","902909589a3bc9a3a650546c0d73a50d"],["D:/hexo/public/tags/川端康成/index.html","51d8922dc1198e8b5a146ccd234fa8f6"],["D:/hexo/public/tags/巴金/index.html","552f9979c7310d6f81a8965ea28c27e5"],["D:/hexo/public/tags/建站-hexo/index.html","29b5ed8edf331f74c492b8b423bf7ff1"],["D:/hexo/public/tags/总结/index.html","7ee34cda43c5ae95dd26830eb1a45d37"],["D:/hexo/public/tags/感悟/index.html","7498db098fd481ba704015389f7acc6d"],["D:/hexo/public/tags/感想/index.html","df61e4d3551005d44803b76dc1f1cd6e"],["D:/hexo/public/tags/敦煌/index.html","03cfba2b803fbace4ff5243f6552d6e9"],["D:/hexo/public/tags/文学/index.html","973013fb70c2ef8182333d3f40975641"],["D:/hexo/public/tags/时空/index.html","2ead01e5ee4cecbe7ec7b303739be4eb"],["D:/hexo/public/tags/林轩田/index.html","8d5fe7bc0a51ff9e56664197246f1f1b"],["D:/hexo/public/tags/生活/index.html","0fd4726e7580d9a051a714cbb74affe5"],["D:/hexo/public/tags/线代/index.html","39fd24da8184ef3f57514b0b03051036"],["D:/hexo/public/tags/考研/index.html","b2004b127e6e755a83db6f920ee7dc70"],["D:/hexo/public/tags/聂鲁达/index.html","5d247bc1a0b1712a9cd70ac59497943c"],["D:/hexo/public/tags/西湖大学/index.html","4a8effc013d3720dde4b2cf1808a7797"],["D:/hexo/public/tags/诗歌/index.html","c070a5d7b3f7dac3b1d6437bffd74090"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","2edb33f367f4330f2362a53d058192d4"],["D:/hexo/public/tags/读书/index.html","b4bd01eefdb2e815c8b053ddfb00d812"],["D:/hexo/public/tags/钟文/index.html","dc85715c0c4a36c0ba1b6b6216043a6c"],["D:/hexo/public/tags/阎连科/index.html","9d585d5f71782b8a4d3bf1a7179176b1"],["D:/hexo/public/tags/随想/index.html","496060fb5e32da3a3875e1feea379522"],["D:/hexo/public/tags/青岛/index.html","8e6f61e2262925021f645fbd90d28a40"],["D:/hexo/public/tags/马尔克斯/index.html","e8a3f686b048df441b2890db596e49e1"]];
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







