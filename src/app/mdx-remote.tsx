'use client';

import { components } from '@/components/blog/PostComponents';
// eslint-disable-next-line import/named
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxProps {
  markdown: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const MDXContent = ({ markdown }: MdxProps) => (
  <MDXRemote {...markdown} components={components} />
);
