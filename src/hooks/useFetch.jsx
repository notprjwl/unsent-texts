import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [messages, setMesg] = useState(null);
  const [error, setError] = useState(null);
  
  //if you are fetching the data in real time then add loading state when it is getting the data
  const [isLoading, setLoading] = useState(true);

  //fetching data using async and await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw Error("error : cannot fetch the data");
        }
        const respData = await resp.json();
        setTimeout(() => {
          setMesg(respData);
          setLoading(false);
          setError(null);
        }, 1000);
      } catch (error) {
        setLoading(false);
        setMesg(null);
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);

  return { messages, error, isLoading };
};

export default useFetch;
