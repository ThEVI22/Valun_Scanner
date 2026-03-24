import { contextBridge, ipcRenderer } from 'electron'

// Expose safe APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // We will add scanner API calls here later
  ping: () => ipcRenderer.invoke('ping')
})
