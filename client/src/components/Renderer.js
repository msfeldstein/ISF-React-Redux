import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ISF from 'interactive-shader-format'

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
    if (this.props.sketch && !this.isfRenderer.model.error) {
      this.isfRenderer.draw(this.canvas)  
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.isfRenderer.loadSource(nextProps.sketch.raw_fragment_source, nextProps.sketch.raw_vertex_source)
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
  null
)(Renderer);