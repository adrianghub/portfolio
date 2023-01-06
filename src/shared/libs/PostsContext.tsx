'use client';

import { createContext, ReactNode, useEffect } from 'react';

import { NodeDTO } from 'interfaces';
import { useSearchContext } from 'shared/hooks';
import { getPosts } from 'shared/services';
import { useQuery } from '@tanstack/react-query';

interface PostsContextProps {
  posts: NodeDTO[] | undefined;
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext<PostsContextProps | undefined>(
  undefined
);

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const { searchValue } = useSearchContext();

  const query = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(searchValue)
  });

  useEffect(() => {
    query.refetch();
  }, [searchValue, query]);

  const posts = query.data;

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};
