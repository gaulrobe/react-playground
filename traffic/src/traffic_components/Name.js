import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { updateName } from '../actions/traffic'

class Name extends Component {
  render() {
    const { value, dispatch } = this.props;
    return (
      <input type="text" name="name" value={value} onChange={event => dispatch(updateName(value, event.target.value))} />
    );
  }
}

Name.propTypes = {
    value: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

Name = connect()(Name);

export default Name;