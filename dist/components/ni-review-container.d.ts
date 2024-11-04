import type { Components, JSX } from "../types/components";

interface NiReviewContainer extends Components.NiReviewContainer, HTMLElement {}
export const NiReviewContainer: {
    prototype: NiReviewContainer;
    new (): NiReviewContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
