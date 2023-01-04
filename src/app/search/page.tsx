'use client';

import { OneFourthLayout, Sidebar } from 'core/components';
import { Posts, SearchBar } from 'modules/blog/components';
import { SeoWrapper } from 'shared/components';
import { usePostsContext, useSearchContext } from 'shared/hooks';

const seoData = {
  title: 'Search | Adrian Zinko',
  description: 'Search page'
};

const SearchPage = () => {
  const { posts } = usePostsContext();
  const { searchValue } = useSearchContext();

  return (
    <SeoWrapper {...seoData}>
      <div className="container mx-auto px-8 mb-8">
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
          childrenRight={<Sidebar postWidget />}
        />
      </div>
    </SeoWrapper>
  );
};

export default SearchPage;
