import { PostsContext } from '@/shared/libs/PostsContext';
import { useContext } from 'react';

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('usePostsContext must be used within a PostsProvider');
  }

  return context;
};
