"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
// eslint-disable-next-line no-undef
var versionEl = document.querySelector('#version');
if (versionEl) {
    versionEl.innerHTML = process.versions.electron;
}
// eslint-disable no-console
// tslint:disable-next-line:no-console
console.log(process.version);
new vue_1.default({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
//# sourceMappingURL=renderer.js.map