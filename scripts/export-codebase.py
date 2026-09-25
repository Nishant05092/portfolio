from pathlib import Path
p=Path('README.md');s=p.read_text(encoding='utf-8');s=s.replace("When using pnpm 11, allow esbuild's build script if prompted.",'The workspace configuration permits the required esbuild compiler script.');s=s.replace('Shared interfaces live in `src/types/index.ts`.','Interface labels and supporting copy are in `src/data/copy.ts`. Shared interfaces live in `src/types/index.ts`.');s=s.replace('npm install -D vite@','npm install -D prettier@3.5.3 vite@');p.write_text(s,encoding='utf-8')
files=[*Path('src').rglob('*'),*Path('public').rglob('*')]
files += [Path(n) for n in ['package.json','index.html','tsconfig.json','vite.config.ts','tailwind.config.js','postcss.config.js','vercel.json','.env.example','.gitignore','pnpm-workspace.yaml']]
files=sorted(p for p in files if p.is_file() and p.suffix not in ['.png','.pdf','.jpeg','.jpg','.webp','.ico'])
blocks=['# Complete portfolio source\n\nRun `npm install` and `npm run dev`. Production output: `npm run build` to `dist`.\n\nKeep the included binary assets in `public/`.\n']
for p in files:
 lang={'.tsx':'tsx','.ts':'ts','.json':'json','.css':'css','.html':'html','.svg':'xml','.js':'js','.yaml':'yaml'}.get(p.suffix,'text')
 blocks += [f'## {p.resolve().as_posix()}\n\n```{lang}\n{p.read_text(encoding="utf-8").strip()}\n```\n']
blocks += ['## README.md\n\n'+Path('README.md').read_text(encoding='utf-8')]
Path('CODEBASE.md').write_text('\n'.join(blocks),encoding='utf-8')

