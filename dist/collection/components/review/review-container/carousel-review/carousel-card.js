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
        return (h("main", { key: 'e6ae751634b20d74766b8e622d4d4f167ad30636', id: "carouselCard" }, h("span", { key: 'de207b711c1d760d141ce66cb82770b1725e017e', class: "reviewSiteLogo" }, h("img", { key: '421a216f6c87b47a884bbe957bc4fce0fca4ec5c', src: this.siteLogo, alt: "Review Site Logo" })), h("div", { key: '125097d54f60b4c6423d6432b3bf6c81b59ea802', class: "starsContainer" }, ratingStars), h("p", { key: 'ce5f80a5902b0832b5e3dafcc3c9db51e1964895' }, "(", this.numberStars, " out of 5)")));
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
