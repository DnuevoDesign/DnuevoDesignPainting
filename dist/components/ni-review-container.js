import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const reviewContainerCss = ".star {\n    color: gold;\n    \n}\n\n#reviewBox {\n    box-sizing: border-box;\n    \n    width: 400px;\n    flex-grow: 0;\n    flex-shrink: 0;\n    height: 300px;\n\n    padding: 10px;\n    margin: 30px 20px;\n\n    border-radius: 20px;\n    \n    box-shadow: 0px 0px 6px 4px rgba(122, 122, 122, 0.2);;\n\n\n}\n\n.personalInfo {\n    display: flex;\n\n    h3 {\n        margin-top: 10%;\n        margin-left: 10px;\n\n        font-size: 1.4rem;\n        \n    }\n\n    .profileImage {\n        display: inline-block;\n    \n        width: 60px;\n        height: 60px;\n        margin-top: 20px;\n        \n        img {\n            border-radius: 50%;\n    \n            width: 100%;\n            height: 100%;\n        }\n    }\n\n}\n\n\n\n#reviewBox p {\n\n    font-size: 1.3rem;\n    text-wrap: pretty;\n    width: 100%;\n    height: 35%;\n\n    overflow-y: auto;\n}\n\n.reviewInfo {\n    display: flex;\n    justify-content: space-between;\n\n    align-items: center;\n}\n\n.reviewInfo span:nth-child(2){\n    width: 50px;\n    height: 50px;\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n    \n}\n\n\n\n/* RESPONSIVE */\n\n@media screen and (max-width: 768px) {\n    #reviewBox {\n        box-sizing: border-box;\n        \n        width: 300px;\n        height: 250px;\n        flex-grow: 0;\n        flex-shrink: 0;\n    \n    }\n    \n    .personalInfo {\n        display: flex;\n    \n        h3 {\n            margin-top: 10%;\n            margin-left: 10px;\n    \n            font-size: 1.25rem;\n            \n        }\n    \n        .profileImage {\n            display: inline-block;\n        \n            width: 45px;\n            height: 45px;\n            margin-top: 20px;\n            \n            img {\n                border-radius: 50%;\n        \n                width: 100%;\n                height: 100%;\n            }\n        }\n    \n    }\n    \n    \n    \n    #reviewBox p {\n    \n        font-size: 1.3rem;\n        text-wrap: pretty;\n        width: 100%;\n        height: 35%;\n    \n        overflow-y: auto;\n    }\n    \n    .reviewInfo {\n        display: flex;\n        justify-content: space-between;\n    \n        align-items: center;\n    }\n    \n    .reviewInfo span:nth-child(2){\n        width: 40px;\n        height: 40px;\n    \n        img {\n            width: 100%;\n            height: 100%;\n        }\n        \n    }\n}";
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
        return (h("main", { key: '4655d4474f4b8d2fd57e120d9d8a14c9c5fd5571', id: "reviewBox" }, h("div", { key: '9f00b82602d4802604fd62b0aaab10821b557e03', class: "personalInfo" }, h("span", { key: 'e0fcd7ca44a3f7cb54a5a42aa19b33285d8c31d7', class: "profileImage" }, h("img", { key: 'b5530dc0fcd0b211e1e05407fa739bd83b0c669d', src: this.profileImage, alt: "Profile Image" })), h("h3", { key: '07ae040f9dd54d8100ecf227c929746db5584cef' }, this.firstName), h("h3", { key: '36ee0c12f6e949f2914282af85d3bd8474b7ac01' }, this.lastName)), h("p", { key: '88e440bbbc0f67380c91e59a2ed8f07e575b5ba6' }, this.reviewText), h("div", { key: 'cd7410f6d544b269c77d253ff27aa02f1b7135ae', class: "reviewInfo" }, h("span", { key: '6e14b1691c430de316b3da1d487c35f3725fc131' }, ratingStars), h("span", { key: '9efdae13f8d0526b8f23050c6aa0700f66b0f646' }, h("img", { key: '034ecaa436dcc9ace2325f033cc74c0dfff75669', src: this.siteLogo, alt: "Review Site" })))));
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