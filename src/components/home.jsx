import React from "react";
import { useState, useEffect } from "react";
import MesgList from "./mesgList";

const Home = () => {
  // const [name, setName] = useState('prjwl')
  // const handleClick = () => {
  //   setName('rams')
  // }

  // return (
  //   <div className="items-center justify-center">
  //     <p className="text-white">{name}</p>
  //     <button onClick={handleClick} className="text-white">click me</button>
  //   </div>
  // );
  const [name, setName] = useState("prjwl");

  const [messages, setMesg] = useState(null);

  const handleDelete = (id) => {
    const newMesg = messages.filter((mesg) => mesg.id !== id);
    setMesg(newMesg);
  };

  //runs when this components renders for the first time, if the dependency array is specified it runs based on that
  // useEffect(() => {
  //   console.log("useEffect ran");
  // }, [name]);

  //fetching data using promise
  // useEffect(() => {
  //   fetch("http://localhost:3001/messages")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  //fetching data using async and await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:3001/messages");
        const respData = await resp.json();
        // console.log(respData);
        setMesg(respData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {messages && <MesgList messages={messages} handleDelete={handleDelete} />}
      {/* <MesgList messages = {messages.filter((mesg) => mesg.name === 'nina')} title = "ninas" /> */}
      {/* <p className="text-white">{name}</p> */}
      {/* <button onClick={() => setName("rams")} className="text-white">change name</button> */}
    </div>
  );
};

export default Home;
