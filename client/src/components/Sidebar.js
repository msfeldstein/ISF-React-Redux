import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as apiActions from '../actions/api'
import * as playbackActions from '../actions/playback'
import SketchBinItem from './SketchBinItem'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {sketches: []}
  }
  render() {
    return (
      <div className="Sidebar">
        <button onClick={this.props.onClickNew}>New Shader</button>
        <button onClick={this.props.onClickLoad}>Load Popular</button>
        <div>
          {this.props.sketches.map(sketch => 
            <SketchBinItem onClick={this.props.onClickThumb} key={sketch.id} sketch={sketch} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("New state", state.api.popular)
  return {
    sketches: state.api.sketches || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLoad: () => {
      dispatch(apiActions.fetchPopular())
    },
    onClickThumb: (sketch) => {
      console.log(sketch)
      dispatch(playbackActions.playSketch(sketch))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
