import React, { useState, useEffect } from "react";
import Search from "./Search";
import useSearch from "../hooks/useSearch";

const Create = () => {
  const texts = ["💌 send a text 💌", "don't be shy 👉🏻👈🏻", "say it all 💭🗣️", "by heart ❤️", "let it all out 💬", "might be someone who cares 🤗💖", "sending virtual hugs 🫂", "now send it! 💌", "now!! 😤", "stop thinking duh! 🪱💬", "it's time ⏳"];
  const { isSearch } = useSearch();
  const [isChangingText, setChangingText] = useState(0);
  const [isName, setName] = useState("");
  const [isMessage, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false)
  // const [isText, setText] = useState("");

  // const upperCase = (event) => {
  //   const inputValue = event.target.value;
  //   const capitalize = inputValue.charAt(0).toUpperCase + inputValue.slice(1);
  //   setText(capitalize)
  // };

  //transition effect
  useEffect(()=> {
    const timeOut = setTimeout(()=> {
      setIsVisible(true)

    }, 100)
    return () => clearTimeout(timeOut)
  })

  //POST and also trigger function which also exports the date when the message is created
  const handleSubmit = (e) => {
    // e.preventDefault();
    const date = new Date();
    const formattedDate = `${date.getDate().toString().padStart(2, 0)}/${(date.getMonth() + 1).toString().padStart(2, 0)}/${date.getFullYear()}`;
    const message = { name: isName, mesg: isMessage, date: formattedDate };
    fetch("http://localhost:8000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }).then(() => {
      console.log("message added");
    });
  };

  //changing texts function
  const handleClick = () => {
    setChangingText((prevIndex) => (prevIndex + 1) % texts.length); //mod cause it stays till the length of the array not exceed
  };

  return (
    <div className='flex text-center justify-center font-serif h-screen '>
      {isSearch && <Search />}
      <div className={`transition-all duration-500 ease-in-out tranform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} relative bg-[#10100eb0] p-8 h-[54vh] w-[40vh] mt-[20vh] rounded-md shadow-lg text-center border-gray-600`}>
        <form onSubmit={handleSubmit} className="no-underline" autoComplete="off">
          <h1 className='text-text font-pt selection:bg-none selection:text-none select-none cursor-pointer hover:text-[#ffffe3e0] text-wrap mx-auto inline-block max-w-full' onClick={handleClick}>
            {texts[isChangingText]}
          </h1>
          <input type='text' required value={isName} onChange={(e) => setName(e.target.value)} className=' bg-[#10100eb0] border border-shadow hover:border-text text-text mt-6 text-2xl rounded-lg block w-full focus:border-text ps-3 p-2.5 placeholder-shadow focus:outline-none' placeholder='To:' />
          <textarea required value={isMessage} onChange={(e) => setMessage(e.target.value)} className='mt-[4vh] w-full h-full bg-[#10100eb0] border border-shadow hover:border-text text-text text-2xl rounded-lg focus:border-text block ps-3 p-2.5 resize-none placeholder-shadow focus:outline-none ' cols='30' rows='7' placeholder='Message:'></textarea>
          <button className='px-4 py-1 mt-5 font-mono rounded-md border border-black bg-text font-black hover:shadow-[4px_4px_0px_0px_rgba(96,96,85)] transition duration-200 hover:scale-105 text-1xl select-none'>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
