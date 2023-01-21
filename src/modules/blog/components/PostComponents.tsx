import { HTMLAttributes, ImgHTMLAttributes } from 'react';
import Image from 'next/image';
import { CodeBlock } from './CodeBlock';

export const components = {
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a className="animated-link leading-relaxed" {...props} />
  ),
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Image
      className="rounded-lg mx-auto my-3 max-w-full"
      alt="Custom image"
      {...props}
      width={1000}
      height={1000}
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code className="text-secondary font-semibold not-prose" {...props} />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: any) => <CodeBlock {...props} />
};
