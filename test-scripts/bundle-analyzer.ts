import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

interface BundleStats {
  totalSize: number;
  compressedSize: number;
  files: FileStats[];
  chunks: ChunkStats[];
  dependencies: DependencyStats[];
}

interface FileStats {
  name: string;
  size: number;
  compressedSize: number;
  type: "js" | "css" | "html" | "asset";
}

interface ChunkStats {
  name: string;
  size: number;
  files: string[];
  isEntry: boolean;
}

interface DependencyStats {
  name: string;
  version: string;
  size: number;
  imports: number;
}

export class BundleAnalyzer {
  private distDir: string;
  private packageJsonPath: string;

  constructor(distDir = "dist", packageJsonPath = "package.json") {
    this.distDir = distDir;
    this.packageJsonPath = packageJsonPath;
  }

  async analyze(): Promise<BundleStats> {
    const files = await this.getDistFiles();
    const dependencies = await this.analyzeDependencies();

    const fileStats: FileStats[] = [];
    let totalSize = 0;
    let compressedSize = 0;

    for (const file of files) {
      const stats = await this.getFileStats(file);
      fileStats.push(stats);
      totalSize += stats.size;
      compressedSize += stats.compressedSize;
    }

    const chunks = await this.analyzeChunks(files);

    return {
      totalSize,
      compressedSize,
      files: fileStats.sort((a, b) => b.size - a.size),
      chunks: chunks.sort((a, b) => b.size - a.size),
      dependencies: dependencies.sort((a, b) => b.size - a.size),
    };
  }

