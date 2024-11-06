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
        return (h("main", { key: '33ed4f56a730b5aac24c1d909cd7c0c7ddd09b47', id: "reviewBox" }, h("div", { key: 'e3fa5d41cb760df5abaa20a45ab6fbeb8ac75f6d', class: "personalInfo" }, h("span", { key: 'e9ec84e1f6d125559f813aba634edec4ac8c58a6', class: "profileImage" }, h("img", { key: 'b972fab9ba83d5ada421d3209bf35bcbd459872f', src: this.profileImage, alt: "Profile Image" })), h("h3", { key: '762b7a7245f7ace509da8fffb993806481247c10' }, this.firstName), h("h3", { key: '1cca36ec9f1d2e60590dea4da4acfbf416154c5e' }, this.lastName)), h("p", { key: '59bfd02d7acb7eea1ad1bc30b10370647d81f5bf' }, this.reviewText), h("div", { key: '6f376b75c69d424557d4c7dc1119e1f20c371604', class: "reviewInfo" }, h("span", { key: '191375d1bf4a617d978720f890da34cc0ace4524' }, ratingStars), h("span", { key: 'd04ffdde18617edccb26a433cdb412cf4f2a4109' }, h("img", { key: 'b534f598715d03db8044922118b459bd9af70f2c', src: this.siteLogo, alt: "Review Site" })))));
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
