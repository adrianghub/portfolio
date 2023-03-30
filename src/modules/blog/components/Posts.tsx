'use client';

import { PostDTO } from '@/interfaces';
import { Button, Loader } from '@/shared/components';
import { useLoadMore } from '@/shared/hooks/useLoadMore';
import { Suspense } from 'react';
import { PostCard } from './PostCard';

interface NodeDTO {
  node: PostDTO;
}
export interface PostsProps {
  posts: NodeDTO[];
  postsToLoad?: number;
}

export const Posts = ({ posts, postsToLoad }: PostsProps) => {
  const {
    posts: loadedPosts,
    loadMore,
    hasMore
  } = useLoadMore(posts, postsToLoad);

  return (
    <div className="lg:col-span-8 col-span-1 mt-0 lg:mt-4">
      {postsToLoad ? (
        <>
          {loadedPosts.map(({ node: post }) => (
            <Suspense key={post.id} fallback={<Loader />}>
              <PostCard post={post} />
            </Suspense>
          ))}
          {hasMore && (
            <div className="mb-8">
              <Button onClick={loadMore}>Load more</Button>
            </div>
          )}
        </>
      ) : (
        posts.map(({ node: post }) => (
          <Suspense key={post.id} fallback={<Loader />}>
            <PostCard key={post.id} post={post} />
          </Suspense>
        ))
      )}
    </div>
  );
};
