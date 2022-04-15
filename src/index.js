const {app, BrowserWindow}=require('electron');
const path=require('path');

const createWindow=()=>{
    //called everytime a new render process is loaded
    //Each instance of the BrowserWindow class creates an application window that loads a web page in a separate renderer process. 
    const mainWindow=new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //a blank window is created
    //loading html into window created
mainWindow.loadFile(path.join(__dirname,'index.html'));
// Open the DevTools.
mainWindow.webContents.openDevTools();
}

//calls create window when app is ready
app.on('ready',createWindow);
// quitting the app when no windows are open on non-macOS platforms
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })