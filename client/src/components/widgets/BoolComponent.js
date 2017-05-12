import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as controls from '../../actions/controls'

class BoolComponent extends Component {
  constructor(opts) {
    super(opts)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    this.props.setValue(this.props.input.NAME, e.nativeEvent.target.checked)
  }
  
  render() {
    return (
      <div className='BoolComponent'>
        <input
          type='checkbox'
          defaultChecked={this.props.value}
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
)(BoolComponent)