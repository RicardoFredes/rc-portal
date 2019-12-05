"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var _Modal = /** @class */ (function (_super) {
    __extends(_Modal, _super);
    function _Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Modal.prototype.handleClick = function (event) {
        event.stopPropagation();
    };
    _Modal.prototype.render = function () {
        return (react_1.default.createElement("div", { id: this.props.id, className: "_Modal", onClick: this.props.close.bind(this) },
            react_1.default.createElement("div", { className: "_ModalWrapper", onClick: this.handleClick.bind(this) },
                react_1.default.createElement("div", { className: "_ModalCloseIcon", onClick: this.props.close.bind(this) }),
                react_1.default.createElement("div", { className: "_ModalContent" }, this.props.children))));
    };
    _Modal.defaultProps = {
        id: '_modal',
        close: function () { return console.error(new Error('Must have a close Function')); }
    };
    return _Modal;
}(react_1.PureComponent));
exports.default = _Modal;
//# sourceMappingURL=_Modal.js.map