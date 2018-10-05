import React, { Component } from "react";
import { connect } from "react-redux";
import { addRessources, getSpecialRessources } from "../actions";
import {
  getIntegerList,
  getContainsOneList,
  getPrimeNumberList,
  getSpecialNumbersList
} from "../selectors";

class Ressources extends Component {
  componentWillMount(){
    this.props.getSpecialRessources();
  }
  renderRessources = ressources => {
    return ressources.map(ressource => <li key={ressource}>{ressource}</li>);
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <button
            type="button"
            onClick={() => this.props.addRessources()}
            className="btn btn-raised btn-primary"
          >
            Ajouter un nombre
          </button>
        </div>
        <div className="col">
          Entiers:{" "}
          <ul>{this.renderRessources(this.props.integerRessources)}</ul>
        </div>
        <div className="col">
          Contiennent "1":{" "}
          <ul>{this.renderRessources(this.props.contentOneRessources)}</ul>
        </div>
        <div className="col">
          Entiers premiers:{" "}
          <ul>{this.renderRessources(this.props.primeRessources)}</ul>
        </div>
        <div className="col">
          Entiers premiers contenant "1":{" "}
          <ul>{this.renderRessources(this.props.specialRessources)}</ul>
        </div>
          {this.props.message}
      </div>
    );
  }
}
const mstp = state => {
  return {
    integerRessources: getIntegerList(state),
    contentOneRessources: getContainsOneList(state),
    primeRessources: getPrimeNumberList(state),
    specialRessources: getSpecialNumbersList(state),
    message: state.ressources.message
  };
};
const mdtp = {
  addRessources,
  getSpecialRessources
};
export default connect(
  mstp,
  mdtp
)(Ressources);
