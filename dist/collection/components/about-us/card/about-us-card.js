import { h } from "@stencil/core";
export class Card {
    constructor() {
        this.image = undefined;
        this.cardTitle = undefined;
        this.cardDescription = undefined;
        this.link = undefined;
    }
    render() {
        return (h("main", { key: '0d3f476fb1460a66dcc70759db6206bd5d3af6ea', class: "aboutCard" }, h("a", { key: 'f99c12e459e112270661b3ec6d8765d4df9c9924', href: this.link }, h("article", { key: '42700ea8f4c5504fa4cd0b39e0f03bcfbb10af9f' }, h("img", { key: '6cec9c8fc182cdef203fd25e169c7a887570dd8a', src: this.image, alt: "About Us Image" }), h("h3", { key: '3b7eb1e04dacc03af7fc065c875941d947d3ae41' }, this.cardTitle), h("p", { key: 'f42bf0f0ee43056663b9872a254c7b8c9352184e' }, this.cardDescription)))));
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
            },
            "link": {
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
                "attribute": "link",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=about-us-card.js.map
