const fs = require('fs');
const path = require('path');
const dir = './src/pages';

const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the first section which typically contains background: '#1a3a2a'
    const sectionRegex = /(<section[^>]*?background:\s*['"]#1a3a2a['"][^>]*>)([\s\S]*?)(<\/section>)/;
    
    content = content.replace(sectionRegex, (match, p1, p2, p3) => {
      let innerContent = p2;
      // Change dark text to white
      innerContent = innerContent.replace(/color:\s*['"]#11251a['"]/g, "color: '#ffffff'");
      innerContent = innerContent.replace(/color:\s*['"]rgba\(17,\s*37,\s*26,\s*0\.8\)['"]/g, "color: 'rgba(255, 255, 255, 0.9)'");
      // Change green-icon to gold-accent for better visibility on dark green
      innerContent = innerContent.replace(/color:\s*['"]var\(--green-icon\)['"]/g, "color: 'var(--gold-accent)'");
      return p1 + innerContent + p3;
    });
    
    fs.writeFileSync(fullPath, content);
  }
}

// Also check components for #1a3a2a backgrounds and fix text
const compDir = './src/components';
const compFiles = fs.readdirSync(compDir);
for (const file of compFiles) {
  if (file.endsWith('.jsx')) {
    const fullPath = path.join(compDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    const sectionRegex = /(<section[^>]*?background:\s*['"]#1a3a2a['"][^>]*>)([\s\S]*?)(<\/section>)/;
    
    content = content.replace(sectionRegex, (match, p1, p2, p3) => {
      let innerContent = p2;
      innerContent = innerContent.replace(/color:\s*['"]#11251a['"]/g, "color: '#ffffff'");
      innerContent = innerContent.replace(/color:\s*['"]rgba\(17,\s*37,\s*26,\s*0\.8\)['"]/g, "color: 'rgba(255, 255, 255, 0.9)'");
      innerContent = innerContent.replace(/color:\s*['"]var\(--green-icon\)['"]/g, "color: 'var(--gold-accent)'");
      return p1 + innerContent + p3;
    });

    // Also look for div with background #1a3a2a
    const divRegex = /(<div[^>]*?background:\s*['"]#1a3a2a['"][^>]*>)([\s\S]*?)(<\/div>\s*<\/div>|\s*<\/div>)/;
    content = content.replace(divRegex, (match, p1, p2, p3) => {
      let innerContent = p2;
      innerContent = innerContent.replace(/color:\s*['"]#11251a['"]/g, "color: '#ffffff'");
      innerContent = innerContent.replace(/color:\s*['"]rgba\(17,\s*37,\s*26,\s*0\.8\)['"]/g, "color: 'rgba(255, 255, 255, 0.9)'");
      innerContent = innerContent.replace(/color:\s*['"]var\(--green-icon\)['"]/g, "color: 'var(--gold-accent)'");
      return p1 + innerContent + p3;
    });
    
    fs.writeFileSync(fullPath, content);
  }
}

// Change gold-accent to #c8a84a for better contrast globally
let cssContent = fs.readFileSync('./src/index.css', 'utf8');
cssContent = cssContent.replace(/--gold-accent:\s*#f5c443;/g, "--gold-accent: #c8a84a;");
cssContent = cssContent.replace(/--gold-hover:\s*#fcd764;/g, "--gold-hover: #b8983a;");
fs.writeFileSync('./src/index.css', cssContent);

console.log('Fixed text colors on dark backgrounds and improved gold contrast.');
