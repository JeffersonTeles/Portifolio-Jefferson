import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

test('tailwind.config.js cobre app e src no content', () => {
  const config = fs.readFileSync(path.join(root, 'tailwind.config.js'), 'utf8');
  assert.match(config, /content/);
  assert.match(config, /app\/\*\*/);
  assert.match(config, /src\/\*\*/);
});

test('app/layout.tsx referencia as novas fontes do design system', () => {
  const layout = fs.readFileSync(path.join(root, 'app/layout.tsx'), 'utf8');
  assert.match(layout, /Space_Grotesk/);
  assert.match(layout, /Geist/);
  assert.match(layout, /JetBrains_Mono/);
});
