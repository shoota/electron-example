'use strict';


// basic code to launch electron 
const {app, BrowserWindow} = require('electron')
var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// App Event:  on ready
app.on('ready', function() {
  // Menu.setApplicationMenu(menu);

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 500,
    minHeight: 200,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden',
    frame: true
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

// function fullscreen(){
//   var w = BrowserWindow.getFocusedWindow();
//   w.setFullScreen(!w.isFullScreen());
// }


// var template = [
//   {
//     label: 'ReadUs',
//     submenu: [{label: 'Quit', accelerator: 'Command+Q', click: function () {app.quit();}}]
//   },

//   {
//     label: 'View',
//     submenu: [
//       { label: 'Reload', accelerator: 'Command+R', click: function() { BrowserWindow.getFocusedWindow().reload(); } },
//       { label: 'Toggle DevTools', accelerator: 'Alt+Command+I', click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); } },
//       { label: 'Full Screen', accelerator: 'Alt+Command+F', click: fullscreen }
//     ]
//   }
// ];

// var menu = Menu.buildFromTemplate(template);
