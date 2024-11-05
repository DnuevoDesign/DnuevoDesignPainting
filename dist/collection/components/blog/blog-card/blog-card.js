import { h } from "@stencil/core";
export class BlogCard {
    constructor() {
        this.imageSource = undefined;
        this.link = undefined;
        this.blogTitle = undefined;
        this.date = undefined;
    }
    render() {
        return (h("main", { key: '9edbd0499ce5b38fff7bb92a612104217fc0010f', class: 'card' }, h("a", { key: '8abe5490d20395d480d8c1d6c267846e9ff7807d', href: this.link }, h("figure", { key: 'c093d239adc706771f173b45a69d6274217a5434', class: 'cardImage' }, h("img", { key: '21fc026fa5726ef5c3d595c35acdbfc66c45ebdf', src: this.imageSource, alt: "Blog Image" }))), h("article", { key: 'f8f67a89b459385015376a3d65431bc8993a2b1f', class: 'cardText' }, h("p", { key: '881759dbead93e4538f27aec7e14d0869166949c' }, this.date), h("header", { key: 'd7c0b7c882aa077fdad77012892c0112a2994ed9' }, h("a", { key: '089a455ebdd88184bca15c9c859c80b714a980e2', href: this.link }, h("h2", { key: '91d3f046744ffc59eec351c0a6a8558d25a897a2' }, this.blogTitle))))));
    }
    static get is() { return "ni-blog-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./blog-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["blog-card.css"]
        };
    }
    static get properties() {
        return {
            "imageSource": {
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
                "attribute": "image-source",
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
            },
            "blogTitle": {
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
                "attribute": "blog-title",
                "reflect": false
            },
            "date": {
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
                "attribute": "date",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=blog-card.js.map
