import React from "react";
import { useState, useEffect } from "react";


const useSearch = () => {
  const [isSearch, setSearch] = useState();


  useEffect(() => {
    const disableSearch = false;
    setSearch(disableSearch);
  }, []);

  return {isSearch}
};

export default useSearch;
