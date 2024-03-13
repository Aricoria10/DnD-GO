import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AboutUs from "../components/About-us";
import TeamMembers from "../components/TeamMembers";

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
