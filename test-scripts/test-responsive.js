#!/usr/bin/env node
/* eslint-disable no-undef, no-console */

/**
 * Responsive Breakpoint Testing Script
 *
 * This script helps test all components across different breakpoints
 * and generates a testing report for responsive behavior.
 */

import fs from "fs";
import path from "path";

// Breakpoint definitions matching tailwind.config.js
const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920,
};

// Common mobile device dimensions for testing
const TEST_DEVICES = {
  "iPhone SE": { width: 375, height: 667 },
  "iPhone 12": { width: 390, height: 844 },
  "iPhone 12 Pro Max": { width: 428, height: 926 },
  "Samsung Galaxy S21": { width: 360, height: 800 },
  "iPad Mini": { width: 768, height: 1024 },
  iPad: { width: 820, height: 1180 },
  'iPad Pro 11"': { width: 834, height: 1194 },
  'iPad Pro 12.9"': { width: 1024, height: 1366 },
  Laptop: { width: 1366, height: 768 },
  Desktop: { width: 1920, height: 1080 },
  "Ultra-wide": { width: 2560, height: 1440 },
};

// Component categories to test
const COMPONENT_CATEGORIES = [
  "navigation",
  "content",
  "layout",
  "interactive",
  "forms",
  "feedback",
];

/**
 * Generate responsive testing checklist
 */
function generateTestingChecklist() {
  const checklist = {
    timestamp: new Date().toISOString(),
    breakpoints: BREAKPOINTS,
    testDevices: TEST_DEVICES,
    components: {},
    testResults: {},
  };

  // Scan for components
  COMPONENT_CATEGORIES.forEach((category) => {
    const categoryPath = path.join(
      process.cwd(),
      "src",
      "components",
      category
    );

    try {
      const files = fs.readdirSync(categoryPath);
      const components = files
        .filter((file) => file.endsWith(".astro") || file.endsWith(".tsx"))
        .map((file) => ({
          name: file.replace(/\.(astro|tsx)$/, ""),
          file: file,
          path: path.join(categoryPath, file),
          category: category,
        }));

      checklist.components[category] = components;
    } catch (error) {
      console.warn(`Category ${category} not found:`, error.message);
      checklist.components[category] = [];
    }
  });

  return checklist;
}

/**
 * Generate HTML test page for visual testing
 */
