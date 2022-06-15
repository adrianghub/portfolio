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

  const handleCloseSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id) setShowSearchBar(false);
  };

  const handleSearchIconClick = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();

        setShowSearchBar(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

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

  const renderSpotlightSearch = () => (
    <div
      id="spotlight"
      onClick={handleCloseSpotlight}
      className="fixed z-50 inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center"
    >
      <div className="relative">
        <Input
          name="search"
          additionalClasses="mt-10 px-4 py-3 search-input"
          placeholder="Type search query..."
          value={searchValue}
          onChangeInput={(evt) => setSearchValue(evt.target.value)}
          spotlight
        />
        {searchValue && (
          <>
            <button onClick={() => setSearchValue('')}>
              <AiOutlineClose className="close-icon close-icon--spotlight" />
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
    </div>
  );

  const renderFullSearch = () => (
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
  );

  return (
    <div className={`flex ${isSearchPath ? 'w-full mb-8' : ''}`}>
      <button
        disabled={isSearchPath}
        onClick={handleSearchIconClick}
        type="button"
        data-modal-toggle="searchSpotlight"
        className="outline-none"
      >
        <BsSearch className="search-icon mt-4 md:mt-0 mr-4" />
      </button>
      {showSearchBar && !isSearchPath
        ? renderSpotlightSearch()
        : showSearchBar
        ? renderFullSearch()
        : null}
    </div>
  );
};
