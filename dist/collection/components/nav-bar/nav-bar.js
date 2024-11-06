import { h } from "@stencil/core";
//TODO: declares a new web component
export class NavBar {
    constructor() {
        this.isMainMenuOpen = undefined;
        this.isNestListItemOpen = undefined;
    }
    toggleMenu() {
        this.isMainMenuOpen = !this.isMainMenuOpen;
        if (!this.isMainMenuOpen) {
            this.isNestListItemOpen = false;
        }
    }
    toggleListItem() { this.isNestListItemOpen = !this.isNestListItemOpen; }
    //TODO: Main template construction area
    render() {
        let menuDown = null, nestedListItem = null;
        nestedListItem = (h("div", { key: '701697690e43e74907da4e3a70adf236ff07b9bf', class: `nestListItem ${this.isNestListItemOpen ? "" : "hideListItem"}` }, h("h3", { key: '3f46e95cbd7723fc8310c61cc0f60bfe350dfd37' }, "Painting"), h("ul", { key: '42bfc08208e682e412cb8b4d0588a171fa5d8865' }, h("li", { key: '65ca72c0a8fa9fd54f3fb2c6000e9dbe9d2445ce' }, h("a", { key: '2bc8d35e18b68451d24a40e1f0e519c0b63b921b', href: "https://dnuevodesign.com/public/pages/painting-services/residential-interior.html" }, "Residential Interior Painting")), h("li", { key: 'ac5cc687052c6e5336242626119d56f8654dbb08' }, h("a", { key: '6a658c9944bf0e559a3e4cf132ca168ad7c05083', href: "https://dnuevodesign.com/public/pages/painting-services/commercial-painting.html" }, "Commercial Painting")), h("li", { key: '676d6826e46a5a0a8b28f006729ce9c15426cc3b' }, h("a", { key: '4dfe5e27ba0a0843e252b47b8876ac8cad3d4952', href: "https://dnuevodesign.com/public/pages/painting-services/residential-exterior.html" }, "Residential Exterior Painting")), h("li", { key: 'e63287796f374db3e5ba6899f19ec62de8a67794' }, h("a", { key: '5769521e707b01c81f0c90f1d57f9d3c2444fae7', href: "https://dnuevodesign.com/public/pages/painting-services/re-finish-cabinets.html" }, "Re-Finished Cabinets")), h("li", { key: '9c1798f003f409639b4d93e7069a452501322ac5' }, h("a", { key: 'd33ac63fb2566eeb3c5a117e9ad32c75a31e913c', href: "https://dnuevodesign.com/public/pages/painting-services/stain-finish.html" }, "Stain Finish")), h("li", { key: 'cb21908d94fb2c5ea0fce265df3d4e875df3ef79' }, h("a", { key: '21469c4ec44468b1a950d08f69f7f55982ce1444', href: "https://dnuevodesign.com/public/pages/painting-services/power-washing.html" }, "Power Washing")), h("li", { key: '035f0eaad340a107cc68caf28c104037d6cdf54d' }, h("a", { key: '85371a9f51fe144f6c969a196b8d6e60d14e2a05', href: "https://dnuevodesign.com/public/pages/painting-services/epoxy-floor.html" }, "Epoxy Flooring")))));
        menuDown = (h("div", { key: 'f27ff06d5565c2a2f5e056558b91977b16271ba1', class: `dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} ` }, h("span", { key: 'd110230b77cb2d80a0141e2e90038e2812f34197', class: "contactButton" }, h("a", { key: 'fbb01c05b9f89c735d0fb112fcb69df0e9eeaed4', href: "https://dnuevodesign.com/public/pages/contact.html" }, "Contact us ", h("i", { key: '4ba7d9dbbe8f5a2f1ccd7a6b17a888a98361880b', class: "fas fa-arrow-right" }))), h("ul", { key: 'b4b5d4a2cd1a3bbd21197ddd9bcf4e2ce56c4de4' }, h("li", { key: '9058210f5606e9bdc68dc4cf19d4a9a6b893d438' }, h("a", { key: '3b44dc81084bb6c37151aba40ec95513f5da7aab', href: "" }, "Home")), h("li", { key: '26ba9f338b5fbc9432027141628a162f95f8a921' }, h("a", { key: 'fbf1809c7f9b77938ce4a757873d7548cb019867', onClick: () => this.toggleListItem() }, "Services"), nestedListItem), h("li", { key: 'dde44a5f9bec832e3bf9007ae6e0fc25f413b8fc' }, h("a", { key: 'dde261efc8c3f04d18c7072de68313c982064bb4', href: "" }, "Our Work")), h("li", { key: 'e05a42dc829bfe3de65e34092de47de290bec82e' }, h("a", { key: '8f49ab7150524c8e5a05f531f18eed9c2ad4d497', href: "" }, "Testimonials")))));
        return (h("nav", { key: 'b0834b1515995fd654bd831d6031db7607f7cb39' }, h("div", { key: 'c17b53260563a01034ccc8f3ba8d7927fee0725c', id: "callToAction" }, h("h2", { key: '67573475aca243f42ce7ee4af13631889f507530' }, h("span", { key: 'fb16526ae4dd017f198f53c89d457b38eaea50c6' }, "Holiday Sale"), " 10% OFF any purchase over 5 thousand")), h("main", { key: 'bb6645d5c76bb8843914135f7be29ae4cd788e78' }, h("figure", { key: '4b939b5ffde3ed83f44fe982aa6593291f8275ca' }, h("img", { key: '9d1939e0279d0dc06b3658c66b598b5240ecb221', src: "https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png", alt: "Company Logo" })), h("ul", { key: '5e3b6cd2779e2b42f93de835e34fba0b5f54c0dd', class: "mainMenu" }, h("li", { key: '7e31b86db6f446238ddae4bf5caacd81ba511437' }, h("a", { key: 'a6016dc421058cd45187a331077005413060da62', href: "/" }, "Home")), h("li", { key: '93d73a7ea5b3215a1de95f5f5c029c5e2002a45e' }, h("a", { key: '90ea4af88cf3cd44c15e2720115663eb0d9e78dd', href: "#about" }, "Services")), h("li", { key: 'b63903a18d17c1ade43859b926c690a72124c97c' }, h("a", { key: 'd9c4b190961f5667d3be82fed35fb59ff2c0436f', href: "#gallery" }, "Our Work")), h("li", { key: '5fa6cc7591897d765ca56e5e7f3ca82f491ce220' }, h("a", { key: '9c41e2eee7aa073e2486d2da344b315dfd57dc50', href: "#reviews" }, "Reviews"))), h("a", { key: 'ec3512ad444fc6809068cbad0ce450aa1d1db884', class: "contactButton" }, h("button", { key: '7c4080a6a96234926df781299ab4d41416de094b', type: "button", class: "btn btn-outline-secondary btn-lg" }, "Contact Us")), h("button", { key: 'ad83ec703eb8703b3bd21f4ac0a3fd9b669ccf84', class: `hamburgerButton ${this.isMainMenuOpen ? "change" : ""}`, onClick: () => this.toggleMenu() }, h("div", { key: 'fae7c1ba995340bd95ed9561aaee80495ccf2974', class: "bar1" }), h("div", { key: '115441ed8c051b8806593db6d96435943cb35841', class: "bar2" }), h("div", { key: '7c20ab2b4ef00c5043f74b064c8f7ba733bd1e5e', class: "bar3" }))), menuDown));
    }
    static get is() { return "nate-nav-bar"; }
    static get originalStyleUrls() {
        return {
            "$": ["./nav-bar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nav-bar.css"]
        };
    }
    static get properties() {
        return {
            "isMainMenuOpen": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-main-menu-open",
                "reflect": false
            },
            "isNestListItemOpen": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-nest-list-item-open",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=nav-bar.js.map
