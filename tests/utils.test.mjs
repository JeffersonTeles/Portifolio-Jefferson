import test from 'node:test';
import assert from 'node:assert/strict';
import { cn, formatDate, formatDateISO, tagBadgeColor, estimateReadingTime } from '../src/lib/utils.ts';

test('cn() combina classes e ignora valores nulos/indefinidos', () => {
  assert.equal(cn('btn', 'btn--primary'), 'btn btn--primary');
  assert.equal(cn('base', false, null, undefined, 'active'), 'base active');
  assert.equal(cn(), '');
});

test('estimateReadingTime() calcula palavras e tempo estimado corretamente', () => {
  // Texto vazio não deve contabilizar palavras fantasma
  const empty = estimateReadingTime('');
  assert.equal(empty.words, 0);
  assert.equal(empty.minutes, 1);
  assert.equal(empty.text, '1 min de leitura');

  const spacesOnly = estimateReadingTime('   \n  \t  ');
  assert.equal(spacesOnly.words, 0);

  // 100 palavras -> 1 minuto
  const text100 = new Array(100).fill('palavra').join(' ');
  const res100 = estimateReadingTime(text100);
  assert.equal(res100.words, 100);
  assert.equal(res100.minutes, 1);

  // 450 palavras -> ceil(450 / 200) = 3 minutos
  const text450 = new Array(450).fill('artigo').join(' ');
  const res450 = estimateReadingTime(text450);
  assert.equal(res450.words, 450);
  assert.equal(res450.minutes, 3);
  assert.equal(res450.text, '3 min de leitura');
});

test('formatDate() formata datas com segurança e sem disparar exceção para entradas inválidas', () => {
  const formatted = formatDate('2026-09-18T00:00:00.000Z');
  assert.match(formatted, /2026/);

  // Entrada vazia ou inválida deve ser tratada graciosamente
  assert.equal(formatDate(''), '');
  assert.equal(formatDate('data-invalida'), 'data-invalida');
});

test('formatDateISO() gera strings ISO válidas e trata entradas inválidas', () => {
  const iso = formatDateISO('2026-09-18T12:00:00.000Z');
  assert.equal(iso, '2026-09-18T12:00:00.000Z');

  assert.equal(formatDateISO(''), '');
  assert.equal(formatDateISO('invalida'), '');
});

test('tagBadgeColor() mapeia cores e lida com valores inesperados', () => {
  assert.equal(tagBadgeColor('react'), 'blue');
  assert.equal(tagBadgeColor('React'), 'blue');
  assert.equal(tagBadgeColor('frontend'), 'pink');
  assert.equal(tagBadgeColor('tutorial'), 'gold');
  assert.equal(tagBadgeColor('carreira'), 'green');
  assert.equal(tagBadgeColor('tag-inexistente'), 'blue');
  // @ts-expect-error testando robustez contra tipos incorretos em runtime
  assert.equal(tagBadgeColor(null), 'blue');
  // @ts-expect-error testando robustez contra tipos incorretos em runtime
  assert.equal(tagBadgeColor(undefined), 'blue');
});
