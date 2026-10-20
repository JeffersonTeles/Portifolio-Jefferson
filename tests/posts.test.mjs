import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { getAllPosts, getPostBySlug, getAllPostSlugs, getRecentPosts } from '@/lib/posts.server';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

test('getAllPosts() retorna posts publicados ordenados por data decrescente', () => {
  const posts = getAllPosts();
  assert.ok(posts.length >= 3, 'Deve haver pelo menos 3 posts');

  for (let i = 0; i < posts.length - 1; i++) {
    const current = new Date(posts[i].date).getTime();
    const next = new Date(posts[i + 1].date).getTime();
    assert.ok(current >= next, `Post "${posts[i].slug}" (${posts[i].date}) deve vir antes ou junto de "${posts[i + 1].slug}" (${posts[i + 1].date})`);
  }
});

test('Cada post possui frontmatter completo e metadados calculados', () => {
  const posts = getAllPosts();
  for (const post of posts) {
    assert.ok(post.slug && post.slug.length > 0, 'Slug deve existir');
    assert.ok(post.title && post.title.length > 0, `Post "${post.slug}" deve ter título`);
    assert.ok(post.description && post.description.length > 0, `Post "${post.slug}" deve ter descrição`);
    assert.ok(post.date && !Number.isNaN(new Date(post.date).getTime()), `Post "${post.slug}" deve ter data válida`);
    assert.ok(Array.isArray(post.tags) && post.tags.length > 0, `Post "${post.slug}" deve ter tags`);
    assert.ok(post.wordCount > 0, `Post "${post.slug}" deve ter contagem de palavras > 0`);
    assert.ok(post.readingTime && post.readingTime.includes('min de leitura'), `Post "${post.slug}" deve ter readingTime formatado`);

    if (post.cover) {
      const coverPath = path.join(PUBLIC_DIR, post.cover.replace(/^\//, ''));
      assert.ok(fs.existsSync(coverPath), `Capa "${post.cover}" do post "${post.slug}" deve existir em public/`);
    }
  }
});

test('getPostBySlug() carrega post com conteúdo e estrutura de headings', () => {
  const slugs = getAllPostSlugs();
  assert.ok(slugs.length >= 3);

  const sampleSlug = slugs[0];
  const post = getPostBySlug(sampleSlug);
  assert.ok(post, `Post "${sampleSlug}" deve ser encontrado`);
  assert.equal(post.slug, sampleSlug);
  assert.ok(post.content && post.content.length > 0);
  assert.ok(Array.isArray(post.headings) && post.headings.length > 0, 'Post deve possuir títulos no índice');

  for (const heading of post.headings) {
    assert.ok(heading.value.length > 0);
    assert.ok(heading.id.length > 0);
    assert.ok(heading.depth >= 2 && heading.depth <= 4);
  }
});

test('getPostBySlug() rejeita slugs inválidos e tentativas de path traversal', () => {
  assert.equal(getPostBySlug(''), null);
  assert.equal(getPostBySlug('slug_invalido_com_underline'), null);
  assert.equal(getPostBySlug('../../package.json'), null);
  assert.equal(getPostBySlug('../../../etc/passwd'), null);
  assert.equal(getPostBySlug('post-inexistente-12345'), null);
});

test('getRecentPosts() respeita o limite solicitado', () => {
  const recent2 = getRecentPosts(2);
  assert.equal(recent2.length, 2);

  const recent1 = getRecentPosts(1);
  assert.equal(recent1.length, 1);
});
