import { app, Menu } from 'electron';
import { showMessageModal, showOpenDialog, showSaveDialog } from './dialog';

const isWindows = process.platform === 'win32';

export function setMainMenu(mainWindow: Electron.BrowserWindow) {
  const template = [
    {
      label: isWindows ? 'File' : app.getName(),
      submenu: [
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
          click() {
            app.quit();
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
      label: app.getName(),
      submenu: [
        {
          label: 'Say Hello!',
          click() {
            showMessageModal(mainWindow);
          }
        },
        {
          label: 'Save memory usage Info',
          click() {
            showSaveDialog(mainWindow);
          }
        },
        {
          label: 'Open File',
          click() {
            showOpenDialog(mainWindow);
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
