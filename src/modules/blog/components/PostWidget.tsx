import { PostDTO } from 'interfaces';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from 'shared/services';

interface PostWidgetProps {
  categoriesSlugs: string[];
  slug: string;
}

// TODO: Add meaningful type - to be resolved after https://github.com/microsoft/TypeScript/pull/51328
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PostWidget: any = async ({
  categoriesSlugs,
  slug
}: Partial<PostWidgetProps>) => {
  let postReferences: PostDTO[] = [];

  if (slug && categoriesSlugs) {
    postReferences = await getSimilarPosts(slug, categoriesSlugs);
  }

  if (postReferences && postReferences.length === 0) {
    postReferences = await getRecentPosts();
  }

  return (
    <div className="pt-8 pb-4">
      <h3 className="text-xl mb-8 font-semibold border-b border-gray-300 pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {postReferences &&
        postReferences.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="flex-grow">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format('MMMM DD, YYYY')}
              </p>
              <Link
                href={`/blog/post/${post.slug}`}
                className="text-md animated-link"
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
