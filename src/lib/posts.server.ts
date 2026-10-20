import fs from 'node:fs';
import path from 'node:path';
import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';
import type { Post, PostFrontmatter, PostMeta, TocHeading } from '@/types/post';
import { estimateReadingTime } from '@/lib/utils';

const POSTS_DIR = path.resolve(process.cwd(), 'content', 'posts');
const POST_EXTENSIONS = ['.mdx', '.md'] as const;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DEFAULT_AUTHOR = 'Jefferson Teles';

type PostFile = {
  slug: string;
  filePath: string;
};

type ParsedPost = {
  slug: string;
  filePath: string;
  data: Record<string, unknown>;
  content: string;
};

type LoadedPost = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isValidSlug(slug: unknown): slug is string {
  return typeof slug === 'string' && SLUG_PATTERN.test(slug);
}

function isMissingPathError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT';
}

function isWithinDirectory(directory: string, filePath: string): boolean {
  const relativePath = path.relative(directory, filePath);
  return (
    relativePath !== '' &&
    relativePath !== '..' &&
    !relativePath.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relativePath)
  );
}

function isSafePostFile(filePath: string): boolean {
  if (!isWithinDirectory(POSTS_DIR, filePath)) return false;

  try {
    const realDirectory = fs.realpathSync(POSTS_DIR);
    const realFilePath = fs.realpathSync(filePath);
    return isWithinDirectory(realDirectory, realFilePath) && fs.statSync(realFilePath).isFile();
  } catch {
    return false;
  }
}

function getPostFileNames(): string[] {
  try {
    return fs.readdirSync(POSTS_DIR);
  } catch (error) {
    if (isMissingPathError(error)) return [];
    throw error;
  }
}

function getPostFiles(): PostFile[] {
  const files = new Map<string, PostFile>();

  for (const filename of getPostFileNames()) {
    const extension = POST_EXTENSIONS.find((candidate) => filename.endsWith(candidate));
    if (!extension) continue;

    const slug = filename.slice(0, -extension.length);
    if (!isValidSlug(slug)) continue;

    const filePath = path.resolve(POSTS_DIR, filename);
    if (!isSafePostFile(filePath)) continue;

    const existing = files.get(slug);
    if (!existing || extension === '.mdx') {
      files.set(slug, { slug, filePath });
    }
  }

  return [...files.values()];
}

function resolvePostPath(slug: string): string | null {
  if (!isValidSlug(slug)) return null;

  for (const extension of POST_EXTENSIONS) {
    const filePath = path.resolve(POSTS_DIR, `${slug}${extension}`);
    if (isSafePostFile(filePath)) return filePath;
  }

  return null;
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function frontmatterError(source: string, detail: string): Error {
  return new Error(`Frontmatter inválido no post "${source}": ${detail}`);
}

function requireString(data: Record<string, unknown>, field: string, source: string): string {
  const value = data[field];
  if (typeof value !== 'string' || value.trim() === '') {
    throw frontmatterError(source, `o campo "${field}" deve ser uma string não vazia.`);
  }
  return value.trim();
}

function optionalString(
  data: Record<string, unknown>,
  field: string,
  source: string,
): string | undefined {
  const value = data[field];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'string') {
    throw frontmatterError(source, `o campo "${field}" deve ser uma string quando definido.`);
  }

  const normalized = value.trim();
  return normalized || undefined;
}

function normalizeDate(value: unknown, source: string): string {
  let normalized: string;

  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) {
      throw frontmatterError(source, 'o campo "date" contém uma data inválida.');
    }
    const isoDate = value.toISOString();
    normalized = isoDate.endsWith('T00:00:00.000Z') ? isoDate.slice(0, 10) : isoDate;
  } else if (typeof value === 'string' && value.trim()) {
    normalized = value.trim();
  } else {
    throw frontmatterError(source, 'o campo "date" deve ser uma data válida.');
  }

  if (Number.isNaN(Date.parse(normalized))) {
    throw frontmatterError(source, 'o campo "date" deve conter uma data válida.');
  }

  return normalized;
}

function normalizeTags(value: unknown, source: string): string[] {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) {
    throw frontmatterError(source, 'o campo "tags" deve ser uma lista de strings.');
  }

  return value.map((tag, index) => {
    if (typeof tag !== 'string' || tag.trim() === '') {
      throw frontmatterError(source, `o item ${index} de "tags" deve ser uma string não vazia.`);
    }
    return tag.trim();
  });
}

