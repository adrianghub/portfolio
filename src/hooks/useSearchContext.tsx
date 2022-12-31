import { useContext } from 'react';
import { SearchContext } from 'libs/SearchContext';

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }

  return context;
};
