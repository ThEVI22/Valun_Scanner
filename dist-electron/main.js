import { BrowserWindow, app, dialog, ipcMain } from "electron";
import path, { join } from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
//#region engine/core.ts
var ScannerEngine = class {
	constructor(targetDir) {
		this.targetDir = targetDir;
	}
	async walkDirectory(dir, fileList = []) {
		const files = await fs.readdir(dir);
		for (const file of files) {
			const filePath = path.join(dir, file);
			if ((await fs.stat(filePath)).isDirectory()) {
				if (file !== "node_modules" && file !== ".git") await this.walkDirectory(filePath, fileList);
			} else if (filePath.match(/\.(js|jsx|ts|tsx|html|py|php)$/)) fileList.push(filePath);
		}
		return fileList;
	}
	async scanFile(filePath) {
		const lines = (await fs.readFile(filePath, "utf-8")).split("\n");
		const results = [];
		lines.forEach((line, index) => {
			if (line.includes("SELECT * FROM") && line.includes("WHERE id = ${")) results.push({
				id: `VULN-${Date.now()}-${index}`,
				severity: "critical",
				type: "SQL Injection",
				file: path.relative(this.targetDir, filePath),
				line: index + 1
			});
			if (line.includes("dangerouslySetInnerHTML")) results.push({
				id: `VULN-${Date.now()}-${index}`,
				severity: "high",
				type: "Cross-Site Scripting (XSS)",
				file: path.relative(this.targetDir, filePath),
				line: index + 1
			});
		});
		return results;
	}
	async runScan() {
		try {
			const filesToScan = await this.walkDirectory(this.targetDir);
			let allResults = [];
			for (const file of filesToScan) {
				const fileResults = await this.scanFile(file);
				allResults = [...allResults, ...fileResults];
			}
			return allResults;
		} catch (error) {
			console.error("Scanner Error:", error);
			throw new Error(`Failed to scan directory: ${error}`);
		}
	}
};
//#endregion
//#region electron/main.ts
var __dirname = fileURLToPath(new URL(".", "" + import.meta.url));
process.env.APP_ROOT = join(__dirname, "..");
var VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
var MAIN_DIST = join(process.env.APP_ROOT, "dist-electron");
var RENDERER_DIST = join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? join(process.env.APP_ROOT, "public") : RENDERER_DIST;
var win;
function createWindow() {
	win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			preload: join(__dirname, "preload.mjs"),
			nodeIntegration: false,
			contextIsolation: true
		},
		autoHideMenuBar: true,
		backgroundColor: "#0f172a",
		show: false
	});
	if (VITE_DEV_SERVER_URL) win.loadURL(VITE_DEV_SERVER_URL);
	else win.loadFile(join(RENDERER_DIST, "index.html"));
	win.once("ready-to-show", () => {
		win?.show();
	});
	ipcMain.handle("select-directory", async () => {
		if (!win) return null;
		const { canceled, filePaths } = await dialog.showOpenDialog(win, {
			properties: ["openDirectory"],
			title: "Select Project to Scan"
		});
		if (canceled) return null;
		return filePaths[0];
	});
	ipcMain.handle("run-scan", async (event, dirPath) => {
		try {
			return {
				success: true,
				results: await new ScannerEngine(dirPath).runScan()
			};
		} catch (error) {
			return {
				success: false,
				error: error.message
			};
		}
	});
}
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
		win = null;
	}
});
app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
app.whenReady().then(createWindow);
//#endregion
export { MAIN_DIST, RENDERER_DIST, VITE_DEV_SERVER_URL };

//# sourceMappingURL=main.js.map