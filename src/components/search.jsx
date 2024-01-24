import React from "react";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false); //for transition

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeOut);
  });

  const handleSearch = (e) => {
    const input = e.target.value; 
    setSearchQuery(input);
    onSearch(input.trim() !== "" ? input.trim() : null);  //checks if the input has any whitespaces in both ends
  };

  return (
    <div className='flex justify-center items-center mt-4'>
      <div className={` transition-all duration-500 ease-in-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        <input type='text' placeholder='search by name' className='rounded-lg p-2 pr-10 text-background font-mono placeholder-background decoration-0 selection:bg-background selection:text-text caret-background bg-text border border-text focus:outline-none  w-full focus:ring-2 ring-shadow md:w-auto' size={30} value={searchQuery} onChange={handleSearch} />
        <button className='absolute right-0 top-0 font-mono bg-text text-background rounded-lg p-2 text-center justify-center mt-[3px] items-center mr-1 cursor-default'>
          <MagnifyingGlassIcon className='h-5' />
        </button>
      </div>
    </div>
  );
};

export default Search;
