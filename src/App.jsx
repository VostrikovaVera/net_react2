import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import ContestDashboard from "./components/contest-dashboard/ContestDashboard";
import CreateContest from "./components/create-contest/CreateContest";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateContest} />
        <Route path="/:id" component={ContestDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
