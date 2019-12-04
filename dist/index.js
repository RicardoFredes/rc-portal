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
import React from 'react';
import ReactDOM from 'react-dom';
export default function portal(Component, props, wrapper) {
    if (props === void 0) { props = {}; }
    if (!Component)
        return { error: 'Must have a Component' };
    var parent = wrapper || document.createElement('div');
    document.body.appendChild(parent);
    function close() {
        document.body.removeChild(parent);
    }
    ReactDOM.render(React.createElement(Component, __assign({ onClose: close }, props)), parent);
    return { close: close, parent: parent };
}
//# sourceMappingURL=index.js.map