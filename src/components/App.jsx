import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";


import RequireAut from "../helpers/RequireAut";
import Header from "../containers/Header";
import Ressources from "../containers/Ressources";
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
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
