import { r as registerInstance, h } from './index-75c9aa82.js';

const reviewContainerCss = ".star {\n    color: gold;\n    \n}\n\n#reviewBox {\n    box-sizing: border-box;\n    \n    width: 400px;\n    flex-grow: 0;\n    flex-shrink: 0;\n    height: 300px;\n\n    padding: 10px;\n    margin: 30px 20px;\n\n    border-radius: 20px;\n    \n    box-shadow: 0px 0px 6px 4px rgba(122, 122, 122, 0.2);;\n\n\n}\n\n.personalInfo {\n    display: flex;\n\n    h3 {\n        margin-top: 10%;\n        margin-left: 10px;\n\n        font-size: 1.4rem;\n        \n    }\n\n    .profileImage {\n        display: inline-block;\n    \n        width: 60px;\n        height: 60px;\n        margin-top: 20px;\n        \n        img {\n            border-radius: 50%;\n    \n            width: 100%;\n            height: 100%;\n        }\n    }\n\n}\n\n\n\n#reviewBox p {\n\n    font-size: 1.3rem;\n    text-wrap: pretty;\n    width: 100%;\n    height: 35%;\n\n    overflow-y: auto;\n}\n\n.reviewInfo {\n    display: flex;\n    justify-content: space-between;\n\n    align-items: center;\n}\n\n.reviewInfo span:nth-child(2){\n    width: 50px;\n    height: 50px;\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n    \n}\n\n\n\n/* RESPONSIVE */\n\n@media screen and (max-width: 768px) {\n    #reviewBox {\n        box-sizing: border-box;\n        \n        width: 300px;\n        height: 250px;\n        flex-grow: 0;\n        flex-shrink: 0;\n    \n    }\n    \n    .personalInfo {\n        display: flex;\n    \n        h3 {\n            margin-top: 10%;\n            margin-left: 10px;\n    \n            font-size: 1.25rem;\n            \n        }\n    \n        .profileImage {\n            display: inline-block;\n        \n            width: 45px;\n            height: 45px;\n            margin-top: 20px;\n            \n            img {\n                border-radius: 50%;\n        \n                width: 100%;\n                height: 100%;\n            }\n        }\n    \n    }\n    \n    \n    \n    #reviewBox p {\n    \n        font-size: 1.3rem;\n        text-wrap: pretty;\n        width: 100%;\n        height: 35%;\n    \n        overflow-y: auto;\n    }\n    \n    .reviewInfo {\n        display: flex;\n        justify-content: space-between;\n    \n        align-items: center;\n    }\n    \n    .reviewInfo span:nth-child(2){\n        width: 40px;\n        height: 40px;\n    \n        img {\n            width: 100%;\n            height: 100%;\n        }\n        \n    }\n}";
const NiReviewContainerStyle0 = reviewContainerCss;

const ReviewBox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("main", { key: '33ed4f56a730b5aac24c1d909cd7c0c7ddd09b47', id: "reviewBox" }, h("div", { key: 'e3fa5d41cb760df5abaa20a45ab6fbeb8ac75f6d', class: "personalInfo" }, h("span", { key: 'e9ec84e1f6d125559f813aba634edec4ac8c58a6', class: "profileImage" }, h("img", { key: 'b972fab9ba83d5ada421d3209bf35bcbd459872f', src: this.profileImage, alt: "Profile Image" })), h("h3", { key: '762b7a7245f7ace509da8fffb993806481247c10' }, this.firstName), h("h3", { key: '1cca36ec9f1d2e60590dea4da4acfbf416154c5e' }, this.lastName)), h("p", { key: '59bfd02d7acb7eea1ad1bc30b10370647d81f5bf' }, this.reviewText), h("div", { key: '6f376b75c69d424557d4c7dc1119e1f20c371604', class: "reviewInfo" }, h("span", { key: '191375d1bf4a617d978720f890da34cc0ace4524' }, ratingStars), h("span", { key: 'd04ffdde18617edccb26a433cdb412cf4f2a4109' }, h("img", { key: 'b534f598715d03db8044922118b459bd9af70f2c', src: this.siteLogo, alt: "Review Site" })))));
    }
};
ReviewBox.style = NiReviewContainerStyle0;

export { ReviewBox as ni_review_container };

//# sourceMappingURL=ni-review-container.entry.js.map