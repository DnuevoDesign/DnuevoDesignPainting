import { p as proxyCustomElement, H, h } from './p-1ef653b0.js';

const reviewsBoxCss = "";
const NiReviewBoxStyle0 = reviewsBoxCss;

const ReviewBox = /*@__PURE__*/ proxyCustomElement(class ReviewBox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h("main", { key: 'aec10b43e20399055725aa0db5a5aa07e015f3bd' }, h("div", { key: '5b441c70f05c207cfd2764628ab5638ebc0868be' }, h("article", { key: 'd356a646c79020888c1fbf11f9d160dc571e71bf' }, h("p", { key: 'af4217beb211f6d7f7f93d77ec4fc80994677533' })), h("figure", { key: 'f29d91a188895e67fc4a418a424607e0cbff44a4' }, h("span", { key: '67ef91bbc273a2021d7fbcdf3eaabfd9a7626138' }, h("img", { key: '4c2e9007aa0f1547b21feaaf1c2d660fadd041b5', src: "", alt: "User Profile Image" }), h("img", { key: '6e17636d35fa55edd3c5c8f270a535e05591ca57', src: "", alt: "Review Site" })))), h("div", { key: '5ea0c9023611a498deec066069ee2656fad9cadc' }, h("h3", { key: '91872854215c7b1e543c36d448eeb47575dbd7f2' }), h("span", { key: 'fac677138e37c931ae06aee0cb057d37f1647690' }, h("i", { key: 'a116b0e0b833e48545f3373268dfc2a0efb28a03' }, "star")))));
    }
    static get style() { return NiReviewBoxStyle0; }
}, [1, "ni-review-box"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ni-review-box"];
    components.forEach(tagName => { switch (tagName) {
        case "ni-review-box":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ReviewBox);
            }
            break;
    } });
}
defineCustomElement$1();

const NiReviewBox = ReviewBox;
const defineCustomElement = defineCustomElement$1;

export { NiReviewBox, defineCustomElement };

//# sourceMappingURL=ni-review-box.js.map