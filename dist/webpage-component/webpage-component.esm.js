import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-6b49de0b.js';
export { s as setNonce } from './index-6b49de0b.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.22.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["nate-nav-bar",[[0,"nate-nav-bar",{"isMainMenuOpen":[1028,"is-main-menu-open"],"isNestListItemOpen":[1028,"is-nest-list-item-open"]}]]],["ni-about-us-card",[[1,"ni-about-us-card",{"image":[1],"cardTitle":[1,"card-title"],"cardDescription":[1,"card-description"],"link":[1]}]]],["ni-blog-card",[[1,"ni-blog-card",{"imageSource":[1,"image-source"],"link":[1],"blogTitle":[1,"blog-title"],"date":[1]}]]],["ni-carousel-card",[[0,"ni-carousel-card",{"numberStars":[2,"number-stars"],"siteLogo":[1,"site-logo"]}]]],["ni-nav-bar-boot",[[0,"ni-nav-bar-boot"]]],["ni-review-box",[[1,"ni-review-box"]]],["ni-review-container",[[0,"ni-review-container",{"firstName":[1,"first-name"],"lastName":[1,"last-name"],"reviewText":[1,"review-text"],"profileImage":[1,"profile-image"],"siteLogo":[1,"site-logo"],"rating":[2]}]]]], options);
});

//# sourceMappingURL=webpage-component.esm.js.map