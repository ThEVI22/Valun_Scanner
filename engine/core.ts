import fs from 'node:fs/promises';
import path from 'node:path';

export interface ScanResult {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  type: string;
  file: string;
  line: number;
}

export class ScannerEngine {
  private targetDir: string;

  constructor(targetDir: string) {
    this.targetDir = targetDir;
  }

  // A basic recursive directory walker
  private async walkDirectory(dir: string, fileList: string[] = []): Promise<string[]> {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        // Skip node_modules and .git for performance
        if (file !== 'node_modules' && file !== '.git') {
          await this.walkDirectory(filePath, fileList);
        }
      } else {
        // Only scan code files
        if (filePath.match(/\.(js|jsx|ts|tsx|html|py|php)$/)) {
          fileList.push(filePath);
        }
      }
    }
    return fileList;
  }

  // Mock ruleset (Later we will use real AST/Regex engines here)
  private async scanFile(filePath: string): Promise<ScanResult[]> {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');
    const results: ScanResult[] = [];

    lines.forEach((line, index) => {
      // Very basic Mock Rule for SQLi
      if (line.includes('SELECT * FROM') && line.includes('WHERE id = ' + '${')) {
         results.push({
           id: `VULN-${Date.now()}-${index}`,
           severity: 'critical',
           type: 'SQL Injection',
           file: path.relative(this.targetDir, filePath),
           line: index + 1
         });
      }
      
      // Basic Mock Rule for XSS in React
      if (line.includes('dangerouslySetInnerHTML')) {
        results.push({
           id: `VULN-${Date.now()}-${index}`,
           severity: 'high',
           type: 'Cross-Site Scripting (XSS)',
           file: path.relative(this.targetDir, filePath),
           line: index + 1
         });
      }
    });

    return results;
  }

  public async runScan(): Promise<ScanResult[]> {
    try {
      const filesToScan = await this.walkDirectory(this.targetDir);
      let allResults: ScanResult[] = [];
      
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
}
