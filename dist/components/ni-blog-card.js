import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const blogCardCss = "\r\n\r\n\r\n@media (min-width: 1040px) {\r\n    .card {\r\n        box-sizing: border-box;\r\n        background-color: rgba(255, 255, 255, 0);\r\n    \r\n        height: 400px;\r\n        width: 300px;\r\n    \r\n        margin: 0 20px;\r\n\r\n        position: relative;\r\n\r\n        transition: box-shadow 200ms ease-in-out ;\r\n\r\n        cursor: pointer;\r\n\r\n    }\r\n    .card:hover .cardImage {\r\n        box-shadow: \r\n        0 0 6px 2px #c5c5c5de;\r\n        transform: scale(1.02); /* Adjust scale as desired */\r\n        transition: transform 0.3s ease-in-out; /* Smooth scaling */\r\n    }\r\n\r\n    \r\n    .cardImage {\r\n        position: relative;\r\n        margin: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n       \r\n    }\r\n    .cardImage  img {\r\n        width: 100%;\r\n        height: 100%;\r\n\r\n    }\r\n\r\n\r\n    .cardText header {\r\n        text-wrap: pretty;\r\n        display: flex;\r\n        justify-content: start;\r\n        width: 100%;\r\n        \r\n        a {\r\n            text-decoration: none;\r\n\r\n        }\r\n\r\n        h2 {\r\n            margin:  0 0 10px 0;\r\n            text-align: start;\r\n\r\n            font-weight: 400;\r\n            font-size: 22px;\r\n            color: black;\r\n\r\n        }\r\n    }\r\n\r\n    .cardText p {\r\n       margin: 8px 0px;\r\n       font-weight: 200;\r\n    }\r\n\r\n\r\n\r\n    .leftArrow {\r\n       display: none;\r\n\r\n    }.leftShadow {\r\n        display: none;\r\n    }\r\n\r\n\r\n    .rightArrow {\r\n       display: none;\r\n    }.rightShadow {\r\n       display: none;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1040px) {\r\n    .card {\r\n        box-sizing: border-box;\r\n        background-color: rgba(255, 255, 255, 0);\r\n    \r\n        height: 60vh;\r\n        width: 92%;\r\n    \r\n        box-shadow: \r\n            -7px 6.5px 6px 2px #c5c5c5de,\r\n            inset 0 -200px 50px -50px rgba(0, 0, 0, 0.6)\r\n        ;\r\n        border-radius: 5px;\r\n    \r\n        margin: 0 auto;\r\n\r\n        position: relative;\r\n\r\n        border: 1.5px solid #ABABAB;\r\n\r\n    }\r\n    \r\n    .cardImage {\r\n        position: relative;\r\n        margin: 0;\r\n\r\n        width: 100%;\r\n        height: 100%;\r\n        img {\r\n            width: 100%;\r\n            height: 100%;\r\n    \r\n        }\r\n    }\r\n\r\n    .cardText header {\r\n        position: absolute;\r\n        bottom: 0;\r\n\r\n        text-wrap: balance;\r\n        display: flex;\r\n        justify-content: center;\r\n        width: 100%;\r\n        h2 {\r\n            margin:  0 0 10px 0;\r\n            text-align: center;\r\n\r\n            width: 80%;\r\n\r\n            font-weight: 100;\r\n            font-size: 42px;\r\n            color: whitesmoke;\r\n        }\r\n    }\r\n\r\n    .leftArrow {\r\n        position: absolute;\r\n        left: 20px;\r\n        bottom: 40%;\r\n        width: 60px;\r\n        height: 60px;\r\n        color: white;\r\n\r\n        border: 2px solid whitesmoke;\r\n        border-radius: 50%;\r\n\r\n    }.leftShadow {\r\n        position: absolute;\r\n        display: inline-block;\r\n        height: 100%;\r\n        width: 2px;\r\n        box-shadow: \r\n            10px 0 20px 2px rgba(0, 0, 0, 0.1),\r\n            20px 0 20px 2px rgba(0, 0, 0, 0.2),\r\n            30px 0 20px 2px rgba(0, 0, 0, 0.2),\r\n            40px 0 20px 2px rgba(0, 0, 0, 0.3),\r\n            50px 0 20px 2px rgba(0, 0, 0, 0.3),\r\n            60px 0 20px 2px rgba(0, 0, 0, 0.3),\r\n            70px 0 20px 2px rgba(0, 0, 0, 0.3),\r\n            80px 0 20px 2px rgba(0, 0, 0, 0.4);\r\n\r\n        background-color: black;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n    .cardText p {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 490px) and (max-width: 768px) {\r\n    .card {\r\n        box-sizing: border-box;\r\n        background-color: rgba(255, 255, 255, 0);\r\n    \r\n        height: 60vh;\r\n        width: 92%;\r\n    \r\n        box-shadow: \r\n            -7px 6.5px 6px 2px #c5c5c5de,\r\n            inset 0 -200px 50px -50px rgba(0, 0, 0, 0.6)\r\n        ;\r\n        border-radius: 5px;\r\n    \r\n        margin: 0 auto;\r\n\r\n        position: relative;\r\n\r\n        border: 1.5px solid #ABABAB;\r\n\r\n    }\r\n    \r\n    .cardImage {\r\n        position: relative;\r\n        margin: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        img {\r\n            width: 100%;\r\n            height: 100%;\r\n    \r\n        }\r\n    }\r\n\r\n    .cardText header {\r\n        position: absolute;\r\n        bottom: 0;\r\n\r\n        text-wrap: balance;\r\n        display: flex;\r\n        justify-content: center;\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        h2 {\r\n            text-align: center;\r\n\r\n            width: 80%;\r\n\r\n            font-weight: 100;\r\n            font-size: 32px;\r\n            color: whitesmoke;\r\n        }\r\n    }\r\n\r\n\r\n\r\n\r\n    .cardText p {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 490px) {\r\n    .card {\r\n        box-sizing: border-box;\r\n        background-color: rgba(255, 255, 255, 0);\r\n    \r\n        height: 60vh;\r\n        width: 92%;\r\n    \r\n        box-shadow: \r\n            -7px 6.5px 6px 2px #c5c5c5de,\r\n            inset 0 -200px 50px -50px rgba(0, 0, 0, 0.6)\r\n        ;\r\n        border-radius: 5px;\r\n    \r\n        margin: 0 auto;\r\n\r\n        position: relative;\r\n\r\n        border: 1.5px solid #ABABAB;\r\n\r\n    }\r\n    \r\n    .cardImage {\r\n        position: relative;\r\n        margin: 0;\r\n        width: 100%;\r\n            height: 100%;\r\n        img {\r\n            width: 100%;\r\n            height: 100%;\r\n    \r\n        }\r\n    }\r\n\r\n    .cardText header {\r\n        position: absolute;\r\n        bottom: 0;\r\n\r\n        text-wrap: balance;\r\n        \r\n        margin-bottom: 10px;\r\n        h2 {\r\n            text-align: center;\r\n\r\n            font-weight: 200;\r\n            font-size: 26px;\r\n            color: whitesmoke;\r\n        }\r\n    }\r\n\r\n    .cardText p {\r\n        display: none;\r\n    }\r\n        \r\n\r\n}";
const NiBlogCardStyle0 = blogCardCss;

