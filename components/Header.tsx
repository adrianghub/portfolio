import { useSearchContext } from "hooks/useSearchContext";
import Link from "next/link";

const Header = () => {
  const { searchValue, setSearchValue } = useSearchContext();

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full border-gray-300 py-8 flex flex-col items-center sm:flex-row justify-between">
        <div className="block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl lg:text-4xl">
              Software Developer | Blog
            </span>
          </Link>
        </div>
        <div>
          <input
            className="align-middle w-full mt-4 md:mt-0"
            type="text"
            value={searchValue}
            onChange={(evt) => setSearchValue(evt.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
