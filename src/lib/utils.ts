export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(input: string | Date, locale = 'pt-BR'): string {
  if (!input) return '';
  const date = typeof input === 'string' ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return String(input);
  return date.toLocaleDateString(locale, {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function formatDateISO(input: string | Date): string {
  if (!input) return '';
  const date = typeof input === 'string' ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString();
}

export function tagBadgeColor(tag: string): string {
  if (!tag || typeof tag !== 'string') return 'blue';
  const map: Record<string, string> = {
    react: 'blue',
    nextjs: 'blue',
    typescript: 'blue',
    javascript: 'gold',
    css: 'pink',
    carreira: 'green',
    dev: 'pink',
    tutorial: 'gold',
    frontend: 'pink',
    'boa-pratica': 'green',
  };
  return map[tag.toLowerCase()] ?? 'blue';
}

export function estimateReadingTime(content: string): { text: string; minutes: number; words: number } {
  const trimmed = (content ?? '').trim();
  if (!trimmed) {
    return { text: '1 min de leitura', minutes: 1, words: 0 };
  }
  const wordsPerMinute = 200;
  const words = trimmed.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return {
    text: `${minutes} min de leitura`,
    minutes,
    words,
  };
}
