import type { Components, JSX } from "../types/components";

interface NiCarouselCard extends Components.NiCarouselCard, HTMLElement {}
export const NiCarouselCard: {
    prototype: NiCarouselCard;
    new (): NiCarouselCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
