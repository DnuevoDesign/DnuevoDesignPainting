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
        return (h("main", { key: 'ec60d5909cd4044eb3ff7c2a0bd68c3ac5b38ed6', id: "reviewBox" }, h("div", { key: 'e3f92bc4a72b62be4358ff97dd6fda1ce1dd3adc', class: "personalInfo" }, h("span", { key: '63b12ce1fb4ba8102442c624e94c851c4b51a840', class: "profileImage" }, h("img", { key: '49b7f2698d901fedb8c557293e051d9347e3e5f1', src: this.profileImage, alt: "Profile Image" })), h("h3", { key: '546ad3881e2d8f8b936e82846d6cee0134438fe3' }, this.firstName), h("h3", { key: '0e85fd96ef76323909164057a26d643050d5b71f' }, this.lastName)), h("p", { key: 'bbb54bb57e2587e468617a811f6de3fe94b4a810' }, this.reviewText), h("div", { key: 'fc49eb0ccab91f6c5c2556c6f88c124f12cc9157', class: "reviewInfo" }, h("span", { key: 'f5a3e152fe8796fdc625e53a95302f07d2d24869' }, ratingStars), h("span", { key: 'b3ffecdb03f1463309f2b4dd24fbc9430aa4c4b3' }, h("img", { key: '22519d673737650730ed3450a73039a9ae59899b', src: this.siteLogo, alt: "Review Site" })))));
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
