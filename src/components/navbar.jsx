import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#191919] flex justify-between items-center">
      <h1 className="w-full text-2xl font-bold text-[#bdbdbd] font-pt center p-4">
        Unsent Texts.
      </h1>
      <div className="flex items-center font-primary font-[500] ">
        <a href="/" className="text-[#bdbdbd] p-5">
          Home
        </a>
        <a href="/create" className="text-[#bdbdbd] whitespace-nowrap p-5 ">
          New Message
        </a>
      </div>
    </div>
  );
};      
export default Navbar;
