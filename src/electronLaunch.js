import {ipcRenderer} from "electron";

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
let win;
function isDev() {
  return process.mainModule.filename.indexOf('app.asar') === -1;
};
function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 560,
    fullscreen:false,
    resizable:false
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, '../dist/Shipway/index.html'),
    protocol: 'file',
    slashes: true
  }));
  if (isDev()) {
    win.webContents.openDevTools()
  }
  win.on('closed', () => {
    win = null
  })
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

ipcMain.on('close-app', () => {
  app.quit()
});
