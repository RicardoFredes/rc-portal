"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importDefault(require("react"));
const closeError = () => {
    throw new Error('Not found "close" function');
};
exports.Modal = ({ close = closeError, children, id = '_modal' }) => (react_1.default.createElement("div", { id: id, className: "rcportal-modal", onClick: () => close() },
    react_1.default.createElement("div", { className: "rcportal-modal-wrapper", onClick: e => e.stopPropagation() },
        react_1.default.createElement("div", { className: "rcportal-modal-close-icon", onClick: () => close() },
            react_1.default.createElement(CloseIcon, null)),
        react_1.default.createElement("div", { className: "rcportal-modal-content" }, children))));
const CloseIcon = () => (react_1.default.createElement("svg", { version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    react_1.default.createElement("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })));
