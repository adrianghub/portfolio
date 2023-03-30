'use client';

import { Suspense, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { usePostsContext, useSearchContext } from '@/shared/hooks';
import { PostCard } from '@/modules/blog/components';
import { Button, Input, Loader } from '@/shared/components';

const customModalStyles = {
  content: {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none'
  }
};

export const SearchSpotlight = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const { searchValue, setSearchValue } = useSearchContext();
  const { posts } = usePostsContext();
  const router = useRouter();
  const pathname = usePathname();
  const { register, reset } = useForm();

  function openModal() {
    setShowSearchModal(true);
  }

  function closeModal() {
    setShowSearchModal(false);
  }

  const isSearchPath = pathname === '/search';

  const redirectToQueryResults = () => {
    if (searchValue) {
      void router.push(`/search?q=${searchValue}`);
    }
  };

  Modal.setAppElement('#modal-search');

  const renderSpotlightSearch = () => (
    <div
      className="fixed z-50 inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex flex-col items-center mx-auto"
      onClick={closeModal}
    >
      <div className="w-[80vw] lg:w-[50vw] relative">
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
            onClick={(e) => {
              e.stopPropagation();
              reset();
              setSearchValue('');
            }}
          />
        )}
      </div>

      {searchValue && (
        <>
          <div className="w-[80vw] lg:w-[50vw]">
            {posts?.slice(0, 2).map(({ node: post }) => (
              <Suspense key={post.id} fallback={<Loader />}>
                <div onClick={closeModal}>
                  <PostCard post={post} spotlight />
                </div>
              </Suspense>
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
    <div className="flex">
      <button
        disabled={isSearchPath}
        onClick={openModal}
        type="button"
        data-modal-toggle="searchSpotlight"
        className="outline-none"
      >
        <BsSearch className="search-icon" />
      </button>

      <Modal
        style={customModalStyles}
        isOpen={showSearchModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        {renderSpotlightSearch()}
      </Modal>
    </div>
  );
};
