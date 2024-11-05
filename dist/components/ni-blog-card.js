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
        return (h("main", { key: '9edbd0499ce5b38fff7bb92a612104217fc0010f', class: 'card' }, h("a", { key: '8abe5490d20395d480d8c1d6c267846e9ff7807d', href: this.link }, h("figure", { key: 'c093d239adc706771f173b45a69d6274217a5434', class: 'cardImage' }, h("img", { key: '21fc026fa5726ef5c3d595c35acdbfc66c45ebdf', src: this.imageSource, alt: "Blog Image" }))), h("article", { key: 'f8f67a89b459385015376a3d65431bc8993a2b1f', class: 'cardText' }, h("p", { key: '881759dbead93e4538f27aec7e14d0869166949c' }, this.date), h("header", { key: 'd7c0b7c882aa077fdad77012892c0112a2994ed9' }, h("a", { key: '089a455ebdd88184bca15c9c859c80b714a980e2', href: this.link }, h("h2", { key: '91d3f046744ffc59eec351c0a6a8558d25a897a2' }, this.blogTitle))))));
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