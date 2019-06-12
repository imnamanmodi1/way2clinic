import React, { Component } from 'react';
import { connect } from "react-redux";
import actions from '../store/actions';

class Header extends Component {
  handleClick = () => {
    this.props.dispatch(actions.googleOAuth2())
  }
  render() {
    const { patient } = this.props;
    return (
      <div> 
        {
          !(Object.keys(patient).length) ? (
            <button onClick={this.handleClick}>Login with google</button>
          ) : (
            <div>{patient.name}, Successfully logged in :)</div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patient: state.patient
  }
}

export default connect(mapStateToProps)(Header);