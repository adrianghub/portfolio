import PostCard from "./PostCard";

interface AuthorDTO {
  name: string;
  avatar: { url: string };
}
export interface PostDTO {
  id: string;
  title: string;
  slug: string;
  author: AuthorDTO;
  createdAt: string;
}
interface NodeDTO {
  node: PostDTO;
}
interface PostsProps {
  posts: NodeDTO[];
}

const Posts = ({ posts }: PostsProps) => (
  <div className="lg:col-span-8 col-span-1">
    {posts && posts.map(({ node: post }) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default Posts;
