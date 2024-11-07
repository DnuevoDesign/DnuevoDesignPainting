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
        nestedListItem = (h("div", { key: '483e91d9e4bc722ea621edfcecacda4b36fb8aad', class: `nestListItem ${this.isNestListItemOpen ? "" : "hideListItem"}` }, h("ul", { key: 'eabc55f8b6175241c582d745a26ec1dde1c81e7f' }, h("li", { key: '145b762efb7e38ea63d45f4fb0d7fb96fe08c590' }, h("a", { key: '5414b21409f127f028732046bde432bd3744170b', href: "https://dnuevodesign.com/public/pages/painting-services/residential-interior.html" }, "Residential Interior Painting")), h("li", { key: 'bfa0f4730082dc71ef9f77788b264750e87f1560' }, h("a", { key: 'd052c1f55c17dc570d8f44692c8cc385361cb959', href: "https://dnuevodesign.com/public/pages/painting-services/commercial-painting.html" }, "Commercial Painting")), h("li", { key: 'aad4a45e7031d1a26ed0b7436b90110e87366edd' }, h("a", { key: '9be5a3e400c85d48e8d7ab1f0c2bed62497378fe', href: "https://dnuevodesign.com/public/pages/painting-services/residential-exterior.html" }, "Residential Exterior Painting")), h("li", { key: '0a6a668803157a53813b42b0365d80e367350483' }, h("a", { key: 'eee265c778346ddd429eac77f4fbd3fc2691ec24', href: "https://dnuevodesign.com/public/pages/painting-services/re-finish-cabinets.html" }, "Re-Finished Cabinets")), h("li", { key: '8cc23cb50134db5e3f8d4d9ec1a2a787167f2cad' }, h("a", { key: '255828982ae415a2cff50d5e05e9df522cc33bcc', href: "https://dnuevodesign.com/public/pages/painting-services/stain-finish.html" }, "Stain Finish")), h("li", { key: '0a60903e82004c4ce92f9cac509e9fa09bc9e527' }, h("a", { key: '017b2f9092d2d29d5acacf1ca02f03b1da68b6cd', href: "https://dnuevodesign.com/public/pages/painting-services/power-washing.html" }, "Power Washing")), h("li", { key: '850aa49ca7bebd9740de1da0c143c27b09ce98a1' }, h("a", { key: '72cf0060f66f39ead483da131507ae4322aa950d', href: "https://dnuevodesign.com/public/pages/painting-services/epoxy-floor.html" }, "Epoxy Flooring")))));
        menuDown = (h("div", { key: '54251174fc95d9bbfdc8215ab54aebae9a3b1097', class: `dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} ` }, h("span", { key: '8543da500dcd9bcc23c13bd18ee1cb619e964ce5', class: "contactButton" }, h("a", { key: 'e5ded9184647b01c49465b4974eff70c5828c3b6', href: "https://dnuevodesign.com/public/pages/contact.html" }, "Contact us ", h("i", { key: '337b95af41ca1c93979990692ee23bfd317ec075', class: "fas fa-arrow-right" }))), h("ul", { key: '353324cb418c8dea418f94b0f5008566dba9db81' }, h("li", { key: 'fcd23a9af4d21fb9a4dfea68f745d948e9153bda' }, h("a", { key: '6a1390db41c9c7e7faff211b315c95b1ac5848fb', href: "" }, "Home")), h("li", { key: '596124e8412a6739b33f2aa5ea6b3c2bc0b0ce24' }, h("a", { key: '86bb243137e2d9696a67ba1c5645d85ff066803d', onClick: () => this.toggleListItem() }, "Services"), nestedListItem), h("li", { key: '6f4a7df0b0b451a1dd2b2c5d7797aba4b3747828' }, h("a", { key: '38006633e4e4bc8dbc6722ab33fadf95984d4c92', href: "" }, "Our Work")), h("li", { key: 'e2f7d223f738b1f15731e9dd8161ed96e47265b0' }, h("a", { key: '95d55fd5adece0255229458e7411bba3af4d4d48', href: "" }, "Testimonials")))));
        return (h("nav", { key: '601edf903cd2fc5f585166c2ba9ebcf1d0400b87' }, h("div", { key: '3e749efa45d225c9389e81be2ad51fd6101969a3', id: "callToAction" }, h("h2", { key: '37278651d595104d2f062593f69dfdd5979441a5' }, h("span", { key: '005185a0ef71c44a7b02e04bfde00d233cc57c01' }, "Holiday Sale"), " 10% OFF any purchase over 5 thousand")), h("main", { key: 'f2a55d1a32ec6ca1375230263d2c61e0cdeb7615' }, h("figure", { key: '45cb6134ef31163e0b6fc589d2970015bcd077d3' }, h("img", { key: '366254d66f027a9aec5d610c4bb22731b3f01e2f', src: "https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png", alt: "Company Logo" })), h("ul", { key: '550c23a630f767fa6cbe35bcd2bac13381cda27c', class: "mainMenu" }, h("li", { key: '89008f0a0bf1df399d0c23afcb4c5124d86d9b12' }, h("a", { key: '75db4ec680e581d789314bfbb2c1d81c0a05d61c', href: "/" }, "Home")), h("li", { key: '1acc16c344a8b291eef28243748d9798d04178b4' }, h("a", { key: 'a56e17c98d780333a38b505c102805e148c1d5e6', href: "#about" }, "Services")), h("li", { key: 'e7f7f157e2acfc4a3e761a30f1bbd73485132dbf' }, h("a", { key: '6675d6669f3d87ad6974d6d2edcf195c6b034d1f', href: "#gallery" }, "Our Work")), h("li", { key: 'f63abe6d3f253ee3adf951ce007b258b9b626869' }, h("a", { key: '3722f8246b2d238b8cd425dcbc8285cfd00e0159', href: "#reviews" }, "Reviews"))), h("a", { key: '69fc53728d6c1557f3f7402e7a87d5f85cd2680e', class: "contactButton" }, h("button", { key: 'd6225891e6cf90be43dc05e502fafa7bc5cd5446', type: "button", class: "btn btn-outline-secondary btn-lg" }, "Contact Us")), h("button", { key: 'adba7f997868059efaa89dad787e5112ad43e98d', class: `hamburgerButton ${this.isMainMenuOpen ? "change" : ""}`, onClick: () => this.toggleMenu() }, h("div", { key: '07377110bd70e8d50b720d3b2f122f2333887ae5', class: "bar1" }), h("div", { key: '16eea7700ae13f4f5010e721b719f1f59ec8f86c', class: "bar2" }), h("div", { key: '3eaaa5d43dcba34db64bd53b13585586780a9285', class: "bar3" }))), menuDown));
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
