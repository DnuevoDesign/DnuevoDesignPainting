import { h } from "@stencil/core";
export class ReviewBox {
    constructor() {
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
    static get is() { return "ni-review-container"; }
    static get originalStyleUrls() {
        return {
            "$": [".//review-container.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["review-container.css"]
        };
    }
    static get properties() {
        return {
            "firstName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "first-name",
                "reflect": false
            },
            "lastName": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "last-name",
                "reflect": false
            },
            "reviewText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "review-text",
                "reflect": false
            },
            "profileImage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "profile-image",
                "reflect": false
            },
            "siteLogo": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "site-logo",
                "reflect": false
            },
            "rating": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "rating",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
}
//# sourceMappingURL=review-container.js.map
