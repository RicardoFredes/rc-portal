import { ComponentsProps } from './ComponentProps';
declare const Modal: {
    ({ close, children, id }: ComponentsProps): JSX.Element;
    open(ChildComponent: any, childComponentProps: object): import("../rcPortal").RcPortal;
};
export { Modal };
