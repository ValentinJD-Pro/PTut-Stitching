const { app, BrowserWindow } = require('electron')
const { exec } = require("child_process");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
	  webSecurity:false
    }
  })
  
  exec("npm run server");
  
  win.loadURL('http://localhost:8082')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
