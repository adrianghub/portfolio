'use client';

import { NodeDTO } from 'interfaces';
import { useEffect, useState } from 'react';

export const useLoadMore = (posts: NodeDTO[], postsToFetch?: number) => {
  if (!postsToFetch) {
    return { posts };
  }

  const [postsList, setPostsList] = useState([...posts.slice(0, postsToFetch)]);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(posts.length > postsToFetch);

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = postsList.length;
      const isMore = currentLength < posts.length;
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + postsToFetch)
        : [];
      setPostsList([...postsList, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);

  useEffect(() => {
    const isMoreToLoad = postsList.length < posts.length;
    setHasMore(isMoreToLoad);
  }, [postsList]);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  return { posts: postsList, hasMore, loadMore: handleLoadMore };
};
