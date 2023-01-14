import { PostDTO } from 'interfaces';
import { PostDate } from './PostDate';
import { PostAuthor } from './PostAuthor';
import Link from 'next/link';

interface PostDetailProps {
  post: PostDTO;
}

export const PostDetail = ({ post }: PostDetailProps) => (
  <>
    <div className="flex items-center mb-8 w-full">
      <div className="flex items-center justify-start w-full mr-8">
        <PostAuthor
          name={post.author.name}
          avatarUrl={post.author.avatar.url}
        />
        <PostDate createdAt={post.createdAt} />
      </div>
      <div className=" flex justify-end">
        {post.categories.map((category) => (
          <>
            <Link
              key={category.name}
              href={`/blog/category/${category.slug}`}
              className="text-gray-700 text-sm md:text-md ml-4 hover:text-gray-500 duration-200"
            >
              #{category.name}
            </Link>
          </>
        ))}
      </div>
    </div>
  </>
);
