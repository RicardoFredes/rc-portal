import { PureComponent } from 'react';
export declare class Modal extends PureComponent {
    props: {
        close: Function;
        children: any;
        id: string;
    };
    static defaultProps: {
        id: string;
        close: () => void;
    };
    handleClick(event: Event): void;
    render(): JSX.Element;
}
