"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = exports.Modal = void 0;
const rcPortal_1 = __importDefault(require("./rcPortal"));
var Modal_1 = require("./components/Modal");
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return Modal_1.Modal; } });
var Notifications_1 = require("./components/Notifications");
Object.defineProperty(exports, "Notifications", { enumerable: true, get: function () { return Notifications_1.Notifications; } });
exports.default = rcPortal_1.default;
