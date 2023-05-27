import { contextBridge, ipcRenderer } from "electron";

export const preloadObject = {
  existFile: async (filePath: string): Promise<boolean> => {
    const result = await ipcRenderer.invoke("existFile", filePath);
    return result;
  },
};

contextBridge.exposeInMainWorld("api", preloadObject);
