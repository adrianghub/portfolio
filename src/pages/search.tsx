import Head from 'next/head';
import { OneFourthLayout, Posts, PostWidget, Sidebar } from 'components';
import { usePostsContext } from 'hooks/usePostsContext';
import { useSearchContext } from 'hooks/useSearchContext';
import { SearchBar } from 'components/SearchBar';

const SearchPage = () => {
  const { posts } = usePostsContext();
  const { searchValue } = useSearchContext();

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Search | Adrian Zinko | Blog</title>
      </Head>
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
        childrenRight={
          <Sidebar>
            <PostWidget />
          </Sidebar>
        }
      />
    </div>
  );
};

export default SearchPage;
