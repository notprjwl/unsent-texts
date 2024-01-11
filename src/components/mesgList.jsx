import React from "react";

//using props -> Props are arguments passed into React components. (props stands for properties.)
//Props are passed to components via HTML attributes.

const mesgList = ({ messages }) => {
  // const messages = props.messages;
  //   console.log(props, messages)

  return (
    <div className="flex flex-wrap justify-center h-[80%] gap-8 p-7 w-full xl:w-[60%] mx-auto">
      {messages.map((mesg) => (
        <div key={mesg.id} className="bg-[#2e2e2e] p-8 h-[50vh] w-[40vh] rounded-lg shadow-lg text-center">
          <h1 className="text-white text-3xl font-serif font-[500] selection:bg-fuchsia-300 selection:text-fuchsia-900">To: {mesg.name}</h1>
          <p className="text-gray-300 mt-4 text-2xl text-start font-serif selection:bg-fuchsia-300 selection:text-fuchsia-900">{mesg.mesg}</p>
          {/* <button onClick={() => handleDelete(mesg.id)} className="bg-white">delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default mesgList;
