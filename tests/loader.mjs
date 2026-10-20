import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export function resolve(specifier, context, nextResolve) {
  if (specifier === 'next/server') {
    return nextResolve('next/server.js', context);
  }

  if (specifier.startsWith('@/')) {
    const relative = specifier.slice(2);
    const candidateBase = path.resolve(process.cwd(), 'src', relative);
    for (const ext of ['', '.ts', '.tsx', '.js', '.mjs', '/index.ts', '/index.js']) {
      const candidate = candidateBase + ext;
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        return {
          shortCircuit: true,
          url: pathToFileURL(candidate).href,
        };
      }
    }
  }
  return nextResolve(specifier, context);
}
