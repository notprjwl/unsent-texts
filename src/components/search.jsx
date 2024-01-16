import React from "react";
import { useState } from "react";

const Search = () => {
  return (
    <div className="text-center">
      <input type="text" placeholder="search by name" className="rounded-md p-2 mt-4 bg-[#bdbdbd] text-[#191919] font-mono placeholder-[#191919d5] decoration-0 selection:bg-[#191919] selection:text-[#bdbdbd]" size={30} />
      {/* <button type='submit' className='text-[#bdbdbd] rounded-md'>search</button> */}
    </div>
  );
};

export default Search;
