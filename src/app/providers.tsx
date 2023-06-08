'use client';

import { PostsProvider } from '@/context/PostsContext';
import { SearchProvider } from '@/context/SearchContext';
import QueryProvider from './query-client-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    <SearchProvider>
      <PostsProvider>{children}</PostsProvider>
    </SearchProvider>
  </QueryProvider>
);
