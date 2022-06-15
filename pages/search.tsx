import Head from 'next/head';
import { Posts } from 'components';
import { Sidebar } from 'components';
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
          <>
            Results for query : <b>{searchValue}</b>
          </>
        ) : (
          'All Posts'
        )}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts && <Posts posts={posts} />}
        <div className="col-span-1 lg:col-span-4 relative lg:sticky top-2 h-screen">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
