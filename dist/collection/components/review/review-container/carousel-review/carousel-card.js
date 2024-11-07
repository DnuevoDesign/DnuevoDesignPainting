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
        return (h("main", { key: '0841133885cc29ac819ff03c755504e052035a09', id: "carouselCard" }, h("span", { key: '217ac93d3b10736cefa6ed95d2a995d3da909955', class: "reviewSiteLogo" }, h("img", { key: 'b924754d530579598e8f3eae974116c905dff1a8', src: this.siteLogo, alt: "Review Site Logo" })), h("div", { key: 'f05ee19f70b0e8f62c4fae9b9658cf5c6035054f', class: "starsContainer" }, ratingStars), h("p", { key: 'afb4c8deb06c9297285365ab2532c1abc410c828' }, "(", this.numberStars, " out of 5)")));
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
