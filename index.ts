import { app, BrowserWindow } from 'electron';
import path from 'path';
import { setMainMenu } from './main-menu';

require('electron-reload')(__dirname);

let mainWindow: Electron.BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  mainWindow.maximize();
  mainWindow.webContents.openDevTools();
  mainWindow.webContents.on('devtools-opened', () => {
    setImmediate(() => {
      // do whatever you want to do after dev tool completely opened here
      mainWindow.focus();
    });
  });
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
  setMainMenu(mainWindow);
});
