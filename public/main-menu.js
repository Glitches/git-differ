"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var dialog_1 = require("./dialog");
var isWindows = process.platform === 'win32';
function setMainMenu(mainWindow) {
    var template = [
        {
            label: isWindows ? 'File' : electron_1.app.getName(),
            submenu: [
                {
                    label: isWindows ? 'Exit' : "Quit " + electron_1.app.getName(),
                    accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
                    click: function () {
                        electron_1.app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { role: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'selectall' }
            ]
        },
        {
            label: electron_1.app.getName(),
            submenu: [
                {
                    label: 'Say Hello!',
                    click: function () {
                        dialog_1.showMessageModal(mainWindow);
                    }
                },
                {
                    label: 'Save memory usage Info',
                    click: function () {
                        dialog_1.showSaveDialog(mainWindow);
                    }
                },
                {
                    label: 'Open File',
                    click: function () {
                        dialog_1.showOpenDialog(mainWindow);
                    }
                }
            ]
        }
    ];
    var menu = electron_1.Menu.buildFromTemplate(template);
    electron_1.Menu.setApplicationMenu(menu);
}
exports.setMainMenu = setMainMenu;
//# sourceMappingURL=main-menu.js.map