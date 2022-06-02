import Link from "next/link";
import { PostDTO } from "interfaces";
import { PostAuthor, PostDate } from "components";

interface PostCardProps {
  post: PostDTO;
}

const PostCard = ({ post }: PostCardProps) => (
  <Link href={`/post/${post.slug}`}>
    <div className="shadow-lg rounded-lg lg:p-8 mb-8 p-4 cursor-pointer post-card-wrapper">
      <div className="post-card-wrapper-inner">
        <h1
          className="text-1xl md:text-2xl lg:text-3xl font-semibold mb-2
    "
        >
          {post.title}
        </h1>
        <div className="block lg:flex text-center items-center justify-center w-full">
          <div className="flex items-center justify-start mt-2 lg:mb-0 lg:mt-0 w-full mr-8">
            <PostAuthor
              name={post.author.name}
              avatarUrl={post.author.avatar.url}
            />
            <PostDate createdAt={post.createdAt} />
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default PostCard;
