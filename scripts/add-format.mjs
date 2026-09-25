import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('package.json','utf8'));p.devDependencies.prettier='3.5.3';p.scripts.format='prettier --write src index.html *.json *.js *.ts README.md';fs.writeFileSync('package.json',JSON.stringify(p,null,2)+'\n');
