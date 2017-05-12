import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as controls from '../../actions/controls'

class FloatComponent extends Component {
  constructor(opts) {
    super(opts)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    console.log("CHANGE", e)
    this.setValue(e.nativeEvent.target.value)
  }
  
  setValue(v) {
    console.log("SEt value ",v)
    this.props.setValue(this.props.input.NAME, v)
  }
  
  render() {
    return (
      <div className='FloatComponent'>
        <input
          type='range'
          value={this.props.value}
          min={this.props.input.MIN}
          max={this.props.input.MAX}
          step={0.01}
          onChange={this.handleChange}
          />
          {this.props.value}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    value: state.controls.values[props.input.NAME]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (name, v) => {
      dispatch(controls.setInputValue(name, v))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(FloatComponent)