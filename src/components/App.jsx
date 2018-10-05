import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import './App.css';

import RequireAut from "../helpers/RequireAut";
import Header from "../containers/Header";
import Home from "./Home";
// import Ressources from "../containers/Ressources";
import Signup from "../containers/Signup";
import Signin from "../containers/Signin";
import Signout from "../containers/Signout";
import Errors from "./Errors";
import Todo from "./ToDo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-5">
        <Errors/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ressources" component={RequireAut(Todo)} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signout" component={Signout} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
