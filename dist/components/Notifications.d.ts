/// <reference types="react" />
declare const Notifications: {
    (): JSX.Element;
    open(ChildComponent: any, childComponentProps: object): import("../rcPortal").RcPortal;
};
export { Notifications };
