import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { siteConfig } from '../src/config/site.ts';
import { profile, experience } from '../src/config/profile.ts';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

test('siteConfig possui URLs, email e caminhos consistentes', () => {
  assert.ok(siteConfig.url.startsWith('https://'), 'URL pública do site deve usar https');
  assert.match(siteConfig.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email do siteConfig deve ter formato válido');

  const resumeFilePath = path.join(PUBLIC_DIR, siteConfig.resumePath.replace(/^\//, ''));
  assert.ok(fs.existsSync(resumeFilePath), `Currículo em "${siteConfig.resumePath}" deve existir em public/`);

  const ogImagePath = path.join(PUBLIC_DIR, siteConfig.ogImage.replace(/^\//, ''));
  assert.ok(fs.existsSync(ogImagePath), `Imagem OG em "${siteConfig.ogImage}" deve existir em public/`);

  assert.ok(siteConfig.navigation.length > 0, 'Navegação deve ter itens');
  for (const item of siteConfig.navigation) {
    assert.ok(item.href.startsWith('/'), `Link de navegação "${item.href}" deve começar com /`);
    assert.ok(item.label.trim().length > 0, `Rótulo de navegação para "${item.href}" não pode ser vazio`);
  }
});

test('profile e experience contêm histórico profissional consistente', () => {
  assert.ok(profile.location.length > 0);
  assert.ok(profile.education.course.length > 0);
  assert.ok(profile.education.institution.length > 0);

  assert.ok(experience.length >= 3, 'Deve haver ao menos 3 registros de experiência');
  for (const exp of experience) {
    assert.ok(exp.company.length > 0);
    assert.ok(exp.role.length > 0);
    assert.ok(exp.period.length > 0);
    assert.ok(exp.summary.length > 0);
    assert.ok(Array.isArray(exp.bullets) && exp.bullets.length > 0);
  }
});
