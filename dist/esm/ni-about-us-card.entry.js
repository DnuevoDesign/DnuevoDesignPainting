import { r as registerInstance, h } from './index-75c9aa82.js';

const aboutUsCardCss = "\r\n\r\n.aboutCard {\r\n    box-sizing: border-box;\r\n \r\n    display: inline-block;\r\n \r\n    width: 400px;\r\n    height: 300px;\r\n \r\n \r\n    padding: 20px;\r\n    margin: 0px 30px;\r\n \r\n    img {\r\n \r\n       border-radius: 5px;\r\n       width: 50%;\r\n       height: 50%;\r\n \r\n    }\r\n \r\n    article {\r\n \r\n       h3 {\r\n          font-size: 1.5rem;\r\n          margin: 0;\r\n       }\r\n    }\r\n }\r\n \r\n \r\n /* LARGE RESPONSIVE */\r\n @media screen and (max-width: 1040px) {\r\n    .aboutCard {\r\n       box-sizing: border-box;\r\n       width: 80%;\r\n       height: 300px;\r\n    \r\n       padding: 0px;\r\n       margin: 20px 30px;\r\n    \r\n       img {\r\n \r\n          width: 40%;\r\n          height: 40%;\r\n       }\r\n    \r\n       article {\r\n    \r\n          h3 {\r\n             font-size: 1.8rem;\r\n             margin: 10px 0px;\r\n          }\r\n       }\r\n    }\r\n }\r\n \r\n /* MEDIUM RESPONSIVE */\r\n @media screen and (max-width: 768px) {\r\n    \r\n }\r\n \r\n \r\n \r\n /* SMALL RESPONSIVE */\r\n @media screen and (max-width: 490px) {\r\n    .aboutCard {\r\n       width: 100%;\r\n       height: 300px;\r\n       border: 2px solid;\r\n \r\n       padding: 20px;\r\n       margin: 10px 0px;\r\n \r\n \r\n       img {\r\n          width: 50%;\r\n          height: 50%;\r\n       }\r\n \r\n       article {\r\n \r\n          h3 {\r\n             font-size: 1.5rem;\r\n             margin: 0;\r\n          }\r\n       }\r\n }\r\n }";
const NiAboutUsCardStyle0 = aboutUsCardCss;

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.image = undefined;
        this.cardTitle = undefined;
        this.cardDescription = undefined;
    }
    render() {
        return (h("main", { key: 'a99e0999308f87d631f637ae0e5138dc673d960c', class: "aboutCard" }, h("article", { key: '8e2aad805a77c3b68b0cc15714b7a9bd845d58c1' }, h("img", { key: 'ca68b8ae2191f851993601b8b861061dcdc4b89a', src: this.image, alt: "About Us Image" }), h("h3", { key: 'f2dd4fbc0e4787ac0b173449bcf5314e74f2faa6' }, this.cardTitle), h("p", { key: '0f2c8489fba236c4420d54fba334c4a0929a3e5d' }, this.cardDescription))));
    }
};
Card.style = NiAboutUsCardStyle0;

export { Card as ni_about_us_card };

//# sourceMappingURL=ni-about-us-card.entry.js.map