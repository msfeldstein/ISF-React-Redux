import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  SHOW_VERTEX_SHADER,
  SHOW_FRAGMENT_SHADER
} from '../actions/editor-state'
import * as editorStateActions from '../actions/editor-state'

class ShaderPicker extends Component {
  render() {
    return (
      <div className="ShaderPicker" ref='wrapper'>
        <span onClick={()=> this.props.onSwitchShader(SHOW_VERTEX_SHADER)}>Vertex Shader</span>
        <span onClick={()=> this.props.onSwitchShader(SHOW_FRAGMENT_SHADER)}>Fragment Shader</span>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      selectedTab: state.editor.selectedTab
    }
  },
  (dispatch) => {
    return {
      onSwitchShader: (type) => {
        dispatch(editorStateActions.setShaderType(type))
      }
    }
  }
)(ShaderPicker);