import React, {useState, useEffect} from "react";


const Home = () => {

  const[isVisible, setIsVisible] = useState(false)

  useEffect(()=> {
    const timeOut = setTimeout(()=> {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timeOut)
})

  return (
    <div className={`transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
    <main className="container mx-auto mt-[30vh]">
      <h1 className="text-text font-playfair font-black italic text-8xl tracking-tighter text-center">
        Unsent Texts.
      </h1>
      <h1 className="text-text mt-5 mx-auto whitespace-pre-wrap">Unsent texts shares the stories of messages written but never sent. This is an intimate project that explores the unspoken words, unshared feelings, and missed connections that reside within these unsent messages. Each unsent text holds a story, a secret, or a sentiment that lingers in the silence of the unsaid ensuring the privacy of every untold tale.</h1>
    </main>
    </div>
  );
};

export default Home;
