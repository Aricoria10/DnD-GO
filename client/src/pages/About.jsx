import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import TeamMembers from "./TeamMembers";

function Navbar() {
  return <div>{/* Navbar */}</div>;
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/team/:id">
            <TeamMembers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
