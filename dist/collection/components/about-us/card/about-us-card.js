import { h } from "@stencil/core";
export class Card {
    constructor() {
        this.image = undefined;
        this.cardTitle = undefined;
        this.cardDescription = undefined;
    }
    render() {
        return (h("main", { key: 'a99e0999308f87d631f637ae0e5138dc673d960c', class: "aboutCard" }, h("article", { key: '8e2aad805a77c3b68b0cc15714b7a9bd845d58c1' }, h("img", { key: 'ca68b8ae2191f851993601b8b861061dcdc4b89a', src: this.image, alt: "About Us Image" }), h("h3", { key: 'f2dd4fbc0e4787ac0b173449bcf5314e74f2faa6' }, this.cardTitle), h("p", { key: '0f2c8489fba236c4420d54fba334c4a0929a3e5d' }, this.cardDescription))));
    }
    static get is() { return "ni-about-us-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./about-us-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["about-us-card.css"]
        };
    }
    static get properties() {
        return {
            "image": {
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
                "attribute": "image",
                "reflect": false
            },
            "cardTitle": {
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
                "attribute": "card-title",
                "reflect": false
            },
            "cardDescription": {
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
                "attribute": "card-description",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=about-us-card.js.map
