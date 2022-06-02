import Link from "next/link";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useSearchContext } from "hooks/useSearchContext";

const Header = () => {
  const { searchValue, setSearchValue } = useSearchContext();
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full border-gray-300 py-8 flex flex-col items-center sm:flex-row justify-between">
        <div className="block py-4">
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl lg:text-5xl">
              Software Paradigm | Blog
            </span>
          </Link>
        </div>
        <div
          className={`flex ${showSearchBar ? "w-full md:w-1/2 lg:w-1/3" : ""}`}
        >
          <button onClick={() => setShowSearchBar((prevState) => !prevState)}>
            <BsSearch
              className={`search-icon mt-4 md:mt-0 ${
                showSearchBar ? "mr-4" : "mr-0"
              }`}
            />
          </button>
          {showSearchBar && (
            <div className="w-full relative">
              <input
                className="w-full mt-4 md:mt-0 px-4 py-3 search-input outline-none focus:border-2"
                placeholder="Type search query..."
                value={searchValue}
                onChange={(evt) => setSearchValue(evt.target.value)}
              />
              {searchValue && (
                <button onClick={() => setSearchValue("")}>
                  <AiOutlineClose className="close-icon" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
