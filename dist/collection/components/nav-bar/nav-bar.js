import { h } from "@stencil/core";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
        nestedListItem = (h("div", { key: '5f4b56dd154be55f7f7ce36eaf5c028e05b1bd88', class: `nestListItem ${this.isNestListItemOpen ? "" : "hideListItem"}` }, h("h3", { key: '0a7e027eef1b3974780a6c26c6ed1e2ea00dbf1b' }, "General Contracting"), h("ul", { key: 'b85ce69636a046eaaf387b00c193d4503f76946c' }, h("li", { key: '2dd2cd8888c3fede6a025a722fb3134e46054fd1' }, h("a", { key: '9b7d7209f1d11d7e9ab37898fdcd227eac8ce493', href: "" }, "Kitchen Remodeling")), h("li", { key: 'ce62848ef656ab287ceabe3b53a19ff9ffd81854' }, h("a", { key: 'c1986735523a5f0ee5fda30407de375451dc25da', href: "" }, "Bathroom Remodeling")), h("li", { key: '64fcec3bf00ed16f8eaceed0dcf33d26bb0bfbc1' }, h("a", { key: '903ac4c035583763158b70b2b5df98ee42b18f8b', href: "" }, "Decorative Panel Wall")), h("li", { key: '35e16c7eb371007bba78b8f408d332086ddb5dff' }, h("a", { key: 'fdb9fd5bc79d3e9c76cc3cf9bd209e7fd8005c40', href: "" }, "Outdoor Living")), h("li", { key: 'f263ebc279d221f8eaf036672baeb4d80518025e' }, h("a", { key: 'fcb47fa4be97ef64b05d2e37138bc8b1d5d47330', href: "" }, "Additional")), h("li", { key: 'f802e86adb35021f04fe43daafdac042628504b2' }, h("a", { key: '20b2e476b98d82b2982728b7e1b8128f0591d68f', href: "" }, "Maintenance"))), h("h3", { key: '066be4e8cfb41eeca17d26c77786a7b72520c0de' }, "Painting"), h("ul", { key: 'dee2b6550273594ef10c8068a0e3421a1e161191' }, h("li", { key: 'd2fa45b67f9dbb31c7f794c47a642353b16bd4cb' }, h("a", { key: '09d9bc476f3b3cea046131ca2b59171c44e66394', href: "" }, "Kitchen Remodeling")), h("li", { key: 'a6d12360f8bd468f3775040b57ea3539e08f58fa' }, h("a", { key: '4dfccaabba995fc0b3f3c74ab1f45eef096d33b3', href: "" }, "Bathroom Remodeling")), h("li", { key: '030a8e5924b7933be92e2b66c89fd93becb935d0' }, h("a", { key: '7a6837794273d323137e9b77cf9a2b938f7b5b89', href: "" }, "Decorative Panel Wall")), h("li", { key: 'fef2e3e14f00a3bc5a70fcadf7d9f5fb280eea78' }, h("a", { key: '2c91eb9257a8a2ebc5d7c72334fd9707b2307c47', href: "" }, "Outdoor Living")), h("li", { key: '4976f5a65f75bf8c35a77b2ab7d535c5609c8cd4' }, h("a", { key: '72dbeef32ad1cfdf1089988285cb90cc49a3f048', href: "" }, "Additional")), h("li", { key: '1b51f2d9f3303e62de170054e46b409d615fd112' }, h("a", { key: '1f4966b33c1d9d89598e3c2372937214b823ef37', href: "" }, "Maintenance")))));
        menuDown = (h("div", { key: '4bc127610cb459a6db9cd1262f27947753ee97fc', class: `dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} ` }, h("span", { key: 'df7303efbbafa864391a07e280675ed00efe48f1', class: "contactButton" }, h("a", { key: 'd6a48111d26c02921a680405e0b7b3ee316f94db', href: "" }, "Contact us ", h("i", { key: 'bd37ab4ca758396f44e8687c60326738d806227d', class: "fas fa-arrow-right" }))), h("ul", { key: '0c6941be632dbaab6e77eb71141a25491a7efd7f' }, h("li", { key: '4892d2815f5965b66cb1222f88aff25a3bd49441' }, h("a", { key: 'b03370ca583fbe0339ffd14f9c44c12477deeced', href: "" }, "Home")), h("li", { key: 'b35049e4a80ea34252a242b9dd9518170efc1622' }, h("a", { key: '56f31dddc28cf7493e2bc7c1b4f9e7e36207b795', onClick: () => this.toggleListItem() }, "Services"), nestedListItem), h("li", { key: '2e7b848b3252861422049a4ced7b09f283c62e40' }, h("a", { key: 'fe620740df9899a0d63ae6ad32827021a5937908', href: "" }, "About us")), h("li", { key: '1703fbfce786d104456b31a51bdc18b04fe87a6f' }, h("a", { key: '73d4f7a99f8c05d0388d15fea069f7215bb0c883', href: "" }, "Our Work")), h("li", { key: 'e4f88f3af05aeabcfc82ea554671ff740cc1ec80' }, h("a", { key: '2eb58642645ee9990052bc7e116bb1b35c37893f', href: "" }, "Testimonials")))));
        return (h("nav", { key: 'd232757aabac9e98a48eb840468e0481bdd460be' }, h("main", { key: '4629317bd48713d6b5ce363755132c4fae36f9d6' }, h("figure", { key: '260cdfe9bf3a0ca10949f5da8a1d017eb55a1d44' }, h("img", { key: '0d364498c0332ffff64b77dd6ca59684b39c84f3', src: "https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png", alt: "Company Logo" })), h("ul", { key: '4856938885424347defb4ebfbf0429f20e07e2ee', class: "mainMenu" }, h("li", { key: 'f0081142a75f454a4807dcbb1af84149f8e334c2' }, h("a", { key: '6b3c6c7e08ac159a11dd8fe6c87d8e72696e5e64', href: "" }, "Home")), h("li", { key: '85fc3f404a76cacadd3328a66cead83c4c308093' }, h("a", { key: 'a3564e68857dd907adae7f172f9679b3282df845' }, "Services")), h("li", { key: 'afa9834a631a66c6321fa296424da7d7780e45da' }, h("a", { key: 'e6130a93b246cf9c43543abe62bd50b1080b3f15', href: "" }, "About us")), h("li", { key: 'b7fdc28e745313923607cd618b8ec4aaba32faa5' }, h("a", { key: 'd7992b653374abab463743ef1ea122551f5bfde9', href: "" }, "Our Work")), h("li", { key: 'ff834a9cc4f1b8f4ca546c53d189b445f176417b' }, h("a", { key: '4cd5d31743ba632efa22130e7a57efc591a193b1', href: "" }, "Testimonials"))), h("span", { key: '8f5f2e518f0cd6556cb0817d8fd72c413cdae028', class: "contactButton" }, h("button", { key: '7430acb1e0368c9293fe490fd44e337c25e3fed0' }, "CONTACT US")), h("button", { key: '90539a6de19f848e2c6fb6e598b54e0b704dec2e', class: `hamburgerButton ${this.isMainMenuOpen ? "change" : ""}`, onClick: () => this.toggleMenu() }, h("div", { key: '3fca2bb2c6ba16ac1e67889203ed4e0af9b3a0b0', class: "bar1" }), h("div", { key: '3264e1847f37e4e895d35fd2ecd818af863bd2f8', class: "bar2" }), h("div", { key: '5cd6760207633055092b2fcdc4f928058715fa0c', class: "bar3" }))), menuDown));
    }
    static get is() { return "nate-nav-bar"; }
    static get encapsulation() { return "shadow"; }
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
