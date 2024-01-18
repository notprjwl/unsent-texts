import React, {useState} from "react";
import { Link } from "react-router-dom";


//using props -> Props are arguments passed into React components. (props stands for properties.)
//Props are passed to components via HTML attributes.

const MesgList = ({ messages }) => {
  // const messages = props.messages;
  //   console.log(props, messages)

  const emojis = ["✉️", "😭", "💌", "💝", "🌃", "🥹"];

  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };


  return (
    <div className='flex flex-wrap justify-center h-[80%] gap-8 p-7 w-full xl:w-[60%] mx-auto pt-5'>
      {messages.map((mesg) => (
        <Link key={mesg.id} to={`/messages/${mesg.id}`}>
          <div key={mesg.id} className="message-card bg-[#10100e] p-8 text-[#ffffe3] h-[50vh] w-[40vh] rounded-md shadow-lg text-center cursor-pointer  hover:bg-[#ffffe3] hover:text-[#10100e] border border-[#30302b]">
            <h1 className='text-4xl font-serif font-[500] flex justify-start'>
              To: {mesg.name}
              <span className='cursor-pointer pl-2 text-2xl pt-1'></span>
            </h1>
            <p className='mt-4 text-2xl text-start font-serif whitespace-normal'>{mesg.mesg}</p>

            {/* <button onClick={() => handleDelete(mesg.id)} className="bg-white">delete</button> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MesgList;
