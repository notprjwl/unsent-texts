import React from "react";
import { useState, useEffect } from "react";
import MesgList from "./mesgList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { messages, error, isLoading } = useFetch("http://localhost:3001/messages");
  return (
    <div className="text-center">
      {error && <div className="inline-block text-gray-300 text-wrap bg-[#191919] font-mono mt-10 p-5 rounded-md ">{error}</div>}
      {isLoading && <div className="text-gray-300 font-mono text-center p-5">Loading...</div>}
      {messages && <MesgList messages={messages} />}
    </div>
  );
};

export default Home;
