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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","edc0e5684b384d153c471cfa88066cac"],["D:/hexo/public/2019/09/18/百年孤独/index.html","c3564461b090cf7798cc1fd46206ea11"],["D:/hexo/public/2019/09/18/鼠疫/index.html","1c0433c296ef0ed39a52758e6a907b0e"],["D:/hexo/public/2019/12/20/cloud/index.html","ea3bcd53418199187affd50bc8822764"],["D:/hexo/public/2019/12/21/knn/index.html","67855e60613b3381dc8a11206761d986"],["D:/hexo/public/2019/12/23/finish/index.html","c0d7cabbbd194d4eb55b8bbc0cd30cd0"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","1d36c0e3f108527211b2c633009966b5"],["D:/hexo/public/2020/02/28/Linear/index.html","ddbb0351e43675afa8cdc1d8ac1e835d"],["D:/hexo/public/2020/03/21/time/index.html","1c5064039cbf04efdfed1eceffec6741"],["D:/hexo/public/2020/05/23/1984/index.html","d00cc7df5309d78a5e564d38ce77ef38"],["D:/hexo/public/2020/06/09/git笔记/index.html","671165a11d76c4b7b8b797ca80439237"],["D:/hexo/public/2020/07/29/sheep/index.html","2e0e0694567f8ba1fe1510636df4dbba"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","ce954162ebbd857c58a6c07f29700fb1"],["D:/hexo/public/2020/08/09/Haruki/index.html","364ec63df01834c6da5efcbf6ed3079d"],["D:/hexo/public/2020/09/13/summarize/index.html","ea50fda447047dbf036b6657a82cf388"],["D:/hexo/public/2020/10/19/Thorn/index.html","666a6b2d11e02acbcb46e183ba2792b4"],["D:/hexo/public/2020/10/28/huiyi/index.html","a2c3d077e16ceeb3e2cbd252accabab6"],["D:/hexo/public/2020/11/26/一点感悟/index.html","db661a3388f7502b8b47a14eb5c55682"],["D:/hexo/public/2021/01/02/crime/index.html","44f96eec5b98ced205fef0babeec9a0d"],["D:/hexo/public/2021/03/08/mother/index.html","991e21108ed5e4df5776f875298a41c6"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","4984c87d6e3e96043a436842fd6dd5b6"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","2aa40be6e5a5b1ec01315c9bc376bc7e"],["D:/hexo/public/2021/03/31/Cholera/index.html","2b56017042c0bdfa28752eeed545e845"],["D:/hexo/public/2021/03/31/镜中/index.html","af50bd00771a6c2df7c0b9014ac21e6a"],["D:/hexo/public/2021/04/03/最后的对话/index.html","9cfdb44ab3d636348508145c36bce017"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","3a9f115a87466906bf19f3cfd53399c7"],["D:/hexo/public/2021/04/06/雪国/index.html","e162c36b0743d4787977fc0a3221aaa5"],["D:/hexo/public/2021/04/09/骂观众/index.html","10a37455ee38dc8a643a87881223b555"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","c14047ca3ecbf9b6e4d060f224941c26"],["D:/hexo/public/2021/04/21/家/index.html","df0f3a95de713ab8478cf65577f333a2"],["D:/hexo/public/2021/04/24/光与岸/index.html","40cbb3a05cbe1861d5423142fdcefc73"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","e2dd831e80788eb7826a7e9288f18448"],["D:/hexo/public/2021/05/03/五月伊始/index.html","936c3960ddf38f575c1fe29854e4308d"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","292c33c08f7bbc1f121dc53e8a1519ef"],["D:/hexo/public/2021/05/31/迎接六月/index.html","339f8a819e8e13f070c6e2e37dd3d5c2"],["D:/hexo/public/2021/07/07/七月/index.html","126400332d163ae074a9297ccc80f300"],["D:/hexo/public/2023/05/16/dunhuang/index.html","cf67b6d13022547b91bd4babfcf63327"],["D:/hexo/public/2023/07/29/yeqi/index.html","6492aa604dd912765e60877110011ea7"],["D:/hexo/public/2023/09/10/life/index.html","d761e6b771afaf1a75848f82d8e3aae5"],["D:/hexo/public/2023/10/15/qingdao/index.html","c48283a9c60ddd27c0bf6a3c546d3eb0"],["D:/hexo/public/2023/12/14/11yue/index.html","62bbf858b5934df7bf0f637244d8b67e"],["D:/hexo/public/2024/01/04/12yue/index.html","7cc160798973efe98dda08f2b6689133"],["D:/hexo/public/2024/03/19/spring/index.html","01a98e0a210b1b7e5c5ad77e33a6319f"],["D:/hexo/public/2024/05/27/5月/index.html","1616a141fb6dd44b70da464a9ebc9c22"],["D:/hexo/public/2026/05/13/2026/index.html","7726e1e65934772da78aab8a9c8108bb"],["D:/hexo/public/about/index.html","87a63f14ade7eaa18b3adf0af107aded"],["D:/hexo/public/archives/2019/09/index.html","df86b8b55ec41e46f5f9397962cb96be"],["D:/hexo/public/archives/2019/12/index.html","ef1c656525e58c1a3c41065a7f30d740"],["D:/hexo/public/archives/2019/index.html","dfe9bca1a8b23c3ca96a9d0a9bb6e997"],["D:/hexo/public/archives/2020/02/index.html","da2b8da451c0d503e2f786984b42cf61"],["D:/hexo/public/archives/2020/03/index.html","cd25edc7465c71d791e4767eb3fe6b25"],["D:/hexo/public/archives/2020/05/index.html","64bdbf37a888e96e2387334a4cd91b0d"],["D:/hexo/public/archives/2020/06/index.html","0b50d3dc011574a258f29caaa0fa7e7b"],["D:/hexo/public/archives/2020/07/index.html","ede7b40a9e51a29b5b8a8cbeb9240a08"],["D:/hexo/public/archives/2020/08/index.html","baa6bfc6c40a630b5486ae111a7607cd"],["D:/hexo/public/archives/2020/09/index.html","d53ff15129919ba4c524a6ca8c36cbc6"],["D:/hexo/public/archives/2020/10/index.html","675d2a528434e511540cb9e5d23a2100"],["D:/hexo/public/archives/2020/11/index.html","e85eb3a95b7371b6b52b63aee3e4fd2d"],["D:/hexo/public/archives/2020/index.html","6bb2d93d7eb887fc444d4b1a015d4c48"],["D:/hexo/public/archives/2020/page/2/index.html","fd6e6a4ff0af46fbaaa904f959ead55f"],["D:/hexo/public/archives/2021/01/index.html","a170049423d0c6cfbc173b005287ca0c"],["D:/hexo/public/archives/2021/03/index.html","e2a4be6d6abea3fdeb6ed0145e584bf0"],["D:/hexo/public/archives/2021/04/index.html","4118a065f88b61b67079c41a6cbcd6f8"],["D:/hexo/public/archives/2021/05/index.html","2b0416fa618be7e55b1760318cc9bd42"],["D:/hexo/public/archives/2021/07/index.html","ee933bebc6faba4db268e485415078d0"],["D:/hexo/public/archives/2021/index.html","190b6f307d97b29ce3be04d78f39549a"],["D:/hexo/public/archives/2021/page/2/index.html","61e5cfb976281fc8456970483e6631b1"],["D:/hexo/public/archives/2023/05/index.html","1fa634001516ba29da79d0f28425f5d0"],["D:/hexo/public/archives/2023/07/index.html","e88436e1022dfff579190abc2df57274"],["D:/hexo/public/archives/2023/09/index.html","860a4ae6228a15ce2583e965c4f25bb8"],["D:/hexo/public/archives/2023/10/index.html","2eeed04fe3d6fc4b5d733e8a63f27d5a"],["D:/hexo/public/archives/2023/12/index.html","2fd0bd10e8ae7d098a16fc572404f097"],["D:/hexo/public/archives/2023/index.html","3dcca916e141f01947f2d25c6b339afb"],["D:/hexo/public/archives/2024/01/index.html","1c43ecc67417310e6d7eb1b07c6230be"],["D:/hexo/public/archives/2024/03/index.html","c3d60b2a08988657d2e1b74e5f2f8c2c"],["D:/hexo/public/archives/2024/05/index.html","0843c1a070e3e46db9b914066609c927"],["D:/hexo/public/archives/2024/index.html","b2f81aecada58ac57b0615636e91f27e"],["D:/hexo/public/archives/2026/05/index.html","930e94d44b39c69ac1ae0a2e2d0a0acc"],["D:/hexo/public/archives/2026/index.html","e4858ca684498a157f7a37a3ac0f7a5b"],["D:/hexo/public/archives/index.html","7dff702e538fde030fa4c98b6e004631"],["D:/hexo/public/archives/page/2/index.html","ec4bf25e5eb8457ede02646040d666c8"],["D:/hexo/public/archives/page/3/index.html","67a7d22206ef58c01750306f293ee47c"],["D:/hexo/public/archives/page/4/index.html","a92390e93edbb802e041259d99551d00"],["D:/hexo/public/archives/page/5/index.html","691aceb23509dfaa8f82f64841319f95"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","785184ba0296b8c0a75c28311583fd1c"],["D:/hexo/public/categories/index.html","416dacaac25d23397c2dffe7c3b17495"],["D:/hexo/public/categories/写作/index.html","e128d968434e4b67da4351a294cd6095"],["D:/hexo/public/categories/学习笔记/index.html","45e176a3a7145d33100e589f774499cf"],["D:/hexo/public/categories/感悟/index.html","8a6d00d8f2f0d5e363c29496b09d6ac7"],["D:/hexo/public/categories/感想/index.html","7888c74132a970546ec445869cb0a3bb"],["D:/hexo/public/categories/感想/page/2/index.html","ba4743fb01ed73ea6a2319de164d66d4"],["D:/hexo/public/categories/数学/index.html","bcd379bd4f14ae11f7b11ffae0cc9257"],["D:/hexo/public/categories/文章收藏/index.html","0a79da17ca75153b0ce1fb4ac19e990d"],["D:/hexo/public/categories/旅行/index.html","3d4dcde28ecd22ce01a017d3753f07c2"],["D:/hexo/public/categories/日记/index.html","d239a148deb0033ea6ace56cc9d896ed"],["D:/hexo/public/categories/机器学习/index.html","d5afed6f9565970263f28ac1b260e2d3"],["D:/hexo/public/categories/诗歌收藏/index.html","aa2aa7d23834d81a702f2c0ca4f89bf1"],["D:/hexo/public/categories/读书笔记/index.html","e42ef7d3b85f7243bb2f89c8c0a61598"],["D:/hexo/public/categories/读书笔记/page/2/index.html","3c22b775a95491440cbc1f6f59491d60"],["D:/hexo/public/comment/index.html","9cb0c5679a1e09fe32222727812642ca"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","23a094077792eeba58359dfb75bab660"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","dcd05c76d17cf627cc321f41d4152d02"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","7ab6cb99fc4838a12c632c99857b88d2"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","7d00dbe087f58a617a1154f0f3d5c8ab"],["D:/hexo/public/music/index.html","79056c6b2af5d0b91d8a4bf3ba4639f8"],["D:/hexo/public/page/2/index.html","29ca6457c2f3e52ec12534100f0ccf4f"],["D:/hexo/public/page/3/index.html","ed225feb2386c85d870a70e4ff1ac788"],["D:/hexo/public/page/4/index.html","a36859747f67fc05b9b1e7721a52c6cd"],["D:/hexo/public/page/5/index.html","3e007d14c8650bc52388d5a9a6ed660c"],["D:/hexo/public/tags/KNN/index.html","32d374bc3becda5be63a1fe5f2d659de"],["D:/hexo/public/tags/git/index.html","4778d89bb8f64faf442f4e6923a5e281"],["D:/hexo/public/tags/index.html","fc221afd60c5adabeffde4edf71d3f12"],["D:/hexo/public/tags/余华/index.html","5690778e35fea1d33b293e522e35bfc1"],["D:/hexo/public/tags/北京/index.html","39ec1ba4084232aa90e84d319599bf51"],["D:/hexo/public/tags/博尔赫斯/index.html","f500c23a76a1e0dad72b733af5951f08"],["D:/hexo/public/tags/回忆/index.html","dad4be2dbd2511a46be78fa7fe19ee20"],["D:/hexo/public/tags/孙绍振/index.html","483d90e2f18719c4b1cc7b06ed3b2232"],["D:/hexo/public/tags/川端康成/index.html","5b8fa53959b9ef0af8a560d826df59fa"],["D:/hexo/public/tags/巴金/index.html","83ea34e38660702b274d89b23fa4633d"],["D:/hexo/public/tags/建站-hexo/index.html","6350251395d2986e70c2ce32abc4a689"],["D:/hexo/public/tags/总结/index.html","27b6e6edfd66fe1e128022c8ef5f4f56"],["D:/hexo/public/tags/感悟/index.html","1cc7e0ca3ad6b5b29b5d7f31d620220b"],["D:/hexo/public/tags/感想/index.html","1d70ac38f4e194dbfd089b16c25a2bf1"],["D:/hexo/public/tags/敦煌/index.html","2b8ff758dcd833b7601ce3c2e126ba81"],["D:/hexo/public/tags/文学/index.html","22d26388eec401ef3e1c28aa3878555d"],["D:/hexo/public/tags/时空/index.html","0fdf810485572f0017f17f262ec53965"],["D:/hexo/public/tags/林轩田/index.html","22fe2596e8f3b102f677dcbb4b459525"],["D:/hexo/public/tags/生活/index.html","d68e86bc22597307aa3ea03279574f68"],["D:/hexo/public/tags/线代/index.html","e99d4969662864bf04f96e7f992be00a"],["D:/hexo/public/tags/考研/index.html","085ff64d3e9a13b32c2c04cbc5a9320b"],["D:/hexo/public/tags/聂鲁达/index.html","59d665196d832ea69abf9a6f96116dac"],["D:/hexo/public/tags/西湖大学/index.html","6d2aefa0636d5f1d50644655781c0058"],["D:/hexo/public/tags/诗歌/index.html","f1d86e3049f418110adb978c975cd297"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","f7dd8c022f86d85e930d937c7abc592b"],["D:/hexo/public/tags/读书/index.html","07d584e770932d5adfba7c759a377fc9"],["D:/hexo/public/tags/钟文/index.html","278b8cc74d241d972ce7efca192ba579"],["D:/hexo/public/tags/阎连科/index.html","06b030532919e13b8fa99bdeb99acbc4"],["D:/hexo/public/tags/随想/index.html","6f8c2c3d6b03f1852b1be6d672ff1f2d"],["D:/hexo/public/tags/青岛/index.html","35d41d6e82de7e7edb7a3a5c762c4454"],["D:/hexo/public/tags/马尔克斯/index.html","1918b814dab104a02d9dfbd9b28576b3"]];
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







