const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow = null;

// Preferência: www/index.html local; senão site online
const LOCAL_INDEX = path.join(__dirname, 'www', 'index.html');
const ONLINE_URL = 'https://fpvdronesimecru.vercel.app/';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    title: 'FPV Drone Sim',
    backgroundColor: '#0a120e',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: true,
    },
    show: false,
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  if (fs.existsSync(LOCAL_INDEX)) {
    mainWindow.loadFile(LOCAL_INDEX);
  } else {
    mainWindow.loadURL(ONLINE_URL);
  }

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => { mainWindow = null; });

  const template = [
    {
      label: 'Arquivo',
      submenu: [
        {
          label: 'Jogar offline (local)',
          click: () => {
            if (fs.existsSync(LOCAL_INDEX)) mainWindow.loadFile(LOCAL_INDEX);
            else shell.openExternal(ONLINE_URL);
          },
        },
        {
          label: 'Jogar online (Vercel)',
          click: () => mainWindow.loadURL(ONLINE_URL),
        },
        { type: 'separator' },
        { role: 'reload', label: 'Recarregar' },
        { role: 'toggleDevTools', label: 'DevTools' },
        { type: 'separator' },
        { role: 'quit', label: 'Sair' },
      ],
    },
    {
      label: 'Janela',
      submenu: [
        { role: 'togglefullscreen', label: 'Tela cheia' },
        { role: 'minimize', label: 'Minimizar' },
      ],
    },
    {
      label: 'Ajuda',
      submenu: [
        {
          label: 'Site do jogo',
          click: () => shell.openExternal(ONLINE_URL),
        },
        {
          label: 'GitHub (PC)',
          click: () => shell.openExternal('https://github.com/tsddev016/fpv-drone-sim-pc'),
        },
        {
          label: 'GitHub (Web)',
          click: () => shell.openExternal('https://github.com/tsddev016/fpv-drone-sim'),
        },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
