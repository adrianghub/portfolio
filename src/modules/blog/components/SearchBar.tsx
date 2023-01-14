'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { usePostsContext, useSearchContext } from 'shared/hooks';
import { PostCard } from 'modules/blog/components';
import { Button, Input } from '../../../shared/components';
import { useForm } from 'react-hook-form';

export const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { searchValue, setSearchValue } = useSearchContext();
  const { posts } = usePostsContext();
  const router = useRouter();
  const pathname = usePathname();
  const { register, reset } = useForm();

  const isSearchPath = pathname === '/search';

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
    if (pathname === '/') {
      setSearchValue('');
      setShowSearchBar(false);
    }

    if (isSearchPath) {
      setShowSearchBar(true);
    }
  }, [isSearchPath, pathname, setSearchValue]);

  const renderFullSearch = () => (
    <div className={`${!isSearchPath ? 'lg:w-[50vw]' : ''} relative w-full`}>
      <Input
        register={register}
        classes="mt-10 px-4 py-3 search-input"
        name="search"
        value={searchValue}
        placeholder="Type search query..."
        onChange={(evt) => setSearchValue(evt.target.value)}
        autoFocus
      />
      {searchValue && (
        <AiOutlineClose
          className="close-icon"
          onClick={() => {
            reset();
            setSearchValue('');
          }}
        />
      )}
    </div>
  );

  const renderSpotlightSearch = () => (
    <div
      id="spotlight"
      onClick={handleCloseSpotlight}
      className={`${
        !isSearchPath ? 'px-8 lg:px-0' : ''
      } fixed z-50 inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center mx-auto`}
    >
      {renderFullSearch()}

      {!isSearchPath && searchValue && (
        <>
          <div className="w-full lg:w-[50vw] mx-8">
            {posts?.slice(0, 2).map(({ node: post }) => (
              <div key={post.id} onClick={() => setShowSearchBar(false)}>
                <PostCard post={post} spotlight />
              </div>
            ))}
          </div>
          {posts && posts.length !== 0 ? (
            <Button onClick={redirectToQueryResults} classes="flex mx-auto">
              Show all results ({posts.length})
            </Button>
          ) : (
            <Button disabled classes="flex mt-4 mx-auto">
              No results found
            </Button>
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
        <BsSearch
          className={`${isSearchPath ? 'full-search mr-4' : ''} search-icon`}
        />
      </button>
      {showSearchBar && !isSearchPath
        ? renderSpotlightSearch()
        : showSearchBar
        ? renderFullSearch()
        : null}
    </div>
  );
};
