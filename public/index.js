"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
var main_menu_1 = require("./main-menu");
require('electron-reload')(__dirname);
var mainWindow;
electron_1.app.on('ready', function () {
    mainWindow = new electron_1.BrowserWindow({
        show: false
    });
    mainWindow.loadURL(path_1.default.join('file://', __dirname, 'index.html'));
    mainWindow.maximize();
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('devtools-opened', function () {
        setImmediate(function () {
            // do whatever you want to do after dev tool completely opened here
            mainWindow.focus();
        });
    });
    mainWindow.on('ready-to-show', function () {
        mainWindow.show();
    });
    main_menu_1.setMainMenu(mainWindow);
});
//# sourceMappingURL=index.js.map