function normalizeFrontmatter(data: unknown, source: string): PostFrontmatter {
  if (!isRecord(data)) {
    throw frontmatterError(source, 'o frontmatter deve ser um objeto.');
  }

  const draft = data.draft;
  if (draft !== undefined && draft !== null && typeof draft !== 'boolean') {
    throw frontmatterError(source, 'o campo "draft" deve ser um booleano quando definido.');
  }

  return {
    title: requireString(data, 'title', source),
    description: requireString(data, 'description', source),
    date: normalizeDate(data.date, source),
    tags: normalizeTags(data.tags, source),
    cover: optionalString(data, 'cover', source),
    coverAlt: optionalString(data, 'coverAlt', source),
    author: optionalString(data, 'author', source),
    readingTime: optionalString(data, 'readingTime', source),
    draft: draft ?? false,
  };
}

function parsePost(raw: string, source: string): { data: unknown; content: string } {
  try {
    const parsed = matter(raw);
    return { data: parsed.data, content: parsed.content };
  } catch (error) {
    throw frontmatterError(source, `não foi possível fazer o parse: ${getErrorMessage(error)}`);
  }
}

function loadPostFile(postFile: PostFile): ParsedPost {
  let raw: string;
  try {
    raw = fs.readFileSync(postFile.filePath, 'utf-8');
  } catch (error) {
    throw new Error(`Não foi possível ler o post "${postFile.slug}": ${getErrorMessage(error)}`);
  }

  const parsed = parsePost(raw, postFile.slug);
  if (!isRecord(parsed.data)) {
    throw frontmatterError(postFile.slug, 'o frontmatter deve ser um objeto.');
  }

  return {
    slug: postFile.slug,
    filePath: postFile.filePath,
    data: parsed.data,
    content: parsed.content,
  };
}

function isDraft(post: ParsedPost): boolean {
  const draft = post.data.draft;
  if (draft !== undefined && draft !== null && typeof draft !== 'boolean') {
    throw frontmatterError(post.slug, 'o campo "draft" deve ser um booleano quando definido.');
  }
  return draft === true;
}

function loadPost(post: ParsedPost): LoadedPost {
  return {
    slug: post.slug,
    frontmatter: normalizeFrontmatter(post.data, post.slug),
    content: post.content,
  };
}

function getParsedPosts(): ParsedPost[] {
  return getPostFiles().map((postFile) => loadPostFile(postFile));
}

function findPost(slug: string): ParsedPost | null {
  if (!isValidSlug(slug)) return null;

  const filePath = resolvePostPath(slug);
  if (!filePath) return null;

  return loadPostFile({ slug, filePath });
}

function toPostMeta(post: LoadedPost): PostMeta {
  const stats = estimateReadingTime(post.content);
  return {
    ...post.frontmatter,
    tags: [...post.frontmatter.tags],
    author: post.frontmatter.author ?? DEFAULT_AUTHOR,
    draft: post.frontmatter.draft ?? false,
    slug: post.slug,
    readingTime: post.frontmatter.readingTime ?? stats.text,
    wordCount: stats.words,
  };
}

function getHeadingText(value: string): string {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeadings(markdown: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const slugger = new GithubSlugger();
  let fence: { marker: string; length: number } | null = null;

  for (const line of markdown.split(/\r?\n/)) {
    const fenceMatch = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);

    if (fence) {
      if (
        fenceMatch &&
        fenceMatch[1][0] === fence.marker &&
        fenceMatch[1].length >= fence.length &&
        fenceMatch[2].trim() === ''
      ) {
        fence = null;
      }
      continue;
    }

    if (fenceMatch) {
      fence = { marker: fenceMatch[1][0], length: fenceMatch[1].length };
      continue;
    }

    const headingMatch = line.match(/^ {0,3}(#{2,4})[ \t]+(.+?)[ \t]*$/);
    if (!headingMatch) continue;

    const value = getHeadingText(headingMatch[2]);
    if (!value) continue;

    headings.push({
      depth: headingMatch[1].length,
      value,
      id: slugger.slug(value),
    });
  }

  return headings;
}

export function getAllPostSlugs(): string[] {
  return getParsedPosts()
    .filter((post) => !isDraft(post))
    .map((post) => post.slug);
}

export function getPostBySlug(slug: string): Post | null {
  const parsedPost = findPost(slug);
  if (!parsedPost || isDraft(parsedPost)) return null;

  const post = loadPost(parsedPost);
  return {
    ...toPostMeta(post),
    content: post.content,
    headings: extractHeadings(post.content),
  };
}

export function getAllPosts({ includeDrafts = false }: { includeDrafts?: boolean } = {}): PostMeta[] {
  return getParsedPosts()
    .filter((post) => includeDrafts || !isDraft(post))
    .map((post) => toPostMeta(loadPost(post)))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentPosts(limit = 3): PostMeta[] {
  return getAllPosts().slice(0, limit);
}
