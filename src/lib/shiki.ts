import type { Options as PrettyCodeOptions } from 'rehype-pretty-code';

export const prettyCodeOptions: PrettyCodeOptions = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'github-light',
  },
  keepBackground: false,
  defaultLang: 'plaintext',
  onVisitLine(node) {
    if (node.children.length === 0) {
      (node.children as unknown[]).push({ type: 'text', value: ' ' });
    }
  },
  onVisitHighlightedLine(node) {
    const props = node.properties ?? (node.properties = {});
    const className = (props.className as string[] | undefined) ?? [];
    className.push('highlighted');
    props.className = className;
  },
};
