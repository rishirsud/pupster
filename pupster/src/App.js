import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from './components/Navbar';

function App() {
  return (

    <Router>
      <div>
      <Navbar>
        <React.Fragment>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </React.Fragment>
      </Navbar>
      </div>
    </Router>
  );
}

export default App;
