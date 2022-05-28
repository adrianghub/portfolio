export interface NodeDTO {
  node: PostDTO;
}

export interface PostDTO {
  id: string;
  title: string;
  slug: string;
  author: AuthorDTO;
  createdAt: string;
}

interface AuthorDTO {
  name: string;
  avatar: { url: string };
}
