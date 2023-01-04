'use client';

import { components } from 'modules/blog/components/PostComponents';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxProps {
  markdown: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const MDXContent = ({ markdown }: MdxProps) => (
  <MDXRemote {...markdown} components={components} />
);
