import React, { useState, useEffect } from "react";
import Search from "./Search";
import useSearch from "../hooks/useSearch";

const Create = () => {
  const texts = ["💌 send a text 💌", "dont be shy 👉🏻👈🏻", "say it all 💭🗣️", "by heart ❤️", "let it all out 💬", "might be someone who cares 🤗💖", "sending virtual hugs 🫂", "now send it! 💌", "now!! 😤", "stop thinking duh! 🪱💬", "it's time ⏳"];
  const { isSearch } = useSearch();
  const [isChangingText, setChangingText] = useState(0);
  const [isName, setName] = useState("");
  const [isMessage, setMessage] = useState("");
  // const [isText, setText] = useState("");

  // const upperCase = (event) => {
  //   const inputValue = event.target.value;
  //   const capitalize = inputValue.charAt(0).toUpperCase + inputValue.slice(1);
  //   setText(capitalize)
  // };
  const handleSubmit = (e) => {
    const message = { isName, isMessage };
    console.log(message);
  };

  const handleClick = () => {
    setChangingText((prevIndex) => (prevIndex + 1) % texts.length); //mod cause it stays till the length of the array not exceed
  };

  return (
    <div className='flex text-center justify-center font-serif h-screen '>
      {isSearch && <Search />}
      <div className='relative bg-[#191919b0] p-8 h-[54vh] w-[40vh] mt-[20vh] rounded-md shadow-lg text-center border-gray-600'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-[#bdbdbdd3] font-pt selection:bg-none selection:text-none select-none cursor-pointer hover:text-[#bdbdbd] text-wrap mx-auto inline-block max-w-full' onClick={handleClick}>
            {texts[isChangingText]}
          </h1>
          <input type='text' required value={isName} onChange={(e) => setName(e.target.value)} className=' bg-[#212121] border border-[#bdbdbd75] hover:border-[#bdbdbd] text-[#bdbdbd] mt-6 text-2xl rounded-lg block w-full focus:border-gray-400 ps-3 p-2.5 placeholder-[#bdbdbd75] focus:outline-none' placeholder='To:' />
          <textarea required value={isMessage} onChange={(e) => setMessage(e.target.value)} className='mt-[4vh] w-full h-full bg-[#212121] border border-[#bdbdbd75] hover:border-[#bdbdbd] text-[#bdbdbd] text-2xl rounded-lg focus:border-[#bdbdbd] block ps-3 p-2.5 resize-none placeholder-[#bdbdbd75] focus:outline-none ' cols='30' rows='7' placeholder='Message:'></textarea>
          <button className='px-4 py-1 mt-5 font-mono rounded-md border border-black bg-[#eeeeee] font-black  hover:shadow-[4px_4px_0px_0px_rgba(240,171,252)] transition duration-200 hover:scale-105 text-1xl select-none'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
