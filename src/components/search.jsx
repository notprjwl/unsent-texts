import React from "react";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchQuery(input);
    onSearch(input.trim() !== "" ? input.trim() : null);
  };

  return (
    <div className='flex justify-center items-center mt-4'>
      <div className='relative max-w-100'>
        <input type='text' placeholder='search by name' className='rounded-lg p-2 pr-10 text-background font-mono placeholder-background decoration-0 selection:bg-background selection:text-text caret-background bg-text border border-text focus:outline-none  w-full focus:ring-2 ring-shadow md:w-auto' size={30} value={searchQuery} onChange={handleSearch} />
        <button className='absolute right-0 top-0 font-mono bg-text text-background rounded-lg p-2 text-center justify-center mt-[3px] items-center mr-1 cursor-default'>
          <MagnifyingGlassIcon className='h-5' />
        </button>
      </div>
    </div>
  );
};

export default Search;
