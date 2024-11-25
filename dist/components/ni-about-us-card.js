import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const aboutUsCardCss = "\n\n.aboutCard {\n   a {\n      text-decoration: none;\n   }\n    box-sizing: border-box;\n \n    display: inline-block;\n \n    min-width: 350px;\n    max-width: 400px;\n    height: auto;\n\n \n    padding: 20px;\n    margin: 0px 10px;\n\n\n\n    transition: box-shadow 300ms ease-out; \n   \n    cursor: pointer;\n\n\n    img {\n \n       border-radius: 5px;\n       width: 100%;\n       height: 150px;\n\n       transition: width 300ms ease-in, height 300ms ease-in;\n \n    }\n \n    article {\n      box-sizing: border-box;\n      color: black;\n       h3 {\n         text-decoration: underline;\n          text-wrap: nowrap;\n          font-size: 1rem;\n          margin: 0;\n       }\n       p {\n         font-size: .75rem;\n         margin: 0;\n         font-weight: 200;\n         text-wrap: pretty;\n         line-height: 1.2;\n       }\n    }\n }\n\n.aboutCard:hover {\n   box-shadow: inset 0 0 10px 10px lightgray;\n\n   img {\n      width: 100.5%;\n      height: 155px;\n      transition: width 300ms ease-in, height 300ms ease-in;\n   }\n\n   transition: box-shadow 300ms ease-in;\n\n}\n\n \n\n\n /* SMALL RESPONSIVE */\n @media screen and (max-width: 490px) {\n   .aboutCard {\n      margin: 0px 0px;\n   }\n }";
const NiAboutUsCardStyle0 = aboutUsCardCss;

const Card = /*@__PURE__*/ proxyCustomElement(class Card extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.image = undefined;
        this.cardTitle = undefined;
        this.cardDescription = undefined;
        this.link = undefined;
    }
    render() {
        return (h("main", { key: '0d3f476fb1460a66dcc70759db6206bd5d3af6ea', class: "aboutCard" }, h("a", { key: 'f99c12e459e112270661b3ec6d8765d4df9c9924', href: this.link }, h("article", { key: '42700ea8f4c5504fa4cd0b39e0f03bcfbb10af9f' }, h("img", { key: '6cec9c8fc182cdef203fd25e169c7a887570dd8a', src: this.image, alt: "About Us Image" }), h("h3", { key: '3b7eb1e04dacc03af7fc065c875941d947d3ae41' }, this.cardTitle), h("p", { key: 'f42bf0f0ee43056663b9872a254c7b8c9352184e' }, this.cardDescription)))));
    }
    static get style() { return NiAboutUsCardStyle0; }
}, [1, "ni-about-us-card", {
        "image": [1],
        "cardTitle": [1, "card-title"],
        "cardDescription": [1, "card-description"],
        "link": [1]
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