import { PureComponent } from 'react';
export default class _Modal extends PureComponent {
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
