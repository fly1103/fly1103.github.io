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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","5e3f9b519768f65ab5d690b02e63212f"],["D:/hexo/public/2019/09/18/百年孤独/index.html","8a809897536ef94328144b957c05658f"],["D:/hexo/public/2019/09/18/鼠疫/index.html","524500c35e3d03eba42b66692aa78ce7"],["D:/hexo/public/2019/12/20/cloud/index.html","c2f8fc0f90706d0471d3e0549e397010"],["D:/hexo/public/2019/12/21/knn/index.html","094be5f6919e7d78499028567914e662"],["D:/hexo/public/2019/12/23/finish/index.html","194956b5c943bae8f95607d6a1bfbd80"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","c70e4968b612d3e6c3d94ba4f8113e4d"],["D:/hexo/public/2020/02/28/Linear/index.html","3318004df72673f4c63e6471c4f4feca"],["D:/hexo/public/2020/03/21/time/index.html","bdff42dcf65695fcbf1322d681d40523"],["D:/hexo/public/2020/05/23/1984/index.html","10997d1abae35e898c1de7aacf36cbd4"],["D:/hexo/public/2020/06/09/git笔记/index.html","ba4c62932e32ef51a906b6c197a07f82"],["D:/hexo/public/2020/07/29/sheep/index.html","a4220786ac9163066fde3a80197960f7"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","d0d10054304b9e69e89fa476387a3715"],["D:/hexo/public/2020/08/09/Haruki/index.html","fde8c6b03f93ba9b1a3fb6a5c30f654e"],["D:/hexo/public/2020/09/13/summarize/index.html","554f6ebaf4c2c9a4c7a664cd2b79acc1"],["D:/hexo/public/2020/10/19/Thorn/index.html","d702da40f5e35df1ae8f6bdd31136cd6"],["D:/hexo/public/2020/10/28/huiyi/index.html","030fc9c136257da6f2623e6111021295"],["D:/hexo/public/2020/11/26/一点感悟/index.html","66adf4a566ac075db3f1d46865cb0b7c"],["D:/hexo/public/2021/01/02/crime/index.html","fef43840640df9f06318dc9d8163e600"],["D:/hexo/public/2021/03/08/mother/index.html","b907264899b68b23db7dd399b327a3d8"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","a7ff25ff26702c09a87098384eb5996e"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","955aaad3f1dc418c11768de63480dc6a"],["D:/hexo/public/2021/03/31/Cholera/index.html","502e7cee54488bddfa1e0d8f0a0c38af"],["D:/hexo/public/2021/03/31/镜中/index.html","b0c48379f902c397670a27f9b2a58c3e"],["D:/hexo/public/2021/04/03/最后的对话/index.html","a1dcb53bd0723f770d2312015da02231"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","727298aaf418838c0d2ee8ed4b8f87d1"],["D:/hexo/public/2021/04/06/雪国/index.html","391420659dd70ef618e2137d1c9d5b3b"],["D:/hexo/public/2021/04/09/骂观众/index.html","4d84b9f17237b902b5f4c38286873e30"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","527713d4e8558bc3b7e1940010b21bcf"],["D:/hexo/public/2021/04/21/家/index.html","6486edf73d54cd69cbe082ef0908a4fa"],["D:/hexo/public/2021/04/24/光与岸/index.html","4f93e4722c2ff917fe025f3e56918ad5"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","2597451b39fc1103dd51cf60348de007"],["D:/hexo/public/2021/05/03/五月伊始/index.html","148948df89bdb9e3f312a2eb22205aa5"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","9548a89e4a5439e282ab1e2fc85dd2ae"],["D:/hexo/public/2021/05/31/迎接六月/index.html","dd9595debd608a43c7426a3d634b3f87"],["D:/hexo/public/2021/07/07/七月/index.html","b3d94cee4461133decf828b0ec8703b8"],["D:/hexo/public/2023/05/16/dunhuang/index.html","6674f94c2d4a0fada1bbdf04e0ddcafa"],["D:/hexo/public/2023/07/29/yeqi/index.html","8b8b08947616f3c4f0996ff473fdde81"],["D:/hexo/public/2023/09/10/life/index.html","6665728c1a72d3050f1a034bb9380a5d"],["D:/hexo/public/2023/10/15/qingdao/index.html","9b3ed7983b0714ba6f8f3c91dc3305ae"],["D:/hexo/public/2023/12/14/11yue/index.html","30af47320530951e9576d5b280daefdd"],["D:/hexo/public/2024/01/04/12yue/index.html","4307beac407b246128ed28f325c10e54"],["D:/hexo/public/2024/03/19/spring/index.html","4922ff555d7e8b1f7f76d727329f5fed"],["D:/hexo/public/about/index.html","706ccf100b67948fe89ccf1e508d347a"],["D:/hexo/public/archives/2019/09/index.html","dd17efd3fb17fbacf0e6da8a2e945a90"],["D:/hexo/public/archives/2019/12/index.html","4a90e2e3ae0fb53737f4512e287262e7"],["D:/hexo/public/archives/2019/index.html","bf319de1aa052e0b335f0e42ca11e302"],["D:/hexo/public/archives/2020/02/index.html","06e4d4ee7fd330c9d144e9cf7beb3fb5"],["D:/hexo/public/archives/2020/03/index.html","09cb9215f60d0722e6bedaee678486df"],["D:/hexo/public/archives/2020/05/index.html","6fba9cd458f56576dfb761a330e4ce72"],["D:/hexo/public/archives/2020/06/index.html","b0d01a29dd3fd3033e6e0a0ebad9352b"],["D:/hexo/public/archives/2020/07/index.html","7f31b8f844a7f90503e87f2f89c6575c"],["D:/hexo/public/archives/2020/08/index.html","ff14b1d4e237e1be6e16b37f10bef1b9"],["D:/hexo/public/archives/2020/09/index.html","62d5670b2ffe8a5a7177f03f55d3b571"],["D:/hexo/public/archives/2020/10/index.html","98ba5cbaa932508b3d87bdbf65e479fb"],["D:/hexo/public/archives/2020/11/index.html","af82f477cec9846995ddc396591318b1"],["D:/hexo/public/archives/2020/index.html","fbc361f4a4b7abda62cf1cd4c07bb070"],["D:/hexo/public/archives/2020/page/2/index.html","c2d02980a48fe7e4f636f0eec2150163"],["D:/hexo/public/archives/2021/01/index.html","5f6ff6e9a3bdbb9597f9da55110063d8"],["D:/hexo/public/archives/2021/03/index.html","7fbf8bad7e1bdda1b2305338f03466c4"],["D:/hexo/public/archives/2021/04/index.html","e068d1d37e51f1672f6ab8d504192164"],["D:/hexo/public/archives/2021/05/index.html","92f4d3364717fe8708e32fc34720d85c"],["D:/hexo/public/archives/2021/07/index.html","8dcd7d28fb23ee816ffc12f436d219e0"],["D:/hexo/public/archives/2021/index.html","800c744fba32a47ec09b895842bf03cb"],["D:/hexo/public/archives/2021/page/2/index.html","03cccb819abcd5308b007beabffa74bc"],["D:/hexo/public/archives/2023/05/index.html","a03b00c4bab6dde9df665aabef351512"],["D:/hexo/public/archives/2023/07/index.html","26c3510ef5693fc399bcd186a1182046"],["D:/hexo/public/archives/2023/09/index.html","3eaae4fd57cab331732ddb36ce749a99"],["D:/hexo/public/archives/2023/10/index.html","3e6bd57b3037457c3407444749c19f5b"],["D:/hexo/public/archives/2023/12/index.html","4de4339616590ed4cba04b31a840b58b"],["D:/hexo/public/archives/2023/index.html","e9646b985ea7020ba83a1e2a4ca02192"],["D:/hexo/public/archives/2024/01/index.html","9ee7a1b272c7da80d547ddc02b1bd6e7"],["D:/hexo/public/archives/2024/03/index.html","5658c11ae848cf157eb2abe48761d016"],["D:/hexo/public/archives/2024/index.html","4394afc7752731e3b7ca8a28be0a2e74"],["D:/hexo/public/archives/index.html","f70648621113264ec0b85b273c367da0"],["D:/hexo/public/archives/page/2/index.html","5b33ed87958c75cf2350edb813493f58"],["D:/hexo/public/archives/page/3/index.html","11c0e199ecf3cfe9592400940a4bb633"],["D:/hexo/public/archives/page/4/index.html","193367d8dabf68420d84a8709b436d65"],["D:/hexo/public/archives/page/5/index.html","de0b8fc00a6d23fcfe377c33e156dedb"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","6c03f3fd3e6f0aa5331cd7c36ba9dbf3"],["D:/hexo/public/categories/index.html","32bcd01d8756d87a5232bbc76e40ceab"],["D:/hexo/public/categories/写作/index.html","d534e992fefce589b9b7097031cad0f8"],["D:/hexo/public/categories/学习笔记/index.html","98c183fcb11da5ff17c91663dc52785d"],["D:/hexo/public/categories/感悟/index.html","65293ee0f337b6479ff64b389d8ad1e6"],["D:/hexo/public/categories/感想/index.html","b4d0fd8fa013a8b736fa52ab9fd59e41"],["D:/hexo/public/categories/感想/page/2/index.html","8d96f052da51d51658bc258da6d06baf"],["D:/hexo/public/categories/数学/index.html","6e715b8b35e6fb12b759f72930e4aac2"],["D:/hexo/public/categories/文章收藏/index.html","3cdd6ecd8bb641464ae5d6faba7760fc"],["D:/hexo/public/categories/旅行/index.html","e92d6c7c97491278c86b0cb9a1d062b5"],["D:/hexo/public/categories/日记/index.html","6fe719c5b175c1c0db8f56479cbaccf7"],["D:/hexo/public/categories/机器学习/index.html","0ec05eecbfea4a233b054511dc1d4098"],["D:/hexo/public/categories/诗歌收藏/index.html","6e474e3a389001d8847eb730e4c6b110"],["D:/hexo/public/categories/读书笔记/index.html","2057be4d143b4ff355fb76764dd32c32"],["D:/hexo/public/categories/读书笔记/page/2/index.html","aa2aedae876780052510da42ad3abefc"],["D:/hexo/public/comment/index.html","ec4579d7fc6266093204ef7cccdb2e1d"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","bc0d4c9220aef565718bde337577b16a"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","715e4a4f66930fad2d0829105151281e"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","f01aac5d70c1221be57fb19e546d13ed"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","59639c96e2c5823d9d9272ccd0ac6d4f"],["D:/hexo/public/music/index.html","114421773898c509b7ad093872647dea"],["D:/hexo/public/page/2/index.html","ef40bd6a9b5f254477ab81c74b984ba6"],["D:/hexo/public/page/3/index.html","8bdd8deaa7259c96077330f1fffd0ade"],["D:/hexo/public/page/4/index.html","16104929d51be33c757da1ce7cfe12ca"],["D:/hexo/public/page/5/index.html","ea3ea04f74f93e0248b45b678dfd8cbe"],["D:/hexo/public/tags/KNN/index.html","2319a247b70e09e0a91d56a12c69166b"],["D:/hexo/public/tags/git/index.html","4c6d87f77c5395cc9153fbdd881bdab8"],["D:/hexo/public/tags/index.html","b5b6098e28f147abe8a85c9b25678efa"],["D:/hexo/public/tags/余华/index.html","fb4790edcd0bb4a0b547fc4c671d40eb"],["D:/hexo/public/tags/北京/index.html","6d69d8179264e6bd37224705efa1d042"],["D:/hexo/public/tags/博尔赫斯/index.html","3e1810940b15d949e9d72361c03bac05"],["D:/hexo/public/tags/回忆/index.html","8c21dd4a20000a1e1fee2f6149b2521d"],["D:/hexo/public/tags/孙绍振/index.html","9de5c88c9a04f7a5d3a1971d5c03e94a"],["D:/hexo/public/tags/川端康成/index.html","c17bd055b41e46bba263e218bd38283f"],["D:/hexo/public/tags/巴金/index.html","2fd778bcaa8ac32358ef25e73ce16516"],["D:/hexo/public/tags/建站-hexo/index.html","be1bc4afe98c198d89d8bd901430d669"],["D:/hexo/public/tags/总结/index.html","f35b0ff141e7781fb2c6dd5373d92acc"],["D:/hexo/public/tags/感悟/index.html","5d13a5280c63f58b04541422b89d4bc7"],["D:/hexo/public/tags/感想/index.html","8210a5972e6d3b872454bfb9f9b8f191"],["D:/hexo/public/tags/敦煌/index.html","66c53f6cb45496f12c30773626ba2884"],["D:/hexo/public/tags/文学/index.html","80ef15cd0a5b3aad70d95774aa6a41be"],["D:/hexo/public/tags/时空/index.html","747aba7a9ae85ef67a508afc4bcf5e08"],["D:/hexo/public/tags/林轩田/index.html","33bafce4257377908c42360d0f7e3164"],["D:/hexo/public/tags/生活/index.html","f57e2d609d121750e64df9f62e5108b1"],["D:/hexo/public/tags/线代/index.html","24d407388c8f9bb8d571a04b0e94f33d"],["D:/hexo/public/tags/考研/index.html","aea03f8237ec6ebf0fd68e8c510d032e"],["D:/hexo/public/tags/聂鲁达/index.html","b1efb154e0d86c9d5c646f38b2e201d7"],["D:/hexo/public/tags/西湖大学/index.html","dc4aecd6b0297c78ac74dabd4b9452eb"],["D:/hexo/public/tags/诗歌/index.html","66e0cfbdbfb776d1e3f43731388467ea"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","c52b3eb6adc7d43a9021129d889bd52a"],["D:/hexo/public/tags/读书/index.html","e5ba9f109156baf735d27d95997e6693"],["D:/hexo/public/tags/钟文/index.html","da499bffa984c3f78dafdc71e8e46658"],["D:/hexo/public/tags/阎连科/index.html","5496294dc2e70e480a4fc98eb8ed8094"],["D:/hexo/public/tags/随想/index.html","4f295ad26cc01a3e27ff17806d112e82"],["D:/hexo/public/tags/青岛/index.html","9140abe431e385143a4c414661421e01"],["D:/hexo/public/tags/马尔克斯/index.html","0af80e5d10262bfd8f64e52952e4de4b"]];
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







