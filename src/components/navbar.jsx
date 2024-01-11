import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#191919] flex justify-between items-center">
      <h1 className="w-full text-2xl font-bold text-[#bdbdbd] font-pt center p-4 selection:bg-fuchsia-300 selection:text-fuchsia-900">Unsent Texts.</h1>
      <div className="flex items-center font-mono font-bold ">
        <Link to="/" className="text-[#bdbdbd] p-5 hover:text-white ">
          Home
        </Link>
        <Link to="/create" className="text-[#bdbdbd] whitespace-nowrap p-5 hover:text-white ">
          New Message
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

//if you want react to handle the routing only in the browser we need to use links. for the we need to replace anchor tags with links
