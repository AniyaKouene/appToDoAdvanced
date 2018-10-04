import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";


import RequireAut from "../helpers/RequireAut";
import Header from "../containers/Header";
import Ressources from "../containers/Ressources";
import Signup from "../containers/Signup";
import Signin from "../containers/Signin";
import Signout from "../containers/Signout";
// import Todo from "./ToDo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Ressources} />
            <Route exact path="/ressources" component={RequireAut(Ressources)} />
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
