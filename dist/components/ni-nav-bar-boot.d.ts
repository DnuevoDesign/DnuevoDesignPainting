import type { Components, JSX } from "../types/components";

interface NiNavBarBoot extends Components.NiNavBarBoot, HTMLElement {}
export const NiNavBarBoot: {
    prototype: NiNavBarBoot;
    new (): NiNavBarBoot;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
