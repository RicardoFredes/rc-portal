import { PureComponent } from 'react';
export default class Modal extends PureComponent {
    props: {
        onClose: Function;
        children: any;
        id: string;
    };
    static defaultProps: {
        id: string;
    };
    handleClick(event: Event): void;
    render(): JSX.Element;
}
