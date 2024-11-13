import { r as registerInstance, h } from './index-6b49de0b.js';

const NavBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    closeMultiCollapse() {
        const multiCollapseElement = document.getElementById("multiCollapseExample1");
        multiCollapseElement.classList.remove("show");
    }
    render() {
        return (h("div", { key: '20dbb27041bd9659fde20e118f9af90ee142e30e', class: "fixed-top" }, h("nav", { key: '04d3c5a6af98f5c63006e64cfa44f6a092900d1a', class: "navbar navbar-expand-sm" }, h("div", { key: '459bff9617faa6ebebf23f36ca6d236ab02b7d9b', class: "container-fluid" }, h("a", { key: '106ae0d61c4162eae02615ac51ee741a4196d4c8', class: "navbar-brand", href: "#" }, h("img", { key: 'e1d808ba0e9892fd2f63cf262e484c73d8f8926c', src: "https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png", alt: "Company Logo" })), h("button", { key: 'f320b9758ea9f2c0bd7b5aa7c4c1b10fbb3e721e', onClick: () => this.closeMultiCollapse(), class: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNavDropdown", "aria-controls": "navbarNavDropdown", "aria-expanded": "false", "aria-label": "Toggle navigation" }, h("span", { key: 'd0c767793134573f36545b498fde1daae28d4264', class: "navbar-toggler-icon" })), h("div", { key: '548a3ae868de6ce266823627da08991b3dafd85c', class: "collapse navbar-collapse", id: "navbarNavDropdown" }, h("ul", { key: '4c495fa5fffac1be01ac361128f0a490a1b656b1', class: "navbar-nav" }, h("li", { key: 'e88dfe3897666f28ea73eb377f7e21e6c937ed65', class: "nav-item" }, h("a", { key: '04a7ffdd37d30469fe350df9a61fb68300ebc4a4', class: "nav-link active", "aria-current": "page", href: "/" }, "Home")), h("li", { key: '2c841ace7e2236d2f25bda174ef9ba375e11d002', class: "nav-item dropdown" }, h("a", { key: 'fabade5f2010b720da7efb699f58e0eae2ace4ee', class: "nav-link dropdown-toggle", "data-bs-toggle": "collapse", href: "#multiCollapseExample1", role: "button", "aria-expanded": "false", "aria-controls": "multiCollapseExample1" }, "Services")), h("li", { key: 'c779a7ffaba6fd64ce4cf0bb27e4af680e837455', class: "nav-item" }, h("a", { key: '78a7dbe7b9aecc9c9a071337b1bad900a1da4546', class: "nav-link", href: "#gallery-section" }, "Our Work")), h("li", { key: 'be58a354d2fc37ff4316680580f286ab0b3d5f7a', class: "nav-item" }, h("a", { key: '8f32d47e1c1d926f43aa3fb4274cc0b13a1eb372', class: "nav-link", href: "#testimonials" }, "Testimonial"))), h("span", { key: 'dd72b415fd26f69e20b2b90f5b7283a625ebe833', class: "position-relative ms-auto" }, h("a", { key: 'bcdbb5b6c0cfe6386d6700f0057b5085dcfa4386', href: "tel:" }, h("button", { key: 'e7fb3467f9ba57089b68e99e4822ee98d861c38d', type: "button", class: "btn navbar-text ms-auto btn-outline-primary" }, "Call at: (888)383-5134")))))), h("div", { key: 'd888cb0b9f0c144d3ed6f415e72ee757281e92ba', class: "row" }, h("div", { key: '4d054e98263ffbd7eebece813b4e060cc950ef41', class: "col" }, h("div", { key: '5cdfe83176b7c50237e05e49ac599c48516a5612', class: "collapse multi-collapse", id: "multiCollapseExample1" }, h("div", { key: '484092f94b9c8ca690c2549926ba876a5d445938', class: "card card-body" }, h("h5", { key: 'fc28445fb089e5d53bb1921434f14b3afada7540', class: "mb-1" }, "General Services"), h("ul", { key: '1ddccf95372b4d824ff4e79e52e004781335f73c', class: "list-group list-group-flush" }, h("li", { key: 'c0d0a25e08dc9cfd810ccca8c5cc6588d10d7936', class: "list-group-item list-group-item-action" }, h("a", { key: '1f5581626e48fbe712d6092a8b519ddf85448a6b', href: "/public/pages/services/kitchen-remodeling.html" }, "Kitchen Remodeling")), h("li", { key: '6e2a89c28cee948e517fd2ef64300245708eee2e', class: "list-group-item list-group-item-action" }, h("a", { key: 'b65c0719efc1e69513cde1cb467dc87c8eedd8e2', href: "/public/pages/services/bathroom-remodeling.html" }, "Bathroom Remodeling")), h("li", { key: '039f339bcca346ffab5f27c4db372bcca39c67e7', class: "list-group-item list-group-item-action" }, h("a", { key: '7cc60799bb9caa0a32cb19435dc0761fe461ca49', href: "/public/pages/services/outdoor-living.html" }, "Outdoor Living")), h("li", { key: '0aad3a67bc6708ebc9dc28522da35310598efdc8', class: "list-group-item list-group-item-action" }, h("a", { key: 'de90b881adde0658d16662af1929308979de5f80', href: "/public/pages/services/maintenance.html" }, "Maintenance")), h("li", { key: '594669bf669b9c58ff4a2b367e8e588a8f46ba6a', class: "list-group-item list-group-item-action" }, h("a", { key: 'd22f3c095d6c10f5aa7ab17a81d80d8747fd5c38', href: "/public/pages/services/additons.html" }, "Additional")), h("li", { key: 'b9a496df6e5462ceb1d65ef399c4efb747e84218', class: "list-group-item list-group-item-action" }, h("a", { key: 'a1de9ceb3a4f8a7d6a0246df43f4b7013fb30b7a', href: "/public/pages/services/decorative-walls.html" }, "Decorative Panel Wall"))), h("h5", { key: 'cf0e4fdb5e60393a71a6e7ba6ee05544a057e3af', class: "mb-1" }, "Painting Services"), h("ul", { key: '07862bd5af114d055fef9c0a31442ee82ccae513', class: "list-group list-group-flush" }, h("li", { key: 'fd2fb933f7b2655c500232e69fc060e5ee90663f', class: "list-group-item list-group-item-action" }, h("a", { key: '8703c319736cf1a4ec7bf52ce96503db2e046619', href: "/public/pages/painting-services/residential-interior.html" }, "Residential Interior Painting")), h("li", { key: 'f29e1c6edfd4dea545e4ad79ca11a3b6e177a814', class: "list-group-item list-group-item-action" }, h("a", { key: 'a145befd2b15cf420e3646dc3c547db0629f3e71', href: "/public/pages/painting-services/residential-exterior.html" }, "Residential Exterior Painting")), h("li", { key: '899b366107519dd6e8b544f386261f735f1481ba', class: "list-group-item list-group-item-action" }, h("a", { key: 'ef4820d90cfed8eab9e1a1c8ef8a823b1e92879e', href: "/public/pages/painting-services/commercial-painting.html" }, "Commercial Painting")), h("li", { key: '3d99bd81e1b9cf5e348bcd348f2a88651347ad66', class: "list-group-item list-group-item-action" }, h("a", { key: '78f1ffe84e6f39dacac6fbc003fb4d8b47fead59', href: "/public/pages/painting-services/re-finish-cabinets.html" }, "Re-Finish Cabinets")), h("li", { key: 'b4cceb89c8e1be7fcc1e16dc3e2966de6444bf28', class: "list-group-item list-group-item-action" }, h("a", { key: 'da5cdd75478f3c51bca1dd0bbb5ea301dc2281d8', href: "/public/pages/painting-services/stain-finish.html" }, "Stain Finish")), h("li", { key: '28bf7932d32ba47a343eaf41767fd5844a070fb6', class: "list-group-item list-group-item-action" }, h("a", { key: '37dce2f5d9b010ec0d1c77e548d652dd81c53d3d', href: "/public/pages/painting-services/epoxy-floor.html" }, "Epoxy Floor")), h("li", { key: '3b0b31c4e2d30b1e99def32e3f8a725ebce21136', class: "list-group-item list-group-item-action" }, h("a", { key: '65918695f2059a4d3022657a7bf60b2d993c73ed', href: "/public/pages/painting-services/power-washing.html" }, "Power Washing")))))))));
    }
};

export { NavBar as ni_nav_bar_boot };

//# sourceMappingURL=ni-nav-bar-boot.entry.js.map