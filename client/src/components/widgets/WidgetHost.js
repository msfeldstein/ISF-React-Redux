import React, { Component } from 'react';
import {connect} from 'react-redux';

import FloatComponent from './FloatComponent'
import Point2DComponent from './Point2DComponent'
import './Widgets.css'

class WidgetHost extends Component {
  inputToComponent(input) {
    switch(input.TYPE) {
      case 'point2D':
        return <Point2DComponent input={input} />
      case 'float':
        return <FloatComponent input={input} />
      default:
        return (
          <div>
            Unknown Type
          </div>
        )
    }
  }
  
  render() {
    return (
      <div className="WidgetHost">
        {this.props.inputs.map(input => 
          <div key={input.NAME}>
            <div className="InputTitle">{input.NAME}</div>
            {this.inputToComponent(input)}
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      inputs: state.playback.model.inputs || []
    }
  },
  (dispatch) => {
    return {
    }
  }
)(WidgetHost);