import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import { CounterDemo } from '../widgets/CounterDemo';

export const mdxComponents: MDXComponentsType = {
  h1: (props) => <h1 className="h1" {...props} />,
  h2: (props) => <h2 className="h2" {...props} />,
  h3: (props) => <h3 className="h3" {...props} />,
  h4: (props) => <h4 className="h4" {...props} />,
  p: (props) => <p style={{ fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-relaxed)' }} {...props} />,
  a: ({ href, children, ...rest }) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link href={href as string} className="link-underline" {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="link-underline"
        {...rest}
      >
        {children}
      </a>
    );
  },
  img: ({ src, alt, ...rest }) => {
    if (!src) return null;
    const isRemote = /^https?:\/\//.test(src);
    if (isRemote) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ''}
          loading="lazy"
          style={{
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            margin: 'var(--space-6) auto',
          }}
          {...rest}
        />
      );
    }
    return (
      <Image
        src={src}
        alt={alt ?? ''}
        width={900}
        height={500}
        sizes="(max-width: 880px) 100vw, 880px"
        style={{
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          margin: 'var(--space-6) auto',
        }}
      />
    );
  },
  CounterDemo,
};
