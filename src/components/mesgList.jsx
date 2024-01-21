import React, {useState, useEffect} from "react";
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(()=> {
      setIsVisible(true);
    }, 100)
    return () => clearTimeout(timeOut)
  });


  return (
    <div className= "flex flex-wrap justify-center h-[80%] gap-8 p-7 w-full xl:w-[60%] mx-auto pt-5">
      {messages.map((mesg) => (
        <Link key={mesg.id} to={`/messages/${mesg.id}`} className= {`transition-all duration-500 ease-in-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} >
          <div key={mesg.id} className= "message-card bg-background p-8 text-text h-[50vh] w-[40vh] rounded-md shadow-lg text-center cursor-pointer  hover:bg-text hover:text-background border border-outline">
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
