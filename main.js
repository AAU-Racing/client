const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null;

function createWindow () {
  win = new BrowserWindow({ 
    width: 800, 
    height: 600,
    title: "AAU Racing client",
    frame: false,
  });

  if (process.env.PROFILE === 'production') {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/client/index.html'),
      protocol: 'file',
      slashes: true
    }));
  }
  else if (process.env.PROFILE === 'dev') {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }
  
  win.isResizable(true);

  win.on('closed', () => {
    // Dereference the window object
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})