  private async getDistFiles(): Promise<string[]> {
    const files: string[] = [];

    const walkDir = async (dir: string): Promise<void> => {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          await walkDir(fullPath);
        } else {
          files.push(fullPath);
        }
      }
    };

    try {
      await walkDir(this.distDir);
    } catch (error) {
      // Dist directory might not exist
      return [];
    }

    return files;
  }

  private async getFileStats(filePath: string): Promise<FileStats> {
    const stats = await fs.stat(filePath);
    const size = stats.size;

    // Estimate compressed size (gzip simulation)
    const compressedSize = await this.estimateCompressedSize(filePath, size);

    const type = this.getFileType(filePath);
    const name = path.relative(this.distDir, filePath);

    return {
      name,
      size,
      compressedSize,
      type,
    };
  }

  private async estimateCompressedSize(
    filePath: string,
    originalSize: number
  ): Promise<number> {
    // Simple compression estimate based on file type
    const ext = path.extname(filePath);

    switch (ext) {
      case ".js":
      case ".mjs":
        return Math.round(originalSize * 0.25); // JS compresses well
      case ".css":
        return Math.round(originalSize * 0.2); // CSS compresses very well
      case ".html":
        return Math.round(originalSize * 0.3); // HTML compresses well
      case ".svg":
        return Math.round(originalSize * 0.15); // SVG compresses excellently
      case ".json":
        return Math.round(originalSize * 0.25);
      default:
        return Math.round(originalSize * 0.8); // Conservative estimate for other files
    }
  }

  private getFileType(filePath: string): "js" | "css" | "html" | "asset" {
    const ext = path.extname(filePath);

    switch (ext) {
      case ".js":
      case ".mjs":
        return "js";
      case ".css":
        return "css";
      case ".html":
        return "html";
      default:
        return "asset";
    }
  }

  private async analyzeChunks(files: string[]): Promise<ChunkStats[]> {
    const chunks: ChunkStats[] = [];

    // Group files by potential chunks
    const jsFiles = files.filter((f) => this.getFileType(f) === "js");

    for (const jsFile of jsFiles) {
      const stats = await fs.stat(jsFile);
      const name = path.basename(jsFile, path.extname(jsFile));

      chunks.push({
        name,
        size: stats.size,
        files: [path.relative(this.distDir, jsFile)],
        isEntry: name.includes("index") || name.includes("main"),
      });
    }

    return chunks;
  }

  private async analyzeDependencies(): Promise<DependencyStats[]> {
    try {
      const packageJson = JSON.parse(
        await fs.readFile(this.packageJsonPath, "utf-8")
      );
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };

      const depStats: DependencyStats[] = [];

      for (const [name, version] of Object.entries(dependencies)) {
        const size = await this.estimateDependencySize(name);
        const imports = await this.countDependencyUsage(name);

        depStats.push({
          name,
          version: version as string,
          size,
          imports,
        });
      }

      return depStats;
    } catch (error) {
      return [];
    }
  }

  private async estimateDependencySize(depName: string): Promise<number> {
    // Rough size estimates for common dependencies
    const sizeEstimates: Record<string, number> = {
      react: 45000,
      "react-dom": 130000,
      astro: 5000000, // Astro is large but most is dev-only
      typescript: 8000000, // TypeScript is dev-only
      "@astrojs/react": 50000,
      "@astrojs/tailwind": 25000,
      tailwindcss: 3000000, // TailwindCSS is large
      "@types/react": 500000,
      "@types/node": 1000000,
    };

    return sizeEstimates[depName] || 50000; // Default estimate
  }

  private async countDependencyUsage(depName: string): Promise<number> {
    try {
      const { stdout } = await execAsync(
        `find src -name "*.astro" -o -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "from ['\"]${depName}" | wc -l`
      );
      return parseInt(stdout.trim()) || 0;
    } catch {
      return 0;
    }
  }

  async generateReport(): Promise<string> {
    const stats = await this.analyze();

    let report = "# Bundle Analysis Report\n\n";

    // Overview
    report += "## 📊 Bundle Overview\n\n";
    report += `- **Total Size**: ${this.formatSize(stats.totalSize)}\n`;
    report += `- **Compressed Size**: ${this.formatSize(stats.compressedSize)}\n`;
    report += `- **Compression Ratio**: ${((1 - stats.compressedSize / stats.totalSize) * 100).toFixed(1)}%\n`;
    report += `- **Total Files**: ${stats.files.length}\n\n`;

    // File breakdown
    report += "## 📁 File Size Breakdown\n\n";
    report += "| File | Size | Compressed | Type |\n";
    report += "|------|------|------------|------|\n";

    for (const file of stats.files.slice(0, 20)) {
      // Top 20 files
      report += `| ${file.name} | ${this.formatSize(file.size)} | ${this.formatSize(file.compressedSize)} | ${file.type} |\n`;
    }

    if (stats.files.length > 20) {
      report += `\n*... and ${stats.files.length - 20} more files*\n`;
    }

    // File type summary
    const typeStats = this.groupByType(stats.files);
    report += "\n## 🗂️ File Type Summary\n\n";
    report += "| Type | Files | Total Size | Compressed |\n";
    report += "|------|-------|------------|------------|\n";

    for (const [type, files] of Object.entries(typeStats)) {
      const totalSize = files.reduce((sum, f) => sum + f.size, 0);
      const totalCompressed = files.reduce(
        (sum, f) => sum + f.compressedSize,
        0
      );
      report += `| ${type.toUpperCase()} | ${files.length} | ${this.formatSize(totalSize)} | ${this.formatSize(totalCompressed)} |\n`;
    }

    // Chunks
    if (stats.chunks.length > 0) {
      report += "\n## 🧩 Chunk Analysis\n\n";
      report += "| Chunk | Size | Entry | Files |\n";
      report += "|-------|------|-------|-------|\n";

      for (const chunk of stats.chunks) {
        const entryMark = chunk.isEntry ? "✅" : "❌";
        report += `| ${chunk.name} | ${this.formatSize(chunk.size)} | ${entryMark} | ${chunk.files.length} |\n`;
      }
    }

    // Dependencies
    if (stats.dependencies.length > 0) {
      report += "\n## 📦 Dependency Impact\n\n";
      report += "| Package | Version | Est. Size | Usage |\n";
      report += "|---------|---------|-----------|-------|\n";

      const topDeps = stats.dependencies
        .filter((d) => d.imports > 0)
        .slice(0, 15);

      for (const dep of topDeps) {
        report += `| ${dep.name} | ${dep.version} | ${this.formatSize(dep.size)} | ${dep.imports} files |\n`;
      }
    }

    // Recommendations
    report += "\n## 💡 Optimization Recommendations\n\n";

    const largeFiles = stats.files.filter((f) => f.size > 100000); // > 100KB
    if (largeFiles.length > 0) {
      report += "### 🚨 Large Files to Review\n\n";
      for (const file of largeFiles.slice(0, 5)) {
        report += `- **${file.name}** (${this.formatSize(file.size)}) - Consider code splitting or compression\n`;
      }
      report += "\n";
    }

    const unusedDeps = stats.dependencies.filter((d) => d.imports === 0);
    if (unusedDeps.length > 0) {
      report += "### 🧹 Potentially Unused Dependencies\n\n";
      for (const dep of unusedDeps.slice(0, 10)) {
        report += `- **${dep.name}** - Not found in source files\n`;
      }
      report += "\n";
    }

    report += "### ⚡ Performance Tips\n\n";
    report +=
      "1. **Code Splitting**: Break large bundles into smaller chunks\n";
    report += "2. **Tree Shaking**: Remove unused code from dependencies\n";
    report +=
      "3. **Compression**: Enable gzip/brotli compression on your server\n";
    report += "4. **Lazy Loading**: Load non-critical resources on demand\n";
    report +=
      "5. **Bundle Analysis**: Run this regularly to catch size increases\n\n";

    // Performance budget
    const performanceBudget = {
      total: 500000, // 500KB
      js: 200000, // 200KB
      css: 100000, // 100KB
    };

    const jsSize =
      typeStats.js?.reduce((sum, f) => sum + f.compressedSize, 0) || 0;
    const cssSize =
      typeStats.css?.reduce((sum, f) => sum + f.compressedSize, 0) || 0;

    report += "## 🎯 Performance Budget\n\n";
    report += `- **Total Bundle**: ${this.formatSize(stats.compressedSize)} / ${this.formatSize(performanceBudget.total)} `;
    report +=
      stats.compressedSize > performanceBudget.total
        ? "❌ Over budget"
        : "✅ Within budget";
    report += "\n";

    report += `- **JavaScript**: ${this.formatSize(jsSize)} / ${this.formatSize(performanceBudget.js)} `;
    report +=
      jsSize > performanceBudget.js ? "❌ Over budget" : "✅ Within budget";
    report += "\n";

    report += `- **CSS**: ${this.formatSize(cssSize)} / ${this.formatSize(performanceBudget.css)} `;
    report +=
      cssSize > performanceBudget.css ? "❌ Over budget" : "✅ Within budget";
    report += "\n\n";

    return report;
  }

  private formatSize(bytes: number): string {
    const units = ["B", "KB", "MB", "GB"];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }

  private groupByType(files: FileStats[]): Record<string, FileStats[]> {
    return files.reduce(
      (groups, file) => {
        const type = file.type;
        if (!groups[type]) {
          groups[type] = [];
        }
        groups[type].push(file);
        return groups;
      },
      {} as Record<string, FileStats[]>
    );
  }

  async saveBuildMetrics(): Promise<void> {
    const stats = await this.analyze();

    const metrics = {
      timestamp: new Date().toISOString(),
      totalSize: stats.totalSize,
      compressedSize: stats.compressedSize,
      fileCount: stats.files.length,
      largestFiles: stats.files.slice(0, 10).map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
      })),
    };

    const metricsPath = "build-metrics.json";
    let history = [];

    try {
      const existing = await fs.readFile(metricsPath, "utf-8");
      history = JSON.parse(existing);
    } catch {
      // File doesn't exist yet
    }

    history.push(metrics);

    // Keep only last 30 builds
    if (history.length > 30) {
      history = history.slice(-30);
    }

    await fs.writeFile(metricsPath, JSON.stringify(history, null, 2));
  }
}
