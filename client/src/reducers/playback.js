import {PLAY_SKETCH, NEW_SKETCH, UPDATE_SOURCE} from '../actions/playback'
import * as editorActions from '../actions/editor-state'
import Sketch from '../model/sketch'
export default (state = {}, action) => {
  switch (action.type) {
    case PLAY_SKETCH:
      return Object.assign({}, state, {
        currentSketch: action.sketch
      })
    case NEW_SKETCH:
      return Object.assign({}, state, {
        currentSketch: new Sketch()
      })
    case UPDATE_SOURCE:
      const sketch = state.currentSketch
      if (action.shaderType === editorActions.SHOW_FRAGMENT_SHADER) {
        sketch.raw_fragment_source = action.src
      } else {
        sketch.raw_vertex_source = action.src
      }
      return Object.assign({}, state, {
        currentSketch: Object.assign({}, sketch)
      })
    default:
      return state;
  }
}