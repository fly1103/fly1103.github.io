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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","3e3495ae4db460e9d2e56c8beaf6db06"],["D:/hexo/public/2019/09/18/百年孤独/index.html","a015ddfc10d9c1292941fc9c732d08bd"],["D:/hexo/public/2019/09/18/鼠疫/index.html","80b4b10b3fdff58023d1cc476b6170a9"],["D:/hexo/public/2019/12/20/cloud/index.html","b0a9b06a02388c0dd8cc045806fdb941"],["D:/hexo/public/2019/12/21/knn/index.html","65c59ffc8ec317b482f9b7465ca004f0"],["D:/hexo/public/2019/12/23/finish/index.html","cbbc33a97aef527919dd5085e46d4c08"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","9ae6f3c07dd8bddeb92e0066ad2dc6fe"],["D:/hexo/public/2020/02/28/Linear/index.html","d758d89caac937d4c96e89c5cf9b576b"],["D:/hexo/public/2020/03/21/time/index.html","1d0474fb33c3ea6737bb7ad5c7f4cfad"],["D:/hexo/public/2020/05/23/1984/index.html","c35d7ce08c570ace0e5646f554c66f73"],["D:/hexo/public/2020/06/09/git笔记/index.html","c97f929689c994e173a27dffb947c623"],["D:/hexo/public/2020/07/29/sheep/index.html","a3460ab4846b08e4290872e630822e96"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","9e2424fb3498a08de773618b71e54a43"],["D:/hexo/public/2020/08/09/Haruki/index.html","233b18c5f71138ee484982fe755cbe8c"],["D:/hexo/public/2020/09/13/summarize/index.html","d0eb61e6c8778cae973fd0d5757ce024"],["D:/hexo/public/2020/10/19/Thorn/index.html","d1791251ced6175234fb119707f8c258"],["D:/hexo/public/2020/10/28/huiyi/index.html","e7afbd2ae3581b3bab43b83a97a29de1"],["D:/hexo/public/2020/11/26/一点感悟/index.html","5f08e0dffa284aa660d7742a5ad0ea4a"],["D:/hexo/public/2021/01/02/crime/index.html","5e21b92a55367193ea7e4d53c39ea053"],["D:/hexo/public/2021/03/08/mother/index.html","90ad0cca86665dca2d5a047f9f019a26"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","b2dc0b1a9e4290663b9fda43367ebbe7"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","cfe828affe2b9479988549500f781823"],["D:/hexo/public/2021/03/31/Cholera/index.html","a174b734971aac948d9f2c67aefeb6e7"],["D:/hexo/public/2021/03/31/镜中/index.html","f13a2ccfdaabdc27c6696705f29ebd20"],["D:/hexo/public/2021/04/03/最后的对话/index.html","e7cbb0ddf155461f19ed3e9c50d9b358"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","9f3e87cec9c4b9b0a6ede07a05a59be0"],["D:/hexo/public/2021/04/06/雪国/index.html","ff00d2fbda80ec7dbe9d5acc16cca618"],["D:/hexo/public/2021/04/09/骂观众/index.html","1ab4ea8f9f5004dff115a4e60418ded5"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","9b718ddbdb0f955cbd89cce7a8b7616c"],["D:/hexo/public/2021/04/21/家/index.html","10489f8def31bdfde6e7a4c0454c9650"],["D:/hexo/public/2021/04/24/光与岸/index.html","632907ba496a3137f1e3cbe75cf2789f"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","9cf10e41d1b9031c81f90a8d81671374"],["D:/hexo/public/2021/05/03/五月伊始/index.html","6626ac46a9df69445b046f9a6771f016"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","c7207ed701ac8260fdf9f6d792b1e224"],["D:/hexo/public/2021/05/31/迎接六月/index.html","4e110ed101d77e08e39c574da06532ad"],["D:/hexo/public/2021/07/07/七月/index.html","5aee1d1af0f45c4b586a89acca811f35"],["D:/hexo/public/2023/05/16/dunhuang/index.html","e9b11044ca13882822d14e53748fd02c"],["D:/hexo/public/2023/07/29/yeqi/index.html","d4fa1dce427115727d0db13e7f75d0b2"],["D:/hexo/public/2023/09/10/life/index.html","a1a16db6e7c8e41907746ecccf40644a"],["D:/hexo/public/2023/10/15/关于青岛一点回忆/index.html","41cf83581c401c07cae96d348d743d1a"],["D:/hexo/public/about/index.html","2b2d9cb525a100faaa6286f3a28b0beb"],["D:/hexo/public/archives/2019/09/index.html","aa9939305b1ace71b44f5c6173d3d38f"],["D:/hexo/public/archives/2019/12/index.html","d73a4c605312fb10eb60d647b3db1aa0"],["D:/hexo/public/archives/2019/index.html","a79001ed75436a7aebe300b7ce8361dc"],["D:/hexo/public/archives/2020/02/index.html","b94df9529da8034e7341fe693baa49d9"],["D:/hexo/public/archives/2020/03/index.html","d803d27237c9620631d471f7bf8e3894"],["D:/hexo/public/archives/2020/05/index.html","8240add01676cd4559c193315064c0d6"],["D:/hexo/public/archives/2020/06/index.html","5d671fa28888d227f0ab1c720e41d722"],["D:/hexo/public/archives/2020/07/index.html","38e9edf9f4f32dfd085bcfcaaf103743"],["D:/hexo/public/archives/2020/08/index.html","97684de130cd8161fca42ee75122c188"],["D:/hexo/public/archives/2020/09/index.html","d607f207256aa77d26bd735ee8a25158"],["D:/hexo/public/archives/2020/10/index.html","b65d537b586175dc0a7d8bf2cd292ae3"],["D:/hexo/public/archives/2020/11/index.html","7a70be3bf48582f5e5b5fed5c44a2903"],["D:/hexo/public/archives/2020/index.html","f9f3f6d9bfc5f3f2b46dd82d43b981f1"],["D:/hexo/public/archives/2020/page/2/index.html","104f3ea8d8b441f0644c411eb98a6d3a"],["D:/hexo/public/archives/2021/01/index.html","d9be2a9c9e585fdc6e33313c80428d3a"],["D:/hexo/public/archives/2021/03/index.html","f731db2fadf992b4282dcdbb53121a5f"],["D:/hexo/public/archives/2021/04/index.html","36818696346915a380b7833b7565e4ad"],["D:/hexo/public/archives/2021/05/index.html","1c17a7553ac94787619c969a00d2c05e"],["D:/hexo/public/archives/2021/07/index.html","7a3096e03ad1aa0f453d51ed89d88d76"],["D:/hexo/public/archives/2021/index.html","32b839c26e7418789bdd55b0a8affadb"],["D:/hexo/public/archives/2021/page/2/index.html","216e4b7d16c2f1125dd3197e856809ad"],["D:/hexo/public/archives/2023/05/index.html","df4dc7a21541ae60d5b5b5412e35e030"],["D:/hexo/public/archives/2023/07/index.html","59255856ace9db8875cb9cbf4f61a065"],["D:/hexo/public/archives/2023/09/index.html","16140973d8492be9b74484b259a2b004"],["D:/hexo/public/archives/2023/10/index.html","ee552f57ef0c234f3aa352f11f369fb1"],["D:/hexo/public/archives/2023/index.html","8f218482789a7f89a3b2d8866d795bd9"],["D:/hexo/public/archives/index.html","6eb67f130d489caac8849121fea7e7f6"],["D:/hexo/public/archives/page/2/index.html","8031a5cae0f0a68ddbe302d94f837767"],["D:/hexo/public/archives/page/3/index.html","4cabdb2139c9251e4b8d890fee7af426"],["D:/hexo/public/archives/page/4/index.html","4b5ae4ec113d096b2dc7b59d081b1f24"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","f7765c43eb01e88f9ed0133c8231c6ed"],["D:/hexo/public/categories/index.html","894322b470f3481bba8b379f085e8535"],["D:/hexo/public/categories/写作/index.html","1b740330d1e4a594492b9c07e21fbf3d"],["D:/hexo/public/categories/学习笔记/index.html","6af5bd471a4ec52f9eaa6d6b23e7f1bd"],["D:/hexo/public/categories/感悟/index.html","8723df1b429c1b822c90d851897a2590"],["D:/hexo/public/categories/感想/index.html","963c2889a62f6c9eda68b358b9f80467"],["D:/hexo/public/categories/感想/page/2/index.html","f0084570d6e08ea9489d485e431eb1c1"],["D:/hexo/public/categories/数学/index.html","10a81a0cd8cc69ff5ae3c26bdd1a8551"],["D:/hexo/public/categories/文章收藏/index.html","4f3f2cbb58e0fedace9df17cf4851edf"],["D:/hexo/public/categories/旅行/index.html","81c5c41d7f9c6a56b91c93c258443dea"],["D:/hexo/public/categories/日记/index.html","e19837950ec5b4855cc582e95c57cb5a"],["D:/hexo/public/categories/机器学习/index.html","6219ac0dff33b38193d3440017e6a082"],["D:/hexo/public/categories/诗歌收藏/index.html","228de14bd6bafcaa35aacade9b983238"],["D:/hexo/public/categories/读书笔记/index.html","0ec658f365a90003390bc9274d374a44"],["D:/hexo/public/categories/读书笔记/page/2/index.html","35fe3496588bff74d64289265a8967df"],["D:/hexo/public/comment/index.html","3b81d2ff0f2d9a8560dffe6a5c030b31"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","9d79f6caa20ee99dba1639ba6a4339bb"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","44ede90dac5a9ed3b27b0e30870c1834"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","4a15136c30501a44d9fc8374f3bf44fe"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","ec02acf4f93bf09672800761908aa3e0"],["D:/hexo/public/music/index.html","20e3dc0c36de3368b09b1a3cf07734e0"],["D:/hexo/public/page/2/index.html","0554dd0455a253adf3f589060b982861"],["D:/hexo/public/page/3/index.html","87a23e8ae0095cc967b182b68c44e09f"],["D:/hexo/public/page/4/index.html","184a1bc8ca8045626b31bc6c66e7b7a0"],["D:/hexo/public/tags/KNN/index.html","63930bb9dc4f4b98751f3dd789627f86"],["D:/hexo/public/tags/git/index.html","749ffcd12dd5f4d559bc5d82caaf6365"],["D:/hexo/public/tags/index.html","ce3427b7cb31c6f54ddc2fd3faa821a5"],["D:/hexo/public/tags/余华/index.html","d48b74659039c6309084b226bb932ec6"],["D:/hexo/public/tags/北京/index.html","58d49d96e8a408ad0aff2654e817ba4d"],["D:/hexo/public/tags/博尔赫斯/index.html","e9d8c1d3457a5dd7ff89ec9541d8ac91"],["D:/hexo/public/tags/回忆/index.html","b7a543a799204ae3d52485e3ddc4f500"],["D:/hexo/public/tags/孙绍振/index.html","abffa87215f04dff1458756bab963181"],["D:/hexo/public/tags/川端康成/index.html","c1985aee68a24de8c170a1488d2d73c5"],["D:/hexo/public/tags/巴金/index.html","5800f4cc7ea203e2ae1be80513b0e198"],["D:/hexo/public/tags/建站-hexo/index.html","0cf5fe1d52203029d0d92ab49cad86a8"],["D:/hexo/public/tags/总结/index.html","1f7a0812a5fbe73393a49ee6e29e0060"],["D:/hexo/public/tags/感悟/index.html","5a9a604daea44fd318419055db84a321"],["D:/hexo/public/tags/感想/index.html","8b81fa04489286a4c05f8741b2f92e98"],["D:/hexo/public/tags/敦煌/index.html","252eac5159229e9161f6eb91bb015aa1"],["D:/hexo/public/tags/文学/index.html","f44d7e0f696475f0ee854ff5cb35d77e"],["D:/hexo/public/tags/时空/index.html","5982c7be574547aa250786ca06dacb06"],["D:/hexo/public/tags/林轩田/index.html","3071653d8032c28f24e607f013ae38dd"],["D:/hexo/public/tags/生活/index.html","0381d49a4af62de445ceee438c0847bb"],["D:/hexo/public/tags/线代/index.html","95dc6787ba240e6b0a226ae9eeffa031"],["D:/hexo/public/tags/考研/index.html","be8df60faadccd51f2d8e9993205e369"],["D:/hexo/public/tags/聂鲁达/index.html","833a12211c02a40cf9be9174b04258cb"],["D:/hexo/public/tags/西湖大学/index.html","9680873f7fffc9d3eae8a12b8b5b0d16"],["D:/hexo/public/tags/诗歌/index.html","33ad3d4d70c92dae88891a14476e3cf6"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","ac5e439d1f469acda27b8b0a0ab6ff51"],["D:/hexo/public/tags/读书/index.html","8cb51ebd5e49dd3e890340981e4cfd38"],["D:/hexo/public/tags/钟文/index.html","b547fa0f7eaf410608fb331dc4ffcbb8"],["D:/hexo/public/tags/阎连科/index.html","7db494c352353f6050661cb30848e058"],["D:/hexo/public/tags/随想/index.html","24252ba5a9854037c4acabc45e536c8c"],["D:/hexo/public/tags/青岛/index.html","c0b81610aba0509ab068b855566fb47d"],["D:/hexo/public/tags/马尔克斯/index.html","4cd029d7d70dee4d028db8d3eb25db6a"]];
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







