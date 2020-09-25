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
exports.Notifications = void 0;
const react_1 = __importDefault(require("react"));
const CloseIcon_1 = require("./CloseIcon");
const rcPortal_1 = __importDefault(require("../rcPortal"));
const Notification = ({ close, id, children }) => (react_1.default.createElement("div", { id: id, className: "rcportal-notification" },
    react_1.default.createElement("div", { className: "rcportal-notification-close-icon", onClick: () => close() },
        react_1.default.createElement(CloseIcon_1.CloseIcon, null)),
    react_1.default.createElement("div", { className: "rcportal-notification-content" }, children)));
const PARENT_NAME = 'rcportal-all-notifications';
const getNotificationsWrapper = () => document.getElementById(PARENT_NAME);
const notHasNotificationsWrapper = () => !getNotificationsWrapper();
const Notifications = () => react_1.default.createElement("div", { id: PARENT_NAME, className: PARENT_NAME });
exports.Notifications = Notifications;
Notifications.open = (ChildComponent, childComponentProps) => {
    if (notHasNotificationsWrapper)
        rcPortal_1.default(Notifications);
    const Component = (_a) => {
        var { id } = _a, props = __rest(_a, ["id"]);
        return (react_1.default.createElement(Notification, { id: id, close: props.close },
            react_1.default.createElement(ChildComponent, Object.assign({}, props))));
    };
    const parent = getNotificationsWrapper();
    return rcPortal_1.default(Component, childComponentProps, parent);
};
