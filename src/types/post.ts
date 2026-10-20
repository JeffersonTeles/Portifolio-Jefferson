export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  coverAlt?: string;
  author?: string;
  readingTime?: string;
  draft?: boolean;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string;
  wordCount: number;
}

export interface Post extends PostMeta {
  content: string;
  headings: TocHeading[];
}

export interface TocHeading {
  value: string;
  depth: number;
  id: string;
}
