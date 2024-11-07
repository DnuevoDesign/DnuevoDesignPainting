import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const carouselCardCss = "#carouselCard {\r\n\r\n    width: 300px;\r\n    animation: scroll 35s linear infinite; \r\n \r\n \r\n    p {\r\n       \r\n       text-align: center;\r\n       margin: 5px 0px;\r\n       padding: 0;\r\n       font-weight: 600;\r\n    }\r\n \r\n    .reviewSiteLogo {\r\n       display: flex;\r\n       justify-content: center;\r\n       img {\r\n          width: 100px;\r\n \r\n       }\r\n    }\r\n \r\n }\r\n \r\n \r\n .starsContainer {\r\n    text-align: center;\r\n    color: #FFD43B;\r\n    margin: 5px 0px;\r\n }\r\n \r\n\r\n\r\n @media screen and (max-width: 768px) {\r\n\r\n    #carouselCard {\r\n \r\n       width: 300px;\r\n       margin: 0px 10px;\r\n       animation: scroll 20s linear infinite; \r\n    \r\n    \r\n       p {\r\n          \r\n          text-align: center;\r\n          margin: 5px 0px;\r\n          padding: 0;\r\n          font-weight: 600;\r\n       }\r\n    \r\n       .reviewSiteLogo {\r\n          display: flex;\r\n          justify-content: center;\r\n          img {\r\n             width: 100px;\r\n    \r\n          }\r\n       }\r\n    \r\n    }\r\n }\r\n \r\n \r\n @keyframes scroll {\r\n    0% {\r\n       transform: translateX(80vw);\r\n    }\r\n    100% {\r\n       transform: translateX(-95vw);\r\n    }\r\n }";
const NiCarouselCardStyle0 = carouselCardCss;

const CarouselCard = /*@__PURE__*/ proxyCustomElement(class CarouselCard extends H {
    constructor() {
        super();
        this.__registerHost();
        this.numberStars = undefined;
        this.siteLogo = undefined;
    }
    render() {
        let ratingStars = [];
        for (let i = 0; i < this.numberStars; i++) {
            ratingStars.push(h("i", { class: "fa-solid fa-star star" }));
        }
        return (h("main", { key: '0841133885cc29ac819ff03c755504e052035a09', id: "carouselCard" }, h("span", { key: '217ac93d3b10736cefa6ed95d2a995d3da909955', class: "reviewSiteLogo" }, h("img", { key: 'b924754d530579598e8f3eae974116c905dff1a8', src: this.siteLogo, alt: "Review Site Logo" })), h("div", { key: 'f05ee19f70b0e8f62c4fae9b9658cf5c6035054f', class: "starsContainer" }, ratingStars), h("p", { key: 'afb4c8deb06c9297285365ab2532c1abc410c828' }, "(", this.numberStars, " out of 5)")));
    }
    static get style() { return NiCarouselCardStyle0; }
}, [0, "ni-carousel-card", {
        "numberStars": [2, "number-stars"],
        "siteLogo": [1, "site-logo"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ni-carousel-card"];
    components.forEach(tagName => { switch (tagName) {
        case "ni-carousel-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CarouselCard);
            }
            break;
    } });
}
defineCustomElement$1();

const NiCarouselCard = CarouselCard;
const defineCustomElement = defineCustomElement$1;

export { NiCarouselCard, defineCustomElement };

//# sourceMappingURL=ni-carousel-card.js.map