import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ChildComponent) {
  class RequireAut extends Component {
    componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }
    componentDidUpdate(nextProps){
        if(!nextProps.isLoggedIn){
            this.props.history.push("/");
        }

    }
    render() {
      return <ChildComponent />;
    }
  }
  const mstp = state => {
    return {
      isLoggedIn: state.authentification.isLoggedIn
    };
  };
  return connect(mstp)(RequireAut);
}
