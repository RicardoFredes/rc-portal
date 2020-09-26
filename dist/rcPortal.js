"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
let rcportalIncrement = 0;
function rcPortal(Component, options, parent) {
    if (!Component)
        throw new Error('Must have a Component');
    const nodeParent = parent || document.body;
    const wrapper = getWrapper();
    nodeParent.appendChild(wrapper);
    const _a = options || {}, { duration, closeDelay } = _a, props = __rest(_a, ["duration", "closeDelay"]);
    const close = () => closePortal(nodeParent, wrapper, closeDelay);
    if (duration)
        setTimeout(close, duration);
    react_dom_1.default.render(react_1.default.createElement(Component, Object.assign({ close: close }, props)), wrapper);
    return { close, parent: nodeParent, wrapper };
}
exports.default = rcPortal;
function getWrapper() {
    const wrapper = document.createElement('div');
    rcportalIncrement++;
    wrapper.id = `rcportal-${rcportalIncrement}`;
    return wrapper;
}
function closePortal(nodeParent, wrapper, closeDelay) {
    if (!nodeParent.contains(wrapper))
        return false;
    const removeParent = () => nodeParent.removeChild(wrapper);
    if (closeDelay) {
        wrapper.classList.add('rcportal-closing');
        setTimeout(removeParent, closeDelay);
    }
    else
        removeParent();
    return true;
}
