import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import { withRouter } from 'react-router'

class Errors extends Component {
    componentWillUpdate(nextProps){
        if(this.location !== nextProps.location){
            this.props.resetError()
        }
    }
    render() {
        return (
            this.props.errors && <div className="alert alert-danger" role="alert"> 
            {this.props.errors}

            </div>
            
        );
    }
}
const mstp = state => {
    return {
        errors: state.errors.message
    }
}
export default withRouter(connect(mstp, actions)(Errors));

