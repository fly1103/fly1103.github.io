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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","fd558e59d7055d278447f400021733fb"],["D:/hexo/public/2019/09/18/百年孤独/index.html","3a3bd0a84dd97903eb187e3ff7be524b"],["D:/hexo/public/2019/09/18/鼠疫/index.html","1ce33a279c861b4ce9d5085ea73fc28a"],["D:/hexo/public/2019/12/20/cloud/index.html","c2f8fc0f90706d0471d3e0549e397010"],["D:/hexo/public/2019/12/21/knn/index.html","094be5f6919e7d78499028567914e662"],["D:/hexo/public/2019/12/23/finish/index.html","194956b5c943bae8f95607d6a1bfbd80"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","c70e4968b612d3e6c3d94ba4f8113e4d"],["D:/hexo/public/2020/02/28/Linear/index.html","3318004df72673f4c63e6471c4f4feca"],["D:/hexo/public/2020/03/21/time/index.html","bdff42dcf65695fcbf1322d681d40523"],["D:/hexo/public/2020/05/23/1984/index.html","4a0ea3143971143eaea6195d6fa30201"],["D:/hexo/public/2020/06/09/git笔记/index.html","ba4c62932e32ef51a906b6c197a07f82"],["D:/hexo/public/2020/07/29/sheep/index.html","7a85136cc62e775c8030ba9711b6677a"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","ce5030df1799c6e45919f9f03f120e13"],["D:/hexo/public/2020/08/09/Haruki/index.html","5fa4499fae3f7747857830cd3f8c9e60"],["D:/hexo/public/2020/09/13/summarize/index.html","484be6dd18adc3b871f96693de9c5275"],["D:/hexo/public/2020/10/19/Thorn/index.html","f6c639f5ccc5b013b5eb20911bfe3d0b"],["D:/hexo/public/2020/10/28/huiyi/index.html","030fc9c136257da6f2623e6111021295"],["D:/hexo/public/2020/11/26/一点感悟/index.html","a560871a2e6a1a0de484cd78f0795a5f"],["D:/hexo/public/2021/01/02/crime/index.html","2ab2322d2e9dd0a5573b5a4d9cef6f79"],["D:/hexo/public/2021/03/08/mother/index.html","b907264899b68b23db7dd399b327a3d8"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","a7ff25ff26702c09a87098384eb5996e"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","955aaad3f1dc418c11768de63480dc6a"],["D:/hexo/public/2021/03/31/Cholera/index.html","502e7cee54488bddfa1e0d8f0a0c38af"],["D:/hexo/public/2021/03/31/镜中/index.html","b0c48379f902c397670a27f9b2a58c3e"],["D:/hexo/public/2021/04/03/最后的对话/index.html","a1dcb53bd0723f770d2312015da02231"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","727298aaf418838c0d2ee8ed4b8f87d1"],["D:/hexo/public/2021/04/06/雪国/index.html","391420659dd70ef618e2137d1c9d5b3b"],["D:/hexo/public/2021/04/09/骂观众/index.html","4d84b9f17237b902b5f4c38286873e30"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","527713d4e8558bc3b7e1940010b21bcf"],["D:/hexo/public/2021/04/21/家/index.html","6486edf73d54cd69cbe082ef0908a4fa"],["D:/hexo/public/2021/04/24/光与岸/index.html","4f93e4722c2ff917fe025f3e56918ad5"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","db600d51145dd8c469580f8b485fb265"],["D:/hexo/public/2021/05/03/五月伊始/index.html","c98bbe7641c803dae36cc4ffa5b09427"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","9548a89e4a5439e282ab1e2fc85dd2ae"],["D:/hexo/public/2021/05/31/迎接六月/index.html","f39bfb1fea5c3944c268222ae76bdbfa"],["D:/hexo/public/2021/07/07/七月/index.html","84a98745fec530afae03647edf99fcd7"],["D:/hexo/public/2023/05/16/dunhuang/index.html","48ab38400ba824afe658c89923ae698d"],["D:/hexo/public/2023/07/29/yeqi/index.html","2402012da1fd42740770b51a6e13995b"],["D:/hexo/public/2023/09/10/life/index.html","31a05d2aa813e7b9a0055c9b146f050f"],["D:/hexo/public/2023/10/15/qingdao/index.html","38633567e8cb52e8d53a78902737e03f"],["D:/hexo/public/2023/12/14/11yue/index.html","ff441658f46ed23fd930d99a3ebbb821"],["D:/hexo/public/2024/01/04/12yue/index.html","5d6e52416d015d9d577dc309def0393f"],["D:/hexo/public/2024/03/19/spring/index.html","f93e6ff0c776de23d905898aa96133b1"],["D:/hexo/public/about/index.html","50db251613aa85572efdd3a33f071bce"],["D:/hexo/public/archives/2019/09/index.html","cd06f5051098c4233dd5fe3fc2d32d0d"],["D:/hexo/public/archives/2019/12/index.html","901d8a1e2b8dab66404c07304d432fef"],["D:/hexo/public/archives/2019/index.html","9d7f7d7195f3427e2282e2e09ef2031d"],["D:/hexo/public/archives/2020/02/index.html","19fff4a141dabafc67ad783206f555f0"],["D:/hexo/public/archives/2020/03/index.html","6c78f0787b27a750bb22280e80247983"],["D:/hexo/public/archives/2020/05/index.html","c2f7eba1900fb8f94827628fc3c0c4d6"],["D:/hexo/public/archives/2020/06/index.html","b3d168d60f474865ea7c29523790866d"],["D:/hexo/public/archives/2020/07/index.html","2f194146941efb9384acdecc54627afe"],["D:/hexo/public/archives/2020/08/index.html","070eda03287d6b37430525e4d2213121"],["D:/hexo/public/archives/2020/09/index.html","ac1d1ca0eb98a405a4ce63245ea56f80"],["D:/hexo/public/archives/2020/10/index.html","57fdadf957f37b0562d512f36f5cc954"],["D:/hexo/public/archives/2020/11/index.html","06c08286b63d4974ab75dcc34d4684a7"],["D:/hexo/public/archives/2020/index.html","6ccd183614bfcefe6a7ff66495c73c38"],["D:/hexo/public/archives/2020/page/2/index.html","55b31a7a0130723e973ae64497ac8ef3"],["D:/hexo/public/archives/2021/01/index.html","f5bae07deb5ee93a6ce2f7eabfa5ef70"],["D:/hexo/public/archives/2021/03/index.html","4bb7809a1ca65b0e894775d0c1e05970"],["D:/hexo/public/archives/2021/04/index.html","d6e45b0c110d56bbf64b05fa842e06c3"],["D:/hexo/public/archives/2021/05/index.html","9e85d509ec5adb291d77140bb5977b92"],["D:/hexo/public/archives/2021/07/index.html","ac62f0afd455321185529a9b912606e4"],["D:/hexo/public/archives/2021/index.html","bf1410e86c0c752e327431765bf415a8"],["D:/hexo/public/archives/2021/page/2/index.html","f1ee6e2b0b2c2956937e8d02d8936437"],["D:/hexo/public/archives/2023/05/index.html","921820a2b60ca2267f397f28e910d9f5"],["D:/hexo/public/archives/2023/07/index.html","6ace63292d1e622a569f8c91ebb2768c"],["D:/hexo/public/archives/2023/09/index.html","0fc1b27b6c99981ef4c1500c2aa1c0ed"],["D:/hexo/public/archives/2023/10/index.html","bce18238c69ba7a0dec2d5599cea25e2"],["D:/hexo/public/archives/2023/12/index.html","1b1dc1dc299827195b61e8cdcf1b0b38"],["D:/hexo/public/archives/2023/index.html","5525f3af917d5aa1e369182a6cdb6a86"],["D:/hexo/public/archives/2024/01/index.html","4af95e24f894c4043f499490a5ff780d"],["D:/hexo/public/archives/2024/03/index.html","ff55da05460ec467214440e738312ff7"],["D:/hexo/public/archives/2024/index.html","23fcbcec9c1a77b8b57b3076b0550e7d"],["D:/hexo/public/archives/index.html","92e15684ff24c152a4d0338aca4ac8da"],["D:/hexo/public/archives/page/2/index.html","56eaa0a29027e4f8efeee3bfd3b827b9"],["D:/hexo/public/archives/page/3/index.html","9be312978ec7829ba3b6a882d39f9ac3"],["D:/hexo/public/archives/page/4/index.html","dd9ca8954b363715797d986670e1c48a"],["D:/hexo/public/archives/page/5/index.html","20e8f34b14ef3d6f25f97f7db1c546b4"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","ad87d0c1bc82911d5abacc62ab127d98"],["D:/hexo/public/categories/index.html","9d2dc9a83453b69188d9f4fdc431d370"],["D:/hexo/public/categories/写作/index.html","aa9b6c31da6dfaf7d98beaf3c3c78339"],["D:/hexo/public/categories/学习笔记/index.html","65d2fedf6493a73e37231dbf71c4020a"],["D:/hexo/public/categories/感悟/index.html","c5b49ed1597b10c09acf4326bae01aa5"],["D:/hexo/public/categories/感想/index.html","fc37481715b16e47bf8f949c58c0f2f9"],["D:/hexo/public/categories/感想/page/2/index.html","6378df90bb1bba1a13bd399347a03cc0"],["D:/hexo/public/categories/数学/index.html","62cdce27ae8e31f1ebafc0281fb9f1f8"],["D:/hexo/public/categories/文章收藏/index.html","63240192883ac0073e7ad79a1f8bdb11"],["D:/hexo/public/categories/旅行/index.html","b36709cb6c3e659859aee11eabe12de6"],["D:/hexo/public/categories/日记/index.html","9e707323b51e7aaddc65d74a0b73d8c0"],["D:/hexo/public/categories/机器学习/index.html","e5a99d53ae3bab880b213806a7412796"],["D:/hexo/public/categories/诗歌收藏/index.html","f5b1b1dae0ac8fb102fecb5a2d52f5c5"],["D:/hexo/public/categories/读书笔记/index.html","71cd5cb2558b70473fe12c993366cf8a"],["D:/hexo/public/categories/读书笔记/page/2/index.html","37911c5d99f12d677391a16c76c7cbd3"],["D:/hexo/public/comment/index.html","f2248d37df8ed33fbdaea22c755161b4"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","57c37c69fc4a1b64b29c0e7171e33546"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","3643c67eea9ef43cddde37e235c657b8"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","b2abf821eb9126900d296d49b471d24e"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","7019a5514960624bb266c4f03cfe3c86"],["D:/hexo/public/music/index.html","439bee1935760f67b0df56fb91a1f09c"],["D:/hexo/public/page/2/index.html","238841e740863118f81bc18eb1fd872f"],["D:/hexo/public/page/3/index.html","63cff56e15a7e4f8088c293f6780bfeb"],["D:/hexo/public/page/4/index.html","940a844e843d60cb28440050deaf407c"],["D:/hexo/public/page/5/index.html","d24749f2a1fcb324b78e879eb87b8930"],["D:/hexo/public/tags/KNN/index.html","796bb4ce6a66e89999f53eaec6cc2b1b"],["D:/hexo/public/tags/git/index.html","1667a33269aac26861e77b67ec08aa09"],["D:/hexo/public/tags/index.html","0822664846e1916060a0e3d775f3522d"],["D:/hexo/public/tags/余华/index.html","c7b9e6c3ca7fa1aa4eee7678595ee8ca"],["D:/hexo/public/tags/北京/index.html","6a70e57137bbeb050b7123fddfd42129"],["D:/hexo/public/tags/博尔赫斯/index.html","35d4d60d147e49c253579cc28228fbe7"],["D:/hexo/public/tags/回忆/index.html","1ac007eac7652ef030e01560d22c27bf"],["D:/hexo/public/tags/孙绍振/index.html","945bcdebf9fc0456e24a9f1a70b05864"],["D:/hexo/public/tags/川端康成/index.html","a1bf250ef473b1cce246aac8e76239a4"],["D:/hexo/public/tags/巴金/index.html","8c4b4f02179a7e585a2ecf647363b7b4"],["D:/hexo/public/tags/建站-hexo/index.html","465e216eb18bd1a3f12d938280c6acce"],["D:/hexo/public/tags/总结/index.html","196f472f2ca4df62ecd77a74d259503f"],["D:/hexo/public/tags/感悟/index.html","1149492bf1654fdb655a7e2b62e887f0"],["D:/hexo/public/tags/感想/index.html","b1f5b8d36d4e8e07a6bdc2a40a0036fd"],["D:/hexo/public/tags/敦煌/index.html","4bb166b0991ee670f2e5c53e09762ede"],["D:/hexo/public/tags/文学/index.html","cd2aaebcb2456eb0603f89e8316bc7be"],["D:/hexo/public/tags/时空/index.html","cb521291c4b5dda94d31eda42548977e"],["D:/hexo/public/tags/林轩田/index.html","67f21d46fa7f38f3f077b08ecfc1f9fc"],["D:/hexo/public/tags/生活/index.html","7f0ded04bf55cd9791b11045c283621f"],["D:/hexo/public/tags/线代/index.html","d7ac9f50f7cb7c210f06383d013d37fb"],["D:/hexo/public/tags/考研/index.html","99f42391092d589be5a9e2d63077d84e"],["D:/hexo/public/tags/聂鲁达/index.html","77765ea3b565e9e59511d3bd324be252"],["D:/hexo/public/tags/西湖大学/index.html","45cabca57a1f3f11c62d8f0c4883c484"],["D:/hexo/public/tags/诗歌/index.html","a128a0b51b437481bf6e1f351506540f"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","483dd4c432344bcf17840cb057127a2b"],["D:/hexo/public/tags/读书/index.html","b7e1f1906937f51c684ef32d9fff714b"],["D:/hexo/public/tags/钟文/index.html","01c93142b1764c67504d90df283d07bb"],["D:/hexo/public/tags/阎连科/index.html","f7aa5df7f575c59239010fdfcbbcc25f"],["D:/hexo/public/tags/随想/index.html","3cbd517ec19e5c9b71e80892611147e8"],["D:/hexo/public/tags/青岛/index.html","ead6382c3a20c13648311def90a79ee0"],["D:/hexo/public/tags/马尔克斯/index.html","520cf03b9a10c2818cdcd5f94c374bef"]];
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







