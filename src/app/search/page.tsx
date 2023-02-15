'use client';

import { OneFourthLayout, Sidebar } from '@/core/components';
import { Posts, SearchBar } from '@/modules/blog/components';
import { usePostsContext, useSearchContext } from '@/shared/hooks';

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
