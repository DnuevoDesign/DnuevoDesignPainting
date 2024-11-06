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
        nestedListItem = (h("div", { key: '701697690e43e74907da4e3a70adf236ff07b9bf', class: `nestListItem ${this.isNestListItemOpen ? "" : "hideListItem"}` }, h("h3", { key: '3f46e95cbd7723fc8310c61cc0f60bfe350dfd37' }, "Painting"), h("ul", { key: '42bfc08208e682e412cb8b4d0588a171fa5d8865' }, h("li", { key: '65ca72c0a8fa9fd54f3fb2c6000e9dbe9d2445ce' }, h("a", { key: '1ba60b82fa589249ea57736f56aeadfb4ce92e83', href: "/public/pages/painting-services/residential-interior.html" }, "Residential Interior Painting")), h("li", { key: 'e06e53f0e4a643bd28e8adefee866e84d37062ba' }, h("a", { key: 'fc2e3700b6987351b6183bb63ac783da4577734a', href: "/public/pages/painting-services/commercial-painting.html" }, "Commercial Painting")), h("li", { key: 'f87dbfcb03d2ca23eab61fc5398999eb6267f5c6' }, h("a", { key: 'fe0c426e611cdb41b6b96deb35bf3c95ad95936c', href: "/public/pages/painting-services/residential-exterior.html" }, "Residential Exterior Painting")), h("li", { key: 'd07a79c9992b7371da4dbf1849fd835610908559' }, h("a", { key: '4cef361cd1d57ee5051e54d9778a36e6a6778a56', href: "/public/pages/painting-services/re-finish-cabinets.html" }, "Re-Finished Cabinets")), h("li", { key: 'af639d604f7c89296405b069d316155cb46eb939' }, h("a", { key: '3b5a33ea4ad70d195158eaba9984210519cd36de', href: "/public/pages/painting-services/stain-finish.html" }, "Stain Finish")), h("li", { key: 'c5001b283cdf45d45d863d00829c1d3cd0fe242f' }, h("a", { key: '5d5d71c84c10d7d3c3a452e2238e91c7246069cd', href: "/public/pages/painting-services/power-washing.html" }, "Power Washing")), h("li", { key: '3bc5fcc34bb9aac318e38b0b369a9211def3f2a4' }, h("a", { key: '1110f36d0bc5eb62faa4fb36fc71fba7843cb4f8', href: "/public/pages/painting-services/epoxy-floor.html" }, "Epoxy Flooring")))));
        menuDown = (h("div", { key: 'eebb2cbf2d809906243114ea735950c3da63ca72', class: `dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} ` }, h("span", { key: '0220e1973723f7484c6c39f3bd6d8d883dc1aa23', class: "contactButton" }, h("a", { key: '3b6186f4accbc24a25d49006cc65f5dda4221d24', href: "" }, "Contact us ", h("i", { key: 'c8229ce2cb662d012478214502d2b9929ef16373', class: "fas fa-arrow-right" }))), h("ul", { key: 'fc7b2486c34822af8e48c1df1cf910db7eb4fb95' }, h("li", { key: 'bb6c4711725bb039355cba055e55190bfd71313c' }, h("a", { key: '9ecaded521b37a04d8de444ac024d54aba2c4506', href: "" }, "Home")), h("li", { key: 'dec886f0e2050b30e39ff22d7e2fcdec3b074f5f' }, h("a", { key: 'f2f75d2a4be6c840a05f6a52df50bbfe53d08d5d', onClick: () => this.toggleListItem() }, "Services"), nestedListItem), h("li", { key: 'ce5fc193b59aaee52f2c66f87c1ba81fe1795bfc' }, h("a", { key: '079638b91c4fbefee579c41a54358251113c37ac', href: "" }, "Our Work")), h("li", { key: '82b894a30475cfeb07ba25d26cceca05eb63a7f8' }, h("a", { key: '6ee4de6a65d7e55922900db456be714b8fd26836', href: "" }, "Testimonials")))));
        return (h("nav", { key: 'b066f40662d00dbcde6309a628cfb23278bb6dbe' }, h("div", { key: 'f6e39662c173f46afd0a5bd3adc38d16822c05ce', id: "callToAction" }, h("h2", { key: '0c8ea3ab2adccf332d8bc6b16e3673c8e96cc6a9' }, h("span", { key: '34e2aa327234c102d9762596488b95b844bb5a41' }, "Holiday Sale"), " 10% OFF any purchase over 5 thousand")), h("main", { key: 'bf579e744d80251de63e2f043f7cc0a8ae448596' }, h("figure", { key: '6f9ee4df02c042eb18a4082fd2ae73de2b96df4d' }, h("img", { key: 'ac9354d74a395f876e569a8c9a56bea58a28a96c', src: "https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png", alt: "Company Logo" })), h("ul", { key: 'f6ed20d719e155ca2f4e49ec30f049b487c54ede', class: "mainMenu" }, h("li", { key: 'faf89764ee8a1f846b61809248fa7394fa41099d' }, h("a", { key: '7689a98e1648d50d5f5e7971fc2033a7a45bf853', href: "" }, "Home")), h("li", { key: 'ab8bee3c3527fb70ed2352095e576b6e22873bb1' }, h("a", { key: 'c5916fa8c0c16e0e7966d4fcbb85bf8a7a6203e1', href: "#about" }, "Services")), h("li", { key: 'edf4244879dbfb32f939f3db5aaaffe94080a2a9' }, h("a", { key: '89ec17e0140eebc09045fe1ef272a65cc4b11870', href: "" }, "Our Work")), h("li", { key: 'a91cdba5900a56e2df9ef83c2fea0cf5c3acbaa0' }, h("a", { key: '4ede1031ab66733a56b45aec74c1ad245020899f', href: "" }, "Testimonials"))), h("a", { key: 'fe6b90bcfd694b87d8d1f4ee73b5af82acfde7bd', class: "contactButton" }, h("button", { key: '319a292ed24b7a8f0b667e760684a481a9ade919', type: "button", class: "btn btn-outline-secondary btn-lg" }, "Contact Us")), h("button", { key: 'ec6b8c885a0242adb29ffbccdd6b11bcaf909502', class: `hamburgerButton ${this.isMainMenuOpen ? "change" : ""}`, onClick: () => this.toggleMenu() }, h("div", { key: 'd7392fc5ad200b9b9b8900139a8f2deeee6e40e3', class: "bar1" }), h("div", { key: '7ff79395ec1e3590d5a938c9bc35f326ebb30012', class: "bar2" }), h("div", { key: '37a88c526be88cd9a56bdbc2bd299acb25e0e873', class: "bar3" }))), menuDown));
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
