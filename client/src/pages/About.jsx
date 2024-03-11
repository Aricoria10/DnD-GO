import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import TeamMember from "./TeamMember";

function Navbar() {
  return <div>{/* Navbar content */}</div>;
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
            <TeamMember />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
