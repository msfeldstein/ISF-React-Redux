import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom'
import * as controls from '../../actions/controls'

class Point2DComponent extends Component {
  constructor(opts) {
    super(opts)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    console.log(this)
    this.state = {
      mouseDown: false
    }
  }
  componentDidMount() {
    this.canvas = ReactDOM.findDOMNode(this.refs.canvas);
    this.ctx = this.canvas.getContext('2d')
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'white'
    this.ctx.arc(50, 50, 5, 0, 2 * Math.PI)
    this.ctx.fill()
  }
  
  handleMouseDown() {
    this.setState({
      mouseDown: true
    })
  }
  handleMouseMove(e) {
    if (this.state.mouseDown) {
      this.setValue(
        e.nativeEvent.offsetX / this.canvas.width,
        e.nativeEvent.offsetY / this.canvas.height
      )
      e.preventDefault()
    }
  }
  
  setValue(x, y) {
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'white'
    this.ctx.beginPath()
    this.ctx.arc(x * this.canvas.width, y * this.canvas.height, 5, 0, 2 * Math.PI)
    this.ctx.fill()
    this.props.setValue(this.props.input.NAME, x, y)
  }
  
  handleMouseUp() {
    this.setState({
      mouseDown: false
    })
  }
  
  render() {
    return (
      <div className='Point2DComponent'>
        <canvas
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          width="150"
          height="75"
          ref="canvas"/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (name, x, y) => {
      dispatch(controls.setInputValue(name, [x, y]))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(Point2DComponent)