import { h } from "@stencil/core";
export class BlogCard {
    constructor() {
        this.imageSource = undefined;
        this.link = undefined;
        this.blogTitle = undefined;
        this.date = undefined;
    }
    render() {
        return (h("main", { key: 'fe0e897104fa52b0387b9ae5bf9de354ef9c9a34', class: 'card' }, h("a", { key: '806039e0fe99ec0a50c15efa5168c5f68ea25a4b', href: this.link }, h("figure", { key: 'e7ef9de83293bc886fae259b16c5b6e14df59e12', class: 'cardImage' }, h("img", { key: 'cbf8573941ae870ea9bea399f58a5a981a310721', src: this.imageSource, alt: "Blog Image" }))), h("article", { key: '765068ba84a35ad87b3a4f64a003ce965b57aa87', class: 'cardText' }, h("p", { key: '0ac9d25e241ebf92efe03adfdfb8af4c710ff0dc' }, this.date), h("header", { key: '40cea8e06db5779adda2ef68c3df730255fec7ea' }, h("a", { key: 'c60c2a03d7f03887da7e0792a0b88fda15979018', href: this.link }, h("h2", { key: 'f63168ef6bd5f2b9ebb301a4b8f801bd737be1e5' }, this.blogTitle))))));
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
