import { r as registerInstance, h } from './index-75c9aa82.js';

const carouselCardCss = "#carouselCard {\n\n    width: 300px;\n    animation: scroll 35s linear infinite; \n \n \n    p {\n       \n       text-align: center;\n       margin: 5px 0px;\n       padding: 0;\n       font-weight: 600;\n    }\n \n    .reviewSiteLogo {\n       display: flex;\n       justify-content: center;\n       img {\n          width: 100px;\n \n       }\n    }\n \n }\n \n \n .starsContainer {\n    text-align: center;\n    color: #FFD43B;\n    margin: 5px 0px;\n }\n \n\n\n @media screen and (max-width: 768px) {\n\n    #carouselCard {\n \n       width: 300px;\n       margin: 0px 10px;\n       animation: scroll 20s linear infinite; \n    \n    \n       p {\n          \n          text-align: center;\n          margin: 5px 0px;\n          padding: 0;\n          font-weight: 600;\n       }\n    \n       .reviewSiteLogo {\n          display: flex;\n          justify-content: center;\n          img {\n             width: 100px;\n    \n          }\n       }\n    \n    }\n }\n \n \n @keyframes scroll {\n    0% {\n       transform: translateX(80vw);\n    }\n    100% {\n       transform: translateX(-95vw);\n    }\n }";
const NiCarouselCardStyle0 = carouselCardCss;

const CarouselCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.numberStars = undefined;
        this.siteLogo = undefined;
    }
    render() {
        let ratingStars = [];
        for (let i = 0; i < this.numberStars; i++) {
            ratingStars.push(h("i", { class: "fa-solid fa-star star" }));
        }
        return (h("main", { key: '91ff0895d62311cd7358d64275ccc47f3d3b7fcc', id: "carouselCard" }, h("span", { key: 'fc622f9cc93e8820477a406d169758b26551a2d9', class: "reviewSiteLogo" }, h("img", { key: '8364e3a8aea5278d1ca9c02bf3e11dd98abf6a99', src: this.siteLogo, alt: "Review Site Logo" })), h("div", { key: '2031701ed85ef27c1f78a9462845bc1d6be99fef', class: "starsContainer" }, ratingStars), h("p", { key: 'eb8c77d0147dead9a63dc2da03ee9f5603f7aca4' }, "(", this.numberStars, " out of 5)")));
    }
};
CarouselCard.style = NiCarouselCardStyle0;

export { CarouselCard as ni_carousel_card };

//# sourceMappingURL=ni-carousel-card.entry.js.map