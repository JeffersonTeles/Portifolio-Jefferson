import test from 'node:test';
import assert from 'node:assert/strict';
import { POST } from '../app/api/contact/route.ts';

test('POST /api/contact rejeita payload excessivo (> 16KB) com 413', async () => {
  const hugeString = 'a'.repeat(20_000);
  const request = new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Teste', email: 'teste@example.com', message: hugeString }),
  });

  const response = await POST(request);
  assert.equal(response.status, 413);
  const json = await response.json();
  assert.equal(json.success, false);
});

test('POST /api/contact rejeita JSON malformado com 400', async () => {
  const request = new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{ nome: invalido, sem aspas',
  });

  const response = await POST(request);
  assert.equal(response.status, 400);
  const json = await response.json();
  assert.equal(json.success, false);
});

test('POST /api/contact rejeita payload com dados incompletos ou email inválido com 400', async () => {
  // Email inválido
  const reqEmailInvalido = new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Jefferson', email: 'email-invalido', message: 'Mensagem válida de teste' }),
  });
  const resEmail = await POST(reqEmailInvalido);
  assert.equal(resEmail.status, 400);

  // Nome vazio
  const reqNomeVazio = new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '   ', email: 'teste@exemplo.com', message: 'Mensagem válida de teste' }),
  });
  const resNome = await POST(reqNomeVazio);
  assert.equal(resNome.status, 400);

  // Mensagem vazia
  const reqMsgVazia = new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Jefferson', email: 'teste@exemplo.com', message: '   ' }),
  });
  const resMsg = await POST(reqMsgVazia);
  assert.equal(resMsg.status, 400);
});

test('POST /api/contact sem chave WEB3FORMS_KEY configurada responde com 500 amigável', async () => {
  const originalKey = process.env.WEB3FORMS_KEY;
  const originalViteKey = process.env.VITE_WEB3FORMS_KEY;
  delete process.env.WEB3FORMS_KEY;
  delete process.env.VITE_WEB3FORMS_KEY;

  try {
    const request = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Contato Teste',
        email: 'valido@exemplo.com',
        message: 'Esta é uma mensagem de teste para verificar comportamento sem chave.',
      }),
    });

    const response = await POST(request);
    assert.equal(response.status, 500);
    const json = await response.json();
    assert.equal(json.success, false);
    assert.match(json.message, /temporariamente indisponível/);
  } finally {
    if (originalKey) process.env.WEB3FORMS_KEY = originalKey;
    if (originalViteKey) process.env.VITE_WEB3FORMS_KEY = originalViteKey;
  }
});
