import path from "path";
import fs from "fs";
import { app, BrowserWindow, ipcMain } from "electron";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.loadFile("dist/index.html");
};

app.whenReady().then(async () => {
  createWindow();
});

ipcMain.handle(
  "existFile",
  (event: Electron.IpcMainInvokeEvent, filename: string) => {
    return fs.existsSync(filename);
  }
);

app.once("window-all-closed", () => app.quit());
