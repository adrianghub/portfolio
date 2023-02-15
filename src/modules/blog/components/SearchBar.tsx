'use client';

import { useSearchContext } from '@/shared/hooks';
import { Input } from '@/shared/components';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

export const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const { register, reset } = useForm();

  const renderFullSearch = () => (
    <div className="relative w-full">
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

  return <div className="flex w-full mb-8">{renderFullSearch()}</div>;
};
