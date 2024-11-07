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
        return (h("main", { key: '8d8d6930a6033f7a86ec66f59e49479986776119', id: "reviewBox" }, h("div", { key: '7c1445eefbc8582fa198630646c49df84aef78f0', class: "personalInfo" }, h("span", { key: '735b4a6d149dc5d874f065e322fb2cc29374f377', class: "profileImage" }, h("img", { key: '086ba6a02e52215935c5fce975bc4c08cbca846d', src: this.profileImage, alt: "Profile Image" })), h("h3", { key: 'fb689f5ecb8c4e00182d78c046d017b0eb855823' }, this.firstName), h("h3", { key: '362ddb9867cfb1c2468cf8bd6b106edcf3111d23' }, this.lastName)), h("p", { key: 'dcf30f23098354802a7ba59f524ea56d69147cf8' }, this.reviewText), h("div", { key: 'bd0d833c3c9d762e48150f86f707a57bc7f21a97', class: "reviewInfo" }, h("span", { key: 'dd7618b9f0662a2b847460f1fc5e61f35b758645' }, ratingStars), h("span", { key: '21765499144ac6896f71a6f6819104914ee8a0e6' }, h("img", { key: 'e0d5e7fc49e4d0c6d578fac064bc6b058efa64c5', src: this.siteLogo, alt: "Review Site" })))));
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
