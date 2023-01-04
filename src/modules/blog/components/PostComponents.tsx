import { HTMLAttributes, LiHTMLAttributes, ImgHTMLAttributes } from 'react';
import { CodeBlock } from './CodeBlock';

export const components = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl pt-12 pb-6" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl pt-6" {...props} />
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl pt-6" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-md sm:text-lg text-gray-900 leading-relaxed py-3"
      {...props}
    />
  ),
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a className="animated-link leading-relaxed" {...props} />
  ),
  li: (props: LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-md sm:text-lg leading-relaxed ml-4 py-3" {...props} />
  ),
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-lg mx-auto my-3" {...props} />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: any) => <CodeBlock {...props} />
};
