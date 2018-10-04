import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

class Header extends Component {
  onClickAuthentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn);
  };
  renderAuthentificationLabel = () => {
    if (this.props.isLoggedIn) {
      return "Deconnexion";
    }
    return "Connexion";
  };
  render() {
    return (
      <div>
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ressources">
              Ressources
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
              onClick={this.onClickAuthentification}
            >
              {this.renderAuthentificationLabel()}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mstp = state => {
  return {
    isLoggedIn: state.authentification.isLoggedIn
  };
};
export default connect(
  mstp,
  actions
)(Header);
