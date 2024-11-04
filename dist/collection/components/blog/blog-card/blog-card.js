import { h } from "@stencil/core";
export class BlogCard {
    constructor() {
        this.imageSource = undefined;
        this.link = undefined;
        this.blogTitle = undefined;
        this.date = undefined;
    }
    render() {
        return (h("main", { key: 'd18f0c4e3e2b2ad9bcb2b903051c195107b239a8', class: 'card' }, h("a", { key: 'f9c270e18a2df3fb91d130547f868700258a9f64', href: this.link }, h("figure", { key: '2ecbb30e8e0571fe72d444a0940e8082a45d11f4', class: 'cardImage' }, h("img", { key: '3ecd26505803b917e92c7dc72bfa5f9147db0c71', src: this.imageSource, alt: "Blog Image" }))), h("article", { key: 'bc3eb2077a630577aa206b4d915ddcb085c3569f', class: 'cardText' }, h("p", { key: '318e6f24d4b721fbe0dbf235a18553669c421148' }, this.date), h("header", { key: '42184dfa185d8c44f7898ae4a840151b80714ade' }, h("a", { key: '7007fe885e3da3ea909595fac3e2752302ccd248', href: this.link }, h("h2", { key: '470e39a906c5f3ad6834319f65611847819f7b7c' }, this.blogTitle))))));
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