function generateTestPage(components) {
  const testPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Component Testing</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        screens: {
          'xs': '475px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '1920px',
        },
        extend: {
          colors: {
            primary: {
              DEFAULT: '#3b82f6',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#64748b',
              foreground: '#ffffff',
            }
          }
        }
      }
    }
  </script>
  <style>
    /* Debug breakpoint indicator */
    .breakpoint-indicator {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9999;
      background: #000;
      color: #fff;
      padding: 0.5rem;
      font-family: monospace;
      font-size: 12px;
    }
    
    .test-section {
      border: 2px dashed #ccc;
      margin: 2rem 0;
      padding: 2rem;
      position: relative;
    }
    
    .test-section::before {
      content: attr(data-component);
      position: absolute;
      top: -1px;
      left: 1rem;
      background: #fff;
      padding: 0.25rem 0.5rem;
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body class="bg-gray-50">
  <!-- Breakpoint indicator -->
  <div class="breakpoint-indicator">
    <span class="xs:hidden">xs (&lt;475px)</span>
    <span class="hidden xs:inline sm:hidden">sm (475px+)</span>
    <span class="hidden sm:inline md:hidden">md (640px+)</span>
    <span class="hidden md:inline lg:hidden">lg (768px+)</span>
    <span class="hidden lg:inline xl:hidden">xl (1024px+)</span>
    <span class="hidden xl:inline 2xl:hidden">2xl (1280px+)</span>
    <span class="hidden 2xl:inline">3xl (1536px+)</span>
  </div>

  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Responsive Component Testing</h1>
    
    <div class="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h2 class="text-lg font-semibold mb-2">Testing Instructions:</h2>
      <ol class="list-decimal list-inside space-y-1 text-sm">
        <li>Resize your browser window to test different breakpoints</li>
        <li>Watch the breakpoint indicator in the top-right corner</li>
        <li>Verify each component adapts appropriately at each breakpoint</li>
        <li>Test touch interactions on mobile devices</li>
        <li>Check for horizontal scrolling issues</li>
      </ol>
    </div>

    <!-- Test Device Sizes -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Quick Device Size Tests</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
        ${Object.entries(TEST_DEVICES)
          .map(
            ([device, { width, height }]) => `
          <button 
            onclick="window.resizeTo(${width}, ${height})"
            class="p-2 bg-gray-200 hover:bg-gray-300 rounded text-center"
          >
            <div class="font-semibold">${device}</div>
            <div>${width}×${height}</div>
          </button>
        `
          )
          .join("")}
      </div>
    </div>

    <!-- Component Test Sections -->
    ${Object.entries(components)
      .map(
        ([category, categoryComponents]) => `
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6 capitalize">${category} Components</h2>
        
        ${categoryComponents
          .map(
            (component) => `
          <div class="test-section" data-component="${component.name}">
            <h3 class="text-lg font-semibold mb-4">${component.name}</h3>
            
            <!-- Example responsive layouts for ${component.name} -->
            <div class="space-y-4">
              <!-- Mobile layout -->
              <div class="block sm:hidden">
                <div class="bg-white p-4 rounded shadow">
                  <p class="text-sm text-gray-600 mb-2">Mobile Layout (xs-sm)</p>
                  <div class="h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded flex items-center justify-center">
                    ${component.name} - Mobile View
                  </div>
                </div>
              </div>
              
              <!-- Tablet layout -->
              <div class="hidden sm:block lg:hidden">
                <div class="bg-white p-6 rounded shadow">
                  <p class="text-sm text-gray-600 mb-2">Tablet Layout (sm-lg)</p>
                  <div class="h-24 bg-gradient-to-r from-green-100 to-green-200 rounded flex items-center justify-center">
                    ${component.name} - Tablet View
                  </div>
                </div>
              </div>
              
              <!-- Desktop layout -->
              <div class="hidden lg:block">
                <div class="bg-white p-8 rounded shadow">
                  <p class="text-sm text-gray-600 mb-2">Desktop Layout (lg+)</p>
                  <div class="h-32 bg-gradient-to-r from-purple-100 to-purple-200 rounded flex items-center justify-center">
                    ${component.name} - Desktop View
                  </div>
                </div>
              </div>
            </div>

            <!-- Responsive grid example -->
            <div class="mt-4">
              <p class="text-sm text-gray-600 mb-2">Grid Responsiveness Test:</p>
              <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                ${Array.from(
                  { length: 12 },
                  (_, i) => `
                  <div class="bg-gray-200 p-2 rounded text-center text-xs">
                    Item ${i + 1}
                  </div>
                `
                ).join("")}
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </section>
    `
      )
      .join("")}

    <!-- Breakpoint visualization -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Breakpoint Visualization</h2>
      <div class="test-section" data-component="Breakpoints">
        ${Object.entries(BREAKPOINTS)
          .map(
            ([name, width]) => `
          <div class="mb-4">
            <div class="flex items-center space-x-4">
              <span class="font-mono text-sm w-12">${name}:</span>
              <span class="text-sm text-gray-600">${width}px+</span>
              <div class="flex-1 h-4 bg-gray-200 rounded relative overflow-hidden">
                <div 
                  class="h-full bg-blue-500 transition-all duration-300"
                  style="width: ${Math.min(100, (window.innerWidth / width) * 100)}%"
                ></div>
                <span class="absolute inset-0 flex items-center justify-center text-xs font-medium">
                  Current: \${window.innerWidth}px
                </span>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  </div>

  <script>
    // Update breakpoint visualization on resize
    function updateBreakpointBars() {
      const bars = document.querySelectorAll('.h-4.bg-gray-200 .bg-blue-500');
      const breakpoints = ${JSON.stringify(BREAKPOINTS)};
      
      bars.forEach((bar, index) => {
        const breakpointName = Object.keys(breakpoints)[index];
        const breakpointWidth = breakpoints[breakpointName];
        const percentage = Math.min(100, (window.innerWidth / breakpointWidth) * 100);
        bar.style.width = percentage + '%';
      });
      
      // Update text spans
      document.querySelectorAll('.absolute.inset-0 span').forEach(span => {
        span.textContent = \`Current: \${window.innerWidth}px\`;
      });
    }

    window.addEventListener('resize', updateBreakpointBars);
    updateBreakpointBars(); // Initial update
  </script>
</body>
</html>
  `;

  return testPageHTML;
}

/**
 * Generate testing report
 */
function generateTestingReport(checklist) {
  const report = `
# Responsive Testing Report

Generated: ${new Date().toISOString()}

## 📊 Component Summary

${Object.entries(checklist.components)
  .map(
    ([category, components]) => `
### ${category.charAt(0).toUpperCase() + category.slice(1)} Components (${components.length})

${components.map((component) => `- [ ] ${component.name}`).join("\n")}
`
  )
  .join("\n")}

## 📱 Breakpoint Testing Checklist

### Breakpoints to Test
${Object.entries(BREAKPOINTS)
  .map(([name, width]) => `- [ ] **${name}**: ${width}px+`)
  .join("\n")}

### Device Testing
${Object.entries(TEST_DEVICES)
  .map(
    ([device, { width, height }]) => `- [ ] **${device}**: ${width}×${height}px`
  )
  .join("\n")}

## ✅ Component Testing Matrix

For each component, verify the following at each breakpoint:

| Component | xs (475px) | sm (640px) | md (768px) | lg (1024px) | xl (1280px) | 2xl (1536px) |
|-----------|------------|------------|------------|-------------|-------------|--------------|
${Object.entries(checklist.components)
  .flatMap(([, components]) =>
    components.map(
      (component) => `| ${component.name} | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |`
    )
  )
  .join("\n")}

## 🧪 Testing Criteria

For each component at each breakpoint, check:

### Layout & Spacing
- [ ] No horizontal scrolling occurs
- [ ] Appropriate margins and padding
- [ ] Content doesn't overflow containers
- [ ] Grid layouts adapt properly

### Typography
- [ ] Text remains readable
- [ ] Font sizes are appropriate
- [ ] Line lengths are optimal (45-75 characters)
- [ ] Heading hierarchy is maintained

### Interactions
- [ ] Touch targets are minimum 44px
- [ ] Hover states work on desktop
- [ ] Focus states are clearly visible
- [ ] Buttons and links are easily tappable

### Images & Media
- [ ] Images scale appropriately
- [ ] Aspect ratios are maintained
- [ ] No pixelation or stretching
- [ ] Alt text is present and descriptive

### Navigation
- [ ] Mobile menu works on small screens
- [ ] Desktop navigation works on large screens
- [ ] Breadcrumbs adapt appropriately
- [ ] Pagination is touch-friendly

### Forms
- [ ] Form fields are appropriately sized
- [ ] Labels are clearly associated
- [ ] Error states are visible
- [ ] Submit buttons are accessible

## 🐛 Common Issues to Watch For

### Mobile Issues
- [ ] Text too small to read
- [ ] Buttons too small to tap
- [ ] Content too wide (horizontal scroll)
- [ ] Images don't fit properly

### Tablet Issues
- [ ] Awkward spacing in portrait/landscape
- [ ] Touch targets still appropriate
- [ ] Navigation works with touch

### Desktop Issues
- [ ] Content too spread out
- [ ] Hover states missing
- [ ] Poor use of large screen space
- [ ] Text lines too long to read comfortably

## 📋 Testing Tools

### Browser DevTools
1. Open Chrome/Firefox DevTools
2. Toggle device toolbar (Ctrl/Cmd + Shift + M)
3. Test preset device sizes
4. Use responsive mode to test custom sizes

### Manual Testing
1. Use actual devices when possible
2. Test in different orientations
3. Verify touch interactions work
4. Check accessibility with screen readers

### Automated Testing
\`\`\`bash
# Install Playwright for automated responsive testing
npm install -D @playwright/test

# Run responsive tests
npx playwright test responsive
\`\`\`

## 📝 Notes

Add any specific notes or issues found during testing:

---

**Testing Completed By:** _______________  
**Date:** _______________  
**Overall Assessment:** ⬜ Pass ⬜ Needs Work ⬜ Fail  
`;

  return report;
}

/**
 * Main execution
 */
async function main() {
  console.log("🧪 Generating responsive testing assets...\n");

  // Generate component checklist
  const checklist = generateTestingChecklist();

  // Ensure docs directory exists
  const docsDir = path.join(process.cwd(), "docs");
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  // Generate test page
  const testPageHTML = generateTestPage(checklist.components);
  fs.writeFileSync(path.join(docsDir, "responsive-test.html"), testPageHTML);

  // Generate testing report
  const testingReport = generateTestingReport(checklist);
  fs.writeFileSync(
    path.join(docsDir, "responsive-testing-report.md"),
    testingReport
  );

  // Generate checklist JSON for tooling
  fs.writeFileSync(
    path.join(docsDir, "responsive-checklist.json"),
    JSON.stringify(checklist, null, 2)
  );

  console.log("✅ Generated responsive testing assets:");
  console.log("   📄 docs/responsive-test.html - Visual testing page");
  console.log("   📋 docs/responsive-testing-report.md - Testing checklist");
  console.log("   🔧 docs/responsive-checklist.json - Component inventory");
  console.log(
    "\n🚀 Open responsive-test.html in your browser to start testing!"
  );

  // Component summary
  const totalComponents = Object.values(checklist.components).reduce(
    (sum, components) => sum + components.length,
    0
  );
  console.log(
    `\n📊 Found ${totalComponents} components across ${Object.keys(checklist.components).length} categories:`
  );

  Object.entries(checklist.components).forEach(([category, components]) => {
    console.log(`   ${category}: ${components.length} components`);
  });
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateTestingChecklist, generateTestPage, generateTestingReport };
