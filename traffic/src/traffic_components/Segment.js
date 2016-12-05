import React, { Component, PropTypes } from 'react';
import Name from './Name'
import Percentage from './Percentage'
import Country from './Country'
import Institution from './Institution'

class Segment extends Component {
  render() {
    const { id, name, percentage, country, institution } = this.props;
    return (
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Percentage</th>
          <th>Country</th>
          <th>Institution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Name value={name} /></td>
          <td><Percentage value={percentage} nameOfSegment={name} /></td>
          <td><Country value={country} nameOfSegment={name} /></td>
          <td><Institution value={institution} nameOfSegment={name} /></td>
        </tr>
      </tbody>
      </table>
    );
  }
}

Segment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
}

export default Segment;