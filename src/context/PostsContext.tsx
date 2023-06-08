'use client';

import { createContext, ReactNode, useEffect } from 'react';

import { getPosts } from '@/lib/graphql-requests';
import { useQuery } from '@tanstack/react-query';
import { NodeDto } from '@/types';
import { useSearchContext } from '@/hooks/useSearchContext';

interface PostsContextProps {
  posts: NodeDto[] | undefined;
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
