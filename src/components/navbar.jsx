import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <div className={`transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} bg-background flex justify-between items-center border-box border-b border-outline`}>
      <Link to='/' className='text-2xl font-bold text-text font-pt center p-4 hover:e6e6cc tracking-tighter'>
        Unsent Texts.
      </Link>
      {/* <button className="">
        <a href=''>
          <PlusCircleIcon className='text-text h-5' />
        </a>
      </button> */}

      <div className='flex items-center font-mono font-bold text-text '>
        {/* <Link to="/" className="text-[#bdbdbd] p-5 hover:text-white ">
          Home
        </Link> */}
        <Link to='/messages' className='p-5 border-x border-outline hover:bg-text hover:text-background '>
          Archive
        </Link>
        <Link to='/create' className='whitespace-nowrap p-5 hover:bg-text hover:text-background'>
          New Message
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

//if you want react to handle the routing only in the browser we need to use links. for the we need to replace anchor tags with links
