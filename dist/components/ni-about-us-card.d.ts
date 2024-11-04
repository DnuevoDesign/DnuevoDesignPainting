import type { Components, JSX } from "../types/components";

interface NiAboutUsCard extends Components.NiAboutUsCard, HTMLElement {}
export const NiAboutUsCard: {
    prototype: NiAboutUsCard;
    new (): NiAboutUsCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
