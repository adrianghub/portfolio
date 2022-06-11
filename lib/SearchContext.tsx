import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';

interface SearchContextProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState(router.query.q as string || '');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
