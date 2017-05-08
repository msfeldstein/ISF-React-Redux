import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as apiActions from '../actions/api'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {sketches: []}
  }
  render() {
    return (
      <div className="Sidebar">
        <button onClick={this.props.onClickLoad}>Load Popular</button>
        <div>
          {this.props.sketches.map(sketch => 
            <div key={sketch.id}>{sketch.name}</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("New state", state.api.popular)
  return {
    sketches: state.api.popular || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLoad: () => {
      dispatch(apiActions.loadPopular())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
