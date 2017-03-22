'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var Menu = electron.Menu;
var mainWindow = null;
var remote = require("electron").remote;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  // メニューをアプリケーションに追加
  Menu.setApplicationMenu(menu);
  openWindow();
});

function openWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

function fullscreen(){
  var w = BrowserWindow.getFocusedWindow();
  w.setFullScreen(!w.isFullScreen());
}


var template = [
  {
    label: 'ReadUs',
    submenu: [{label: 'Quit', accelerator: 'Command+Q', click: function () {app.quit();}}]
  },

  {
    label: 'View',
    submenu: [
      { label: 'Reload', accelerator: 'Command+R', click: function() { BrowserWindow.getFocusedWindow().reload(); } },
      { label: 'Toggle DevTools', accelerator: 'Alt+Command+I', click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); } },
      { label: 'Full Screen', accelerator: 'Alt+Command+F', click: fullscreen }
    ]
  }
];

var menu = Menu.buildFromTemplate(template);
