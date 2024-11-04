import { h } from "@stencil/core";
export class Card {
    constructor() {
        this.image = undefined;
        this.cardTitle = undefined;
        this.cardDescription = undefined;
    }
    render() {
        return (h("main", { key: 'ee1e344731f508a7a389aab7d9f8b5d87f73e1b8', class: "aboutCard" }, h("article", { key: 'aed88402ab5c7748f533a2197e99eb7d680019cc' }, h("img", { key: '34b6678a0143239ee8aa24f0ce6b6b8bd1987805', src: this.image, alt: "About Us Image" }), h("h3", { key: 'c1718698001b7ca9aae88222b56931789a2974bc' }, this.cardTitle), h("p", { key: 'e093555a9cedba80a63c53586c339d08cd2252e1' }, this.cardDescription))));
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
