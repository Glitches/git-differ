import { app, dialog, nativeImage } from 'electron';
import fs from 'fs';
import path from 'path';

function showMessageModal(browserWindow: Electron.BrowserWindow) {
  dialog.showMessageBox(
    browserWindow,
    {
      type: 'info',
      icon: nativeImage.createFromPath('./kitten.jpeg'),
      message: 'Hello',
      detail: 'Just a meow',
      buttons: ['Meow', 'Close'],
      defaultId: 0
    },
    clickedIndex => {
      // eslint-disable no-console
      // tslint:disable-next-line:no-console
      console.log(clickedIndex);
    }
  );
}

function showSaveDialog(browserWindow: Electron.BrowserWindow) {
  dialog.showSaveDialog(
    browserWindow,
    { defaultPath: path.join(app.getPath('downloads'), 'memory-inbof.txt') },
    filename => {
      const memInfo = JSON.stringify(process.getSystemMemoryInfo(), null, 2);
      if (filename) {
        fs.writeFile(filename, memInfo, 'utf8', err => {
          if (err) {
            dialog.showErrorBox('SaveFailed', err.message);
          }
        });
      }
    }
  );
}

function showOpenDialog(browserWindow: Electron.BrowserWindow) {
  dialog.showOpenDialog(
    browserWindow,
    {
      defaultPath: path.join(app.getPath('downloads')),
      filters: [{ name: 'Text Files', extensions: ['txt'] }]
    },
    filepath => {
      if (filepath) {
        // eslint-disable no-console
        // tslint:disable-next-line:no-console
        console.log(filepath, fs.readFileSync(filepath[0], 'utf8'));
      }
    }
  );
}

export { showMessageModal, showSaveDialog, showOpenDialog };
