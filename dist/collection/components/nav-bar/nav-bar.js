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
        nestedListItem = (h("div", { key: '8ef942e1e33f8691275f26e57aa32f9cf538c2c0', class: `nestListItem ${this.isNestListItemOpen ? "" : "hideListItem"}` }, h("h3", { key: '24fe2d5e5cda4914d09263b629b694c2b88f6b89' }, "General Contracting"), h("ul", { key: 'c2622f01be9117870d40120c70f17ebbc0af4d6c' }, h("li", { key: '00af7e2a56c6b30638be3e83f0c99de5d154e82c' }, h("a", { key: '9849a970384c4fc138a14cc7c1baccef67413ca1', href: "" }, "Kitchen Remodeling")), h("li", { key: '8936e6c9f4034a19efc339d6462315de022edf4b' }, h("a", { key: '091ed7d6cd2d81275721e243049948846e4d5644', href: "" }, "Bathroom Remodeling")), h("li", { key: 'ec37daa189c0b2882fdb79b99392b84443c003d6' }, h("a", { key: '1c643bea1bfd5f07332c7aa6c76a05274f3c6fed', href: "" }, "Decorative Panel Wall")), h("li", { key: 'b32c8266091afc09bbbdf4a7546274bbe2b817ed' }, h("a", { key: '5bd273d678160cfc659802d38ed001c957b8abd5', href: "" }, "Outdoor Living")), h("li", { key: '2310c417f838d584b576144d32386ee9e7896e02' }, h("a", { key: 'd1ed5c2cca5a111bce4f401ef063a7000bb9389b', href: "" }, "Additional")), h("li", { key: 'b4f6e316c707b5b2faa96c53f192a3352198c074' }, h("a", { key: 'da8fb4641e39ce87229ab9f45e006b3c5a51824e', href: "" }, "Maintenance"))), h("h3", { key: '57e405857f1b039a92e128ba02c19132aef885b2' }, "Painting"), h("ul", { key: '4488ab76c8beb4ca3167093c6fda7ab4b522cd9f' }, h("li", { key: '6890895f5a4cac26c046b65b3f87759789ad5503' }, h("a", { key: 'ff418acc99c056392d3206b67035d4835fa2001f', href: "" }, "Kitchen Remodeling")), h("li", { key: 'a59fb90d26de8de78476d67a15e5b3b854fcb7a7' }, h("a", { key: '6671301474ac5fe697ad198b3d91f1b6bd9b12db', href: "" }, "Bathroom Remodeling")), h("li", { key: 'b815a1b096832554cbceadfbbef34773082f34c2' }, h("a", { key: 'c59c1433326c44aaa899c5ff7c11d88faabd96dd', href: "" }, "Decorative Panel Wall")), h("li", { key: '6565492403413e4f4d0f21991614cf2084884573' }, h("a", { key: 'e50b0563d1959692efac04920d0e1223302323fa', href: "" }, "Outdoor Living")), h("li", { key: '2f9f21ca5fc6f95646d143f1ec439f25c90dd9e7' }, h("a", { key: 'fa00efa749b91c10d192449130440a824197732d', href: "" }, "Additional")), h("li", { key: 'fb58c9ed8593c7556674176ef54b441be126233d' }, h("a", { key: '46d749fcf4999f5f28c8c16eb45cb37470fa5fc3', href: "" }, "Maintenance")))));
        menuDown = (h("div", { key: 'f81b81f6862ab632efd3d4798bcce3fa2629ef58', class: `dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} ` }, h("span", { key: 'a64a066d51bb527918065b91aec813067dd65882', class: "contactButton" }, h("a", { key: 'd61f294bb7fbdb5dc76bc34fa7c0ff189ccda244', href: "" }, "Contact us ", h("i", { key: '515278e390a4f38b769f9e06b327946ba6c9df27', class: "fas fa-arrow-right" }))), h("ul", { key: '68ccb34956fa3501684e40465d3cbe4012bd1db1' }, h("li", { key: '54af544fa60711cd16de723401703a99ebce469f' }, h("a", { key: 'f081f968665daacd78c21b8e71ec57f26e00dd29', href: "" }, "Home")), h("li", { key: 'bafaee98f5e769f404473f35b8e8d1009bca16b9' }, h("a", { key: '5f6349ea1e6709d948057f6fa3b0373a64a0922a', onClick: () => this.toggleListItem() }, "Services"), nestedListItem), h("li", { key: '8b954f5262ee7a9828d59c85b112f5da89fa7c92' }, h("a", { key: 'bc1e3fc297a99be6e357952ef3c68e40110e4de7', href: "" }, "About us")), h("li", { key: '628763b42186886b7e8533919be045c4109bab43' }, h("a", { key: '85a788b2ff3ed15053f4fc6171073cde0638c41d', href: "" }, "Our Work")), h("li", { key: '2dfb767b578543b9b80d1b547fefaee4e06ca7fd' }, h("a", { key: 'e8f4b03f206546e81df129a715a19d589d3b334b', href: "" }, "Testimonials")))));
        return (h("nav", { key: 'b1fa711a5b9197ad35665fdff14f00eabd29e0fc' }, h("main", { key: 'a3fd093150d210199b6083691140f3bc89af6117' }, h("figure", { key: '90fcf5b3ca9336801d49f021f4486d310ed5083e' }, h("img", { key: '1256816ae7471245014980e927f6d6722597eb7c', src: "https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png", alt: "Company Logo" })), h("ul", { key: 'b67b9d8eb394b1b304d2e8c902c47531d51e0c26', class: "mainMenu" }, h("li", { key: 'c464066cfeafb18d3d47a5100a0bbed91ee0e767' }, h("a", { key: 'bb213b5a1950737082bb64122811d6dacd7449a3', href: "" }, "Home")), h("li", { key: '7422b6690ac36774e6d9330da9f5677ffe43e191' }, h("a", { key: '0c8e8c3e4b86439af2af75dbecd5397d73a7f2e4' }, "Services")), h("li", { key: '1c3cb1f1b5ddb3dc5936763a62819bb704a20fc1' }, h("a", { key: 'a43c7012301f911ad4cb10194f4e900c6926e841', href: "" }, "About us")), h("li", { key: 'c8ef56e6742aaed46f2bc332381286d4d253984e' }, h("a", { key: '25bb517ac7fba8ceb5386f47bd6466053823100d', href: "" }, "Our Work")), h("li", { key: '7c1c1b1f8782cef4607bc1b5c54517b42e164f39' }, h("a", { key: 'e662df0ee071338a466da0ea2c16c556b98fc27f', href: "" }, "Testimonials"))), h("span", { key: '18b53b485b221897851c2c655f2551f24cea4db7', class: "contactButton" }, h("button", { key: '71528247c7e799705abcf94395b192f8e56cc888' }, "CONTACT US")), h("button", { key: '8aab3f9816db97c5c92738be26b2e518a7e3f7d4', class: `hamburgerButton ${this.isMainMenuOpen ? "change" : ""}`, onClick: () => this.toggleMenu() }, h("div", { key: 'f17df96ebaed4509257829ea540de85b73624650', class: "bar1" }), h("div", { key: '5135f0dbf38abb5b762a801e526891e900bf09e5', class: "bar2" }), h("div", { key: '4fc09865eb22a8fe2b030642889d628d52eca73f', class: "bar3" }))), menuDown));
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
