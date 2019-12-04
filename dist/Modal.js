var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { PureComponent } from 'react';
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.handleClick = function (event) {
        event.stopPropagation();
    };
    Modal.prototype.render = function () {
        return (React.createElement("div", { id: this.props.id, className: "_Modal", onClick: this.props.onClose.bind(this) },
            React.createElement("div", { className: "_ModalWrapper", onClick: this.handleClick.bind(this) },
                React.createElement("div", { className: "_ModalCloseIcon", onClick: this.props.onClose.bind(this) }),
                React.createElement("div", { className: "_ModalContent" }, this.props.children))));
    };
    Modal.defaultProps = {
        id: '_modal'
    };
    return Modal;
}(PureComponent));
export default Modal;
//# sourceMappingURL=Modal.js.map