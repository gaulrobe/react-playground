import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { updateCountry } from '../actions/traffic'

class Country extends Component {
  render() {
    const { value, nameOfSegment, dispatch } = this.props;
    return (
      <select name="countries" value={value} onChange={(event) => dispatch(updateCountry(nameOfSegment, event.target.value))}>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
      </select>
    );
  }
}

Country.propTypes = {
    value: PropTypes.string.isRequired,
    nameOfSegment: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
}

Country = connect()(Country);

export default Country;