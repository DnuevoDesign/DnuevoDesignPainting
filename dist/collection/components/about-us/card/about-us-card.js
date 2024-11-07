import { h } from "@stencil/core";
export class Card {
    constructor() {
        this.image = undefined;
        this.cardTitle = undefined;
        this.cardDescription = undefined;
        this.link = undefined;
    }
    render() {
        return (h("main", { key: '0ada3ff59918d3913a054fdf5db618656fbcb433', class: "aboutCard" }, h("a", { key: 'bc935995e3774374b4fc610ac8d7f6ed7d922473', href: this.link }, h("article", { key: '9d0708fc456b8fc6904caaa46306c251ea10f723' }, h("img", { key: '1b6e9c697494d2c831e2704f7c0c2d86cd272306', src: this.image, alt: "About Us Image" }), h("h3", { key: 'bceb8390b5a45c698b7712788aeff2e7fc246852' }, this.cardTitle), h("p", { key: '62b9a22506898eed34198225a4f662fb3b9627bb' }, this.cardDescription)))));
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
