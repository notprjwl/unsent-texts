import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import MesgList from "./MesgList";
import useFetch from "../hooks/useFetch";
import useSearch from "../hooks/useSearch";

const Main = () => {
  const { messages, error, isLoading } = useFetch("http://localhost:8000/messages"); //default isloading is true
  const { isSearch } = useSearch(""); //for disabling and enabling search bar //default false
  const [search, setSearch] = useState(""); //search

  const handleSearch = (input) => {
    setSearch(input);
  };

  //SEARCH FUNCTION EXPLAINATION (LIVE FILTERING)
  //1. firstly it checks if the messages is an array.
  //2. if it is true then it goes to the filter function
  //3. here in this function OR operator is used which is if the left side of the OR is true then then entire expression is true. if the left side of OR is false then the entire expression evaluates the value on the right.
  /*4. if !search is false then =>{
      - first it converts the name in the message array to lowercase
      - then it checks if the lowercase version of message.name contains the lowercase version of the search query.
      - true then return the filtered messages
  } */
  //5. if it is not an array it returns null
  const filteredMessages = messages && Array.isArray(messages) ? messages.filter((message) => !search || message.name.toLowerCase().includes(search.toLowerCase())) : [];  

  return (
    <div className='text-center'>
      {!isLoading && !isSearch && <Search onSearch={handleSearch} />}  {/*false && true && true => does not render search component when it is loading*/}
      {error && <div className='inline-block text-[#ffffe3] text-wrap bg-[#10100e] font-mono mt-10 p-5 rounded-md '>{error}</div>}
      {isLoading && (
        <svg aria-hidden='true' className='inline w-8 h-[75vh] mt-5 text-[#10100e] animate-spin fill-[#ffffe3]' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
          <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
        </svg>
      )}
      {messages && <MesgList messages={filteredMessages} />}
    </div>
  );
};

export default Main;
