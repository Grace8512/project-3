import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Customer from "./components/Customer";
import Developer from "./components/Developer";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Customer}/>
        <Route exact path="/dev" component={Developer}/>
      </Router>
    );
  }
}

export default App;
