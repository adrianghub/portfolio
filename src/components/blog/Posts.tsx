'use client';

import { useLoadMore } from '@/hooks/useLoadMore';
import { PostDto } from '@/types';
import { Button } from '../ui';
import { PostCard } from './PostCard';

interface PostsProps {
  posts: {
    node: PostDto;
  }[];
  postsToLoad?: number;
}

export const Posts = ({ posts, postsToLoad }: PostsProps) => {
  const {
    posts: loadedPosts,
    loadMore,
    hasMore
  } = useLoadMore(posts, postsToLoad);

  return (
    <div className="lg:col-span-8 col-span-1 mt-0">
      {postsToLoad ? (
        <>
          {loadedPosts.map(({ node: post }) => (
            <PostCard key={post.id} post={post} />
          ))}
          {hasMore && (
            <div className="mb-8">
              <Button onClick={loadMore}>Load more</Button>
            </div>
          )}
        </>
      ) : (
        posts.map(({ node: post }) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};
