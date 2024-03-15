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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","da31eb870add51a7a94dad781b47af8e"],["D:/hexo/public/2019/09/18/百年孤独/index.html","6143f2d3412ae4a1b6a0773427cd4bdf"],["D:/hexo/public/2019/09/18/鼠疫/index.html","39c3e3e0f3049ee9a7ee848c1d3c5793"],["D:/hexo/public/2019/12/20/cloud/index.html","c2f8fc0f90706d0471d3e0549e397010"],["D:/hexo/public/2019/12/21/knn/index.html","094be5f6919e7d78499028567914e662"],["D:/hexo/public/2019/12/23/finish/index.html","194956b5c943bae8f95607d6a1bfbd80"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","c70e4968b612d3e6c3d94ba4f8113e4d"],["D:/hexo/public/2020/02/28/Linear/index.html","3318004df72673f4c63e6471c4f4feca"],["D:/hexo/public/2020/03/21/time/index.html","bdff42dcf65695fcbf1322d681d40523"],["D:/hexo/public/2020/05/23/1984/index.html","f01ddc207920167fda732c999bce6f92"],["D:/hexo/public/2020/06/09/git笔记/index.html","ba4c62932e32ef51a906b6c197a07f82"],["D:/hexo/public/2020/07/29/sheep/index.html","fc5cee9b857549a34e546bc4a6f3c5ba"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","aeb194e917b62dc7985b85c7adefa133"],["D:/hexo/public/2020/08/09/Haruki/index.html","1a790d735dcd59df1a64062f2dafbb45"],["D:/hexo/public/2020/09/13/summarize/index.html","5d94a1bdc4cdf1c2d94aaa4e696d27d2"],["D:/hexo/public/2020/10/19/Thorn/index.html","ebb770723658669c9e83ae20483d9e74"],["D:/hexo/public/2020/10/28/huiyi/index.html","030fc9c136257da6f2623e6111021295"],["D:/hexo/public/2020/11/26/一点感悟/index.html","fe44038368299f776f8a926281a293e2"],["D:/hexo/public/2021/01/02/crime/index.html","637e44527f952d9dee3e8a9781ce3998"],["D:/hexo/public/2021/03/08/mother/index.html","b907264899b68b23db7dd399b327a3d8"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","a7ff25ff26702c09a87098384eb5996e"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","955aaad3f1dc418c11768de63480dc6a"],["D:/hexo/public/2021/03/31/Cholera/index.html","502e7cee54488bddfa1e0d8f0a0c38af"],["D:/hexo/public/2021/03/31/镜中/index.html","b0c48379f902c397670a27f9b2a58c3e"],["D:/hexo/public/2021/04/03/最后的对话/index.html","a1dcb53bd0723f770d2312015da02231"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","727298aaf418838c0d2ee8ed4b8f87d1"],["D:/hexo/public/2021/04/06/雪国/index.html","391420659dd70ef618e2137d1c9d5b3b"],["D:/hexo/public/2021/04/09/骂观众/index.html","4d84b9f17237b902b5f4c38286873e30"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","527713d4e8558bc3b7e1940010b21bcf"],["D:/hexo/public/2021/04/21/家/index.html","6486edf73d54cd69cbe082ef0908a4fa"],["D:/hexo/public/2021/04/24/光与岸/index.html","4f93e4722c2ff917fe025f3e56918ad5"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","af360f988b3e5137090d9e65668f2bcd"],["D:/hexo/public/2021/05/03/五月伊始/index.html","06c1438f12c6f6db8af152af883c7d83"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","9548a89e4a5439e282ab1e2fc85dd2ae"],["D:/hexo/public/2021/05/31/迎接六月/index.html","9b96877575c1a5567d2180beb05c1054"],["D:/hexo/public/2021/07/07/七月/index.html","447e4b4ffc87b00dc96a6d9f4a9c06ee"],["D:/hexo/public/2023/05/16/dunhuang/index.html","269e908eccd04ddcfa10b136e96942f4"],["D:/hexo/public/2023/07/29/yeqi/index.html","f21aef22fb1a6c3c34f923a63a5977ee"],["D:/hexo/public/2023/09/10/life/index.html","72efc1701bb2286c5ad81fa1c35ec5aa"],["D:/hexo/public/2023/10/15/qingdao/index.html","3ec5509a9f622ea8879e194781eb644f"],["D:/hexo/public/2023/12/14/11yue/index.html","46071a8302dae752aeca01d4a3ab6a2d"],["D:/hexo/public/2024/01/04/12yue/index.html","ab8601ea75e92c5c245bd89d4ac5400e"],["D:/hexo/public/2024/03/15/database/index.html","9309b8f59083bf0cabda6128ef95fe17"],["D:/hexo/public/about/index.html","02535e95dfdee4c9ad66b5bda4366454"],["D:/hexo/public/archives/2019/09/index.html","bcf7d3288b783da2586499b4b9273fc5"],["D:/hexo/public/archives/2019/12/index.html","19cdd032fd3fe79d3086484b288a1770"],["D:/hexo/public/archives/2019/index.html","be66ea7064bc91d879c76543e7204cbd"],["D:/hexo/public/archives/2020/02/index.html","68a72fc4d94b34eb97c8c6d66da69dd3"],["D:/hexo/public/archives/2020/03/index.html","8254774c2b394edc21826fa63c86183b"],["D:/hexo/public/archives/2020/05/index.html","87e120fded3dd045284de911b5203d55"],["D:/hexo/public/archives/2020/06/index.html","39f8a51001fcfb3edebb2a2a3df25f6d"],["D:/hexo/public/archives/2020/07/index.html","19b515cbc1826d10df6adf51c2773106"],["D:/hexo/public/archives/2020/08/index.html","6dd75de1b94da148edf510e980387c81"],["D:/hexo/public/archives/2020/09/index.html","f49df6b610b558abda5495a00986bfa9"],["D:/hexo/public/archives/2020/10/index.html","712f4f1f99e29d13eb917d6c158dae69"],["D:/hexo/public/archives/2020/11/index.html","be56773b8310839e5fdd2a9fd95efa80"],["D:/hexo/public/archives/2020/index.html","323d7353511e6b60cefb704ee2e89ae3"],["D:/hexo/public/archives/2020/page/2/index.html","184033d6a08813d25432936c5ea7a9c8"],["D:/hexo/public/archives/2021/01/index.html","d503a82ea93e05a5f514f37be984f71a"],["D:/hexo/public/archives/2021/03/index.html","fb51464b88a20778fb0f09e0760216f3"],["D:/hexo/public/archives/2021/04/index.html","af8e7844e3bf18ce752da9b82d6582d9"],["D:/hexo/public/archives/2021/05/index.html","51a72c27aec139a9c33f286315f10ba8"],["D:/hexo/public/archives/2021/07/index.html","24244bf4277b9c44172f9e0d7f49878c"],["D:/hexo/public/archives/2021/index.html","c6a0eb7bec1da6a2285df13ad332a961"],["D:/hexo/public/archives/2021/page/2/index.html","dbf6482d9b0f0fc3eda35eab02614c64"],["D:/hexo/public/archives/2023/05/index.html","75e29e427382ffbc13b79c16998e5b9b"],["D:/hexo/public/archives/2023/07/index.html","4ffc2f6ae459c07f34af66b49784439f"],["D:/hexo/public/archives/2023/09/index.html","f01d82ec81e25d542d2e2cac2c028ec2"],["D:/hexo/public/archives/2023/10/index.html","d2192bbbe376a4b3ca100761cc49e5ae"],["D:/hexo/public/archives/2023/12/index.html","ddebdc7e20bca5fefed83e9e28dc3461"],["D:/hexo/public/archives/2023/index.html","014cea5d20121c5ba3b4645aee2bc8a2"],["D:/hexo/public/archives/2024/01/index.html","681ef459c0cd7189a2699f8c7a8e3641"],["D:/hexo/public/archives/2024/03/index.html","e68b74a2466672eb0a909069fe339204"],["D:/hexo/public/archives/2024/index.html","ef8fc7b8e089565a5f8c17dd3358f4d6"],["D:/hexo/public/archives/index.html","2eebb56fa52573a076771cb20eacafc4"],["D:/hexo/public/archives/page/2/index.html","5201f002a435f206ab390d605262406b"],["D:/hexo/public/archives/page/3/index.html","8ed76b38366ed1dd1d29b2793ad82776"],["D:/hexo/public/archives/page/4/index.html","03c3f6ee07181ef49ad17be5cefaa4cc"],["D:/hexo/public/archives/page/5/index.html","0e96513e4873047f0e2b5348fb1f754b"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","900c2574529a52e7c094165e368b8227"],["D:/hexo/public/categories/index.html","7f1b50e68aa593189c6b79942f8019c5"],["D:/hexo/public/categories/写作/index.html","9b806b27e8aaabdce8923607c5b38498"],["D:/hexo/public/categories/学习笔记/index.html","05c77181c267566436670ea198ba6bf1"],["D:/hexo/public/categories/感悟/index.html","e790a65c2131f8a1b91ba8cb6b83b316"],["D:/hexo/public/categories/感想/index.html","6070cc2cd9cdc4dc87e40816b845064b"],["D:/hexo/public/categories/感想/page/2/index.html","f5b2ac0d0c807dd007909ac25d6a94a6"],["D:/hexo/public/categories/数学/index.html","b0ba90486d5cc595d5004d4cff978ef8"],["D:/hexo/public/categories/文章收藏/index.html","6ba430fb3fc20983cfca8f5aa0499c07"],["D:/hexo/public/categories/旅行/index.html","1f1d0d358f15b6474c839e459002f0af"],["D:/hexo/public/categories/日记/index.html","8d7a6f6c4e697590fc64b9c1333ac029"],["D:/hexo/public/categories/机器学习/index.html","352b691899bd215c7e1f52eec89f8b6d"],["D:/hexo/public/categories/诗歌收藏/index.html","9e0c05b463b1d1e1d66bd412a767068f"],["D:/hexo/public/categories/读书笔记/index.html","1854caae387752d8ef52f0dd2abc82a7"],["D:/hexo/public/categories/读书笔记/page/2/index.html","eab97e6d63cd39604a2a171f509666c6"],["D:/hexo/public/comment/index.html","14bb4b2ff0404924628cbcc8c9c9a678"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","2366e8c3794323d2989229f1eeaa2ebe"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","bcb4157d3d0edbe2ffae5ba331855e79"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","5f9f2b92f6ad4e66a9e999c0f18ad647"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","65f52497acf6a94b2360340885ea8584"],["D:/hexo/public/music/index.html","9320edab1fb9d3f39b0677971e27f6d3"],["D:/hexo/public/page/2/index.html","27a278a33f815a24ecc3a8976cd0a849"],["D:/hexo/public/page/3/index.html","dd9e182899accb9134c14ac67a063f13"],["D:/hexo/public/page/4/index.html","45d1fd188bf855f885701eff73c463d6"],["D:/hexo/public/page/5/index.html","40ecb60798fcdefb3724d3e2b6e23ee9"],["D:/hexo/public/tags/KNN/index.html","0bb2ae11c48cdb9adeddf7cda3c273a5"],["D:/hexo/public/tags/git/index.html","ca5cf17339efaccadfec37d7cdab5f81"],["D:/hexo/public/tags/index.html","12e2030916a8308f29632819a990ad2d"],["D:/hexo/public/tags/余华/index.html","911b024b16922390095aa3c947dec265"],["D:/hexo/public/tags/北京/index.html","e83b175907d6292c79a73c91495c41ab"],["D:/hexo/public/tags/博尔赫斯/index.html","bfe1622fe6aec7ccc9294bfa31c7ade0"],["D:/hexo/public/tags/回忆/index.html","801d100d172add194d543ffffe4d257b"],["D:/hexo/public/tags/孙绍振/index.html","9e9c81e91d91356f771ae15ea8f8cd7b"],["D:/hexo/public/tags/川端康成/index.html","2c5751c048e34444f2bb7e74acfbf8a0"],["D:/hexo/public/tags/巴金/index.html","52369b791e7b7a6152df55f077a26e8f"],["D:/hexo/public/tags/建站-hexo/index.html","36665e29a5cb06383ab4e8ef76c9dce6"],["D:/hexo/public/tags/总结/index.html","3f57ebf2d0a458e80de8c27e376971c0"],["D:/hexo/public/tags/感悟/index.html","dfbf1c16d7393f85a423c888e8fa14e1"],["D:/hexo/public/tags/感想/index.html","e6e508edfdd24a675a6a8ed2f65b8325"],["D:/hexo/public/tags/敦煌/index.html","41098b9c64b1813759f73df8b14e388c"],["D:/hexo/public/tags/文学/index.html","2bc54b9d2b9a3c4afe7dac9aa6373749"],["D:/hexo/public/tags/时空/index.html","7b9236f89ec94c9f18ce09b631acb4de"],["D:/hexo/public/tags/林轩田/index.html","e5860c5052cc30ea7811ba478c36613d"],["D:/hexo/public/tags/生活/index.html","f5ac0c8aa2dd177bdaba7f4769818932"],["D:/hexo/public/tags/线代/index.html","f5a8b7e9ce225058fa671efc2b820929"],["D:/hexo/public/tags/考研/index.html","4e9b8da13bb38ab53a66b0972a859d12"],["D:/hexo/public/tags/聂鲁达/index.html","796c890ae4df64716b97cb6fab975f99"],["D:/hexo/public/tags/西湖大学/index.html","53278a6dc77630a02835ee93f2d659fb"],["D:/hexo/public/tags/诗歌/index.html","be9ad2325e6d82e1ad9bcec290b8177d"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","8f0d527933ef9b494d016bf2eb700711"],["D:/hexo/public/tags/读书/index.html","088b5ec9e3bf8bae671c80ad91a542a5"],["D:/hexo/public/tags/钟文/index.html","7a4685e3174b93109113863fe2b04edf"],["D:/hexo/public/tags/阎连科/index.html","084627666c2c1438f5b6d2894c3fc923"],["D:/hexo/public/tags/随想/index.html","82d4bd44d88e93069880aa544cf9c0d9"],["D:/hexo/public/tags/青岛/index.html","354764b074f69ea2505850199d19c4b8"],["D:/hexo/public/tags/马尔克斯/index.html","f2ef83ecfc29577762f7367443a1d5a1"]];
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







