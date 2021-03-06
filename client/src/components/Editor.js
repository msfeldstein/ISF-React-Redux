import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import './Editor.css'
import '../glsl.mode.js';
import ReactDOM from 'react-dom';
import CodeMirror from 'codemirror';
var className = require('classnames');
import {connect} from 'react-redux';
import * as editorStateActions from '../actions/editor-state'
import * as playbackActions from '../actions/playback'
import ShaderPicker from './ShaderPicker'

// var debounce = require('lodash.debounce');
require('../glsl.mode.js')(CodeMirror)
function normalizeLineEndings(str) {
	if (!str) return str;
	return str.replace(/\r\n|\r/g, '\n');
}


class Editor extends Component {
  constructor(opts) {
    super(opts)
    this.state = {
      isFocused: false
    }
  }
  
  // componentWillMount() {
	// 	this.componentWillReceiveProps = debounce(this.componentWillReceiveProps, 0);
	// }
  
	componentDidMount() {
		var textareaNode = ReactDOM.findDOMNode(this.refs.textarea);
		this.codeMirror = CodeMirror.fromTextArea(textareaNode, {
			mode: 'glsl',
			lineWrapping: true,
			lineNumbers: true,
			gutters: [ 'CodeMirror-linenumbers', 'errors-gutter' ]
		});
		this.codeMirror.on('change', this.codemirrorValueChanged.bind(this));
		this.codeMirror.on('focus', this.focusChanged.bind(this, true));
		this.codeMirror.on('blur', this.focusChanged.bind(this, false));
		this.codeMirror.on('scroll', this.scrollChanged.bind(this));
		this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
	}
	componentWillUnmount() {
		// is there a lighter-weight way to remove the cm instance?
		if (this.codeMirror) {
			this.codeMirror.toTextArea();
		}
	}
  
	componentWillReceiveProps(nextProps) {
		this.codeMirror.clearGutter('errors-gutter');
		if (this.codeMirror && nextProps.value !== undefined && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {
			if (this.props.preserveScrollPosition) {
				var prevScrollPosition = this.codeMirror.getScrollInfo();
				this.codeMirror.setValue(nextProps.value);
				this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
			} else {
				this.codeMirror.setValue(nextProps.value);
			}
		}
		if (typeof nextProps.options === 'object') {
			for (var optionName in nextProps.options) {
				if (nextProps.options.hasOwnProperty(optionName)) {
					this.codeMirror.setOption(optionName, nextProps.options[optionName]);
				}
			}
		}
		if (this.existingLineClass) {
			this.codeMirror.removeLineClass(this.existingLineClass, 'wrap')
			this.existingLineClass = null;
		}
		if (nextProps.error) {
			this.codeMirror.setGutterMarker(nextProps.errorLineNumber - 1, 'errors-gutter', this.createMarker('sup'));
			this.existingLineClass = this.codeMirror.addLineClass(nextProps.errorLineNumber - 1, 'wrap', 'line-error')
		}
	}
	
	createMarker(error) {
		const marker = document.createElement( 'span' );
		marker.className = 'error-marker';
		marker.style.color = '#d00';
		marker.innerHTML = '●';
		marker.setAttribute( 'data-errors', error );
		return marker;
	}
  
	getCodeMirror() {
		return this.codeMirror;
	}
  
	focus() {
		if (this.codeMirror) {
			this.codeMirror.focus();
		}
	}
	
  focusChanged(focused) {
		this.setState({
			isFocused: focused
		});
		this.props.onFocusChange && this.props.onFocusChange(focused);
	}
	
  scrollChanged(cm) {
		this.props.onScroll && this.props.onScroll(cm.getScrollInfo());
	}
  
	codemirrorValueChanged(doc, change) {
		if (this.props.onChange && change.origin !== 'setValue') {
			this.props.onChange(this.props.selectedTab, doc.getValue(), change);
		}
	}
  
	render() {
		var editorClassName = className('ReactCodeMirror', this.state.isFocused ? 'ReactCodeMirror--focused' : null, this.props.className);
    return (
      <div className={`Editor ${editorClassName}`}>
        <ShaderPicker />
        <textarea ref='textarea' name={this.props.path} defaultValue={this.props.src} autoComplete='off' />
      </div>
    )
	}
}

Editor.propTypes = {
  className: PropTypes.any,
  codeMirrorInstance: PropTypes.func,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onFocusChange: PropTypes.func,
  onScroll: PropTypes.func,
  options: PropTypes.object,
  path: PropTypes.string,
  value: PropTypes.string,
  preserveScrollPosition: PropTypes.bool
};

Editor.defaultProps = {
  preserveScrollPosition: false
};

const mapStateToProps = (state, props) => {
  let src = null
  if (state.playback.currentSketch) {
    if (state.editor.selectedTab === editorStateActions.SHOW_VERTEX_SHADER) {
      src = state.playback.currentSketch.raw_vertex_source
    } else {
      src = state.playback.currentSketch.raw_fragment_source
    }
  }
  return {
		selectedTab: state.editor.selectedTab,
    value: src,
		valid: state.playback.valid,
		errorLineNumber: state.playback.lineNumber,
		error: state.playback.error && state.playback.error.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchShader: () => {
      dispatch(editorStateActions.switchShader())
    },
    onChange: (type, value) => {
      dispatch(playbackActions.updateSource(type, value))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);