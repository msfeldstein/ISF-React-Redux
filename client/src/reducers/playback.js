import * as playbackActions from '../actions/playback'
import * as editorActions from '../actions/editor-state'
import Sketch from '../model/sketch'
export default (state = {model: {}, valid: false}, action) => {
  switch (action.type) {
    case playbackActions.PLAY_SKETCH:
      return Object.assign({}, state, {
        currentSketch: action.sketch
      })
    case playbackActions.NEW_SKETCH:
      return Object.assign({}, state, {
        currentSketch: new Sketch()
      })
    case playbackActions.UPDATE_SOURCE:
      const sketch = state.currentSketch
      if (action.shaderType === editorActions.SHOW_FRAGMENT_SHADER) {
        sketch.raw_fragment_source = action.src
      } else {
        sketch.raw_vertex_source = action.src
      }
      return Object.assign({}, state, {
        currentSketch: Object.assign({}, sketch)
      })
    case playbackActions.SHADER_COMPILED:
      return Object.assign({}, state, {
        model: action.model,
        valid: action.valid,
        error: action.error,
        lineNumber: action.lineNumber
      })
    default:
      return state;
  }
}