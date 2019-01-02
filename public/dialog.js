"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function showMessageModal(browserWindow) {
    electron_1.dialog.showMessageBox(browserWindow, {
        type: 'info',
        icon: electron_1.nativeImage.createFromPath('./kitten.jpeg'),
        message: 'Hello',
        detail: 'Just a meow',
        buttons: ['Meow', 'Close'],
        defaultId: 0
    }, function (clickedIndex) {
        // eslint-disable no-console
        // tslint:disable-next-line:no-console
        console.log(clickedIndex);
    });
}
exports.showMessageModal = showMessageModal;
function showSaveDialog(browserWindow) {
    electron_1.dialog.showSaveDialog(browserWindow, { defaultPath: path_1.default.join(electron_1.app.getPath('downloads'), 'memory-inbof.txt') }, function (filename) {
        var memInfo = JSON.stringify(process.getSystemMemoryInfo(), null, 2);
        if (filename) {
            fs_1.default.writeFile(filename, memInfo, 'utf8', function (err) {
                if (err) {
                    electron_1.dialog.showErrorBox('SaveFailed', err.message);
                }
            });
        }
    });
}
exports.showSaveDialog = showSaveDialog;
function showOpenDialog(browserWindow) {
    electron_1.dialog.showOpenDialog(browserWindow, {
        defaultPath: path_1.default.join(electron_1.app.getPath('downloads')),
        filters: [{ name: 'Text Files', extensions: ['txt'] }]
    }, function (filepath) {
        if (filepath) {
            // eslint-disable no-console
            // tslint:disable-next-line:no-console
            console.log(filepath, fs_1.default.readFileSync(filepath[0], 'utf8'));
        }
    });
}
exports.showOpenDialog = showOpenDialog;
//# sourceMappingURL=dialog.js.map