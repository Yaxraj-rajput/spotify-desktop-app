const {app,BrowserWindows, BrowserWindow} = require('electron');
console.warn("main");
let createWindow = () =>{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false,
        backgroundColor: '#000',
        // alwaysOnTop: true,
        title: "YouTube",
        resizable: true,
        center: true,
        minWidth: 1100,
        minHeight: 600,
        autoHideMenuBar: true,
        fullscreenable: true,
        webPreferences:{
            nodeIntegration: true
        }
    })

    win.loadFile("index.html");


}

app.whenReady().then(createWindow)