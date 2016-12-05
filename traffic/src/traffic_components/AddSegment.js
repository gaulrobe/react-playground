import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { addSegment } from '../actions/traffic'

class AddSegment extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <a href='#' onClick={() => dispatch(addSegment())}>Add a new traffic segment</a>
    );
  }
}

AddSegment.propTypes = {
    dispatch: PropTypes.func.isRequired
};

AddSegment = connect()(AddSegment);

export default AddSegment;