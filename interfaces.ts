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
  categories: PostCategories[];
}

interface AuthorDTO {
  name: string;
  avatar: { url: string };
}

interface PostCategories {
  name: string;
  slug: string;
}
