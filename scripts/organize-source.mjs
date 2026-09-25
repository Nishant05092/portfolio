import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
const copy={};
function visitFiles(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?visitFiles(path.join(dir,e.name)):[path.join(dir,e.name)]);}
for(const file of [...visitFiles('src/components'),'src/App.tsx'].filter(f=>f.endsWith('.tsx'))){
 let source=fs.readFileSync(file,'utf8');
 if(file.endsWith('CoreSections.tsx')) source=source.replace('>PHILIPS</span>','>{e.company.toUpperCase()}</span>');
 const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);const edits=[];
 function addCopy(value){const existing=Object.entries(copy).find(([,v])=>v===value);if(existing)return existing[0];let key=value.trim().split(/[^a-zA-Z0-9]+/).filter(Boolean).slice(0,7).map((s,i)=>i?s.charAt(0).toUpperCase()+s.slice(1).toLowerCase():s.toLowerCase()).join('');if(!key||/^\d/.test(key))key='label'+key;let candidate=key;let i=2;while(copy[candidate])candidate=key+i++;copy[candidate]=value;return candidate;}
 function walk(n){if(ts.isJsxText(n)&&/[A-Za-z]/.test(n.text)){const key=addCopy(n.text);edits.push([n.pos,n.end,`{copy.${key}}`]);}
 if(ts.isJsxAttribute(n)&&['description','placeholder','alt','aria-label'].includes(n.name.getText(ast))&&n.initializer&&ts.isStringLiteral(n.initializer)&&/[A-Za-z]/.test(n.initializer.text)){const key=addCopy(n.initializer.text);edits.push([n.initializer.getStart(ast),n.initializer.end,`{copy.${key}}`]);}ts.forEachChild(n,walk)}walk(ast);
 for(const [start,end,text] of edits.sort((a,b)=>b[0]-a[0]))source=source.slice(0,start)+text+source.slice(end);
 if(edits.length){const importPath=file==='src/App.tsx'?'./data/copy':'../../data/copy';source=`import {copy} from '${importPath}';\n`+source;}fs.writeFileSync(file,source);
}
fs.writeFileSync('src/data/copy.ts','// Editable interface labels and supporting copy. Profile and project content live in portfolio.ts.\nexport const copy = '+JSON.stringify(copy,null,2)+';\n');
const printer=ts.createPrinter({newLine:ts.NewLineKind.LineFeed});
for(const file of visitFiles('src').filter(f=>/\.tsx?$/.test(f)&&!f.endsWith('.d.ts'))){const source=fs.readFileSync(file,'utf8');const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,file.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);fs.writeFileSync(file,printer.printFile(ast));}
