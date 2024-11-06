import { h } from "@stencil/core";
export class CarouselCard {
    constructor() {
        this.numberStars = undefined;
        this.siteLogo = undefined;
    }
    render() {
        let ratingStars = [];
        for (let i = 0; i < this.numberStars; i++) {
            ratingStars.push(h("i", { class: "fa-solid fa-star star" }));
        }
        return (h("main", { key: '91ff0895d62311cd7358d64275ccc47f3d3b7fcc', id: "carouselCard" }, h("span", { key: 'fc622f9cc93e8820477a406d169758b26551a2d9', class: "reviewSiteLogo" }, h("img", { key: '8364e3a8aea5278d1ca9c02bf3e11dd98abf6a99', src: this.siteLogo, alt: "Review Site Logo" })), h("div", { key: '2031701ed85ef27c1f78a9462845bc1d6be99fef', class: "starsContainer" }, ratingStars), h("p", { key: 'eb8c77d0147dead9a63dc2da03ee9f5603f7aca4' }, "(", this.numberStars, " out of 5)")));
    }
    static get is() { return "ni-carousel-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["./carousel-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["carousel-card.css"]
        };
    }
    static get properties() {
        return {
            "numberStars": {
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
                "attribute": "number-stars",
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
            }
        };
    }
}
//# sourceMappingURL=carousel-card.js.map
