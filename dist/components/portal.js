"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
function portal(Component, props, wrapper) {
    if (props === void 0) { props = {}; }
    if (!Component)
        return { error: 'Must have a Component' };
    var parent = wrapper || document.createElement('div');
    document.body.appendChild(parent);
    var close = function () {
        if (document.body.contains(parent))
            document.body.removeChild(parent);
    };
    react_dom_1.default.render(react_1.default.createElement(Component, __assign({ close: close }, props)), parent);
    return { close: close, parent: parent };
}
exports.default = portal;
//# sourceMappingURL=portal.js.map