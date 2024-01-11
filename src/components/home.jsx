import React from "react";
import { useState, useEffect } from "react";
import Search from "./search";
import MesgList from "./mesgList";
import useFetch from "../hooks/useFetch";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const { messages, error, isLoading } = useFetch("http://localhost:3001/messages");
  const { isSearch } = useSearch(true);
  return (
    <div className="text-center">
      {!isSearch && <Search />}
      {error && <div className="inline-block text-gray-300 text-wrap bg-[#191919] font-mono mt-10 p-5 rounded-md ">{error}</div>}
      {isLoading && <div className="text-gray-300 font-mono text-center p-5">Loading...</div>}
      {messages && <MesgList messages={messages} />}
    </div>
  );
};

export default Home;
