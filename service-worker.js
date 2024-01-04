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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","f7a10a9e0f641d03fd76ec5c306afd28"],["D:/hexo/public/2019/09/18/百年孤独/index.html","cd6271385e8f727842b403c4718d8f2e"],["D:/hexo/public/2019/09/18/鼠疫/index.html","da61b08652c71282bffc5886b40c0a6f"],["D:/hexo/public/2019/12/20/cloud/index.html","f8b2134582494d369a17d962a847589f"],["D:/hexo/public/2019/12/21/knn/index.html","3c9fb82af0d0f71a8eb4ac8c2c506449"],["D:/hexo/public/2019/12/23/finish/index.html","0b2bfcceebf10aa90e42f84a12722448"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","6df73b818c79ec54a6d3ffa5e385fe67"],["D:/hexo/public/2020/02/28/Linear/index.html","51f011d3bf9691759a83836d51cdfb32"],["D:/hexo/public/2020/03/21/time/index.html","9007e04a4b84cda0c47eecd2a6675eb8"],["D:/hexo/public/2020/05/23/1984/index.html","f4a2a15e59e6e40d4717a5c2b351ac8c"],["D:/hexo/public/2020/06/09/git笔记/index.html","164e6b034686a03be6c7288f5639e177"],["D:/hexo/public/2020/07/29/sheep/index.html","8920746b170d09270e343999d607eff7"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","2345288537cb4593fe85c24e7371cc7c"],["D:/hexo/public/2020/08/09/Haruki/index.html","aebfcdadc7122892cb0ce7ed16d50f0e"],["D:/hexo/public/2020/09/13/summarize/index.html","a9d5c4dc998dd846e81277e0828696be"],["D:/hexo/public/2020/10/19/Thorn/index.html","cb269d7bc07a2794b622e2332e41354e"],["D:/hexo/public/2020/10/28/huiyi/index.html","03443eccc06bcf30b3300ff65a7b2a4d"],["D:/hexo/public/2020/11/26/一点感悟/index.html","14e780b4602ed49527e51450650c4754"],["D:/hexo/public/2021/01/02/crime/index.html","0060b7e10ed357bed398e1626e00bc03"],["D:/hexo/public/2021/03/08/mother/index.html","ba736b853cf7af53f91972794c6b139e"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","8816b341f63f2c9938632c1b7ed5fd11"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","67495b67e8c58f2f155216b94cdfa93d"],["D:/hexo/public/2021/03/31/Cholera/index.html","7c80496e272c38364680d12c1147d54a"],["D:/hexo/public/2021/03/31/镜中/index.html","7c9b88b49dcfd91b3a8a9dad29670f74"],["D:/hexo/public/2021/04/03/最后的对话/index.html","47422ac50ed79cbb2b7d9bd149a10fb3"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","990cc1bdbeec18445143c78791239ea8"],["D:/hexo/public/2021/04/06/雪国/index.html","5f16c0f6991fbd2e528dddf2aaa5ce37"],["D:/hexo/public/2021/04/09/骂观众/index.html","6630b67128757d1841294e9419180198"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","b1ed75769dc6de4da7bdf8976a94f6d4"],["D:/hexo/public/2021/04/21/家/index.html","0c12faeaca5c7992fb364d21ab7d5b71"],["D:/hexo/public/2021/04/24/光与岸/index.html","0cda71c0b35571f5eaa62d98a90b995d"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","4b40fc41be58ce0d6da80348433e2587"],["D:/hexo/public/2021/05/03/五月伊始/index.html","ade197752b0c8f645a987da77d5dd339"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","2f764e5e8d1fb45e6eca9e78f56f8f2b"],["D:/hexo/public/2021/05/31/迎接六月/index.html","06f05a216a972588df90ff6d7b7806fc"],["D:/hexo/public/2021/07/07/七月/index.html","176bbc75028cf6fca85b2e73b9a3bca9"],["D:/hexo/public/2023/05/16/dunhuang/index.html","6075921fbf4009f396aac4588cf121b2"],["D:/hexo/public/2023/07/29/yeqi/index.html","5c79c30bfe8e35f8bc70dedda38e875d"],["D:/hexo/public/2023/09/10/life/index.html","8edd54018b80ee7c832be1f38d3de122"],["D:/hexo/public/2023/10/15/qingdao/index.html","c22a56557d2150726ea786b4230aa6fe"],["D:/hexo/public/2023/12/14/11yue/index.html","d65bc69ed73ee91d7114479f99a820ad"],["D:/hexo/public/2024/01/04/12yue/index.html","adc8e0c950deaf9b79086536220431db"],["D:/hexo/public/about/index.html","99aefb2af9c326c42c584486e912f92c"],["D:/hexo/public/archives/2019/09/index.html","753e7960be5d9d17626a7222ec4bb187"],["D:/hexo/public/archives/2019/12/index.html","6a26bd949bf044eb739db66d5d13107d"],["D:/hexo/public/archives/2019/index.html","f6dfc85c282b2238fa16a5ec06a49e22"],["D:/hexo/public/archives/2020/02/index.html","e223f66769b428b455521029f51f7de7"],["D:/hexo/public/archives/2020/03/index.html","fbe59366c5dd6b62f55c976812aa292b"],["D:/hexo/public/archives/2020/05/index.html","078b153c22e08be205a149e9a4fe1350"],["D:/hexo/public/archives/2020/06/index.html","6bfd9206e452c8d97a5ab3930a46b13f"],["D:/hexo/public/archives/2020/07/index.html","e93c928ccbca4814d4a9cfee9fc0bf05"],["D:/hexo/public/archives/2020/08/index.html","db73bdc7a68e3d0cf86fa9b8f5ba6674"],["D:/hexo/public/archives/2020/09/index.html","6f02bf6db16486bd91a84c99d89db090"],["D:/hexo/public/archives/2020/10/index.html","53678e1988f401c8543616065cb19f97"],["D:/hexo/public/archives/2020/11/index.html","99c49dc8adcd5289c5febd417913148c"],["D:/hexo/public/archives/2020/index.html","44f40bf11a092cffee8e65d30683b61e"],["D:/hexo/public/archives/2020/page/2/index.html","f8708b63623080b611c0173cccc94379"],["D:/hexo/public/archives/2021/01/index.html","e3fd5d0e73f1d069fd19f0983addc222"],["D:/hexo/public/archives/2021/03/index.html","90732c01939e0a6f83506f2d5456573e"],["D:/hexo/public/archives/2021/04/index.html","1ce0ad915730f018a0ae8a39ec4c5380"],["D:/hexo/public/archives/2021/05/index.html","73f3261272ee3128b7817d17fb9e33fd"],["D:/hexo/public/archives/2021/07/index.html","7df8e77f4380b83c6c73a56294ef3408"],["D:/hexo/public/archives/2021/index.html","1fc2444d41ff403a336beaee4d8b2f7f"],["D:/hexo/public/archives/2021/page/2/index.html","c31ab2de791568cea031f1d19efaa492"],["D:/hexo/public/archives/2023/05/index.html","e3bc9b5ca4e19cc997c0568d518bc84e"],["D:/hexo/public/archives/2023/07/index.html","0572fe7626e67b3b4b43807b3bbc4f39"],["D:/hexo/public/archives/2023/09/index.html","4a21d65e921421d170ea958c876cb0a2"],["D:/hexo/public/archives/2023/10/index.html","fe9eec8c1ade726f18a7c8742bcb6300"],["D:/hexo/public/archives/2023/12/index.html","a4530096f4b80c964645c5a03cad6aec"],["D:/hexo/public/archives/2023/index.html","9d8163cdb8aa32cf37e0c1677b719c94"],["D:/hexo/public/archives/2024/01/index.html","6cf23cbd9fc317c92374d9ec4ce829b6"],["D:/hexo/public/archives/2024/index.html","2be9201a2fdd691842f4861cc4ea42d6"],["D:/hexo/public/archives/index.html","0b5cac5b2340394ddab404486bc6c9b2"],["D:/hexo/public/archives/page/2/index.html","e0d53d20702b8746a07445e979fc4ca9"],["D:/hexo/public/archives/page/3/index.html","4cc090d3089569b7f03929eda595bc9e"],["D:/hexo/public/archives/page/4/index.html","7021a984d254f23f737f3101c3636880"],["D:/hexo/public/archives/page/5/index.html","460006627550921eaf6b6a40301b787d"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","96956c48be18bbf53245f6e312fc8f7a"],["D:/hexo/public/categories/index.html","869cd255ec6d1d12d3ec207b6ef243c4"],["D:/hexo/public/categories/写作/index.html","a0a8ccffa26b7d2b30012a1a6608e288"],["D:/hexo/public/categories/学习笔记/index.html","5a6aa43aee02726f2e8ac525eae2b8a7"],["D:/hexo/public/categories/感悟/index.html","fa8388cf07ae52432b949fd3654076d8"],["D:/hexo/public/categories/感想/index.html","26b8035c9c08193d9fb4b8de652f52e1"],["D:/hexo/public/categories/感想/page/2/index.html","44e3f8cb913e19b4334dcd627eb5db89"],["D:/hexo/public/categories/数学/index.html","e9f754041c17b3b2c5b86535963b9c49"],["D:/hexo/public/categories/文章收藏/index.html","31bb0d2409d11363e44d74a70d43be42"],["D:/hexo/public/categories/旅行/index.html","0e270eb67018457c510ac408b9c8a8b8"],["D:/hexo/public/categories/日记/index.html","c59e7de165f52938cbfef5a23b12f684"],["D:/hexo/public/categories/机器学习/index.html","fb39205df02d8186c17bebad60ad0e3c"],["D:/hexo/public/categories/诗歌收藏/index.html","b6ad7fd1cd1069395b4bfc9d684890d9"],["D:/hexo/public/categories/读书笔记/index.html","3a54670b8febe116fdf03cf369c97a8d"],["D:/hexo/public/categories/读书笔记/page/2/index.html","54b7f54c79b2a61fd9d48693de897a90"],["D:/hexo/public/comment/index.html","0572b87ff368f8daac6e67212b23e2f6"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","e61bf5140894a9f986466c9d210bc688"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","cf1e032e63acd40fc9c940063b10a922"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","fec650fa5698ff02ea751efbba1dbf2b"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","3485782d9a1f393e10170168c4b5a55f"],["D:/hexo/public/music/index.html","bc92a8d6804dbcab1683c14a05659fd3"],["D:/hexo/public/page/2/index.html","4973efcc55282da37d6ceeb6834cdcd6"],["D:/hexo/public/page/3/index.html","4129d036dec77db0ba47f735db7b4e27"],["D:/hexo/public/page/4/index.html","ac4b5bae010161f9683c948f4946e58a"],["D:/hexo/public/page/5/index.html","fbacad41274866e27650d4f3532184f8"],["D:/hexo/public/tags/KNN/index.html","7030420f9f711736aec2275bd30379f9"],["D:/hexo/public/tags/git/index.html","095f80d3eda652fd0458ab5c72fd271d"],["D:/hexo/public/tags/index.html","03f774a67038bb4298573a6dcb24d44e"],["D:/hexo/public/tags/余华/index.html","43a5e6defa19f7b42a586d5d9a9d4c67"],["D:/hexo/public/tags/北京/index.html","c0a93ccaff3dea15605aae54d80d615d"],["D:/hexo/public/tags/博尔赫斯/index.html","0ae18c311738cb07d02c6e2f203b52c5"],["D:/hexo/public/tags/回忆/index.html","5e6e29d84333b0e8621b9e4320fd066c"],["D:/hexo/public/tags/孙绍振/index.html","cde24dd2f06af8ab7275798fda5bc101"],["D:/hexo/public/tags/川端康成/index.html","e285b751edf631210ecb3bbe42a20089"],["D:/hexo/public/tags/巴金/index.html","9f35017ccca5a5c441fc04f8eebe1283"],["D:/hexo/public/tags/建站-hexo/index.html","0bc6f006c1636fdd3e7d1d906b38c3a2"],["D:/hexo/public/tags/总结/index.html","50d5af8e80d3c314decf2c0312ebbb5f"],["D:/hexo/public/tags/感悟/index.html","e704b409e2ff8b6f1f4027524cfc6d5c"],["D:/hexo/public/tags/感想/index.html","ed4523443207c24bec634fac964f1704"],["D:/hexo/public/tags/敦煌/index.html","dbed3230f4de1de8b0a130e6e21fae3a"],["D:/hexo/public/tags/文学/index.html","3852354dcd035ace5060da08b8248962"],["D:/hexo/public/tags/时空/index.html","304fbc24e964c97d1b7059543ffec836"],["D:/hexo/public/tags/林轩田/index.html","866c6dc8b5cbe8d40204ca4973bbce20"],["D:/hexo/public/tags/生活/index.html","55b9190b3bd26b929cc7bccb8b031439"],["D:/hexo/public/tags/线代/index.html","64f589b3376389077540a710298648c5"],["D:/hexo/public/tags/考研/index.html","4dc888c8be1779df4e5e01358f2c13e9"],["D:/hexo/public/tags/聂鲁达/index.html","7706d53e4217a5ea71a39f8a4bf1a1d8"],["D:/hexo/public/tags/西湖大学/index.html","c8609982fa3b33abe511de5e25dcb972"],["D:/hexo/public/tags/诗歌/index.html","6818666c0ef8a3f3a7fb07aaafe7dd46"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","7295bd806027ccb8ff47514df1da3257"],["D:/hexo/public/tags/读书/index.html","d5bf2a76560040838d88bb93d1c6d2b2"],["D:/hexo/public/tags/钟文/index.html","5ea353e1d85a2ad74e4cbff3f236ef66"],["D:/hexo/public/tags/阎连科/index.html","9feb7f18362f2593c2b784062e4fa43f"],["D:/hexo/public/tags/随想/index.html","b5dba84803e529bd595decfe6e505f48"],["D:/hexo/public/tags/青岛/index.html","f72a6982fd5d841ad3ffc08eb5e3c7c5"],["D:/hexo/public/tags/马尔克斯/index.html","6ef4e6fd5a8f82c5313bef57da768133"]];
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







