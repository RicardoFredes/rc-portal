declare type Close = () => boolean;
export interface RcPortal {
    close: Close;
    parent: HTMLElement;
    wrapper: HTMLElement;
}
export interface RcPortalProps {
    closeDelay?: number;
    duration?: number;
    [props: string]: any;
}
export default function rcPortal(Component: Function, options?: RcPortalProps, parent?: HTMLElement): RcPortal;
export {};
