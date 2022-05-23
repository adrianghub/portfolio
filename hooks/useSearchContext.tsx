import { useContext } from "react";
import { SearchContext } from "../lib/SearchContext";

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};
