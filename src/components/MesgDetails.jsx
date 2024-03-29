import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MesgDetails = () => {
  const { id } = useParams();

  const { messages: mesg, error, isLoading } = useFetch("http://localhost:8000/messages/" + id);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeOut);
  });

  return (
    <div>
      {isLoading && (
        <div className='text-center'>
          <svg aria-hidden='true' className='inline w-8 h-[75vh] mt-5 text-background animate-spin fill-text' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
            <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
          </svg>
        </div>
      )}
      {error && <div className='text-center text-text text-wrap bg-background font-mono mt-10 p-5 rounded-md'>{error}</div>}
      {mesg && (
        <div className='flex justify-center text-center'>
          <div key={mesg.id} className={`transition-all duration-500 ease-in-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} bg-background p-8 h-[50vh] w-[40vh] mt-[10vh] rounded-sm shadow-lg text-center border border-outline`}>
            <h1 className='text-text text-4xl font-serif font-[500] flex justify-start'>
              To: {mesg.name} <span className='cursor-pointer pl-2'></span>
              {/* <span>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 text-[#fd4c90] ml-[120px] mt-1'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75' />
                </svg>
              </span> */}
            </h1>
            <p className='text-text mt-4 text-2xl text-start font-serif whitespace-normal'>{mesg.mesg}</p>
          </div>
        </div>
      )}
      {mesg && (
        <div className='text-text p-8 mx-auto max-w-[26.5rem]'>
          <h1 className='font-mono font-bold '>
            {mesg.name}
          </h1>
          <h1 className='font-mono font-bold'> Posted on {mesg.date}</h1>
        </div>
      )}
    </div>
  );
};

export default MesgDetails;
