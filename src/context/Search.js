import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({ keyword: "", results: [] });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

//for custom hook

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
