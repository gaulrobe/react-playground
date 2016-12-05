import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import Segment from './traffic_components/Segment'
import AddSegment from './traffic_components/AddSegment'

class App extends Component {
  getRenderedSegments() {
      const { segments } = this.props;
      if (segments) {
        return(
            segments.map((segment) => 
                <Segment id={segment.id} name={segment.name} percentage={segment.percentage} country={segment.country} institution={segment.institution} />
            )
        )
      }
      else {
          return(
            <div>You have not created any traffic segments! Try creating one :)</div>
          )
      }
  }
    
  render() {
    return (
      <div>
        { this.getRenderedSegments() }
        <AddSegment />
      </div>
    );
  }
}        

App.propTypes = {
  segments: PropTypes.array
}
        
const mapStateToProps = (store) => (
    { 
        segments: store.segments
    }
);
      
App = connect(mapStateToProps)(App);
        
export default App;