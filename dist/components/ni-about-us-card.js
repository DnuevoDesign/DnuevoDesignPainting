import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const aboutUsCardCss = "\r\n\r\n.aboutCard {\r\n    box-sizing: border-box;\r\n \r\n    display: inline-block;\r\n \r\n    min-width: 350px;\r\n    max-width: 400px;\r\n    height: auto;\r\n\r\n \r\n    padding: 20px;\r\n    margin: 0px 10px;\r\n\r\n\r\n\r\n    transition: box-shadow 300ms ease-out; \r\n   \r\n    cursor: pointer;\r\n\r\n    \r\n    img {\r\n \r\n       border-radius: 5px;\r\n       width: 100%;\r\n       height: 150px;\r\n\r\n       transition: width 300ms ease-in, height 300ms ease-in;\r\n \r\n    }\r\n \r\n    article {\r\n      box-sizing: border-box;\r\n      color: black;\r\n       h3 {\r\n          text-decoration: underline;\r\n          text-wrap: nowrap;\r\n          font-size: 1rem;\r\n          margin: 0;\r\n       }\r\n       p {\r\n         font-size: .75rem;\r\n         margin: 0;\r\n         font-weight: 200;\r\n         text-wrap: pretty;\r\n         line-height: 1.2;\r\n       }\r\n    }\r\n }\r\n\r\n.aboutCard:hover {\r\n   box-shadow: inset 0 0 10px 10px lightgray;\r\n\r\n   img {\r\n      width: 100.5%;\r\n      height: 155px;\r\n      transition: width 300ms ease-in, height 300ms ease-in;\r\n   }\r\n\r\n   transition: box-shadow 300ms ease-in;\r\n\r\n}\r\n\r\n \r\n\r\n\r\n /* SMALL RESPONSIVE */\r\n @media screen and (max-width: 490px) {\r\n   .aboutCard {\r\n      margin: 0px 0px;\r\n   }\r\n }";
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
        return (h("main", { key: '0ada3ff59918d3913a054fdf5db618656fbcb433', class: "aboutCard" }, h("a", { key: 'bc935995e3774374b4fc610ac8d7f6ed7d922473', href: this.link }, h("article", { key: '9d0708fc456b8fc6904caaa46306c251ea10f723' }, h("img", { key: '1b6e9c697494d2c831e2704f7c0c2d86cd272306', src: this.image, alt: "About Us Image" }), h("h3", { key: 'bceb8390b5a45c698b7712788aeff2e7fc246852' }, this.cardTitle), h("p", { key: '62b9a22506898eed34198225a4f662fb3b9627bb' }, this.cardDescription)))));
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