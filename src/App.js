import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Search from "./components/search";
import Create from "./components/Create";
import MesgDetails from "./components/MesgDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/* <Search /> */}
        <Switch>
          {/* adding exact because react thinks '/create' as '/' as it matches the starting string  */}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/messages/:id'>
            <MesgDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
