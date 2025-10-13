import fs from 'fs';

// Check multiple reports
const reportFiles = [
  '.lighthouseci/lhr-1760351876793.json',  // First URL
  '.lighthouseci/lhr-1760351899945.json',  // Second URL
  '.lighthouseci/lhr-1760351919280.json',  // Third URL
  '.lighthouseci/lhr-1760351935926.json',  // Fourth URL
  '.lighthouseci/lhr-1760351954358.json',  // Fifth URL
  '.lighthouseci/lhr-1760351970957.json',  // Latest
];

reportFiles.forEach(file => {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(`\n\n${'='.repeat(80)}`);
    console.log(`REPORT: ${file}`);
    console.log(`URL: ${data.finalDisplayedUrl}`);
    console.log('='.repeat(80));
    
    analyzeReport(data);
  } catch (err) {
    console.log(`\nSkipping ${file}: ${err.message}`);
  }
});

function analyzeReport(data) {

  // Get all accessibility audits that failed
  console.log('\n=== ALL ACCESSIBILITY ISSUES ===\n');

  Object.keys(data.audits).forEach(id => {
    const audit = data.audits[id];
    
    // Only show accessibility audits that failed
    if (audit && 
        audit.score !== null && 
        audit.score < 1 && 
        data.categories?.accessibility?.auditRefs?.some(ref => ref.id === id)) {
      
      console.log(`\n=== ${audit.title} ===`);
      console.log(`ID: ${id}`);
      console.log(`Score: ${audit.score}`);
      console.log(`Description: ${audit.description}`);
      
      if (audit.details && audit.details.items) {
        console.log(`\nFailed items (${audit.details.items.length}):`);
        audit.details.items.forEach((item, i) => {
          console.log(`\n${i + 1}.`);
          if (item.node) {
            console.log(`  Element: ${item.node.snippet || item.node.nodeLabel || 'N/A'}`);
            console.log(`  Selector: ${item.node.selector || 'N/A'}`);
          }
          if (item.subItems) {
            console.log(`  SubItems:`, JSON.stringify(item.subItems, null, 2));
          }
        });
      }
    }
  });

  // Show overall accessibility score
  if (data.categories?.accessibility) {
    console.log('\n\n=== OVERALL ACCESSIBILITY SCORE ===');
    console.log(`Score: ${data.categories.accessibility.score * 100}/100`);
  }
}
