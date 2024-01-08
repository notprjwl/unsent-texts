import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Home />
    </div>
  );
}

export default App;
