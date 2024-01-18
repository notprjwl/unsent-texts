import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-[#10100e] flex justify-between items-center border-box border-b border-[#30302b]'>
      <Link to='/' className='text-2xl font-bold text-[#ffffe3] font-pt center p-4 hover:e6e6cc tracking-tighter'>
        Unsent Texts.
      </Link>
      <div className='flex items-center font-mono font-bold text-[#ffffe3] '>
        {/* <Link to="/" className="text-[#bdbdbd] p-5 hover:text-white ">
          Home
        </Link> */}
        <Link to='/messages' className='p-5 border-x border-[#30302b] hover:bg-[#ffffe3] hover:text-[#10100e] '>
          Archive
        </Link>
        <Link to='/create' className='whitespace-nowrap p-5 hover:bg-[#ffffe3] hover:text-[#10100e]'>
          New Message
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

//if you want react to handle the routing only in the browser we need to use links. for the we need to replace anchor tags with links
