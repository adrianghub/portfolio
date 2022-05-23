import { createContext, ReactNode, useState } from "react";

interface SearchContextProps {
  searchValue: string;
  setSearchValue: (evt: any) => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
