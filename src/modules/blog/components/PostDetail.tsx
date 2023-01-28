import { PostDTO } from 'interfaces';
import { PostDate } from './PostDate';
import { PostAuthor } from './PostAuthor';
import Link from 'next/link';

interface PostDetailProps {
  post: PostDTO;
}

export const PostDetail = ({ post }: PostDetailProps) => (
  <>
    <div className="flex mb-8 w-full flex-col sm:flex-row sm:items-center">
      <div className="flex items-center justify-start w-full mr-4 ">
        <PostAuthor
          name={post.author.name}
          avatarUrl={post.author.avatar.url}
        />
        <PostDate createdAt={post.createdAt} />
      </div>

      <>
        {post.categories.map((category) => (
          <Link
            key={category.name}
            href={`/blog/category/${category.slug}`}
            className="text-gray-700 text-sm md:text-md w-fit h-fit rounded-lg mr-4 md:mr-0 md:ml-4 p-2 bg-slate-300 hover:bg-slate-200 duration-200 break-normal whitespace-nowrap mt-4 sm:mt-0"
          >
            #{category.name}
          </Link>
        ))}
      </>
    </div>
  </>
);
