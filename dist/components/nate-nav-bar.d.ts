import type { Components, JSX } from "../types/components";

interface NateNavBar extends Components.NateNavBar, HTMLElement {}
export const NateNavBar: {
    prototype: NateNavBar;
    new (): NateNavBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
