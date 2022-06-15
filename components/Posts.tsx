import { PostDTO } from 'interfaces';
import { PostCard } from './PostCard';

interface NodeDTO {
  node: PostDTO;
}
export interface PostsProps {
  posts: NodeDTO[];
}

export const Posts = ({ posts }: PostsProps) => (
  <div className="lg:col-span-8 col-span-1">
    {posts.map(({ node: post }) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);