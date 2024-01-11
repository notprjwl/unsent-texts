import React, { useState, useEffect } from "react";
import Search from "./search";
import useSearch from "../hooks/useSearch";

const Create = () => {
  const texts = ["send a text ", "dont be shy 👉🏻👈🏻", "say it all", "by heart <3", "let it all out", "might be someone who cares", "sending virtual hugs 🫂"];
  const { isSearch } = useSearch();
  const [isChangingText, setChangingText] = useState(0);
  // const [isText, setText] = useState("");

  // const upperCase = (event) => {
  //   const inputValue = event.target.value;
  //   const capitalize = inputValue.charAt(0).toUpperCase + inputValue.slice(1);
  //   setText(capitalize)
  // };

  const handleClick = () => {
    setChangingText((prevIndex) => (prevIndex + 1) % texts.length); //mod cause it stays till the length of the array not exceed
  };

  return (
    <div className="flex text-center justify-center font-serif ">
      {isSearch && <Search />}
      <div className="bg-[#191919b0] p-8 h-[50vh] w-[40vh] mt-[20vh] rounded-lg shadow-lg text-center border-gray-600 focus:ring-blue-500 focus:border-blue-500  ">
        <div>
          <h1 className="text-[#bdbdbdd3] font-pt selection:bg-none selection:text-none cursor-pointer hover:text-[#bdbdbd]" onClick={handleClick}>{texts[isChangingText]}</h1>
          <input type="text" class=" bg-[#212121] border border-[#bdbdbd75] text-[#bdbdbd] mt-6 text-2xl rounded-lg block w-full focus:border-gray-400 ps-5 p-2.5 placeholder-[#bdbdbd75] selection:bg-fuchsia-300 selection:text-fuchsia-900 focus:outline-none" placeholder="To: " />
          <textarea name="" className="mt-[4vh] w-full h-full bg-[#212121] border border-[#bdbdbd75] text-[#bdbdbd] text-2xl rounded-lg focus:border-[#bdbdbd] block ps-5 p-2.5 resize-none placeholder-[#bdbdbd75] selection:bg-fuchsia-300 selection:text-fuchsia-900 focus:outline-none" cols="30" rows="7" placeholder="Message:"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Create;
