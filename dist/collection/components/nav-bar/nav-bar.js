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
        nestedListItem = (h("div", { key: '4e356aec30996e8fb148f03a32e76a03559502b5', class: `nestListItem ${this.isNestListItemOpen ? "" : "hideListItem"}` }, h("ul", { key: 'bec960418e7da24167f700b05f661e9eff46308f' }, h("li", { key: 'a8e75c92c2b178e9ea8ed0551e12af60314f5ac1' }, h("a", { key: 'bf8d865735f69918f418a6738188af8d94fd24a2', href: "https://dnuevodesign.com/public/pages/painting-services/residential-interior.html" }, "Residential Interior Painting")), h("li", { key: '499292d5581d552034c7c3f3f8918950dac706d1' }, h("a", { key: '2c6e58f6e3e6ede4ba040afe94a1a913950b3cbe', href: "https://dnuevodesign.com/public/pages/painting-services/commercial-painting.html" }, "Commercial Painting")), h("li", { key: '4b28e7b297c5cb8ea37368cbddd3e3e0a979a5ae' }, h("a", { key: 'd7eb87321fd807b24912a65189577c439dc5bffb', href: "https://dnuevodesign.com/public/pages/painting-services/residential-exterior.html" }, "Residential Exterior Painting")), h("li", { key: '50f43a8f646202a58f9939091ee2d69382b9b208' }, h("a", { key: '15478bc3825a41ac474c6645fffbdca70096a73a', href: "https://dnuevodesign.com/public/pages/painting-services/re-finish-cabinets.html" }, "Re-Finished Cabinets")), h("li", { key: '90a255d6545acd9ed4551476eb1f2d2a371be71b' }, h("a", { key: 'b2372b6c1ab89ec5c48b5f942268509d64770171', href: "https://dnuevodesign.com/public/pages/painting-services/stain-finish.html" }, "Stain Finish")), h("li", { key: '570f64be2e0799b1e6d3d54e2da35b937e5c8648' }, h("a", { key: '9abf8ba6da405a05ec9fb8c0f892f4f0a78f6c6b', href: "https://dnuevodesign.com/public/pages/painting-services/power-washing.html" }, "Power Washing")), h("li", { key: '9dc1e006148185e8fcd4095d187163378210d539' }, h("a", { key: 'f1b111b4989d58c35cd87a1c977c1a58846cac80', href: "https://dnuevodesign.com/public/pages/painting-services/epoxy-floor.html" }, "Epoxy Flooring")))));
        menuDown = (h("div", { key: '7dd58e00e22e5bbf7c17a94e389a92efc8d33941', class: `dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} ` }, h("span", { key: '3b468f291eb92f8fbd05a55316d7dd8c6faec640', class: "contactButton" }, h("a", { key: '47e51f1e12a41c5f809e76a3ffaad33bf23f5d7c', href: "https://dnuevodesign.com/public/pages/contact.html" }, "Contact us ", h("i", { key: '8d960269b7492ec95119e0cdfef250b21501c60e', class: "fas fa-arrow-right" }))), h("ul", { key: 'da7cbd079b6c81be67787f29cbcc7f1db059fdc8' }, h("li", { key: 'dc678006b631a6b189636b1071367f706f50eceb' }, h("a", { key: '3349c12c20fddac502f399c5646bf81253e53a88', href: "" }, "Home")), h("li", { key: 'ca2fc75931de6c7a38e3c48226212005fe5cfcd1' }, h("a", { key: '274b35244e00dbcfa6d715c4ab3fba7c65566732', onClick: () => this.toggleListItem() }, "Services"), nestedListItem), h("li", { key: '9db01affd8ce4090875c8e6eafdef61ab5ae5441' }, h("a", { key: '9e884da96cb8a3dc0ccf2babd3015dd04a317462', href: "" }, "Our Work")), h("li", { key: '3feb44a76466ba8d80c1135ced92a07d70d195cc' }, h("a", { key: 'a669caa8750c4302b7c469e6fbce26d1d1831a48', href: "" }, "Testimonials")))));
        return (h("nav", { key: '23723b39947987029ac73a43e39d38226cd1a782' }, h("div", { key: 'ab4cb65d91b69c1f83bab1f5a6ab97e1565b585d', id: "callToAction" }, h("h2", { key: 'fceeede59902d389edad08fc9dac9aff473743f4' }, h("span", { key: 'c106e90035d83f51f7632b65419ba1f7edf2c586' }, "Holiday Sale"), " 10% OFF any purchase over 5 thousand")), h("main", { key: '3a631fe126b32cd10e092281ee9f872191141367' }, h("figure", { key: 'ff3f7673207c4de8e905d4cc1e71292aa02ba701' }, h("img", { key: 'b137bc234d0eab16e9ec21c90903fd29bb4df83b', src: "https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png", alt: "Company Logo" })), h("ul", { key: '73603da12444b0d237d48873b1c3d487eb4141cc', class: "mainMenu" }, h("li", { key: 'e05f4f3a590baea5202cab22d349c13bde036571' }, h("a", { key: '87d60f23b45fcb4aff55d957d39e7dba5450df7b', href: "/" }, "Home")), h("li", { key: '7799881b56b3c2fe6e8d4c4eeea1d2e6cc5cc6f4' }, h("a", { key: '257810bc8fe72093c4147b8b8a89e83fbb66cb12', href: "#about" }, "Services")), h("li", { key: '11343781f3e3f7b171ab02cfd997b457d773186e' }, h("a", { key: '9655fc3aff4bb4467db7a70a6b7cf269717601e2', href: "#gallery" }, "Our Work")), h("li", { key: '48d3d18ed799c064ecc258fa70d028f77c22b787' }, h("a", { key: '26a8972913b99fd9cc49bfe1f005bff77c5df6d6', href: "#reviews" }, "Reviews"))), h("a", { key: '90dc2a5626c3916287625cca0f22f1c8fcbf29e5', class: "contactButton" }, h("button", { key: 'f5f16d8beb2037763f2807b28541aaa9ae5ac1a4', type: "button", class: "btn btn-outline-secondary btn-lg" }, "Contact Us")), h("button", { key: 'c8ac3a4e4db6216fbf2c5f980cce3dce483beff8', class: `hamburgerButton ${this.isMainMenuOpen ? "change" : ""}`, onClick: () => this.toggleMenu() }, h("div", { key: 'e2f325e3b43cb3eb0d6cafa8159b2f29c0092f33', class: "bar1" }), h("div", { key: '832e4d5b2690959c5256303e57c993f8b22451b4', class: "bar2" }), h("div", { key: '5a03e1226148c0ef5eae77aa49d59ff19b1d01b4', class: "bar3" }))), menuDown));
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
