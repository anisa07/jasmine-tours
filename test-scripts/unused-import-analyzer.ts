import fs from "fs/promises";
import path from "path";

interface ImportInfo {
  file: string;
  imports: string[];
  unusedImports: string[];
  totalImports: number;
}

interface AnalysisReport {
  totalFiles: number;
  totalImports: number;
  totalUnusedImports: number;
  filesWithUnusedImports: ImportInfo[];
  summary: {
    astroFiles: number;
    tsFiles: number;
    jsFiles: number;
    tsxFiles: number;
  };
}

export class UnusedImportAnalyzer {
  private readonly srcDir: string;
  private readonly excludePatterns: RegExp[];

  constructor(srcDir = "src") {
    this.srcDir = srcDir;
    this.excludePatterns = [
      /node_modules/,
      /\.d\.ts$/,
      /dist/,
      /build/,
      /_astro/,
    ];
  }

  async analyze(): Promise<AnalysisReport> {
    console.log("🔍 Analyzing unused imports...");

    const files = await this.getAllFiles(this.srcDir);
    const report: AnalysisReport = {
      totalFiles: files.length,
      totalImports: 0,
      totalUnusedImports: 0,
      filesWithUnusedImports: [],
      summary: {
        astroFiles: 0,
        tsFiles: 0,
        jsFiles: 0,
        tsxFiles: 0,
      },
    };

    for (const file of files) {
      const extension = path.extname(file);

      // Count file types
      switch (extension) {
        case ".astro":
          report.summary.astroFiles++;
          break;
        case ".ts":
          report.summary.tsFiles++;
          break;
        case ".js":
          report.summary.jsFiles++;
          break;
        case ".tsx":
        case ".jsx":
          report.summary.tsxFiles++;
          break;
      }

      const fileAnalysis = await this.analyzeFile(file);
      if (fileAnalysis) {
        report.totalImports += fileAnalysis.totalImports;
        report.totalUnusedImports += fileAnalysis.unusedImports.length;

        if (fileAnalysis.unusedImports.length > 0) {
          report.filesWithUnusedImports.push(fileAnalysis);
        }
      }
    }

    return report;
  }

  private async getAllFiles(dir: string): Promise<string[]> {
    const files: string[] = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (this.excludePatterns.some((pattern) => pattern.test(fullPath))) {
        continue;
      }

      if (entry.isDirectory()) {
        files.push(...(await this.getAllFiles(fullPath)));
      } else if (this.isAnalyzableFile(entry.name)) {
        files.push(fullPath);
      }
    }

