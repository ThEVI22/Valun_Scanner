/// <reference types="vite/client" />

interface Window {
  electronAPI: {
    selectDirectory: () => Promise<string | null>;
    runScan: (dirPath: string) => Promise<{ success: boolean; results?: any[]; error?: string }>;
  }
}
