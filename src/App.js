import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Home from "./components/pages/Home";
import NewMember from "./components/pages/NewRegister";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registernew" component={NewMember} />
        </Switch>
      </div>
    );
  }
}

export default App;
