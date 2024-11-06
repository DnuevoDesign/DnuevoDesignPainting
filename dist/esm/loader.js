import { b as bootstrapLazy } from './index-75c9aa82.js';
export { s as setNonce } from './index-75c9aa82.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["nate-nav-bar",[[0,"nate-nav-bar",{"isMainMenuOpen":[1028,"is-main-menu-open"],"isNestListItemOpen":[1028,"is-nest-list-item-open"]}]]],["ni-about-us-card",[[1,"ni-about-us-card",{"image":[1],"cardTitle":[1,"card-title"],"cardDescription":[1,"card-description"]}]]],["ni-blog-card",[[1,"ni-blog-card",{"imageSource":[1,"image-source"],"link":[1],"blogTitle":[1,"blog-title"],"date":[1]}]]],["ni-carousel-card",[[0,"ni-carousel-card",{"numberStars":[2,"number-stars"],"siteLogo":[1,"site-logo"]}]]],["ni-nav-bar-boot",[[0,"ni-nav-bar-boot"]]],["ni-review-box",[[1,"ni-review-box"]]],["ni-review-container",[[0,"ni-review-container",{"firstName":[1,"first-name"],"lastName":[1,"last-name"],"reviewText":[1,"review-text"],"profileImage":[1,"profile-image"],"siteLogo":[1,"site-logo"],"rating":[2]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map