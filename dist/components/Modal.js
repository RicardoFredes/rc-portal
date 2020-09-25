"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importStar(require("react"));
class Modal extends react_1.PureComponent {
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
exports.Modal = Modal;
Modal.defaultProps = {
    id: '_modal',
    close: () => console.error(new Error('Must have a close Function'))
};
