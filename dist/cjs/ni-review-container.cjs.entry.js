'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c6c6632f.js');

const reviewContainerCss = ".star {\r\n    color: gold;\r\n    \r\n}\r\n\r\n#reviewBox {\r\n    box-sizing: border-box;\r\n    \r\n    width: 400px;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    height: 300px;\r\n\r\n    padding: 10px;\r\n    margin: 30px 20px;\r\n\r\n    border-radius: 20px;\r\n    \r\n    box-shadow: 0px 0px 6px 4px rgba(122, 122, 122, 0.2);;\r\n\r\n\r\n}\r\n\r\n.personalInfo {\r\n    display: flex;\r\n\r\n    h3 {\r\n        margin-top: 10%;\r\n        margin-left: 10px;\r\n\r\n        font-size: 1.4rem;\r\n        \r\n    }\r\n\r\n    .profileImage {\r\n        display: inline-block;\r\n    \r\n        width: 60px;\r\n        height: 60px;\r\n        margin-top: 20px;\r\n        \r\n        img {\r\n            border-radius: 50%;\r\n    \r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n#reviewBox p {\r\n\r\n    font-size: 1.3rem;\r\n    text-wrap: pretty;\r\n    width: 100%;\r\n    height: 35%;\r\n\r\n    overflow-y: auto;\r\n}\r\n\r\n.reviewInfo {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    align-items: center;\r\n}\r\n\r\n.reviewInfo span:nth-child(2){\r\n    width: 50px;\r\n    height: 50px;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n/* RESPONSIVE */\r\n\r\n@media screen and (max-width: 768px) {\r\n    #reviewBox {\r\n        box-sizing: border-box;\r\n        \r\n        width: 300px;\r\n        height: 250px;\r\n        flex-grow: 0;\r\n        flex-shrink: 0;\r\n    \r\n    }\r\n    \r\n    .personalInfo {\r\n        display: flex;\r\n    \r\n        h3 {\r\n            margin-top: 10%;\r\n            margin-left: 10px;\r\n    \r\n            font-size: 1.25rem;\r\n            \r\n        }\r\n    \r\n        .profileImage {\r\n            display: inline-block;\r\n        \r\n            width: 45px;\r\n            height: 45px;\r\n            margin-top: 20px;\r\n            \r\n            img {\r\n                border-radius: 50%;\r\n        \r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n        }\r\n    \r\n    }\r\n    \r\n    \r\n    \r\n    #reviewBox p {\r\n    \r\n        font-size: 1.3rem;\r\n        text-wrap: pretty;\r\n        width: 100%;\r\n        height: 35%;\r\n    \r\n        overflow-y: auto;\r\n    }\r\n    \r\n    .reviewInfo {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    \r\n        align-items: center;\r\n    }\r\n    \r\n    .reviewInfo span:nth-child(2){\r\n        width: 40px;\r\n        height: 40px;\r\n    \r\n        img {\r\n            width: 100%;\r\n            height: 100%;\r\n        }\r\n        \r\n    }\r\n}";
const NiReviewContainerStyle0 = reviewContainerCss;

const ReviewBox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
            ratingStars.push(index.h("i", { class: "fa-solid fa-star star" }));
        }
        return (index.h("main", { key: 'ec60d5909cd4044eb3ff7c2a0bd68c3ac5b38ed6', id: "reviewBox" }, index.h("div", { key: 'e3f92bc4a72b62be4358ff97dd6fda1ce1dd3adc', class: "personalInfo" }, index.h("span", { key: '63b12ce1fb4ba8102442c624e94c851c4b51a840', class: "profileImage" }, index.h("img", { key: '49b7f2698d901fedb8c557293e051d9347e3e5f1', src: this.profileImage, alt: "Profile Image" })), index.h("h3", { key: '546ad3881e2d8f8b936e82846d6cee0134438fe3' }, this.firstName), index.h("h3", { key: '0e85fd96ef76323909164057a26d643050d5b71f' }, this.lastName)), index.h("p", { key: 'bbb54bb57e2587e468617a811f6de3fe94b4a810' }, this.reviewText), index.h("div", { key: 'fc49eb0ccab91f6c5c2556c6f88c124f12cc9157', class: "reviewInfo" }, index.h("span", { key: 'f5a3e152fe8796fdc625e53a95302f07d2d24869' }, ratingStars), index.h("span", { key: 'b3ffecdb03f1463309f2b4dd24fbc9430aa4c4b3' }, index.h("img", { key: '22519d673737650730ed3450a73039a9ae59899b', src: this.siteLogo, alt: "Review Site" })))));
    }
};
ReviewBox.style = NiReviewContainerStyle0;

exports.ni_review_container = ReviewBox;

//# sourceMappingURL=ni-review-container.cjs.entry.js.map