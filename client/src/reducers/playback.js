import {PLAY_SKETCH, NEW_SKETCH} from '../actions/playback'
import Sketch from '../model/sketch'
export default (state = {}, action) => {
  switch (action.type) {
    case PLAY_SKETCH:
      return Object.assign({}, state, {
        currentSketch: action.sketch
      })
    case NEW_SKETCH:
    console.log(new Sketch())
      return Object.assign({}, state, {
        currentSketch: new Sketch()
      })
    default:
      return state;
  }
}