import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/lib/graphql-requests';
import { PostDto } from '@/types';
import { formatDate } from '@/lib/utils';

interface PostWidgetProps {
  categoriesSlugs: string[];
  slug: string;
}

export const PostWidget = async ({
  categoriesSlugs,
  slug
}: Partial<PostWidgetProps>) => {
  let postReferences: PostDto[] = [];

  if (slug && categoriesSlugs) {
    postReferences = await getSimilarPosts(slug, categoriesSlugs);
  }

  if (postReferences && postReferences.length === 0) {
    postReferences = await getRecentPosts();
  }

  return (
    <div className="pt-8 pb-4">
      <h3 className="mb-8 pb-2 prose prose-xl border-b border-gray-300 ">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {postReferences &&
        postReferences.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="flex-grow">
              <p className="prose text-accent">{formatDate(post.createdAt)}</p>
              <Link
                href={`/blog/post/${post.slug}`}
                className="prose animated-link font-semibold"
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
