import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { portfolioProjects, getProjectBySlug, getProjectSlugs } from '../src/config/projects.ts';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

test('portfolioProjects contém dados válidos e campos obrigatórios preenchidos', () => {
  assert.ok(portfolioProjects.length >= 4, 'Deve conter pelo menos 4 projetos');

  const requiredFields = [
    'slug',
    'title',
    'category',
    'description',
    'image',
    'imageAlt',
    'tags',
    'url',
    'kind',
    'role',
    'stack',
    'problem',
    'highlights',
    'codeNote',
  ];

  for (const project of portfolioProjects) {
    for (const field of requiredFields) {
      assert.ok(
        project[field] !== undefined && project[field] !== null && project[field] !== '',
        `Projeto "${project.slug || 'sem-slug'}" deve ter o campo "${field}" preenchido`
      );
    }

    assert.ok(Array.isArray(project.tags) && project.tags.length > 0, `Tags do projeto "${project.slug}" devem ser uma lista não vazia`);
    assert.ok(Array.isArray(project.stack) && project.stack.length > 0, `Stack do projeto "${project.slug}" deve ser uma lista não vazia`);
    assert.ok(Array.isArray(project.highlights) && project.highlights.length > 0, `Highlights do projeto "${project.slug}" devem ser uma lista não vazia`);
    assert.match(project.url, /^https?:\/\//, `URL do projeto "${project.slug}" deve iniciar com http:// ou https://`);
  }
});

test('Todas as imagens de projetos existem na pasta public/', () => {
  for (const project of portfolioProjects) {
    const relativeImagePath = project.image.startsWith('/') ? project.image.slice(1) : project.image;
    const absoluteImagePath = path.join(PUBLIC_DIR, relativeImagePath);
    assert.ok(
      fs.existsSync(absoluteImagePath),
      `Imagem "${project.image}" do projeto "${project.slug}" não foi encontrada em public/`
    );
  }
});

test('getProjectSlugs() e getProjectBySlug() funcionam e garantem unicidade de slugs', () => {
  const slugs = getProjectSlugs();
  const uniqueSlugs = new Set(slugs);
  assert.equal(slugs.length, uniqueSlugs.size, 'Não deve haver slugs duplicados');

  for (const slug of slugs) {
    const project = getProjectBySlug(slug);
    assert.ok(project, `getProjectBySlug("${slug}") deve encontrar o projeto`);
    assert.equal(project?.slug, slug);
  }

  assert.equal(getProjectBySlug('projeto-inexistente'), null);
});
