import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { updateInstitution } from '../actions/traffic'

class Institution extends Component {
  render() {
    const { value, nameOfSegment, dispatch } = this.props;
    return (
      <select name="institutions" value={value} onChange={(event) => dispatch(updateInstitution(nameOfSegment, event.target.value))}>
          <option value="msu.edu">Michigan State University</option>
          <option value="umich.edu">University of Michigan</option>
      </select>
    );
  }
}

Institution.propTypes = {
    value: PropTypes.string.isRequired,
    nameOfSegment: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

Institution = connect()(Institution);

export default Institution;