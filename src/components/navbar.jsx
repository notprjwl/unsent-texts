import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <div className={`transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} bg-background flex justify-between items-center border-box border-b border-outline  `}>

      <NavLink to='/' className='text-2xl font-bold text-text font-pt center p-4 hover:e6e6cc tracking-tighter'>
        Unsent Texts.
      </NavLink>
      {/* <button className="">
        <a href=''>
          <PlusCircleIcon className='text-text h-5' />
        </a>
      </button> */}

      <div className='flex items-center font-mono font-bold text-text '>
        {/* <NavLink to="/" className="text-[#bdbdbd] p-5 hover:text-white ">
          Home
        </NavLink> */}
        <NavLink to='/messages' className='p-5 duration-300 ease-in-out border-x border-b border-outline border-b-transparent hover:border-b hover:border-b-text' activeClassName="active-link">
          Archive
        </NavLink>
        <NavLink to='/create'  className='whitespace-nowrap duration-300 ease-in-out p-5 border-b border-transparent border-outline hover:border-b-text' activeClassName="active-link">
          New Message
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;

//if you want react to handle the routing only in the browser we need to use NavLinks. for the we need to replace anchor tags with NavLinks
