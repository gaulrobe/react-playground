import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { updatePercentage } from '../actions/traffic'

class Percentage extends Component {
  render() {
    const { value, nameOfSegment, dispatch } = this.props;
    return (
      <div>
          <input type="range" min="1" max="100" step="1" value={value} onChange={(event) => dispatch(updatePercentage(nameOfSegment, event.target.value))} />
          {value}
      </div>
    );
  }
}

Percentage.propTypes = {
    value: PropTypes.string.isRequired,
    nameOfSegment: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

Percentage = connect()(Percentage);

export default Percentage;