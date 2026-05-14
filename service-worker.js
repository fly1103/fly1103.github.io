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

var precacheConfig = [["D:/hexo/public/2019/09/18/围城/index.html","7bce5ca2b84a67bf7c7bd3b8bcfc7fa3"],["D:/hexo/public/2019/09/18/百年孤独/index.html","5e2c813ee7ac0ede719e210633d0bd10"],["D:/hexo/public/2019/09/18/鼠疫/index.html","cd68768fca61cf7d7458763bc0fc1881"],["D:/hexo/public/2019/12/20/cloud/index.html","ea3bcd53418199187affd50bc8822764"],["D:/hexo/public/2019/12/21/knn/index.html","67855e60613b3381dc8a11206761d986"],["D:/hexo/public/2019/12/23/finish/index.html","c0d7cabbbd194d4eb55b8bbc0cd30cd0"],["D:/hexo/public/2020/02/27/机器学习基石/index.html","1d36c0e3f108527211b2c633009966b5"],["D:/hexo/public/2020/02/28/Linear/index.html","ddbb0351e43675afa8cdc1d8ac1e835d"],["D:/hexo/public/2020/03/21/time/index.html","1c5064039cbf04efdfed1eceffec6741"],["D:/hexo/public/2020/05/23/1984/index.html","5662a10ad72ece9a9e62ec6ebc828889"],["D:/hexo/public/2020/06/09/git笔记/index.html","671165a11d76c4b7b8b797ca80439237"],["D:/hexo/public/2020/07/29/sheep/index.html","048f3af69a41a15025a991737ebec6a2"],["D:/hexo/public/2020/08/07/Mockingbird/index.html","710579b26133f06ac0e6d4aa4c2f95c0"],["D:/hexo/public/2020/08/09/Haruki/index.html","6d6e2828d0f4f62751a2c40f1431fdd7"],["D:/hexo/public/2020/09/13/summarize/index.html","bec8bf79af54b23d0c0d08949ba99e0c"],["D:/hexo/public/2020/10/19/Thorn/index.html","c9a2619546aebe94c20fb2b6b88395b0"],["D:/hexo/public/2020/10/28/huiyi/index.html","a2c3d077e16ceeb3e2cbd252accabab6"],["D:/hexo/public/2020/11/26/一点感悟/index.html","db661a3388f7502b8b47a14eb5c55682"],["D:/hexo/public/2021/01/02/crime/index.html","b6237bbb4a779a89842378a918b41bf5"],["D:/hexo/public/2021/03/08/mother/index.html","991e21108ed5e4df5776f875298a41c6"],["D:/hexo/public/2021/03/17/一个比世界更大的村庄/index.html","4984c87d6e3e96043a436842fd6dd5b6"],["D:/hexo/public/2021/03/17/那些温暖和百感交集的旅程/index.html","2aa40be6e5a5b1ec01315c9bc376bc7e"],["D:/hexo/public/2021/03/31/Cholera/index.html","2b56017042c0bdfa28752eeed545e845"],["D:/hexo/public/2021/03/31/镜中/index.html","af50bd00771a6c2df7c0b9014ac21e6a"],["D:/hexo/public/2021/04/03/最后的对话/index.html","9cfdb44ab3d636348508145c36bce017"],["D:/hexo/public/2021/04/06/我喜欢你是寂静的/index.html","3a9f115a87466906bf19f3cfd53399c7"],["D:/hexo/public/2021/04/06/雪国/index.html","e162c36b0743d4787977fc0a3221aaa5"],["D:/hexo/public/2021/04/09/骂观众/index.html","10a37455ee38dc8a643a87881223b555"],["D:/hexo/public/2021/04/10/文学死了吗/index.html","c14047ca3ecbf9b6e4d060f224941c26"],["D:/hexo/public/2021/04/21/家/index.html","df0f3a95de713ab8478cf65577f333a2"],["D:/hexo/public/2021/04/24/光与岸/index.html","40cbb3a05cbe1861d5423142fdcefc73"],["D:/hexo/public/2021/04/24/西湖春读会/index.html","94961367268b9ce2661f02be2942f290"],["D:/hexo/public/2021/05/03/五月伊始/index.html","936c3960ddf38f575c1fe29854e4308d"],["D:/hexo/public/2021/05/05/文学性讲演录/index.html","292c33c08f7bbc1f121dc53e8a1519ef"],["D:/hexo/public/2021/05/31/迎接六月/index.html","339f8a819e8e13f070c6e2e37dd3d5c2"],["D:/hexo/public/2021/07/07/七月/index.html","126400332d163ae074a9297ccc80f300"],["D:/hexo/public/2023/05/16/dunhuang/index.html","73749b7826194126b3fb623fd3df204a"],["D:/hexo/public/2023/07/29/yeqi/index.html","bc32d0546a1e83c4e261804c6ba7830a"],["D:/hexo/public/2023/09/10/life/index.html","bd90b6372a7fd891f17ef76058e28b63"],["D:/hexo/public/2023/10/15/qingdao/index.html","14b9de29fb07f0dc2afcfbd6eb7f3946"],["D:/hexo/public/2023/12/14/11yue/index.html","ec1f1093d5a917fd946b53ff5ec975a6"],["D:/hexo/public/2024/01/04/12yue/index.html","d66ab527d536fb037abafbb7e7e88329"],["D:/hexo/public/2024/03/19/spring/index.html","88d39c3cbb2559a98c6c2a8985ceac61"],["D:/hexo/public/2024/05/27/5月/index.html","7eca019f1c24f20157f39cca45601a06"],["D:/hexo/public/2026/05/13/2026/index.html","404e45972f54e3b77b9c1e9ccddec718"],["D:/hexo/public/about/index.html","9df881d7838b3e202221f4e3a7fbbc45"],["D:/hexo/public/archives/2019/09/index.html","fa187d016c2dc46e203e138b1860916d"],["D:/hexo/public/archives/2019/12/index.html","52acf81928ec054243fb8d9389556245"],["D:/hexo/public/archives/2019/index.html","230f5ddb4e395ce1c5211d243e8fc220"],["D:/hexo/public/archives/2020/02/index.html","40da3ea24da5bfcc2dbf32c823654386"],["D:/hexo/public/archives/2020/03/index.html","e9eb2df96a31f4ec46b0228dd55aab63"],["D:/hexo/public/archives/2020/05/index.html","4addcad5c8fba18e8445e0e77d6df479"],["D:/hexo/public/archives/2020/06/index.html","e0634bd43b0b62fdd6b2afde006fa19e"],["D:/hexo/public/archives/2020/07/index.html","69a739892faa17336f4f1752ffb7fc5d"],["D:/hexo/public/archives/2020/08/index.html","df7cc572d15ae67598c143fe47671844"],["D:/hexo/public/archives/2020/09/index.html","2b9446bf021f1d4a04405e9b3ed707ff"],["D:/hexo/public/archives/2020/10/index.html","90be0134a3ac80c39b2b595654bfe590"],["D:/hexo/public/archives/2020/11/index.html","243a77f310f89fd3dd2ac54c373216cc"],["D:/hexo/public/archives/2020/index.html","6cae941a39e524d94d23501b35f3fbfa"],["D:/hexo/public/archives/2020/page/2/index.html","e380f7c05473fbce9ae6226c27c1c119"],["D:/hexo/public/archives/2021/01/index.html","b671dab2ce906cf984de9d6cf02a44f0"],["D:/hexo/public/archives/2021/03/index.html","2047d20174aa6dee282be1162dbe6c02"],["D:/hexo/public/archives/2021/04/index.html","148a992ca0cb531591f698767421ac07"],["D:/hexo/public/archives/2021/05/index.html","31f1a2e733629b224ba2ce70e4bef101"],["D:/hexo/public/archives/2021/07/index.html","854f7e6b41c57054ecf8e4d57571add1"],["D:/hexo/public/archives/2021/index.html","25a1750e34a05358c62fc84a2089a095"],["D:/hexo/public/archives/2021/page/2/index.html","3659471a2201c2a9fd93e3e870cbbafd"],["D:/hexo/public/archives/2023/05/index.html","f686cc8375ab8f461074981f27b8340c"],["D:/hexo/public/archives/2023/07/index.html","38b3b835890a9fbb8021efadf944909b"],["D:/hexo/public/archives/2023/09/index.html","438d666bdfc76048023ecfeef7e7d89c"],["D:/hexo/public/archives/2023/10/index.html","4cd10a57ba344b18caed6bb7886e4fef"],["D:/hexo/public/archives/2023/12/index.html","c016fa9b86a5d987534177bb07b55005"],["D:/hexo/public/archives/2023/index.html","d778a2f9101f924014e7d69f5f611c68"],["D:/hexo/public/archives/2024/01/index.html","43057c513a69bf95ac9283a340c31e99"],["D:/hexo/public/archives/2024/03/index.html","957c6224494832d2219eeb53cba2e636"],["D:/hexo/public/archives/2024/05/index.html","b1c68ff2c2dfea675d9ca65c1966c43c"],["D:/hexo/public/archives/2024/index.html","b4de0f88c3af20e6ffd1088e1ec49f9a"],["D:/hexo/public/archives/2026/05/index.html","5af0ea9c71ec6f33398a7b21f004f937"],["D:/hexo/public/archives/2026/index.html","90b9eba4a2cf0a9ed701731a037fe874"],["D:/hexo/public/archives/index.html","485aaef61e2541b95fed935596c7607c"],["D:/hexo/public/archives/page/2/index.html","3ccf6dbacaa7572373c4627ab02f7d69"],["D:/hexo/public/archives/page/3/index.html","d38bcf320166f99b51fc3d6025bc7c64"],["D:/hexo/public/archives/page/4/index.html","3076386c960c36a1f4e8f8ffc6aa372f"],["D:/hexo/public/archives/page/5/index.html","3233d3336ea0a76ee9f340d54d6d44ec"],["D:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["D:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["D:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/hexo/public/books/index.html","49341ff46c3e05bcf773759e8f8df048"],["D:/hexo/public/categories/index.html","cb7890a206c150a25ad95bc7774a440d"],["D:/hexo/public/categories/写作/index.html","5a6800801688648648f0edbbb1637368"],["D:/hexo/public/categories/学习笔记/index.html","2414eab5cdda8c08ee7b7156c522ecbd"],["D:/hexo/public/categories/感悟/index.html","1f5720e570fb320d1dca2cae80f689ce"],["D:/hexo/public/categories/感想/index.html","e8801a5d7dcc31f8680104e6620e87f0"],["D:/hexo/public/categories/感想/page/2/index.html","b988b1acec931cd83816cfe6774cd077"],["D:/hexo/public/categories/数学/index.html","c1d141df39ef49f56a285df7d3e49afc"],["D:/hexo/public/categories/文章收藏/index.html","b4bcd03fcfef02492e60886e1ece0cd0"],["D:/hexo/public/categories/旅行/index.html","a233eebb8209c5e26072a3e911218b54"],["D:/hexo/public/categories/日记/index.html","9e6fb7d148da9da2ba834d475f6177cf"],["D:/hexo/public/categories/机器学习/index.html","b56a1031b632425eb7a469be074355a0"],["D:/hexo/public/categories/诗歌收藏/index.html","2ec44fadf22172d9001f6d8fe7ab1ec7"],["D:/hexo/public/categories/读书笔记/index.html","8cd01911e08e2fd2fe679aa8de41cc52"],["D:/hexo/public/categories/读书笔记/page/2/index.html","9e7c138729a484caa31a9a9b05bf8f50"],["D:/hexo/public/comment/index.html","9fb48eb4bd60e2e6ec1c2eb2795c09ac"],["D:/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/hexo/public/css/index.css","6791065cc30eec32b4eec7eed66cf897"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/dplayer/index.html","71bce795cb38317319b7130b462bc958"],["D:/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/avatar.png","222edcccee45614df3e1fe70b264bd2f"],["D:/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/hexo/public/index.html","6be7ea93ebd00ab6d7006d392fe6fd1c"],["D:/hexo/public/js/main.js","65f83a59d83d2fc2a1943e132c083060"],["D:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/hexo/public/link/index.html","7edcfdc81b54689a3a8971f5f5b08c79"],["D:/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/hexo/public/movies/index.html","2ca4ef6baa86fc45a93e5b4b61dac45b"],["D:/hexo/public/music/index.html","6b193ee96b0d6b7bf05f014c320d032c"],["D:/hexo/public/page/2/index.html","dca6342009c0ef503e4e814bca39b120"],["D:/hexo/public/page/3/index.html","99ac1bedb0eeaafef9c6be8ea6d2e2e5"],["D:/hexo/public/page/4/index.html","ca4242e1c87b0af86c3065cc0a12d158"],["D:/hexo/public/page/5/index.html","434cd99aff230d5d814a67228ed6acd8"],["D:/hexo/public/tags/KNN/index.html","c226abe4a825a18fa701d6d3dbb41567"],["D:/hexo/public/tags/git/index.html","2c701287c0e6a3a7d58edc2942cf53ad"],["D:/hexo/public/tags/index.html","a24e744fc4826d8d17b7fe29949c7ef3"],["D:/hexo/public/tags/余华/index.html","0f290250cbc6835d8559d039576eb9d8"],["D:/hexo/public/tags/北京/index.html","d39a34b9b81217c9de41a8f081776d79"],["D:/hexo/public/tags/博尔赫斯/index.html","0c689c8c05b5e7ff9e85f5f7304e0224"],["D:/hexo/public/tags/回忆/index.html","c5d6109d44528158a8f76ca33ffabea2"],["D:/hexo/public/tags/孙绍振/index.html","49bc4e1eb2be524c346617979a384cbc"],["D:/hexo/public/tags/川端康成/index.html","710f6f33aae05080788253a7d0501fc8"],["D:/hexo/public/tags/巴金/index.html","3a844c7998eecc26b3fb0ce035cd1f64"],["D:/hexo/public/tags/建站-hexo/index.html","693d5833efe7e22830109a6a38927065"],["D:/hexo/public/tags/总结/index.html","4aca1126eebaf7f91b603c3fb2f1c6e1"],["D:/hexo/public/tags/感悟/index.html","6a1a38315c51e34eac4da60ba74fbe23"],["D:/hexo/public/tags/感想/index.html","dc75674afd9e5f7169316f3699a9ba22"],["D:/hexo/public/tags/敦煌/index.html","217a443720d8da75e69425231d0abcd3"],["D:/hexo/public/tags/文学/index.html","e52b2370b67ee8690afda2a3e3571971"],["D:/hexo/public/tags/时空/index.html","39061632ef350684c1ce60f6369158de"],["D:/hexo/public/tags/林轩田/index.html","2f15c0b6460dc9238dac639bd233ea19"],["D:/hexo/public/tags/生活/index.html","371733258fe38a3a843d28a98b50040d"],["D:/hexo/public/tags/线代/index.html","c347d2c794350543cb83c8a4133ce151"],["D:/hexo/public/tags/考研/index.html","f697f43ed917d0731dbdf0dd507b89ec"],["D:/hexo/public/tags/聂鲁达/index.html","f47dbfbca90ba8b8c4c57108b28f29d8"],["D:/hexo/public/tags/西湖大学/index.html","42f58cfdc90814ae6d41812c63da6e30"],["D:/hexo/public/tags/诗歌/index.html","d663294c8c38f47e0c368456a0825522"],["D:/hexo/public/tags/诺贝尔文学奖/index.html","4bfaca746c7b4076983ef96edf272bd5"],["D:/hexo/public/tags/读书/index.html","5c9ec808f3b6b4ff11729e784eed6c70"],["D:/hexo/public/tags/钟文/index.html","1278274a185f40965bd588ee4691689a"],["D:/hexo/public/tags/阎连科/index.html","1ad53d3b8f2abb7bbb4e93d29d5aa247"],["D:/hexo/public/tags/随想/index.html","a4405eb9a34d156622346444ade0b55c"],["D:/hexo/public/tags/青岛/index.html","bbebf83a58a38d279da3fbc4cb377d98"],["D:/hexo/public/tags/马尔克斯/index.html","1c4757079369da729961592a5f735ef1"]];
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







