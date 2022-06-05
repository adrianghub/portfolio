import { PostDTO } from "interfaces";
import PostCard from "./PostCard";

interface NodeDTO {
  node: PostDTO;
}
export interface PostsProps {
  posts: NodeDTO[];
}

const Posts = ({ posts }: PostsProps) => (
  <div className="lg:col-span-8 col-span-1">
    {posts.map(({ node: post }) => (
      <>
        <PostCard key={post.id} post={post} />
        <PostCard key={post.id} post={post} />
      </>
    ))}
  </div>
);

export default Posts;
