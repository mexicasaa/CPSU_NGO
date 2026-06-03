const fs = require('fs');
const path = require('path');
const dir = './src';

function replaceInDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace colors
      content = content.replace(/#6cdf32/gi, '#1a3a2a');
      content = content.replace(/#5ec42c/gi, '#26523c');
      
      // Fix Footer text colors
      if (file === 'Footer.jsx') {
        content = content.replace(/color: '#11251a'/g, "color: '#ffffff'");
        content = content.replace(/rgba\(17,37,26,/g, 'rgba(255,255,255,');
      }
      
      // Fix Header text colors
      if (file === 'Header.jsx') {
        content = content.replace(/color: 'rgba\(17, 37, 26, 0.8\)'/g, "color: 'rgba(255,255,255,0.8)'");
        content = content.replace(/e.target.style.color = '#11251a'/g, "e.target.style.color = '#ffffff'");
        content = content.replace(/background: 'rgba\(17, 37, 26, 0.06\)'/g, "background: 'rgba(255,255,255,0.1)'");
        content = content.replace(/border: '1px solid rgba\(17, 37, 26, 0.12\)'/g, "border: '1px solid rgba(255,255,255,0.12)'");
        // mobile menu text
        content = content.replace(/color: '#11251a'/g, "color: '#ffffff'");
        content = content.replace(/rgba\(17,37,26,0.08\)/g, 'rgba(255,255,255,0.08)');
        content = content.replace(/rgba\(17,37,26,0.1\)/g, 'rgba(255,255,255,0.1)');
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInDir(dir);
console.log('Colors replaced!');
