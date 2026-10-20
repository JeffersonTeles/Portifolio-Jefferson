import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

const MAX_BODY_BYTES = 16_384;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;
const UPSTREAM_TIMEOUT_MS = 10_000;

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function errorResponse(message: string, status: number) {
  return NextResponse.json(
    { success: false, message },
    { status, headers: { 'Cache-Control': 'no-store' } },
  );
}

function readString(record: Record<string, unknown>, key: string, maxLength: number): string | null {
  const value = record[key];
  if (typeof value !== 'string') return null;

  const normalized = value.trim();
  if (!normalized || normalized.length > maxLength) return null;
  return normalized;
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!isRecord(value)) return null;

  const name = readString(value, 'name', MAX_NAME_LENGTH);
  const email = readString(value, 'email', MAX_EMAIL_LENGTH);
  const message = readString(value, 'message', MAX_MESSAGE_LENGTH);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return { name, email, message };
}

function isTimeoutError(error: unknown): boolean {
  return error instanceof Error && error.name === 'TimeoutError';
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return errorResponse('Conteúdo enviado muito grande.', 413);
  }

  let payload: ContactPayload | null;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return errorResponse('Conteúdo enviado muito grande.', 413);
    }
    payload = parsePayload(JSON.parse(rawBody) as unknown);
  } catch {
    return errorResponse('Envie um formulário válido.', 400);
  }

  if (!payload) {
    return errorResponse('Preencha nome, e-mail e mensagem com dados válidos.', 400);
  }

  const accessKey = process.env.WEB3FORMS_KEY ?? process.env.VITE_WEB3FORMS_KEY;
  if (!accessKey) {
    return errorResponse(
      `Formulário temporariamente indisponível. Escreva direto para ${siteConfig.email}.`,
      500,
    );
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        ...payload,
        from_name: `Portfólio ${siteConfig.shortName}`,
        subject: `Contato via portfólio — ${payload.name}`,
      }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      cache: 'no-store',
    });

    const data: unknown = await response.json().catch(() => null);
    if (response.ok && isRecord(data) && data.success === true) {
      return NextResponse.json(
        { success: true },
        { headers: { 'Cache-Control': 'no-store' } },
      );
    }

    return errorResponse('Não foi possível enviar agora. Tente novamente em instantes.', 502);
  } catch (error) {
    if (isTimeoutError(error)) {
      return errorResponse('O serviço de contato demorou para responder. Tente novamente.', 504);
    }
    return errorResponse('Não foi possível conectar ao serviço de contato. Tente novamente.', 502);
  }
}
