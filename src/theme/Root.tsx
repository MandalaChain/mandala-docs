import Head from "@docusaurus/Head";
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  query: "",
  setQuery: (string) => {},
});

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  return <SearchContext.Provider value={{ query, setQuery }}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  return useContext(SearchContext);
}

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <SearchProvider>
      <Head>
        <meta 
          name="algolia-site-verification" 
          content="E3510178D1E78A70" 
        />
      </Head>
      {children}
    </SearchProvider>
  );
}
