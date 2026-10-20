export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(input: string | Date, locale = 'pt-BR'): string {
  const date = typeof input === 'string' ? new Date(input) : input;
  return date.toLocaleDateString(locale, {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function formatDateISO(input: string | Date): string {
  const date = typeof input === 'string' ? new Date(input) : input;
  return date.toISOString();
}

export function tagBadgeColor(tag: string): string {
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
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return {
    text: `${minutes} min de leitura`,
    minutes,
    words,
  };
}
