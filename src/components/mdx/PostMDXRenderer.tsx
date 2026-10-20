import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { isValidElement } from 'react';
import { mdxComponents } from './MDXComponents';
import { prettyCodeOptions } from '@/lib/shiki';

type PostMDXRendererProps = {
  source: string;
};

export async function PostMDXRenderer({ source }: PostMDXRendererProps) {
  const compiled = await compile(source, {
    outputFormat: 'function-body',
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
  });

  const { default: Content } = await run(compiled, { ...runtime });

  // Entreia os componentes do site como escopo do MDX (equivalente a
  // provider do MDXProvider, sem custo de contexto no cliente).
  const props = {
    components: mdxComponents as Record<string, unknown>,
  };

  const element = (Content as (props: Record<string, unknown>) => unknown)(props);

  if (!isValidElement(element)) {
    throw new Error('Falha ao renderizar o conteúdo do post.');
  }

  return <div className="prose">{element as React.ReactElement}</div>;
}
