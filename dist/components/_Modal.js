"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class _Modal extends react_1.PureComponent {
    handleClick(event) {
        event.stopPropagation();
    }
    render() {
        return (react_1.default.createElement("div", { id: this.props.id, className: "_Modal", onClick: this.props.close.bind(this) },
            react_1.default.createElement("div", { className: "_ModalWrapper", onClick: this.handleClick.bind(this) },
                react_1.default.createElement("div", { className: "_ModalCloseIcon", onClick: this.props.close.bind(this) }),
                react_1.default.createElement("div", { className: "_ModalContent" }, this.props.children))));
    }
}
exports.default = _Modal;
_Modal.defaultProps = {
    id: '_modal',
    close: () => console.error(new Error('Must have a close Function'))
};
