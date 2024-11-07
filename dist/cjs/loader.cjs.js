'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6c6632f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["nate-nav-bar_2.cjs",[[0,"nate-nav-bar",{"isMainMenuOpen":[1028,"is-main-menu-open"],"isNestListItemOpen":[1028,"is-nest-list-item-open"]}],[1,"ni-about-us-card",{"image":[1],"cardTitle":[1,"card-title"],"cardDescription":[1,"card-description"],"link":[1]}]]],["ni-blog-card.cjs",[[1,"ni-blog-card",{"imageSource":[1,"image-source"],"link":[1],"blogTitle":[1,"blog-title"],"date":[1]}]]],["ni-carousel-card.cjs",[[0,"ni-carousel-card",{"numberStars":[2,"number-stars"],"siteLogo":[1,"site-logo"]}]]],["ni-nav-bar-boot.cjs",[[0,"ni-nav-bar-boot"]]],["ni-review-box.cjs",[[1,"ni-review-box"]]],["ni-review-container.cjs",[[0,"ni-review-container",{"firstName":[1,"first-name"],"lastName":[1,"last-name"],"reviewText":[1,"review-text"],"profileImage":[1,"profile-image"],"siteLogo":[1,"site-logo"],"rating":[2]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map