"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
function portal(Component, props = {}, parent) {
    if (!Component)
        return { error: 'Must have a Component' };
    const nodeParent = parent || document.body;
    const wrapper = getWrapper();
    nodeParent.appendChild(wrapper);
    const close = () => closePortal(nodeParent, wrapper);
    react_dom_1.default.render(react_1.default.createElement(Component, Object.assign({ close: close }, props)), wrapper);
    return { close, parent, wrapper };
}
exports.default = portal;
function getWrapper() {
    const wrapper = document.createElement('div');
    wrapper.id = 'rc-portal-' + Math.ceil(Math.random() * 100);
    return wrapper;
}
function closePortal(nodeParent, wrapper) {
    if (!nodeParent.contains(wrapper))
        return false;
    nodeParent.removeChild(wrapper);
    return true;
}
