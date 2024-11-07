import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const reviewContainerCss = ".star {\r\n    color: gold;\r\n    \r\n}\r\n\r\n#reviewBox {\r\n    box-sizing: border-box;\r\n    \r\n    width: 400px;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    height: 300px;\r\n\r\n    padding: 10px;\r\n    margin: 30px 20px;\r\n\r\n    border-radius: 20px;\r\n    \r\n    box-shadow: 0px 0px 6px 4px rgba(122, 122, 122, 0.2);;\r\n\r\n\r\n}\r\n\r\n.personalInfo {\r\n    display: flex;\r\n\r\n    h3 {\r\n        margin-top: 10%;\r\n        margin-left: 10px;\r\n\r\n        font-size: 1.4rem;\r\n        \r\n    }\r\n\r\n    .profileImage {\r\n        display: inline-block;\r\n    \r\n        width: 60px;\r\n        height: 60px;\r\n        margin-top: 20px;\r\n        \r\n        img {\r\n            border-radius: 50%;\r\n    \r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n#reviewBox p {\r\n\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-wrap: pretty;\r\n    width: 100%;\r\n    height: 35%;\r\n\r\n    overflow-y: auto;\r\n}\r\n\r\n.reviewInfo {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    align-items: center;\r\n}\r\n\r\n.reviewInfo span:nth-child(2){\r\n    width: 50px;\r\n    height: 50px;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n/* RESPONSIVE */\r\n\r\n@media screen and (max-width: 768px) {\r\n    #reviewBox {\r\n        box-sizing: border-box;\r\n        \r\n        width: 300px;\r\n        height: 250px;\r\n        flex-grow: 0;\r\n        flex-shrink: 0;\r\n    \r\n    }\r\n    \r\n    .personalInfo {\r\n        display: flex;\r\n    \r\n        h3 {\r\n            margin-top: 10%;\r\n            margin-left: 10px;\r\n    \r\n            font-size: 1.25rem;\r\n            \r\n        }\r\n    \r\n        .profileImage {\r\n            display: inline-block;\r\n        \r\n            width: 45px;\r\n            height: 45px;\r\n            margin-top: 20px;\r\n            \r\n            img {\r\n                border-radius: 50%;\r\n        \r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        }\r\n    \r\n    }\r\n    \r\n    \r\n    \r\n    #reviewBox p {\r\n        text-wrap: pretty;\r\n        width: 100%;\r\n        height: 35%;\r\n    \r\n        overflow-y: auto;\r\n    }\r\n    \r\n    .reviewInfo {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    \r\n        align-items: center;\r\n    }\r\n    \r\n    .reviewInfo span:nth-child(2){\r\n        width: 40px;\r\n        height: 40px;\r\n    \r\n        img {\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n        \r\n    }\r\n}";
const NiReviewContainerStyle0 = reviewContainerCss;

const ReviewBox = /*@__PURE__*/ proxyCustomElement(class ReviewBox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.firstName = undefined;
        this.lastName = undefined;
        this.reviewText = undefined;
        this.profileImage = undefined;
        this.siteLogo = undefined;
        this.rating = 0;
    }
    render() {
        let ratingStars = [];
        // Ensure that rating is a valid number
        let numStars = Math.max(0, Math.floor(this.rating)); // Ensure non-negative
        for (let i = 0; i < numStars; i++) {
            ratingStars.push(h("i", { class: "fa-solid fa-star star" }));
        }
        return (h("main", { key: '8d8d6930a6033f7a86ec66f59e49479986776119', id: "reviewBox" }, h("div", { key: '7c1445eefbc8582fa198630646c49df84aef78f0', class: "personalInfo" }, h("span", { key: '735b4a6d149dc5d874f065e322fb2cc29374f377', class: "profileImage" }, h("img", { key: '086ba6a02e52215935c5fce975bc4c08cbca846d', src: this.profileImage, alt: "Profile Image" })), h("h3", { key: 'fb689f5ecb8c4e00182d78c046d017b0eb855823' }, this.firstName), h("h3", { key: '362ddb9867cfb1c2468cf8bd6b106edcf3111d23' }, this.lastName)), h("p", { key: 'dcf30f23098354802a7ba59f524ea56d69147cf8' }, this.reviewText), h("div", { key: 'bd0d833c3c9d762e48150f86f707a57bc7f21a97', class: "reviewInfo" }, h("span", { key: 'dd7618b9f0662a2b847460f1fc5e61f35b758645' }, ratingStars), h("span", { key: '21765499144ac6896f71a6f6819104914ee8a0e6' }, h("img", { key: 'e0d5e7fc49e4d0c6d578fac064bc6b058efa64c5', src: this.siteLogo, alt: "Review Site" })))));
    }
    static get style() { return NiReviewContainerStyle0; }
}, [0, "ni-review-container", {
        "firstName": [1, "first-name"],
        "lastName": [1, "last-name"],
        "reviewText": [1, "review-text"],
        "profileImage": [1, "profile-image"],
        "siteLogo": [1, "site-logo"],
        "rating": [2]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ni-review-container"];
    components.forEach(tagName => { switch (tagName) {
        case "ni-review-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ReviewBox);
            }
            break;
    } });
}
defineCustomElement$1();

const NiReviewContainer = ReviewBox;
const defineCustomElement = defineCustomElement$1;

export { NiReviewContainer, defineCustomElement };

//# sourceMappingURL=ni-review-container.js.map