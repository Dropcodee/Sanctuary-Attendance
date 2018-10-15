import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Home from "./components/pages/Home";
import Newregister from "./components/pages/NewRegister";
import Existingregister from "./components/pages/Existing";
import Login from "./components/pages/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registernew" component={Newregister} />
          <Route exact path="/registerexisting" component={Existingregister} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
