import type { Components, JSX } from "../types/components";

interface NiBlogCard extends Components.NiBlogCard, HTMLElement {}
export const NiBlogCard: {
    prototype: NiBlogCard;
    new (): NiBlogCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