    return files;
  }

  private isAnalyzableFile(filename: string): boolean {
    const validExtensions = [".astro", ".ts", ".tsx", ".js", ".jsx"];
    return validExtensions.some((ext) => filename.endsWith(ext));
  }

  private async analyzeFile(filePath: string): Promise<ImportInfo | null> {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const imports = this.extractImports(content);
      const unusedImports = this.findUnusedImports(content, imports);

      return {
        file: filePath,
        imports,
        unusedImports,
        totalImports: imports.length,
      };
    } catch (error) {
      console.warn(`⚠️  Could not analyze ${filePath}:`, error);
      return null;
    }
  }

  private extractImports(content: string): string[] {
    const imports: string[] = [];
    const importRegex =
      /import\s+(?:{([^}]+)}|\*\s+as\s+(\w+)|(\w+))\s+from\s+['"']([^'"']+)['"']/g;

    let match;
    while ((match = importRegex.exec(content)) !== null) {
      if (match[1]) {
        // Named imports: import { a, b, c } from 'module'
        const namedImports = match[1]
          .split(",")
          .map((imp) => imp.trim().split(" as ")[0].trim())
          .filter((imp) => imp.length > 0);
        imports.push(...namedImports);
      } else if (match[2]) {
        // Namespace import: import * as module from 'module'
        imports.push(match[2]);
      } else if (match[3]) {
        // Default import: import module from 'module'
        imports.push(match[3]);
      }
    }

    return imports;
  }

  private findUnusedImports(content: string, imports: string[]): string[] {
    const unusedImports: string[] = [];

    for (const importName of imports) {
      // Skip common imports that might be used in templates or have side effects
      if (this.isCommonUtilityImport(importName)) {
        continue;
      }

      // Check if the import is used in the code
      const usagePattern = new RegExp(
        `\\b${this.escapeRegex(importName)}\\b`,
        "g"
      );
      const matches = content.match(usagePattern) || [];

      // If only found once, it's likely just the import statement
      if (matches.length <= 1) {
        unusedImports.push(importName);
      }
    }

    return unusedImports;
  }

  private isCommonUtilityImport(importName: string): boolean {
    const commonUtils = [
      "React",
      "Component",
      "useState",
      "useEffect",
      "useCallback",
      "useMemo",
      "Props",
      "type",
      "interface",
      "clsx",
      "cn",
      "classNames",
    ];
    return commonUtils.includes(importName);
  }

  private escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  async generateReport(): Promise<string> {
    const report = await this.analyze();

    let output = "# Unused Import Analysis Report\n\n";
    output += `📊 **Analysis Summary:**\n`;
    output += `- Total files analyzed: ${report.totalFiles}\n`;
    output += `- Total imports found: ${report.totalImports}\n`;
    output += `- Unused imports: ${report.totalUnusedImports}\n`;
    output += `- Files with unused imports: ${report.filesWithUnusedImports.length}\n\n`;

    output += `📁 **File Type Breakdown:**\n`;
    output += `- Astro files: ${report.summary.astroFiles}\n`;
    output += `- TypeScript files: ${report.summary.tsFiles}\n`;
    output += `- JavaScript files: ${report.summary.jsFiles}\n`;
    output += `- TSX/JSX files: ${report.summary.tsxFiles}\n\n`;

    if (report.filesWithUnusedImports.length > 0) {
      output += `🚨 **Files with Unused Imports:**\n\n`;

      for (const fileInfo of report.filesWithUnusedImports) {
        output += `### ${fileInfo.file}\n`;
        output += `- Total imports: ${fileInfo.totalImports}\n`;
        output += `- Unused imports: ${fileInfo.unusedImports.length}\n`;
        output += `- Unused: ${fileInfo.unusedImports.join(", ")}\n\n`;
      }
    } else {
      output += `✅ **No unused imports found!**\n\n`;
    }

    output += `## Recommendations\n\n`;

    if (report.totalUnusedImports > 0) {
      output += `1. **Remove unused imports** to reduce bundle size\n`;
      output += `2. **Use ESLint rules** to catch unused imports automatically\n`;
      output += `3. **Consider tree shaking** optimization in build process\n`;
      output += `4. **Regular cleanup** as part of development workflow\n\n`;
    } else {
      output += `🎉 Your codebase is clean! All imports are being used.\n\n`;
    }

    return output;
  }

  async cleanupUnusedImports(): Promise<void> {
    console.log("🧹 Starting unused import cleanup...");
    const report = await this.analyze();

    for (const fileInfo of report.filesWithUnusedImports) {
      try {
        const content = await fs.readFile(fileInfo.file, "utf-8");
        const cleanedContent = this.removeUnusedImports(
          content,
          fileInfo.unusedImports
        );
        await fs.writeFile(fileInfo.file, cleanedContent, "utf-8");
        console.log(
          `✅ Cleaned up ${fileInfo.file}: removed ${fileInfo.unusedImports.length} unused imports`
        );
      } catch (error) {
        console.error(`❌ Failed to cleanup ${fileInfo.file}:`, error);
      }
    }

    console.log(
      `✨ Cleanup complete! Processed ${report.filesWithUnusedImports.length} files.`
    );
  }

  private removeUnusedImports(
    content: string,
    unusedImports: string[]
  ): string {
    let cleanedContent = content;

    for (const unusedImport of unusedImports) {
      // Remove from named imports
      cleanedContent = cleanedContent.replace(
        new RegExp(`\\s*,?\\s*${this.escapeRegex(unusedImport)}\\s*,?`, "g"),
        (match) => {
          // Handle comma placement
          if (match.includes(",")) {
            return match.startsWith(",") ? "" : ",";
          }
          return "";
        }
      );

      // Remove entire import line if it becomes empty
      cleanedContent = cleanedContent.replace(
        /import\s+{\s*}\s+from\s+['"'][^'"']+['"'];?\s*/g,
        ""
      );
    }

    return cleanedContent;
  }
}

// CLI usage
/* eslint-disable no-undef, no-console */
if (import.meta.url === `file://${process.argv[1]}`) {
  const analyzer = new UnusedImportAnalyzer();

  const command = process.argv[2];

  switch (command) {
    case "analyze":
      analyzer.generateReport().then((report) => {
        console.log(report);
      });
      break;

    case "cleanup":
      analyzer.cleanupUnusedImports();
      break;

    case "report":
      analyzer.generateReport().then((report) => {
        fs.writeFile("unused-imports-report.md", report, "utf-8").then(() => {
          console.log("📄 Report saved to unused-imports-report.md");
        });
      });
      break;

    default:
      console.log(`
Usage: node unused-import-analyzer.ts <command>

Commands:
  analyze  - Print analysis to console
  cleanup  - Remove unused imports automatically
  report   - Generate markdown report file

Examples:
  node unused-import-analyzer.ts analyze
  node unused-import-analyzer.ts cleanup
  node unused-import-analyzer.ts report
`);
  }
}
