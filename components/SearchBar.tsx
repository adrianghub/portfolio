import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { usePostsContext } from 'hooks/usePostsContext';
import { useSearchContext } from 'hooks/useSearchContext';
import { Input } from './Input';
import { Button } from './Button';

export const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { searchValue, setSearchValue } = useSearchContext();
  const { posts } = usePostsContext();
  const router = useRouter();

  const redirectToQueryResults = () => {
    if (searchValue) {
      void router.push(`/search?q=${searchValue}`);
    }
  };

  useEffect(() => {
    if (router.pathname === '/') {
      setSearchValue('');
      setShowSearchBar(false);
    }

    if (router.pathname === '/search') {
      setShowSearchBar(true);
    }
  }, [router.pathname]);

  const isSearchPath = router.pathname === '/search';

  return (
    <div
      className={`flex ${
        isSearchPath && showSearchBar
          ? 'w-full'
          : showSearchBar
          ? 'w-full md:w-1/2 lg:w-1/3'
          : ''
      } ${isSearchPath ? 'mb-8' : ''}`}
    >
      <button
        disabled={isSearchPath}
        onClick={() => setShowSearchBar((prevState) => !prevState)}
      >
        <BsSearch
          className={`search-icon mt-4 md:mt-0 ${
            showSearchBar ? 'mr-4' : 'mr-0'
          }`}
        />
      </button>
      {showSearchBar && (
        <div className={`w-full relative`}>
          <Input
            name="search"
            additionalClasses="mt-4 md:mt-0 px-4 py-3 search-input"
            placeholder="Type search query..."
            value={searchValue}
            onChangeInput={(evt) => setSearchValue(evt.target.value)}
          />
          {searchValue && (
            <>
              <button onClick={() => setSearchValue('')}>
                <AiOutlineClose className="close-icon" />
              </button>
              {!isSearchPath && (
                <>
                  {posts?.slice(0, 2).map((post) => (
                    <li key={post.node.id}>{post.node.id}</li>
                  ))}
                  {posts && posts.length !== 0 && (
                    <Button onClick={redirectToQueryResults}>
                      Show all results
                    </Button>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};