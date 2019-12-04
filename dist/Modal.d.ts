import { PureComponent } from 'react';
export default class Modal extends PureComponent {
    props: {
        onClose: Function;
        children: any;
        id: string;
    };
    static defaultProps: {
        id: string;
        onClose: () => void;
    };
    handleClick(event: Event): void;
    render(): JSX.Element;
}
