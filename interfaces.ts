import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface NodeDTO {
  node: PostDTO;
}

export interface PostDTO {
  id: string;
  title: string;
  slug: string;
  author: AuthorDTO;
  createdAt: string;
  content: string | MDXRemoteSerializeResult<Record<string, unknown>>;
  categories: PostCategory[];
}

interface AuthorDTO {
  name: string;
  avatar: { url: string };
}

export interface PostCategory {
  name: string;
  slug: string;
}

export interface CommentObjData {
  name: string;
  email: string;
  comment: string;
  slug: string;
  createdAt?: string;
}
