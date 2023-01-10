'use client';

import { NodeDTO } from 'interfaces';
import { useEffect, useState } from 'react';

export const useLoadMore = (posts: NodeDTO[], postsToLoad = posts.length) => {
  const [postsList, setPostsList] = useState([...posts.slice(0, postsToLoad)]);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(posts.length > postsToLoad);

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = postsList.length;
      const isMore = currentLength < posts.length;
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + postsToLoad)
        : [];
      setPostsList([...postsList, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore, postsList, posts, postsToLoad]);

  useEffect(() => {
    const isMoreToLoad = postsList.length < posts.length;
    setHasMore(isMoreToLoad);
  }, [posts.length, postsList]);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  return { posts: postsList, hasMore, loadMore: handleLoadMore };
};
