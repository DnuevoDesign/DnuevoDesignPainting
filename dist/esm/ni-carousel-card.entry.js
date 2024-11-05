import { r as registerInstance, h } from './index-75c9aa82.js';

const carouselCardCss = "#carouselCard {\r\n\r\n    width: 300px;\r\n    animation: scroll 35s linear infinite; \r\n \r\n \r\n    p {\r\n       \r\n       text-align: center;\r\n       margin: 5px 0px;\r\n       padding: 0;\r\n       font-weight: 600;\r\n    }\r\n \r\n    .reviewSiteLogo {\r\n       display: flex;\r\n       justify-content: center;\r\n       img {\r\n          width: 100px;\r\n \r\n       }\r\n    }\r\n \r\n }\r\n \r\n \r\n .starsContainer {\r\n    text-align: center;\r\n    color: #FFD43B;\r\n    margin: 5px 0px;\r\n }\r\n \r\n\r\n\r\n @media screen and (max-width: 768px) {\r\n\r\n    #carouselCard {\r\n \r\n       width: 300px;\r\n       margin: 0px 10px;\r\n       animation: scroll 20s linear infinite; \r\n    \r\n    \r\n       p {\r\n          \r\n          text-align: center;\r\n          margin: 5px 0px;\r\n          padding: 0;\r\n          font-weight: 600;\r\n       }\r\n    \r\n       .reviewSiteLogo {\r\n          display: flex;\r\n          justify-content: center;\r\n          img {\r\n             width: 100px;\r\n    \r\n          }\r\n       }\r\n    \r\n    }\r\n }\r\n \r\n \r\n @keyframes scroll {\r\n    0% {\r\n       transform: translateX(80vw);\r\n    }\r\n    100% {\r\n       transform: translateX(-95vw);\r\n    }\r\n }";
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
        return (h("main", { key: 'e6ae751634b20d74766b8e622d4d4f167ad30636', id: "carouselCard" }, h("span", { key: 'de207b711c1d760d141ce66cb82770b1725e017e', class: "reviewSiteLogo" }, h("img", { key: '421a216f6c87b47a884bbe957bc4fce0fca4ec5c', src: this.siteLogo, alt: "Review Site Logo" })), h("div", { key: '125097d54f60b4c6423d6432b3bf6c81b59ea802', class: "starsContainer" }, ratingStars), h("p", { key: 'ce5f80a5902b0832b5e3dafcc3c9db51e1964895' }, "(", this.numberStars, " out of 5)")));
    }
};
CarouselCard.style = NiCarouselCardStyle0;

export { CarouselCard as ni_carousel_card };

//# sourceMappingURL=ni-carousel-card.entry.js.map