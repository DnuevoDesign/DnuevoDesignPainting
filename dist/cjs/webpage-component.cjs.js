'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6c6632f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.22.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('webpage-component.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["nate-nav-bar.cjs",[[0,"nate-nav-bar",{"isMainMenuOpen":[1028,"is-main-menu-open"],"isNestListItemOpen":[1028,"is-nest-list-item-open"]}]]],["ni-about-us-card.cjs",[[1,"ni-about-us-card",{"image":[1],"cardTitle":[1,"card-title"],"cardDescription":[1,"card-description"]}]]],["ni-blog-card.cjs",[[1,"ni-blog-card",{"imageSource":[1,"image-source"],"link":[1],"blogTitle":[1,"blog-title"],"date":[1]}]]],["ni-carousel-card.cjs",[[0,"ni-carousel-card",{"numberStars":[2,"number-stars"],"siteLogo":[1,"site-logo"]}]]],["ni-nav-bar-boot.cjs",[[0,"ni-nav-bar-boot"]]],["ni-review-box.cjs",[[1,"ni-review-box"]]],["ni-review-container.cjs",[[0,"ni-review-container",{"firstName":[1,"first-name"],"lastName":[1,"last-name"],"reviewText":[1,"review-text"],"profileImage":[1,"profile-image"],"siteLogo":[1,"site-logo"],"rating":[2]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=webpage-component.cjs.js.map