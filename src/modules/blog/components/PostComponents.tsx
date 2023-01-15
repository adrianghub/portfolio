import { HTMLAttributes, LiHTMLAttributes, ImgHTMLAttributes } from 'react';
import Image from 'next/image';
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
      className="text-md sm:text-lg text-primary leading-relaxed py-3"
      {...props}
    />
  ),
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a className="animated-link leading-relaxed" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal ml-4" {...props} />
  ),
  li: (props: LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-md sm:text-lg leading-relaxed ml-4 py-3" {...props} />
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
    <code
      className="text-sm sm:text-md text-secondary font-semibold"
      {...props}
    />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: any) => <CodeBlock {...props} />
};
