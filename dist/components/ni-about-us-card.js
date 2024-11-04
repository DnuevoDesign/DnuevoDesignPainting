import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const aboutUsCardCss = "\n\n.aboutCard {\n    box-sizing: border-box;\n \n    display: inline-block;\n \n    width: 400px;\n    height: 300px;\n \n \n    padding: 20px;\n    margin: 0px 30px;\n \n    img {\n \n       border-radius: 5px;\n       width: 50%;\n       height: 50%;\n \n    }\n \n    article {\n \n       h3 {\n          font-size: 1.5rem;\n          margin: 0;\n       }\n    }\n }\n \n \n /* LARGE RESPONSIVE */\n @media screen and (max-width: 1040px) {\n    .aboutCard {\n       box-sizing: border-box;\n       width: 80%;\n       height: 300px;\n    \n       padding: 0px;\n       margin: 20px 30px;\n    \n       img {\n \n          width: 40%;\n          height: 40%;\n       }\n    \n       article {\n    \n          h3 {\n             font-size: 1.8rem;\n             margin: 10px 0px;\n          }\n       }\n    }\n }\n \n /* MEDIUM RESPONSIVE */\n @media screen and (max-width: 768px) {\n    \n }\n \n \n \n /* SMALL RESPONSIVE */\n @media screen and (max-width: 490px) {\n    .aboutCard {\n       width: 100%;\n       height: 300px;\n       border: 2px solid;\n \n       padding: 20px;\n       margin: 10px 0px;\n \n \n       img {\n          width: 50%;\n          height: 50%;\n       }\n \n       article {\n \n          h3 {\n             font-size: 1.5rem;\n             margin: 0;\n          }\n       }\n }\n }";
const NiAboutUsCardStyle0 = aboutUsCardCss;

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.image = undefined;
        this.cardTitle = undefined;
        this.cardDescription = undefined;
    }
    render() {
        return (h("main", { key: 'ee1e344731f508a7a389aab7d9f8b5d87f73e1b8', class: "aboutCard" }, h("article", { key: 'aed88402ab5c7748f533a2197e99eb7d680019cc' }, h("img", { key: '34b6678a0143239ee8aa24f0ce6b6b8bd1987805', src: this.image, alt: "About Us Image" }), h("h3", { key: 'c1718698001b7ca9aae88222b56931789a2974bc' }, this.cardTitle), h("p", { key: 'e093555a9cedba80a63c53586c339d08cd2252e1' }, this.cardDescription))));
    }
    static get style() { return NiAboutUsCardStyle0; }
}, [1, "ni-about-us-card", {
        "image": [1],
        "cardTitle": [1, "card-title"],
        "cardDescription": [1, "card-description"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ni-about-us-card"];
    components.forEach(tagName => { switch (tagName) {
        case "ni-about-us-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Card);
            }
            break;
    } });
}
defineCustomElement$1();

const NiAboutUsCard = Card;
const defineCustomElement = defineCustomElement$1;

export { NiAboutUsCard, defineCustomElement };

//# sourceMappingURL=ni-about-us-card.js.map