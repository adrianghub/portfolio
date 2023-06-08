// eslint-disable-next-line import/named
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface NodeDto {
  node: PostDto;
}

export interface PostDto {
  id: string;
  title: string;
  slug: string;
  author: AuthorDto;
  createdAt: string;
  content: string | MDXRemoteSerializeResult<Record<string, unknown>>;
  rawContent: string;
  categories: PostCategory[];
}

interface AuthorDto {
  name: string;
  avatar: { url: string };
}

export interface PostCategory {
  name: string;
  slug: string;
}

export interface CommentData {
  name: string;
  email: string;
  comment: string;
  slug: string;
  createdAt: string;
}
