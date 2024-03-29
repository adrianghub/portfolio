import { PostDto } from '@/types';
import Link from 'next/link';
import { PostAuthor, PostDate } from '.';

interface PostCardProps {
  post: PostDto;
  spotlight?: boolean;
}

export const PostCard = ({ post, spotlight }: PostCardProps) => (
  <Link href={`/blog/post/${post.slug}`}>
    <div
      className={`${
        spotlight ? 'bg-primary mt-8' : ''
      } border border-gray-300 rounded-lg lg:p-8 mb-8 p-4 cursor-pointer post-card-wrapper`}
    >
      <div className="post-card-wrapper-inner">
        <h1
          className="text-1xl md:text-2xl lg:text-3xl font-semibold mb-2
    "
        >
          {post.title}
        </h1>
        <div className="block lg:flex text-center items-center justify-center w-full">
          <div className="flex items-center justify-start mt-8 lg:mb-0 lg:mt-0 w-full mr-8">
            <PostAuthor
              name={post.author.name}
              avatarUrl={post.author.avatar.url}
            />
            <PostDate createdAt={post.createdAt} />
          </div>
          <div className="text-left md:text-right mt-4 md:mt-0">
            {post.categories.map((category, idx) => (
              <p
                key={idx}
                className="inline align-middle text-accent text-sm md:text-lg"
              >
                {category.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Link>
);
