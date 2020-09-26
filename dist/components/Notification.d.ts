/// <reference types="react" />
import { ComponentsProps } from './ComponentProps';
declare const Notification: {
    ({ close, id, children }: ComponentsProps): JSX.Element;
    open(ChildComponent: any, childComponentProps: object): import("../rcPortal").RcPortal;
};
export { Notification };
