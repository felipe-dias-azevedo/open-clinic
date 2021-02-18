const { app, BrowserWindow, dialog } = require('electron')
var ipc = require('electron').ipcMain;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

function createMessage() {
  const resp = dialog.showMessageBox(null, {
    type: 'question',
    buttons: ['No', 'Yes'],
    defaultId: 2,
    title: '',
    message: 'Are you sure of the data Selected?',
    detail: 'Users CAN NOT be recovered after being deleted.'
  });
  return resp
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


ipc.on('invokeAction', function(event, data){
    // var result = processData(data);
    createMessage().then(result => {
      const answ = result.response;
      console.log(answ, data);
      if (answ == 1) {
        // CONFIRM DELETE
        
      }
    });
    // event.sender.send('actionReply', result);
});