const BlogCard = /*@__PURE__*/ proxyCustomElement(class BlogCard extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.imageSource = undefined;
        this.link = undefined;
        this.blogTitle = undefined;
        this.date = undefined;
    }
    render() {
        return (h("main", { key: '0fbb45509b5c71ad601dd1e0a455d37b4550261d', class: 'card' }, h("a", { key: 'f843ef3853c8b1c9e0c9a70e49e0215383533ca7', href: this.link }, h("figure", { key: 'bab46c23351da294574b2b7945b7142073300a3e', class: 'cardImage' }, h("img", { key: '551fbea089d09b661407581d25f550d9fbaa6360', src: this.imageSource, alt: "Blog Image" }))), h("article", { key: '552cc1c981315a10d2d2a0acf852d6586c1fdf5a', class: 'cardText' }, h("p", { key: 'c9820f0ae7fefae07ea573b85646acdc9e44bf77' }, this.date), h("header", { key: '0821752a53b6723f8cad245698f480a54e7cb41b' }, h("a", { key: '921a089e8804a016594fd4b360900f8e944ba9a5', href: this.link }, h("h2", { key: '9a4b572635138386bb2701fb0b13537a7fe99541' }, this.blogTitle))))));
    }
    static get style() { return NiBlogCardStyle0; }
}, [1, "ni-blog-card", {
        "imageSource": [1, "image-source"],
        "link": [1],
        "blogTitle": [1, "blog-title"],
        "date": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ni-blog-card"];
    components.forEach(tagName => { switch (tagName) {
        case "ni-blog-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BlogCard);
            }
            break;
    } });
}
defineCustomElement$1();

const NiBlogCard = BlogCard;
const defineCustomElement = defineCustomElement$1;

export { NiBlogCard, defineCustomElement };

//# sourceMappingURL=ni-blog-card.js.map