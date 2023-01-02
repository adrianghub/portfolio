import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { usePostsContext, useSearchContext } from 'shared/hooks';
import { PostCard } from 'modules/blog/components';
import { Button, Input } from './';

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
      className="fixed z-50 inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center mx-auto"
    >
      <div className="relative container px-10 mb-8">
        <Input
          name="search"
          classes="mt-10 px-4 py-3 search-input"
          placeholder="Type search query..."
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
        />
        {searchValue && (
          <>
            <button onClick={() => setSearchValue('')}>
              <AiOutlineClose className="close-icon close-icon--spotlight" />
            </button>
            {!isSearchPath && (
              <>
                <div>
                  {posts?.slice(0, 2).map(({ node: post }) => (
                    <div onClick={() => setShowSearchBar(false)}>
                      <PostCard key={post.id} post={post} spotlight />
                    </div>
                  ))}
                </div>
                {posts && posts.length !== 0 ? (
                  <Button
                    onClick={redirectToQueryResults}
                    additionalClasses="flex mx-auto"
                  >
                    Show all results ({posts.length})
                  </Button>
                ) : (
                  <Button disabled additionalClasses="flex mt-4 mx-auto">
                    No results found
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
        classes="mt-4 md:mt-0 px-4 py-3 search-input"
        placeholder="Type search query..."
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
      />
      {searchValue && (
        <button onClick={() => setSearchValue('')}>
          <AiOutlineClose className="close-icon" />
        </button>
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
