import type { Components, JSX } from "../types/components";

interface NiReviewBox extends Components.NiReviewBox, HTMLElement {}
export const NiReviewBox: {
    prototype: NiReviewBox;
    new (): NiReviewBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
