export interface RcPortal {
    close(): boolean;
    parent: HTMLElement;
    wrapper: HTMLElement;
}
export default function rcPortal(Component: Function, props?: {}, parent?: HTMLElement): RcPortal;
