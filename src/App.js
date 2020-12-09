import './sass/style.scss';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import TopNav from "./components/layout/TopNav"

import Home from "./components/Home/Home";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <Router>
      <div>
        <TopNav />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
