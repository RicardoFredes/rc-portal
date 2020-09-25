/// <reference types="react" />
interface ModalProps {
    close(): boolean;
    children: any;
    id: string;
}
export declare const Modal: ({ close, children, id }: ModalProps) => JSX.Element;
export {};
