import { PostDTO } from "interfaces";
import PostDate from "./PostDate";
import PostAuthor from "./PostAuthor";

interface PostDetailProps {
  post: PostDTO;
}

const PostDetail = ({ post }: PostDetailProps) => (
  <>
    <div className="flex items-center mb-8 w-full">
      <div className="flex items-center justify-start mt-2 lg:mb-0 lg:mt-0 w-full mr-8">
        <PostAuthor
          name={post.author.name}
          avatarUrl={post.author.avatar.url}
        />
        <PostDate createdAt={post.createdAt} />
      </div>
    </div>
    <h1 className="mb-8 text-2xl sm:text-3xl font-semibold">{post.title}</h1>
  </>
);

export default PostDetail;
