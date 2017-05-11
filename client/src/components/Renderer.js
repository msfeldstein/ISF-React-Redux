import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ISF from 'interactive-shader-format'
import * as playbackActions from '../actions/playback'

class Renderer extends Component {
  componentDidMount() {
    let wrapper = ReactDOM.findDOMNode(this.refs.wrapper)
    this.canvas = ReactDOM.findDOMNode(this.refs.canvas);
    
    this.canvas.width = wrapper.offsetWidth
    this.canvas.height = wrapper.offsetHeight
    let gl = this.canvas.getContext('webgl')
    this.isfRenderer = new ISF.Renderer(gl)
    this.renderISF = this.renderISF.bind(this)
    requestAnimationFrame(this.renderISF)
  }
  
  renderISF() {
    requestAnimationFrame(this.renderISF)
    if (this.props.sketch && this.isfRenderer.valid) {
      this.isfRenderer.draw(this.canvas)  
    }
  }
  
  componentWillReceiveProps(nextProps) {
    try {
      this.isfRenderer.loadSource(nextProps.sketch.raw_fragment_source, nextProps.sketch.raw_vertex_source)  
    } catch (e) {
      console.log("Error!!", this.isfRenderer.raw.error)
    }
    this.props.onShaderCompile(this.isfRenderer.valid, this.isfRenderer.error, this.isfRenderer.errorLine)
  }
  
  render() {
    return (
      <div className="Renderer" ref='wrapper'>
        <canvas ref="canvas"></canvas>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      sketch: state.playback.currentSketch
    }
  },
  (dispatch) => {
    return {
      onShaderCompile: (valid, error, lineNumber) => {
        dispatch(playbackActions.shaderCompiled(valid, error, lineNumber))
      }
    }
  }
)(Renderer);