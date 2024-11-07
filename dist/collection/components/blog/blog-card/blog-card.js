import { h } from "@stencil/core";
export class BlogCard {
    constructor() {
        this.imageSource = undefined;
        this.link = undefined;
        this.blogTitle = undefined;
        this.date = undefined;
    }
    render() {
        return (h("main", { key: '0fbb45509b5c71ad601dd1e0a455d37b4550261d', class: 'card' }, h("a", { key: 'f843ef3853c8b1c9e0c9a70e49e0215383533ca7', href: this.link }, h("figure", { key: 'bab46c23351da294574b2b7945b7142073300a3e', class: 'cardImage' }, h("img", { key: '551fbea089d09b661407581d25f550d9fbaa6360', src: this.imageSource, alt: "Blog Image" }))), h("article", { key: '552cc1c981315a10d2d2a0acf852d6586c1fdf5a', class: 'cardText' }, h("p", { key: 'c9820f0ae7fefae07ea573b85646acdc9e44bf77' }, this.date), h("header", { key: '0821752a53b6723f8cad245698f480a54e7cb41b' }, h("a", { key: '921a089e8804a016594fd4b360900f8e944ba9a5', href: this.link }, h("h2", { key: '9a4b572635138386bb2701fb0b13537a7fe99541' }, this.blogTitle))))));
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
