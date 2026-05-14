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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","0a776449bc1fffa204fcc43a1379798f"],["D:/hexo/public/2019/09/18/百年孤独/index.html","4c79958e60d4e7f63dbe1692aad328a2"],["D:/hexo/public/2019/09/18/鼠疫/index.html","bd6074f58f9a2dc1a1781857eac06f57"],["D:/hexo/public/2019/12/20/cloud/index.html","9ce90428fe0596589491c127606b8a93"],["D:/hexo/public/2019/12/21/knn/index.html","4e65df5b788ff9ee181b1a240415bf28"],["D:/hexo/public/2019/12/23/finish/index.html","8f811b46a31387e5a2858629ff4a9178"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","005acf3e82eadb389dedf46f60a599f1"],["D:/hexo/public/2020/02/28/Linear/index.html","c3160d615e5d3c25094db45422c69348"],["D:/hexo/public/2020/03/21/time/index.html","e057d23d1be85a64ea6938c4b04785af"],["D:/hexo/public/2020/05/23/1984/index.html","85ded7c045283b9666caa7c2cbb489df"],["D:/hexo/public/2020/06/09/git笔记/index.html","b366901eb10ab294ec7f88d826de8ffb"],["D:/hexo/public/2020/07/29/sheep/index.html","b155f9a62ba9477d71c119a1fcf8e329"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","8a1d018f373d217cf994baeeebd43b12"],["D:/hexo/public/2020/08/09/Haruki/index.html","aef8a83f118d1ed27c2e65b79b20d1b5"],["D:/hexo/public/2020/09/13/summarize/index.html","e1d3bceaac60777c445ca6c597112ba4"],["D:/hexo/public/2020/10/19/Thorn/index.html","a18544e00681c2449c7de9f364b32f11"],["D:/hexo/public/2020/10/28/huiyi/index.html","4c682e07d800115b4bf7d3274627fde3"],["D:/hexo/public/2020/11/26/一点感悟/index.html","62f6d85e72231618ad31c7d5427c540c"],["D:/hexo/public/2021/01/02/crime/index.html","50e0e8a97c84668ff2e22d4a1878e175"],["D:/hexo/public/2021/03/08/mother/index.html","41f188dfcff402d3370a3bf656ebb6a0"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","6bef3b57ef4355f2d1d52015a1687246"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","4a6b5c6a0bc29909cf613454652d9732"],["D:/hexo/public/2021/03/31/Cholera/index.html","38717a232eda5a1740c93c12a866f24b"],["D:/hexo/public/2021/03/31/镜中/index.html","8e3d9ee5426b17e36f0947ee040767b6"],["D:/hexo/public/2021/04/03/最后的对话/index.html","64f5b451a0c5d12202fa058d4ab4a163"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","7862b15d54ef5efbc60f985e2177dd39"],["D:/hexo/public/2021/04/06/雪国/index.html","2bd751f1e2bb0d872cbd7442d4e35b99"],["D:/hexo/public/2021/04/09/骂观众/index.html","18b3b1c09a9368a83c4bdd98ae73987b"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","15aba74b51e95bc2ab18d4aa8cec4603"],["D:/hexo/public/2021/04/21/家/index.html","a55035aac2e8091e4726865c4bb4b307"],["D:/hexo/public/2021/04/24/光与岸/index.html","8be5fbe9f35f7551458022f07bfc7945"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","5215501aa9111618a1f0be4bcb5651f1"],["D:/hexo/public/2021/05/03/五月伊始/index.html","b5a5fbfe76849dde3a3c72a531d26f47"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","2d63b5f53b7db9a7da36f2c60e200a6b"],["D:/hexo/public/2021/05/31/迎接六月/index.html","5cd38100e833777fcd7a4c557a974128"],["D:/hexo/public/2021/07/07/七月/index.html","76e5e02820b1268b04c4f82d9ab80dc6"],["D:/hexo/public/2023/05/16/dunhuang/index.html","ed7ebe34b34cb1463304a7c1cfbb5a76"],["D:/hexo/public/2023/07/29/yeqi/index.html","4142af781c3ecac5725000043538a79a"],["D:/hexo/public/2023/09/10/life/index.html","407e1211340c74cf06540bae01f3d830"],["D:/hexo/public/2023/10/15/qingdao/index.html","556b70959b97b34ad11fd4c5b1ef9c1a"],["D:/hexo/public/2023/12/14/11yue/index.html","7a318b812f52609f0e7de3b49b43d0ba"],["D:/hexo/public/2024/01/04/12yue/index.html","15f9f59402a9dee91e5e3f3a69396bcb"],["D:/hexo/public/2024/03/19/spring/index.html","3525a704992ebb0e4cc40a98b82567fd"],["D:/hexo/public/2024/05/27/5月/index.html","5f4e5cb24fb1468a5f36ccf01a8fe400"],["D:/hexo/public/about/index.html","0ce294a7051bc9a361378561b1656c4f"],["D:/hexo/public/archives/2019/09/index.html","86247416af9f62bf75ccbc31d47c54d3"],["D:/hexo/public/archives/2019/12/index.html","227a9b6473fe6bbbb7a46364b54789f1"],["D:/hexo/public/archives/2019/index.html","883f6cfa1b797c6b6d6094ee9f766566"],["D:/hexo/public/archives/2020/02/index.html","8d283c4aca3c2261429494486a4c5255"],["D:/hexo/public/archives/2020/03/index.html","2a068aec499fde2b896ee856e49277d5"],["D:/hexo/public/archives/2020/05/index.html","5e6f802e6a3497dd87230158ac8f16bc"],["D:/hexo/public/archives/2020/06/index.html","ac26600c5f26916b0c608bd424b776a4"],["D:/hexo/public/archives/2020/07/index.html","961a971144b2f0c159ab3e534970c664"],["D:/hexo/public/archives/2020/08/index.html","55dffa15462169d0f232dd46a9450f7b"],["D:/hexo/public/archives/2020/09/index.html","56c40eae5d82fec595343e8cd2102b54"],["D:/hexo/public/archives/2020/10/index.html","b1a3b54c4baeb9830374979ae69cd711"],["D:/hexo/public/archives/2020/11/index.html","108f7fb3bdff56a9bc059a73d69ba47f"],["D:/hexo/public/archives/2020/index.html","c4501486e722746b34c2838775a7043b"],["D:/hexo/public/archives/2020/page/2/index.html","fee50fc55d4dcd13960e5cd26bd838a7"],["D:/hexo/public/archives/2021/01/index.html","745e29020815d50a30d08a5fbaf56e33"],["D:/hexo/public/archives/2021/03/index.html","e4df2171ee80f125cd7244a76709d91f"],["D:/hexo/public/archives/2021/04/index.html","5437b84a5bde01c62fd19845255997dd"],["D:/hexo/public/archives/2021/05/index.html","61b22dd4df7adb72dc5cf3b2c8f3a2fa"],["D:/hexo/public/archives/2021/07/index.html","08186a8c500fc4cbca4ffe5a541c5bc8"],["D:/hexo/public/archives/2021/index.html","47a70a2e17b2c05891513c4ee76bb213"],["D:/hexo/public/archives/2021/page/2/index.html","7161b3e8f7cf421a29a769b2f5ec8c4a"],["D:/hexo/public/archives/2023/05/index.html","1e593248fea1e6fff0474695a23545f4"],["D:/hexo/public/archives/2023/07/index.html","8a5485d370bd190ef0044288abab9ff8"],["D:/hexo/public/archives/2023/09/index.html","db65a109a3be0558297feeaa0daf926f"],["D:/hexo/public/archives/2023/10/index.html","08d28cd74fcad0b80bee7f2e269b6555"],["D:/hexo/public/archives/2023/12/index.html","21cc296dc736361c91365544b24217d7"],["D:/hexo/public/archives/2023/index.html","c1138ec469a86473be6ab143aa929b34"],["D:/hexo/public/archives/2024/01/index.html","cf5525712c672f352356b4a0e1e5d680"],["D:/hexo/public/archives/2024/03/index.html","701ee9de98b1aba92280c87a8908a425"],["D:/hexo/public/archives/2024/05/index.html","38d9a4b58edfee84fca08fdbce9d642f"],["D:/hexo/public/archives/2024/index.html","cc8a99738072b9e8292e6f59eee2d588"],["D:/hexo/public/archives/index.html","4323b2ca07403358b364281a3ac1f2c5"],["D:/hexo/public/archives/page/2/index.html","271287224ed4f0f84d32016119f793e7"],["D:/hexo/public/archives/page/3/index.html","a01de4bee0a006a18cddee8adbd4a438"],["D:/hexo/public/archives/page/4/index.html","321fc2448f0ace75ad17492be1a5175f"],["D:/hexo/public/archives/page/5/index.html","17a442de8263979c8b0f2655bda9e167"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","4758d0c17592816eb561b1789fa4ca6b"],["D:/hexo/public/categories/index.html","a75b4c1878c6393cfe34b28596d67ffb"],["D:/hexo/public/categories/写作/index.html","ac50e422670c35951e63fa0879c1307b"],["D:/hexo/public/categories/学习笔记/index.html","9b12ca7f4fb843c072bc1952c12d0776"],["D:/hexo/public/categories/感悟/index.html","c92bf8cd650a8d1a345429ca316db63e"],["D:/hexo/public/categories/感想/index.html","f74536206362c143854f392c91c82e07"],["D:/hexo/public/categories/感想/page/2/index.html","1da88aa1d2d8c10cf6c6987121bf9fe9"],["D:/hexo/public/categories/数学/index.html","00b5f56d4354cf8c380b5621d055e4c1"],["D:/hexo/public/categories/文章收藏/index.html","7205d7607bfd7236aa05baa7e997033d"],["D:/hexo/public/categories/旅行/index.html","7f7928957ba12d48c7fdd6662ce349b9"],["D:/hexo/public/categories/日记/index.html","bdc1614b99acf4dfedb639089b2bb214"],["D:/hexo/public/categories/机器学习/index.html","eca7352b31d5740f149a96842c0a36c9"],["D:/hexo/public/categories/诗歌收藏/index.html","f2fe191b01ca54ace559503a913c8822"],["D:/hexo/public/categories/读书笔记/index.html","6867a3a841f391e80ea2fca453621580"],["D:/hexo/public/categories/读书笔记/page/2/index.html","4abb3f47fd3e181955c393865c5a627b"],["D:/hexo/public/comment/index.html","b143b0657bc40571fb0ab27e50703a04"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","02cb3047e537cda572ae8d40dd57c8ee"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","f6689e0d16382d37fd0325913338046e"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","76fd9a6c52efe73a5dce02e312670a7d"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","48eb33ad246a9e7a6c692afaf855b2ca"],["D:/hexo/public/music/index.html","3e793a5c791a1b8b1291f13dcbdeb20c"],["D:/hexo/public/page/2/index.html","7883ca3cc3d6fac79837433a9c824162"],["D:/hexo/public/page/3/index.html","47cd3110f0a01988718c39b6ebf31636"],["D:/hexo/public/page/4/index.html","85e6ff6297935b56edb8e4c959e42ba7"],["D:/hexo/public/page/5/index.html","a4cd7df2014e9227f4bf3187fb4ed134"],["D:/hexo/public/tags/KNN/index.html","f31eff3f3a101ff46a08871e36ecf3d9"],["D:/hexo/public/tags/git/index.html","1f7cd99747a93d4cbf563a343b5e5adc"],["D:/hexo/public/tags/index.html","6490b00ead1ee5b95932a574b23ec1db"],["D:/hexo/public/tags/余华/index.html","6a6f83c2d0e6f74cf34027f6d13b0077"],["D:/hexo/public/tags/北京/index.html","676f43a049e2c4113c9bb020cdcbd54e"],["D:/hexo/public/tags/博尔赫斯/index.html","4b1f60b94901f3d65d5d5c7c8219fbeb"],["D:/hexo/public/tags/回忆/index.html","e8770b9eb39d0d75c3d5134570e0b051"],["D:/hexo/public/tags/孙绍振/index.html","7e22ad1580c3c9fd9ade0debaa0fbf39"],["D:/hexo/public/tags/川端康成/index.html","204689c0b14474940b014054c595cd9f"],["D:/hexo/public/tags/巴金/index.html","985bcf84dc35f67edd31ccf844d7bffa"],["D:/hexo/public/tags/建站-hexo/index.html","347550fd3e9b8b8af3da576ed0be49f9"],["D:/hexo/public/tags/总结/index.html","f312d9fea4e7212c7b4fe967d63d4832"],["D:/hexo/public/tags/感悟/index.html","ddfe81f8813cf45bb844b02a1960e6f3"],["D:/hexo/public/tags/感想/index.html","f22f973e0f6c1da626cdd7d0dc345082"],["D:/hexo/public/tags/敦煌/index.html","95343b87369aef6ea63b1bc735027f69"],["D:/hexo/public/tags/文学/index.html","6427e08fb42b64112919ff00423cab00"],["D:/hexo/public/tags/时空/index.html","1fb68a7e0f4fbb5a67cdd440499f0d61"],["D:/hexo/public/tags/林轩田/index.html","16682c8abbfa8989eddcc7297250c106"],["D:/hexo/public/tags/生活/index.html","fa3424f47672334ceaa50bac9d69e1cf"],["D:/hexo/public/tags/线代/index.html","650caebdb461506ae37c7441ce80a7f4"],["D:/hexo/public/tags/考研/index.html","41725c9c1cc7f1ad174db2d974a6ab9e"],["D:/hexo/public/tags/聂鲁达/index.html","c05eeb3f6c8f1870083b97345748c52a"],["D:/hexo/public/tags/西湖大学/index.html","5057ffd0b9fe097c9bdcde6795cc6997"],["D:/hexo/public/tags/诗歌/index.html","c074a4ef2aa6007f00da68ec3b4cd38a"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","4e0d967330246501ec909c6184e525a2"],["D:/hexo/public/tags/读书/index.html","c141c1838336e5c637df0e2379708811"],["D:/hexo/public/tags/钟文/index.html","af9384f7f8b5f0444a464cefae4258ba"],["D:/hexo/public/tags/阎连科/index.html","0b4d6b2c9d225490034c046997a12ba9"],["D:/hexo/public/tags/随想/index.html","79373e2af1ad117862d7340efed7d557"],["D:/hexo/public/tags/青岛/index.html","7f62600e3837eb5cfea6fdf7c3872244"],["D:/hexo/public/tags/马尔克斯/index.html","b6769bf25cd1e48c4e87f0fb1194b654"]];
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







