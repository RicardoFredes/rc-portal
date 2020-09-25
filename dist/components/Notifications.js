"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const react_1 = __importDefault(require("react"));
const CloseIcon_1 = require("./CloseIcon");
exports.Notification = ({ close, id, children }) => (react_1.default.createElement("div", { id: id, className: "rcportal-notification" },
    react_1.default.createElement("div", { className: "rcportal-notification-close-icon", onClick: () => close() },
        react_1.default.createElement(CloseIcon_1.CloseIcon, null)),
    react_1.default.createElement("div", { className: "rcportal-notification-content" }, children)));
