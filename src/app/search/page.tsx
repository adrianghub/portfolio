'use client';

import { OneFourthLayout, Sidebar } from '@/components';
import { SearchBar } from '@/components/blog';
import { Posts } from '@/components/blog/Posts';
import { usePostsContext } from '@/hooks/usePostsContext';
import { useSearchContext } from '@/hooks/useSearchContext';

const SearchPage = () => {
  const { posts } = usePostsContext();
  const { searchValue } = useSearchContext();

  return (
    <div className="container mx-auto mb-8">
      <SearchBar />
      <h2 className="text-2xl md:text-3xl mb-8">
        {searchValue ? (
          <span>
            Results for query : <b>{searchValue}</b>
          </span>
        ) : (
          'All Posts'
        )}
      </h2>
      <OneFourthLayout
        childrenLeft={posts && <Posts posts={posts} />}
        childrenRight={<Sidebar aboutWidget />}
      />
    </div>
  );
};

export default SearchPage;
